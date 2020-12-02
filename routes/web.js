const express = require('express');
let router = express.Router();
const indexController = require("../src/controllers/indexController");

let webRouter = (app) =>{

    router.get('/',(req,res)=>{  return res.render("welcome");   });



   return app.use("/",router);

}


module.exports = webRouter;