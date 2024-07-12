const { userSchema} = require("../models")


let register = (body) => {
    return userSchema.create(body);
  };

  let getUser = () => {
    return userSchema.find();
  };

  let deleteUser = (id) => {
    return userSchema.findByIdAndDelete(id);
  };
  
  let updateUser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body);
  };

  module.exports = {register, getUser, deleteUser, updateUser}