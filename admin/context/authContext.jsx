import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Lấy user từ localStorage khi reload trang
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ username: "admin" }); // Bạn có thể lấy user từ API bằng token
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

