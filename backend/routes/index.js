const express = require('express');
const router = express.Router();


module.exports = function(){

router.get('/' , (req , res)=>{
    res.send("hello world")
})

router.get('/ping' , (req , res)=>{
    res.send('pong')
})


return router
}