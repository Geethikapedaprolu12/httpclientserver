var http = require('http')
var options = {
    hostname : '127.0.0.1',
    port : 3002,
    method : 'POST'
}

var req = http.request(options,function(req,res){
              str = "";
              res.on('data',function(chunk){
                    str += chunk;
              })
                res.on('data',function(){
                    console.log(str)
                })
              
})
req.on('error',error=>{
    console.error(error);
})
req.end()