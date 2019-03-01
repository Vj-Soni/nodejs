const uuid = require('uuid');
const EventEmiiter = require('events');
const fs = require('fs');
const http = require('http'); 

class Logger extends EventEmiiter{
    loggerName(name){
        this.emit('Message',{id: uuid.v4(),name});
        console.log('logger');
    }
}

const logger = new Logger();
logger.on('Message',(name)=>
{
 fs.writeFile(
     './data/data.json',
     JSON.stringify(name, null ,2),
     err=>
     {
        if(err){
            throw err;
        } 
        console.log('writting..')
    })
})

logger.loggerName("Vj");

const server = http.createServer();
 server.listen(8000);