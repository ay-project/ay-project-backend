var WebSocketServer = require('websocket').server;
var WebSocketClient = require('websocket').client;
var WebSocketFrame  = require('websocket').frame;
var WebSocketRouter = require('websocket').router;
var W3CWebSocket = require('websocket').w3cwebsocket;

var WebSocketServer = require('websocket').server;
var http = require('http');

var connections = {};
var waitingPlayers = [];
var nextId = 0;
var nextGameId = 0;
var games = {};

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(3000, function() {
    console.log((new Date()) + ' Server is listening on port 3000');
});
 
wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production 
    // applications, as it defeats all standard cross-origin protection 
    // facilities built into the protocol and the browser.  You should 
    // *always* verify the connection's origin and decide whether or not 
    // to accept it. 
    autoAcceptConnections: false
});
 
function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed. 
  return true;
}

wsServer.on('request', function(request) {
	console.log(request);
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin 
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
   var connection = request.accept('echo-protocol', request.origin);
   connections[nextId] = connection;
   var currentId = nextId; 
   nextId++;

    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
        	console.log(message);
        	var request = JSON.parse(message.utf8Data);
        	if(request.requestType == "startGame"){
        		console.log("GETTING GAME INFOS TO START NEW GAME");
        		if(waitingPlayers.length == 0){
        			waitingPlayers.push({"ID" : currentId, "data" : request.data});
        		}
        		else {
        			var opponent = waitingPlayers[0];
        			waitingPlayers.splice(0,1);
        			games[nextGameId] = {player1 : request.data, player2 : opponent.data};
        			connections[opponent.ID].sendUTF(JSON.stringify({command : "startGame" , opData : request.data, loData : opponent.data , gameId : nextGameId}));
        			connection.sendUTF(JSON.stringify({command : "startGame", opData : opponent.data, loData : request.data, gameId : nextGameId}));
        			nextGameId++;
        			console.log(waitingPlayers);
        		}

        	}
            console.log('Received Message: ' + message.utf8Data); 
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});