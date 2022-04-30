const router = require("express").Router();
const userController = require("../controller/user.controller");
const auth = require("../middleware/auth");
const upload = require("../middleware/fileUpload");

router.post("/register", userController.register);
router.post("/login", userController.login);
 

router.post("/registerAdmin", auth("Admin"), userController.registerAdmin);


router.patch("/editAdmin/:id", auth("Admin"), userController.editAdmin);
router.delete("/deleteAdmin/:id", auth("Admin"), userController.delAdmin);


router.post("/logout", auth(""), userController.logout);
router.post("/logoutAll", auth(""), userController.logoutAll);
router.patch(
  "/changeImage",
  auth(""),
  upload.single("img"),
  userController.changeImage
);

router.get("/showProfile", auth(""), userController.profileShow);
router.patch("/editProfile", auth(""), userController.profileEdit);
router.patch("/editPassword", auth(""), userController.passwordEdit);
router.delete("/deleteProfile", auth(""), userController.profileDelete);

module.exports = router;
