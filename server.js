'use strict'

// server.js
var express = require('express')
var serveStatic = require('serve-static')
var app = express()
app.use(require('connect-history-api-fallback')())
app.use(serveStatic(__dirname + '/dist'))

var server_port = process.env.APP_SERVICE_PORT || 8080
app.listen(server_port)
console.log('Listening on port ' + server_port)
