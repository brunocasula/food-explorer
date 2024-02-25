const AppError = require("../utils/AppError");
const multer = require('multer');
const uploadConfig = require('../configs/upload');

// ["admin", "customer", "sale"].includes("admin");

function uploadImage(request, response, next) {

  const imageFileName = request.file ? request.file.filename : "";

  console.log('teste', imageFileName);
  console.log(request.name);

  const upload = multer(uploadConfig.MULTER);

  try {
    if (imageFileName) {
      upload.single(imageFileName)
    }
  } catch (error) {
    throw new AppError(`Upload image! ${error}`, 500);
  }


  return next();
}

module.exports = uploadImage;