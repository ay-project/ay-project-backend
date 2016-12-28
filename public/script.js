

window.WebSocket = window.WebSocket || window.MozWebSocket;

var connection = new WebSocket('ws://127.0.0.1:3000', 'echo-protocol');
var currentPlayer = new Player("Livvy");


connection.onopen = function () {
    var gameRequest = {
        playerId : currentPlayer.gamerId   
    }
   connection.send(JSON.stringify({ requestType : "startGame", data : gameRequest}));
};

connection.onerror = function (error) {
    // an error occurred when sending/receiving data
};

connection.onmessage = function (message) {
    console.log("Here");
    console.log(message);
    // try to decode json (I assume that each message from server is json)
    try {
        var json = JSON.parse(message.data);
    } catch (e) {
        console.log('This doesn\'t look like a valid JSON: ', message.data);
        return;
    }
    console.log(json);
    // handle incoming message
};

