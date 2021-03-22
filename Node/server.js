const http =require('http');
var colors = require('colors');

const server = http.createServer((req, res)=> {
  if(req.url ==='/'){

    res.write('Hello World');
    res.end();
  }

        if(req.url === '/api/courses') {

            res.write(JSON.stringify([1,2,4,5,6,2,8]));
            res.end(); 
        }


        if(req.url === '/api/namelist') {
          res.write(JSON.stringify(["hellow ","name ", "khalishi "]))
          res.end();
         
        }
});


server.listen(3000, () =>{ 
  console.log('listening on port 3000...'.rainbow);
});

