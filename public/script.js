window.WebSocket = window.WebSocket || window.MozWebSocket;

var connection = new WebSocket('ws://127.0.0.1:3000', 'echo-protocol');
var currentPlayer = new Player("Livvy");

window.onload = function() {

    //Create the renderer
    var renderer = renderer = PIXI.autoDetectRenderer(
        850, 600, { antialias: false, transparent: false, resolution: 1 }
    );
    renderer.view.style.border = "1px dashed black";
    //renderer.backgroundColor = 0x061639;

    //Add the canvas to the HTML document
    document.body.appendChild(renderer.view);

    //Create a container object called the `stage`
    var stage = new PIXI.Container();
    var locardsContainer = new PIXI.Container();
    locardsContainer.x = 0;
    locardsContainer.y = 100;
    locardsContainer.backgroundColor = 0x061639;
    stage.addChild(locardsContainer);

    //Tell the `renderer` to `render` the `stage`
    renderer.render(stage);


    PIXI.loader.add("cardBase", "res/cardv2.png").load(setup);

    function setup() {
        console.log("setup");
        for(var i = 0 ; i < 5 ; ++i){
            createCard(100+(i*150),100);
        }
        //createCard(0, 0);

        //Render the stage
        renderer.render(stage);
    };

    function createCard(x, y) {
        var card = new PIXI.Sprite(PIXI.loader.resources.cardBase.texture);
        card.x = x;
        card.y = y;

        card.interactive = true;
        card.buttonMode = true;
        card.anchor.set(0.5);

        card
        // events for drag start
            .on('mousedown', selectCard)


        //Add the cat to the stage so you can see it
        locardsContainer.addChild(card);
    }
    requestAnimationFrame(animate);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
    }

    function selectCard(event) {
        this.data = event.data;
        this.cardSelected = !this.cardSelected;
        this.alpha = 0.5;
        filter = new PIXI.Filter(null, res.shader.data);
        this.filters = [filter];
    }
};

connection.onopen = function() {
    var gameRequest = {
        playerId: currentPlayer.gamerId
    }
    connection.send(JSON.stringify({ requestType: "startGame", data: gameRequest }));
};

connection.onerror = function(error) {
    // an error occurred when sending/receiving data
};

connection.onmessage = function(message) {
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
