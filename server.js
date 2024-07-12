const express = require("express")
const app = express()
const cors = require("cors")
const dbConnect = require("./db/dbConnect")
require("dotenv").config()
let http = require("http");
const routes = require("./routes")



//cors
app.use(
    cors({
        origin: "*",
    })
);

//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/rest", routes);


//database
dbConnect()


//server
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server started on port no ${process.env.PORT}`);
  });