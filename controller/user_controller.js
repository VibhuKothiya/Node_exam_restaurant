const { userService} = require("../services")

let register = async(req, res)=>{
    try{
        let body = req.body

    let user = await userService.register(body)

    res.status(200).json({
        sucess : true,
        message : "user registred successfully",
        data : user
    })
    }
    catch(err){
        res.status(400).json({
            success : false,
            message : err.message 
        })
    }
}

let login = async (req, res) => {
    try {
      let { email, password } = req.body;
  
      let user = await userService.findUser(email);
      console.log(user, "result");
  
      if (!user) {
        throw new Error("user not found!");
      }
      if (user.password != password) {
        throw new Error("password invalid");
      }
  
      let token = createToken({ user });
      console.log(token);
  
      res.cookie("token", token);
  
      res.status(200).json({
        message: "login successfully",
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

let getUsers = async(req, res)=>{
        let Users = await userService.getUser()

        res.status(200).json({
        sucess : true,
        message : "Get All Users Successfully",
        data : Users
        })
}

let deleteUser = async (req, res) => {
    console.log(req.params);
  
    let { id } = req.params;
  
    let user = await userService.deleteUser(id);
  
    console.log(user);
  
    res.status(200).json({
      message: "user deleted success",
      user,
    });
  };
  
  let updateUser = async (req, res) => {
    let body = req.body;
    let { id } = req.params;
  
    let result = await userService.updateUser(id, body);
  
    res.status(200).json({
      message: "user updated sucess",
      result,
    });
  };
module.exports = {register, getUsers, login, deleteUser, updateUser}