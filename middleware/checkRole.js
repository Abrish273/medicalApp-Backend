// authMiddleware.js

function checkRole(roles) {
  return (req, res, next) => {
    const userRole = req.user?.role; // Assume req.user is populated by previous middleware

    if (roles.includes(userRole)) {
      next(); // User has the required role, proceed to the next middleware or route handler
    } else {
      res
        .status(403)
        .json({ message: "Forbidden: You do not have the required role" });
    }
  };
}

module.exports = checkRole;
