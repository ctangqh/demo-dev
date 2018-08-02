let express = require('express')
let bodyParser = require('body-parser')
let httpStatus = require('http-status')
let Memcached = require('memcached')
let UUID = require('uuid');
let app = express();
let port = process.env.PORT || 3000;
let memcached_host = "192.168.2.249" || process.env.MEMCACHED_SERVER;
let rwRate = 10 || process.env.RATE;

app.get('/', async (req, res) => {
   //192.168.1.109:11211
   rwRate = req.params.rate || 10;
   let mem = new Memcached(memcached_host);
   let key = UUID.v1();
   mem.set(key, 'sdaaaaaSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSDASsdaaaaaSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSDASsdaS', 10, (err) => {console.log(err);});
   for(let i=0;i<rwRate;i++) {
      mem.get(key, (err, data) => {
         console.log("==============================================");
         console.log("key:"+key);
         console.log("value:"+data);
         console.log(new Date().getTime());
      });
   }
   result_json = {
      code: 0,
      msg: 'send success!',
      time: new Date().getTime()
   };
   res.setHeader('Content-Type','application/json');
   res.status(httpStatus.OK).send(result_json);
});

app.listen(port, () => {
   console.log('demo start http://127.0.0.1:%s', port);
});
