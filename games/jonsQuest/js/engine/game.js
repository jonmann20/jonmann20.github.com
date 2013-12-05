/// <reference path="../linker.js" />

var game = (function () {
	var	avgFPS = 0,
		//updateTimePrev = 0,
        renderTimePrev = 0,
        lag = 0,
		fpsHistory = [0],
        renderLoop,         // used to turn off game
        updateLoop          // used to turn off game
	;
	
	function update() {
	    if (!level.isCutscene && !level.isTransitioning) {
	        hero.update();
	    }

		level.update();
	}
	
	function render(renderTimeCur) {
        // timers
	    if ((renderTimeCur - renderTimePrev) > 0) {
	        game.renderTimeBtw = renderTimeCur - renderTimePrev;
	    }
	    renderTimePrev = renderTimeCur;


	    renderLoop = requestAnimFrame(render);
        
	    // drawing
	    level.render();

	    if (!level.isCutscene) {
	        hero.render();
	        HUD.draw();
	        drawFPS();
	    }
	}
	
	function drawFPS(fps) {
	    var actualFPS = (1000 / game.renderTimeBtw);

	    if (actualFPS != "Infinity") {
	        fpsHistory.push(actualFPS);
	    }
	    
    	if (game.totalTicks % 120 === 0) {
    	    var tot = 0;
            
    	    for (var i in fpsHistory) {
        		tot += fpsHistory[i];
        	}
    	    
    	    if (fpsHistory.length > 0) {
    	        avgFPS = Math.floor(tot / fpsHistory.length);
    	    }
    	    else {
    	        avgFPS = 0;
    	    }
        	fpsHistory = [];
        }
    	
    	ctx.fillStyle = "#ddd";
    	ctx.font = "12px 'Press Start 2P'";
	  	ctx.fillText(avgFPS + " FPS", FULLW - 84, FULLH + 65);
	}
   	

	return {
        over: false,        // indicates the game is finished
	    gravity: 0.07,
	    //friction: 35,
	    padBot: 119,	    // total padding
	    padHUD: 80,
	    padFloor: 39,
	    lvl: 0,            // TODO: make startscreen level 0
	    updateFPS: 1000 / 120,  // 1000 / 120 ==> 2x target rate of 60fps
	    //updateTimeBtw: 0,
	    renderTimeBtw: 0,
	    totalTicks: 0,      // ticks are update iterations
	    actualTime: 0,


	    start: function () {

            // update at fixed time interval
	        updateLoop = setInterval(function () {
	            ++game.totalTicks;
	            Graphics.ticker += Graphics.fadeOut ? -Graphics.tickerStep : Graphics.tickerStep;

	            //var updateTimeCur = new Date().getTime();

	            //if ((updateTimeCur - updateTimePrev) > 0) {
	                //game.updateTimeBtw = updateTimeCur - updateTimePrev;
	            //}

	            //updateTimePrev = updateTimeCur;
	            //lag += game.updateTimeBtw;
	            
	            //while (lag >= game.updateTimeBtw) {      // TODO: interpolate if needed
	                update();
	                //lag -= game.updateTimeBtw;
	            //}
	        }, game.updateFPS); 


            // render w/vsync (let browser decide)
	        render();
	    },

	    stop: function () {
	        window.cancelAnimationFrame(renderLoop);
	        clearInterval(updateLoop);
	    }
	};
})();