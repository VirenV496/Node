var colors = require('colors');


console.log('hello'.green); // outputs green text



/* 
----Node Module acesssing another files functions to the main file 

var log = require('./logger');
log('message')
 */


//  Built In Modules 
// 1) Path

/* const path = require('path')

var pathObj = path.parse(__filename);


console.log(pathObj)


 */


// Os  Module 

/* 
const os = require('os');

var  totalMemory = os.totalmem();
var  freeMemory = os.freemem();

console.log(`Total Memory:  ${totalMemory}`)
console.log (`Free Memory: ${freeMemory}`)
 */

//file system modules

 

//event Modules 

/* 
const EventEmmiter = require('events ');
// const EventEmitter = require('node:events');
const emmiter = new EventEmmiter();


//register a listner 

emitter.on('messageLogged', function(){

    console.log('Listner Called ')
})

emitter.emit(messageLogged); */













// module in Node 

/* var message ='';

console.log(global.message);


*/


/* function sayHello(name) {

    console.log('Hello' + name );
}

 sayHello('virnder')




  */


/*  comsole.log()  //global objects


 setTimeout()
 clearTimeout();

 setInterval()
 clearInterval()

 window.consol */




 //  modules
/* 

 var sayHello = function() {                                                                                                                            s
 }
window.sayHello();




 */