class Player{
	constructor(gamerTag){
		this.gamerTag = gamerTag;
		this.gamerId = Math.floor(Math.random() * (999 - 100) + 100);
	}
}