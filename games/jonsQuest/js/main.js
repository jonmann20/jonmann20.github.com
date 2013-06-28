load = function(){
	return {
		
		/*
			REQUIRES: game and hero singleton objects already instantiated
		*/
		init: function(){
			//setInterval(utils.debugLoop, 1)
			
			meta()
			loadingScreen()
			setupInput()
			pageElems()
			
			// initialize
			level.setup()
			hero.init()
			monster.init()
			
			lvl0.init()
			
			
		    utils.reset()
	    	game.loop()		// start game
		}
	}
	
	function meta(){
		canvas = $('canvas')[0]
		ctx = canvas.getContext('2d')
		FULLW = canvas.width = 720
		FULLH = canvas.height = 440
		
		FULLH -= game.padHUD
		
	}
	
	function loadingScreen(){
		ctx.fillStyle = "#e1e1e1"
		ctx.font = "25px Helvetica"
		ctx.fillText('Loading...', 150, canvas.height/2)
	}
	
	function setupInput(){
		// global key input
		keysDown = {}
		
		addEventListener("keydown", function (e) {
		    if(e.keyCode == 32)
		    	e.preventDefault() 		// space bar scrolling to bottom of page
		    else if(e.keyCode == 77)	// 'm' => mute/unmute
		    	utils.muteHelper()
		    	
		    	
		    keysDown[e.keyCode] = true
		}, false)
		
		addEventListener("keyup", function (e) {delete keysDown[e.keyCode];}, false)
	}
	
	function pageElems(){
		var DEFAULT_UPGRADE_MSG = 'Not Enough Upgrade Points!!'
		
		$('.bulletUpgrade').unbind('click').click(function(e){
			e.preventDefault()
			
			if(bullet.cost <= upgrade.points){
			    bullet.color = 'red'
			    ++bullet.speed
				upgrade.points -= bullet.cost
				
				upgrade.msg = 'Bullet speed upgraded to ' + bullet.speed
			}
			else
				upgrade.msg = DEFAULT_UPGRADE_MSG
				
			$('#bulletSpeed').val(bullet.speed)
			$("#gameMsg").text(upgrade.msg)
		})
	
		$('.heroSpeedUpgrade').unbind('click').click(function(e){
			e.preventDefault()
		    
		    if(hero.speedCost <= upgrade.points){
			    ++hero.speed
				upgrade.points -= hero.speedCost
				
			    upgrade.msg = "Hero's speed upgraded to " + hero.speed;
			}
			else
				upgrade.msg = DEFAULT_UPGRADE_MSG
				
			$('#heroSpeed').val(hero.speed)
			$("#gameMsg").text(upgrade.msg)
		})
		
		$('.heroJumpUpgrade').unbind('click').click(function(e){
			e.preventDefault()
		    
		    if(hero.jumpPower == hero.jumpPowerMax)
		    	upgrade.msg = 'Already Maxed Out!!'
		    else if(hero.jumpCost <= upgrade.points){
			    ++hero.jumpPower
				upgrade.points -= hero.jumpCost
				
			    upgrade.msg = "Hero's jump power upgraded to " + hero.speed
			}
			else
				upgrade.msg = DEFAULT_UPGRADE_MSG
				
			$('#heroJump').val(hero.jumpPower)
			$("#gameMsg").text(upgrade.msg)
		})

		
		// Upgrade Shop Default Values
		$('#bulletSpeed').val(bullet.speed)
		$('#heroSpeed').val(hero.speed)
		$('#heroJump').val(hero.jumpPower)
		
		// Upgrade Shop Default Costs
		$('#bulletCost').val(bullet.cost)
		$('#heroSpeedCost').val(hero.speedCost)
		$('#heroJumpCost').val(hero.jumpCost)
		
		
        game.sound.bgMusic.lvl0.loop = true
        game.sound.bgMusic.lvl0.pause()
        utils.muteSound(true)
        
        $('.audioState').click(function(){
			utils.muteHelper()
        })
	}
}()

$(function(){
	load.init()		// pre-load game
})
