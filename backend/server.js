import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

//Database
import { connectDB } from './config/db.js';
//Connect Database
connectDB();


//API routes
import authRoute from './routes/authRoute.js';

const app = express();
app.use(cors());
app.use(express.json());



// app.get('/api/hello', (req, res) => {
//     res.json({ message: "Hello from backend!" });
// });

app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 8800; // Lấy cổng từ biến môi trường hoặc mặc định là 5000
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
