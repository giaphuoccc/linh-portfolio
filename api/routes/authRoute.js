import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../model/userModel.js';

// ĐĂNG KÝ (REGISTER)
router.post("/register", async (req, res) => {
  try {
    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Tạo user mới
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    // Lưu user vào database
    const user = await newUser.save();
    res.status(201).json({ message: "User created!", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ĐĂNG NHẬP (LOGIN)
router.post("/login", async (req, res) => {
  try {
    // Kiểm tra user có tồn tại không
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json({ message: "Wrong username or password!" });

    // Kiểm tra mật khẩu
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Wrong username or password!" });

    // Tạo JWT token
    if (!process.env.ACCESS_SECRET_KEY) {
      return res.status(500).json({ error: "SECRET_KEY is missing in environment variables" });
    }
    
    const token = jwt.sign({ id: user._id }, process.env.ACCESS_SECRET_KEY, { expiresIn: "1d" });
    
    // Trả về thông tin user (ẩn password)
    console.log("Received login request:", req.body);
    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;