
const data      = require('./data');
const http      = require('http');
const url       = require('url');
const search    = require('./services/search')
const hostname  = 'localhost';
const port      = 3035;

http.createServer(function (req, res) {

    res.setHeader('Access-Control-Allow-Origin', `http://${hostname}:3030`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    if (req.method === 'GET' && req.url.indexOf('/search') !== -1) {
      res.setHeader('Content-Type', 'application/json');

      const query = url.parse(req.url, {parseQueryString: true}).query;
      search.getProductsByName(query.term.toLowerCase(), data).then(result => {
        res.end(JSON.stringify(result));
      })
      .catch(err => console.log(err));

    } else {
      res.statusCode = 404;
      res.end();
    }
}).listen( port );

console.log(`[Server running on ${hostname}:${port}]`);
