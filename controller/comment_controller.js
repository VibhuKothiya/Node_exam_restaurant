const { commentService } = require("../services")


let postComments = async (req, res) => {
    try {
        let body = req.body

        let Comments = await commentService.postComment(body)

        res.status(200).json({
            sucess: true,
            message: "Recipe Post successfully",
            data: Comments
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

let getComments = async (req, res) => {
    let Comment = await commentService.getComment()

    res.status(200).json({
        sucess: true,
        message: "Get All Recipes Successfully",
        data: Comment
    })
}

let deleteComments = async (req, res) => {
    console.log(req.params);

    let { id } = req.params;

    let Comment = await commentService.deleteComment(id);

    console.log(Comment);

    res.status(200).json({
        message: "Recipe deleted successfully",
        Comment,
    });
};

let updateComments = async (req, res) => {
    let body = req.body;
    let { id } = req.params;

    let Comment = await commentService.updateComment(id, body);

    res.status(200).json({
        message: "Recipe updated sucessfully",
        Comment,
    });
};

module.exports = { getComments, postComments, deleteComments, updateComments }