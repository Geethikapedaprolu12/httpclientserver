const { time, timeLog, timeStamp } = require('console')
const http = require('http')
const { isDate, isDataView } = require('util/types')
const hostname = '127.0.0.1'
const port = 4000
const requestListener = function(req,res){
    //  res.statusCode(200)
    //  res.statusHeader('Content-type','Text/plain')
      const date = new Date()
      if(req.method == 'GET'){
        res.end('Date and Time:'+date)
      }
      if(req.method == 'POST'){
        res.end("Post method")
      }
}
const server = http.createServer(requestListener)
server.listen(port,hostname)
