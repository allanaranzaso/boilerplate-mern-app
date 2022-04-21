// import express, {Express} from 'express'
var express = require('express');
// var router = express.Router();

const app = express();

app.get("/test/api", function(req, res, next) {
    res.status(200).json({"test": "api works!"})
})

module.exports = app;