import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Extract token after 'Bearer'

  console.log("Received Token:", token);

  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized, login again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log("JWT Error:", error);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authMiddleware;
