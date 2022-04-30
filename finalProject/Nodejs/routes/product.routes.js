const productController = require("../controller/product.controller")
const router = require("express").Router()
const auth= require("../middleware/auth")
const upload = require("../middleware/fileUpload")

//show multi and single product
router.get("/allProducts/:page", productController.allProducts)
router.get("/singleProduct/:productId", productController.singleProduct)

//product contorl by Admin
router.post("/addProduct/", auth('Admin'),productController.addProduct)
router.post("/addCategory/:productId",auth("Admin") ,productController.addCategory)
router.patch("/editProduct/:productId",auth('Admin') ,productController.editProduct)
router.patch("/uploadImage/:productId",auth('Admin'), upload.single('img'), productController.uploadImage)
router.patch("/uploadImages/:productId",auth('Admin'), upload.single('img'), productController.uploadImages)
router.delete("/delProduct/:productId",auth('Admin'), productController.delProduct)
router.delete("/delAll",auth('Admin'), productController.delAll)

 

//Categores Contorol
router.get("/allCate/:productId",auth('Admin') ,productController.allCate)
router.get("/singleCate/:productId/:catId",auth('Admin') ,productController.singleCate)
router.post("/addCategory/:productId",auth('Admin') ,productController.addCategory)
router.delete("/delCategory/:productId/:catId",auth('Admin') ,productController.delCategory)
router.delete("/delAllCate/:productId",auth('Admin') ,productController.delAllCate)

 

module.exports=router

