const express = require('express');

const app = express();

// API end Point
app.get("/", (req, res) => {
    res.send("API is Running")
})


app.listen(5000, console.log("Server connected at 5000"));