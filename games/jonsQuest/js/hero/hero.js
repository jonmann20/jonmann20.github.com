/*
    The hero singleton object.
    Kinematic units are in pixels per second.
*/
var hero = (function () {
    var //self = this,
        input = null,           // the hero input component
        graphics = null,        // the hero graphics component

        imgReady = false,
		img = null,
		showRun = true,
		gameOver = false,
		spriteArr = []
	;
	
		
	/*********************** Update ***********************/
    function checkHealth() {
        if (hero.invincible)
            --hero.invincibleTimer;

        if (hero.invincibleTimer <= 0) {
            hero.invincible = false;
            hero.invincibleTimer = hero.invincibleTimer0;
        }

        if (hero.health <= 0 && !gameOver) {
            audio.heroDeath.play();
            audio.bgMusic.muted = true;

            alert("You died");
            location.reload();
            gameOver = true;
        }
    }

	function getSpritePos(){
	    if (game.totalTicks % 30 === 0) {
	        showRun = !showRun;
	    }

		var pos = {x: 0, y: 0};
		
		if(hero.isCarrying && hero.vX === 0){
			pos = spriteArr["playerDown"];
		}
		else if(hero.dir == Dir.RIGHT){
			if(hero.vX > 0){
   				if(Math.abs(hero.vX) <= hero.aX*3.5)
   					pos = spriteArr["playerRight_Step"];
				else if(showRun){
					pos = spriteArr["playerRight_Run1"];
				}
				else 
					pos = spriteArr["playerRight_Run2"];
			}
			else
				pos = spriteArr["playerRight"];
		}
		else if(hero.dir == Dir.LEFT){ 
			if(hero.vX < 0){
				if(Math.abs(hero.vX) <= hero.aX*3.5)
   					pos = spriteArr["playerLeft_Step"];
				else if(showRun){
					pos = spriteArr["playerLeft_Run1"];
				}
				else 
					pos = spriteArr["playerLeft_Run2"];
			}
			else
				pos = spriteArr["playerLeft"];
		}
		
		var inv = hero.invincibleTimer % 20;
		
		if(hero.invincible && (inv >= 0 && inv <= 6)){
			pos = {x: -1, y: -1};
		}
		
		hero.sx = pos.x;
		hero.sy = pos.y;
	}
	
	/*********************** Render ***********************/
	function drawHero(){
		if(imgReady && hero.sx >= 0 && hero.sy >= 0){
    		ctx.drawImage(img, hero.sx, hero.sy, hero.w, hero.h, hero.x, hero.y, hero.w, hero.h);
    	}
	}
		
		
	return {
	    //protectedInfo: {
            //...
	    //},

		x: 0,				// top left of sprite
		y: 0,
		sx: 0,				// sprite position
		sy: 0,
		lvlX: 0,			
		w: 28,
		h: 38,
		vX: 0,
		vY: 0,
		maxVx: 3.7,         // TODO: should be const
		maxVy: 3.7,         // TODO: should be const
		aX: 0.19,
		aY: 0.59,
		jumpMod: 4,
		jumpMod0: 4,            // TODO: should be const
		dir: Dir.RIGHT,
		isJumping: false,
		isCarrying: false,
		onGround: true,
		onObj: true,
		onObjX: -1,
		onObjY: -1,
		invincible: false,
		invincibleTimer: 120,
		invincibleTimer0: 120,  // TODO: should be const
		health: 4,
		maxHealth: 5,
		medKits: 1,
		healthLvl: 1,
		mana: 0,
		maxMana: 4,
		manaKits: 1,
		manaLvl: 1,
		ammo: 20,
		cash: 0,
		lvl: 1,
		xp: 0,
		xpNeeded: 50,
		bulletArr: [],
		physics: null,         // the hero physics component
		

		init: function(){
			img = new Image();
			img.onload = function () { imgReady = true; };
			img.src = "../dungeon/web/img/sprites/player/player.png";
			
			// grab texturePacker's sprite coords
			$.get('../dungeon/web/img/sprites/player/player.xml', function(xml){
				var wrap = $(xml).find('sprite');
				
				$(wrap).each(function(){
					var name = $(this).attr('n'),
						x = $(this).attr('x'),
						y = $(this).attr('y');
					
					name = name.substring(0, name.length-4);
					spriteArr[name] = {x: x, y: y};
				});
				
			});
			
			input = HeroInputComponent();
			    input.init();
			hero.physics = HeroPhysicsComponent();
			graphics = HeroGraphicsComponent();
			    graphics.init();
		},
		
		offObj: function(){
			hero.onObj = false;
			hero.onObjX = -1;
			hero.onObjY = -1;
		},
		
		update: function () {
		    input.check();                          // updates velocities
			hero.physics.updatePosition();          // updates positions
			hero.physics.checkCollision();          // checks new positions
			
			checkHealth();
			getSpritePos();
		},
	
		render: function(){
			drawHero();
	    	graphics.drawBullets();
	    	
			graphics.drawHealth();
			graphics.drawMana();
			graphics.drawXP();
		}
	};
})();

//@ sourceURL=hero.js
