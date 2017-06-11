var app = require ('express')(); 
var http = require('http').Server(app);
var io = require('socket.io')(http); //init new socket inst by passing HTTP server object

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){ //incoming sockets
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	}); //connections and disconnections logged to console
});


http.listen(3000, function(){
	console.log('listening on *:3000');
});