const EventEmitter = require('events');
let myEvent1 = new EventEmitter();

//////////////////////////////////////////////////

myEvent1.on("myMessage1", ()=>{
    console.log("YESSSSSSS");
})
myEvent1.emit("myMessage1");

//////////////////////////////////////////////////

let myEvent2 = new EventEmitter();
myEvent2.on("myClick" , (eventsArg)=>{
    console.log(eventsArg.message)
});
myEvent2.emit("myClick" , {message : "Hello Alan"})
