const AppError = require("../utils/AppError");

// ["admin", "customer", "sale"].includes("admin");

function verifyUserAuthorization(roleToVerify) {
  return (request, response, next) => {
    const { role } = request.user;

    // if (role !== roleToVerify) {
    if (!roleToVerify.includes(role)) {
      throw new AppError("Unauthorized", 401);
    }

    return next();
  }
}

module.exports = verifyUserAuthorization;