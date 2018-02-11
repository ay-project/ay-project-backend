window.WebSocket = window.WebSocket || window.MozWebSocket;

var connection = new WebSocket('ws://127.0.0.1:3000', 'echo-protocol');


var currentPlayer = new Player("Livvy");

var colors = { 
    default : 'black',
    serverMessage : 'blue',
    authMessage : 'blue',
    sysMessage : 'darkblue',
    actionMessage : 'darkred',
    errorMessage : 'red',
    globalMessage: 'darkgreen'
}

window.onload = function() {
 //
};

function sendCommand() {
    let command = document.getElementById('command').value
    let partials = command.split(" ");
    if(partials[0] == "connect") {
        sendMessage({
            target: 'authenticator',
            message: {
                command: 'connect',
                tag: partials[1],
                pwd: partials[2]
            }
        })
    } 
    else if(partials[0] == "get-decks") {
        sendMessage({
            target: 'global-manager',
            message: {
                command: partials[0],
                playerId: 1
            }
        })
    }
}

function sendMessage(message) {
    connection.send(JSON.stringify(message));
}
connection.onopen = function() {
    //Temporary
    //Ask for new game as soon as connection is opened
    let gameRequest = {
        playerId: currentPlayer.gamerId
    }
    connection.send(JSON.stringify({ 
        target: 'matchmaker', 
        command: 'looking_to_play',
        data: gameRequest 
    }));
    writeToConsole("Connection sent...", 'sysMessage');
    writeToConsole("Please wait for oponent...", 'sysMessage');
};

connection.onerror = function(error) {
    // an error occurred when sending/receiving data
};

/**
 * triggers when receiving message from server
 * @param  {string} message message to parse
 */
connection.onmessage = function(message) {
    console.log("Here");
    console.log(message);
    // try to decode json
    try {
        let json = JSON.parse(message.data);
        console.log(json);
        if(json.message.type == 'error') {
            writeToConsole(JSON.stringify(json.message), 'errorMessage');
        }
        else if(json.issuer === 'sys') {
            writeToConsole(json.message, 'serverMessage');
        } 
        else if(json.issuer == 'authenticator') {
            writeToConsole(JSON.stringify(json.message), 'authMessage');
        }
        else if(json.issuer == 'global-manager') {
            writeToConsole(JSON.stringify(json.message), 'globalMessage');
        }
        // handle incoming message
    } catch (e) {
        console.log('This doesn\'t look like a valid JSON: ', message.data);
        return;
    }
};

/**
 * writes given message to screen
 * @param  {string} message the given message
 * @param  {string} type    the message type for display purposes
 */
function writeToConsole(message, type='default') {
    let p = document.createElement("P");                       
    let t = document.createTextNode(message);
    if(colors.hasOwnProperty(type))
        color = colors[type];
        p.style.color = color;
    p.appendChild(t);                                           
    document.getElementById("main").appendChild(p);    
}