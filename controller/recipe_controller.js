const { recipeService } = require("../services")


let postRecipes = async (req, res) => {
    try {
        let body = req.body

        let Recipe = await recipeService.postRecipe(body)

        res.status(200).json({
            sucess: true,
            message: "Recipe Post successfully",
            data: Recipe
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

let getRecipes = async (req, res) => {
    let Recipe = await recipeService.getRecipe()

    res.status(200).json({
        sucess: true,
        message: "Get All Recipes Successfully",
        data: Recipe
    })
}

let deleteRecipe = async (req, res) => {
    console.log(req.params);

    let { id } = req.params;

    let Recipe = await recipeService.deleteRecipe(id);

    console.log(Recipe);

    res.status(200).json({
        message: "Recipe deleted successfully",
        Recipe,
    });
};

let updateRecipe = async (req, res) => {
    let body = req.body;
    let { id } = req.params;

    let Recipe = await recipeService.updateRecipe(id, body);

    res.status(200).json({
        message: "Recipe updated sucessfully",
        Recipe,
    });
};

module.exports = { getRecipes, postRecipes, deleteRecipe, updateRecipe }