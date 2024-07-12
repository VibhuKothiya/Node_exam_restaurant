const express = require("express")
const { userController } = require("../controller")
const { isLogin, isRestrict } = require("../middleware/auth")
const route = express.Router()

route.post("/userRegister", userController.register)
route.get("/getUsers", isLogin, isRestrict(["admin", "user"]), userController.getUsers)
route.delete("/delete/:id", isRestrict(["admin"]), userController.deleteUser);
route.put("/update/:id",  userController.updateUser
);


//login

route.post("/login",  userController.login);

// route.get("/profile", isLogin, userController.getProfile);


module.exports = route;