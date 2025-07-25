import jwt from "jsonwebtoken";
export const protectedRoute = async (req, res, next) => {
  try {
    const accessToken = req.coookies.accessToken;

    if (!accessToken) {
      return res.status(401), json({ message: "Unauthorized access" });
    }

    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
      const user = await User.findById(decoded.userId).select("password");

      if (!user) {
        return res.status(401).json({ message: "Unauthorized access" });
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Token expired, please login again" });
      }
    }
  } catch (error) {
    console.error("Error in protectRoute middleware:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const adminRoute = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Access denied, admin only" });
  }
};
