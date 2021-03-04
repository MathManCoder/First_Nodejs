// Outer modules
const express = require('express');
const router = express.Router();

// Inner modules
const fs = require('fs');

router.post("/message" , (req,res) => {
    const message = req.body.message;
    fs.writeFile("./message.txt" , message , (err) => {
        if (err) throw err;
        res.redirect("/");
    })
});


module.exports = router;