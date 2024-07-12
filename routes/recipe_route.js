const express = require("express");
const { recipeController } = require("../controller");
const route = express.Router()

route.post("/postRecipes", recipeController.postRecipes)
route.get("/getRecipes", recipeController.getRecipes)
route.delete("/deleteRecipe/:id", recipeController.deleteRecipe);
route.put("/updateRecipe/:id",  recipeController.updateRecipe);

module.exports = route;