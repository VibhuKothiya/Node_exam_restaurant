const {recipeSchema} = require("../models")

let postRecipe = (body) => {
    return recipeSchema.create(body);
  };

  let getRecipe = () => {
    return recipeSchema.find();
  };

  let deleteRecipe = (id) => {
    return recipeSchema.findByIdAndDelete(id);
  };
  
  let updateRecipe = (id, body) => {
    return recipeSchema.findByIdAndUpdate(id, body);
  };
  module.exports = {postRecipe, getRecipe, deleteRecipe, updateRecipe}