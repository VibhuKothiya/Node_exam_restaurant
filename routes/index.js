const express = require("express")
const routes = express.Router()
const userRoute = require("./user_route")
const recipeRoute = require("./recipe_route")
const commentRoute = require("./comment_route")

routes.use("/user", userRoute)
routes.use("/Recipes", recipeRoute)
routes.use("/Comments", commentRoute)

module.exports = routes;