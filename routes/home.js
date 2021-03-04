// Outer modules
const express = require('express');
const router = express.Router();

// Inner modules
const path = require('path');
const rootDir = require('../utils/path');
// Middleware
router.get("/" , (req,res) => {
    // res.sendFile(path.join(__dirname , ".." , "views" , "home.htm"));
    res.sendFile(path.join(rootDir , "views" , "home.htm"));
});

router.get("/hello" , (req,res) => {
    // res.sendFile(path.join(__dirname , ".." , "views" , "hello.htm"));
    res.sendFile(path.join(rootDir , "views" , "hello.htm"));
})

module.exports = router;