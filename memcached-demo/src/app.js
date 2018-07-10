let express = require('express')
let bodyParser = require('body-parser')
let httpStatus = require('http-status')
let Memcached = require('memcached')
let app = express();
let port = process.env.PORT || 3000;
let memcached_host = process.env.MEMCACHED_HOST;
let rwRate = 10;

app.get('/', async (req, res) => {
   //192.168.1.109:11211
   rwRate = req.params.rate || 10;
   let mem = new Memcached(memcached_host);
   mem.set('foo', 'test-value', 10, (err) => {console.log(err);});
   for(let i=0;i<rwRate;i++) {
      mem.get('foo', (err, data) => {
         console.log(data);
      });
   }
   result_json = {
      code: 0,
      msg: 'send success!'
   };
   res.setHeader('Content-Type','application/json');
   res.status(httpStatus.OK).send(result_json);
});

app.listen(port, () => {
   console.log('demo start http://127.0.0.1:%s', port);
});
