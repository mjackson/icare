/*eslint-disable no-console */
var express = require('express')

var port = process.env.PORT || process.env.npm_package_config_port
var app = express()

app.disable('x-powered-by')
app.use(express.static('public', { maxAge: 60000 }))

app.listen(port, function () {
  console.log('Server started on port ' + port + '. Ctrl+C to quit')
})
