const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=ytf-8' });
  if(req.method==="GET"){
    if (req.url==="/" ) {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            res.end(data);
          });
    }
    else if (req.url==='/tool') {
        fs.readFile('Mailing2.5.3.html', (err, data) => {
            if (err) throw err;
            res.end(data);
          });
    }
    else if (req.url==='/adminpage') {
        fs.readFile('adminPage.html', (err, data) => {
            if (err) throw err;
            res.end(data);
          });
    }
  }
});

server.listen(3001);
