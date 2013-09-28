var game = (function(){
	var	avgFPS = 0,
		_time,
		fpsHistory = [0]
	;
	
	function update(){
		hero.update();
		level.update();
	}
	
	function render(){
		level.render();
		hero.render();
		
		level.drawAfterHero();
	}
	
   	function drawFPS(num){
        ctx.fillStyle = "#ddd";
        ctx.font = "12px 'Press Start 2P'";
        
    	if(num != "Infinity")
        	fpsHistory.push(num);
        	
        if(game.totalTicks % 20 === 0){
        	var tot = 0;
        	for(var i in fpsHistory){
        		tot += fpsHistory[i];
        	}
        	
        	avgFPS = Math.floor(tot / fpsHistory.length);
        	fpsHistory = [];
        }
    	
	  	ctx.fillText(avgFPS + " FPS", FULLW - 84, FULLH + 65);
	}
	
	function doTimers(now){
        game.dt = now - (_time || now);
    	_time = now;
		    	
		drawFPS(Math.round(1000 / game.dt));
		
		if(++game.totalTicks % 60 === 0)
			++game.actualTime;
	}
	
	
	return {
	    gravity: 0.9,
	    friction: 0.45,
	    padBot: 119,	// total padding
	    padHUD: 80,
	    padFloor: 39,
	    lvl: -1,
	    dt: 0,
	    fps: 60,
	    totalTicks: 0,
	    actualTime: 0,

	    loop: function (frameTime) {
	        //setTimeout(function(){



	        update();
	        render();

	        doTimers(frameTime);

	        requestAnimFrame(game.loop);
	        //}, 1000 / 10); //1000 / game.fps
	    }
	};
})();
