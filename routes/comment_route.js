const express = require("express");
const { commentController } = require("../controller");
const route = express.Router()

route.post("/postComments", commentController.postComments)
route.get("/getComments", commentController.getComments)
route.delete("/deleteComments/:id", commentController.deleteComments);
route.put("/updateComments/:id",  commentController.updateComments);

module.exports = route;