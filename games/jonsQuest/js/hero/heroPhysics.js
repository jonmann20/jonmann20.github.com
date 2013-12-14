﻿/// <reference path="../linker.js" />

/*
    The physics component of hero.
*/
var HeroPhysicsComponent = function () {

    function bulletHandler() {
        for (var i = 0; i < hero.bulletArr.length; ++i) {
            hero.bulletArr[i].pos.x += hero.bulletArr[i].dirR ? bullet.speed : -bullet.speed;   // update position

            if (hero.bulletArr[i].pos.x > FULLW || hero.bulletArr[i].pos.x < 0) {		    // bullet and screen
                hero.bulletArr.splice(i, 1); // remove ith item
            }
        }
    }

    function screenCollision() {
        if (hero.pos.y < -hero.h) {                 // feet above top of screen
            hero.pos.y = -hero.h;
            hero.vY = 0;
        }
        else if (hero.pos.y >= FULLH) {
            if(!game.over)
                utils.deathSequence();
        }

        if (hero.pos.x < 0) { 						// left
            hero.pos.x = 0;
            hero.vX = 0;
        }
        else if (hero.pos.x > (FULLW - hero.w)) { 	// right 
            hero.pos.x = FULLW - hero.w;
            hero.vX = 0;
        }
    }

    function levelCollision() {
        hero.isOnObj = false;   // prevents jumping after walking off platform

        Physics.lvlObjCollision(hero, function (r) {
            if (r.overlapN.y === 1) {                       // on top
                hero.isOnObj = true;
                hero.isJumping = false;
                hero.vY = 0;
            }
            else if (r.overlapN.y === -1) {                 // on bot
                hero.vY = 0;
            }
        });
        
        if (hero.isCarrying) {
            if (hero.vX === 0) {
                hero.curItem.pos.x = hero.pos.x + 2;
                hero.curItem.pos.y = hero.pos.y + 11;
            }
            else {
                hero.curItem.pos.x = hero.pos.x + ((hero.dir === Dir.RIGHT) ? 22 : -22);
                hero.curItem.pos.y = hero.pos.y + 5;
            }
        }

        Physics.lvlItemCollision(function (r, idx) {
            if (r.b.type === JQObject.CRATE) {      // TODO: make more generic
                if (r.overlapN.y === 1) {           // on top
                    hero.pos.y -= r.overlapV.y;
                    hero.isOnObj = true;
                    hero.isJumping = false;
                    hero.vY = 0;
                }
                else if (r.b.grabbable) {
                    r.b.holding = true;
                    hero.curItem = r.b;
                    hero.isCarrying = true;

                    level.items.splice(idx, 1);

                    //if (r.b.isOnObj) {
                    //    r.b.isOnObj = false;
                    //    r.b.onObj.grabbable = true;
                    //    r.b.onObj = null;
                    //}
                }
            }
            else {
                audio.itemPickedUp.play();

                if (r.b.type === JQObject.SACK) {
                    hero.ammo += r.b.val;
                }
                else if (r.b.type === JQObject.CASH) {
                    hero.cash += r.b.val;
                }

                level.items.splice(idx, 1);
            }
        });
    }

    return {
        updatePosition: function (){	
            if (!hero.isJumping && !hero.onLadder && hero.pos.x !== (hero.pos.x + hero.vX)) {
                audio.step.play();
            }

            // TODO: buggy at edges, quickly changin direction incorrectly causes an updateView()
            
            if(((hero.dir === Dir.RIGHT && hero.pos.x >= (HALFW + 35)) ||
               (hero.dir === Dir.LEFT && hero.pos.x <= (HALFW - 45))) &&
               (hero.lvlX + hero.vX >= 0) &&
               (hero.lvlX + hero.vX <= level.curLvl.width - FULLW)
            ){
                hero.lvlX += hero.vX;
                level.updateView();
            }
            else {
                hero.pos.x += hero.vX;
            }

            if (!hero.onLadder) {
                hero.pos.y += hero.vY;
            }
        },

        checkCollision: function () {
	        bulletHandler();		// bullet's and screen
            screenCollision();	    // hero and screen
            levelCollision();
        }
    };
};
