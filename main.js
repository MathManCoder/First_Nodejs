// Outer modules
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Inner modules
const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const path = require('path');

// Middleware
app.use(bodyParser.urlencoded({extended:false}));  // Body-Parser
app.use(express.static(path.join(__dirname , "public")));  //Static Files


// Routes
app.use(adminRoutes);
app.use(homeRoutes);
app.use((req,res) => {
    res.sendFile(path.join(__dirname , "views" , "404.htm"));
})
// EndRoutes

app.listen(3000);