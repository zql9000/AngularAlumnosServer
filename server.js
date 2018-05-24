var express = require('express');
var nedb = require('nedb');
var cors = require("cors");
var expressNedbRest = require('express-nedb-rest');

// setup express app
var oApp = express();

// create  NEDB datastore
var datastore = new nedb({ filename: "alumnos.db",  autoload: true });

// create rest api router and connect it to datastore
var restApi = expressNedbRest();

restApi.addDatastore('alumnos', datastore);

// setup express server to serve rest service

oApp.use('/', restApi);

oApp.listen(4100, function () {
    console.log('you may use nedb rest api at port 4100');
});
