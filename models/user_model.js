const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    //   profile: {
    //     type: String,
    //   },
      role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      },
    })

    const user = mongoose.model("userSchema", userSchema) 
    module.exports = user