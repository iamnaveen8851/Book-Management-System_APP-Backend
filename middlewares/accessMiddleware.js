const accessMiddleware =  (role) => {
  return (req, res, next) => {
    let currentRole = req.body.role;

    if (role.includes(currentRole)) {
      next();
    } else {
       res
        .status(403)
        .json({ message: "You are not Authorized to access this role" });
    }
  };
};


module.exports = accessMiddleware
