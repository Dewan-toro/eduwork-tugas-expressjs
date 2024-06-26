const router = require("express").Router();
const multer = require("multer");
const productController = require("./controller");
const upload = multer({ dest: "uploads" });

router.get("/product", productController.index);
router.get("/product/:id", productController.view);
router.post("/product", upload.single("image"), productController.store);

module.exports = router;
