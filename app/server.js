#!/usr/bin/env node
import app from './index.js'
import Config from './config.js'

app.listen(Config.express.port, Config.express.ip, function (error) {
  if (error) {
    console.log('Unable to listen for connections', error)
    process.exit(10)
  }
  console.log('express is listening on http://' +
  Config.express.ip + ':' + Config.express.port)
})