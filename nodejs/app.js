var http = require('http')

var options = {
  host: 'localhost',
  port: 80,
  path: '/helpme/main/check_helper/aemal',
  method: 'POST'
};

var req = http.request(options, function(res) {
  //console.log('STATUS: ' + res.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(res.headers));
  //res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('Result: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
//req.write('data\n');
//req.write('data\n');
req.end();