const express= require('express');
const path = require('path');
const router = express.Router();

router.get('/page1',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/page.html'));
});

router.get()