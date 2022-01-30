const http = require ("http");
const express = require("express");
const server = http.createServer((req,res) => {
    if (req.url == "/")
    {
        res.write("hello hisham");
        res.end();
    }
    if (req.url == "/api")
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
var port = 3000;
server.listen(port);
server.on("connection",(socket) =>{
    console.log("New Connection...");
    //console.log(socket);
})


const Calculator = require("./calc");
var calculator = new Calculator();
console.log("div of value 0 and 1 is :", calculator.div(0,1))
console.log(`listening to port ${port}`)

const fs = require("fs");
fs.readFile("./package.json","utf-8",(err,data) => {
    try
    {
        var config = JSON.parse(data);
        var keys = Object.keys(config);
        console.log(keys);
    }
    catch{
        console.log(`errors ${err}`)
    }
})