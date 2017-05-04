'use strict';
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

var DBEngine = require('./database.js');
var db;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/database', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(db.getJson()));
});

app.get('/user/:name', (req, res) => {
  var name = req.params.name;
  res.send(JSON.stringify(db.searchName(name)));
});


function startServer() {
    console.log('Server started');
    app.listen(3000);
}

function init() {
    db = new DBEngine('tapahtumat.json');
    db.init();
    startServer();
}

init();