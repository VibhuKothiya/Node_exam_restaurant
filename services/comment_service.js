const {commentSchema} = require("../models")

let postComment = (body) => {
    return commentSchema.create(body);
  };

  let getComment = () => {
    return commentSchema.find();
  };

  let deleteComment = (id) => {
    return commentSchema.findByIdAndDelete(id);
  };
  
  let updateComment = (id, body) => {
    return commentSchema.findByIdAndUpdate(id, body);
  };
  module.exports = {postComment, getComment, deleteComment, updateComment}