var http = require('http');
var requests=0;
var podname= process.env.HOSTNAME;
var host;
var versionNumber = 5;

var handleRequest = function(request, response)
{
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead(200);
  response.write("Current host is: " + host + "\n");
  if (requests == 10 ) {
    response.write("That is boring. you requested the time many times. Go and do something else.");
    requests = 0;
  } else {
    response.write("Hello! The time now is: " + new Date());
    requests++;
  }
  response.end("\nVersion=" + versionNumber);
  console.log("Current host is:" ,host);
}

var www = http.createServer(handleRequest);
www.listen(8080,function ()
{
    host = process.env.HOSTNAME;
    console.log ( "Current host is: " ,host, ", the pod name is:", podname );
});
