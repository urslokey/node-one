require('dotenv').config();
const express = require('express');
var webRouter = require('./routes/web');
var config = require("./config/config");
var mysqlConnection = require('./config/mysql');
const morgan = require('morgan');

let app = express();





app.use(morgan('dev'));


////     Settings    ////
config(app);

////     Routes      ////
webRouter(app);





/////   Error Handling    /////

app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{


    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })

})




// app.use((req,res,next)=>{
//     const error = new Error('Not Found');
//     error.status(404);
//     next(error);
// })

// app.use((error,req,res,next)=>{

//     res.status(error.status || 500);
//     res.json({
//             error:{
//                     message:error.message
//             }
//     });

// });


app.listen(process.env.PORT,()=>{
    console.log(`Running At Port ${process.env.PORT}`)
});


