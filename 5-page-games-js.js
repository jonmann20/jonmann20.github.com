(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,5,6],{11:function(t,n,e){"use strict";e.r(n);var a=e(23);function i(){const t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n\t:host {\n\t\tdisplay: block;\n\t}\n\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\n\th1,\n\th2,\n\th3 {\n\t\tmargin: 0.4em 0 0.6em;\n\t\tfont-size: 1.75em;\n\t\tfont-weight: 300;\n\t\tcolor: var(--white);\n\t\ttext-shadow: 0 2px 3px #212121;\n\t}\n\n\tul {\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t}\n\n\ta {\n\t\tcolor: var(--blue);\n\t\ttext-decoration: none;\n\t\toutline: none;\n\t\tcursor: pointer;\n\t}\n\n\ta:hover {\n\t\tcolor: #7ddff1;\n\t\ttext-shadow: #7ddff1 0 0 6px;\n\t}\n\n\ta:active {\n\t\tcolor: #4fd3ed;\n\t}\n\n\ta:focus {\n\t\toutline: 0;\n\t}\n\n\ta[selected] {\n\t\tcolor: var(--red) !important;\n\t}\n\n\tinput {\n\t\toutline-color: #888;\n\t}\n\n\tinput:focus {\n\t\tbox-shadow: 2px 2px 16px 2px rgba(0, 0, 0, 0.45);\n\t}\n\n\t/* utils */\n\n\t.card {\n\t\tdisplay: inline-block;\n\t\tbackground: var(--black);\n\t\tbox-shadow: var(--box-shadow-2);\n\t\tborder-radius: 2px;\n\t\tpadding: 3px 25px 5px;\n\t}\n\n\t.card-light {\n\t\tborder-radius: 2px;\n\t\tbox-shadow: var(--box-shadow-2);\n\t}\n"]);return i=function(){return t},t}n.default=Object(a.b)(i())},12:function(t,n,e){"use strict";e.r(n);var a=e(23);function i(){const t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n\t.col-left ul {\n\t\tfont-size: 1.15em;\n\t}\n\n\t.col-right {\n\t\tmargin-top: 25px;\n\t\tpadding-bottom: 13px;\n\t}\n\n\t.col-right img {\n\t\tmax-width: 100%;\n\t}\n\n\t.col-right > div {\n\t\tpadding-bottom: 13px !important;\n\t}\n\n\t/* > mobile */\n\t@media (min-width: 801px) {\n\t\t.col-left {\n\t\t\tfloat: left;\n\t\t\twidth: 46%;\n\t\t\tmargin-right: 2%;\n\t\t}\n\n\t\t.col-right {\n\t\t\tfloat: right;\n\t\t\twidth: 50%;\n\t\t\tmargin-top: 0;\n\t\t}\n\t}\n\n\t/* tablet */\n\t@media (min-width: 801px) and (max-width: 1265px) {\n\t\t.col-left {\n\t\t\twidth: 100%;\n\t\t\tmargin-bottom: 0;\n\t\t}\n\n\t\t.col-right {\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 25px;\n\t\t}\n\t}\n"]);return i=function(){return t},t}n.default=Object(a.b)(i())},14:function(t,n,e){"use strict";e.r(n);var a=e(23);function i(){const t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n\t:host {\n\t\tposition: relative;\n\t}\n\n\t.big-btn {\n\t\tdisplay: inline-block;\n\t\tmargin: 10px auto;\n\t\tpadding: 9px 14px;\n\t\tborder-radius: 10px;\n\t\tfont-weight: bold;\n\t\tfont-size: 1.2em;\n\t\tbackground: rgba(107, 107, 107, 0.64);\n\t\tbox-shadow: 0 3px 0 rgba(54, 54, 54, 0.94);\n\t\topacity: 1;\n\t\ttransition: all 0.19s;\n\t\tcolor: var(--yellow);\n\t}\n\n\t.big-btn:hover,\n\t.big-btn:focus {\n\t\tcolor: var(--yellow);\n\t\tbox-shadow: 0 3px 0 var(--yellow);\n\t\ttext-shadow: none;\n\t}\n\n\t.big-btn:active {\n\t\tbox-shadow: none !important;\n\t\ttransform: translateY(3px);\n\t}\n\n\t.big-btn span {\n\t\tpadding-right: 10px;\n\t\tvertical-align: -1px;\n\t}\n\n\t.col-left {\n\t\tdisplay: none;\n\t}\n\n\t.col-right {\n\t\tmargin-top: 0;\n\t}\n\n\t.col-right > div {\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t\ttransition: 450ms opacity;\n\t\tposition: static;\n\t\twidth: 100%;\n\t\tmargin-bottom: 20px;\n\t}\n\n\t.col-right > div:last-child {\n\t\tmargin-bottom: 100px;\n\t}\n\n\t.col-right > div.fade-in {\n\t\topacity: 1 !important;\n\t\tvisibility: visible !important;\n\t\ttransition: 300ms opacity;\n\t}\n\n\t#div-default {\n\t\tdisplay: none;\n\t}\n\n\t/* > mobile */\n\t@media (min-width: 801px) {\n\t\tul {\n\t\t\tlist-style-type: inherit;\n\t\t\tpadding-left: 20px;\n\t\t}\n\n\t\t.col-left {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t.col-right > div {\n\t\t\topacity: 0;\n\t\t\tvisibility: hidden;\n\t\t\twidth: 44%;\n\t\t\tposition: absolute;\n\t\t\tmax-width: 728px;\n\t\t}\n\n\t\t.col-right > div:last-child {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\n\t\t#div-default {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t/* tablet */\n\t@media (min-width: 801px) and (max-width: 1265px) {\n\t\t.col-right {\n\t\t\tmargin-top: 25px;\n\t\t}\n\n\t\t.col-right > div {\n\t\t\twidth: 100%;\n\t\t\tmax-width: 490px;\n\t\t}\n\t}\n"]);return i=function(){return t},t}n.default=Object(a.b)(i())},17:function(t,n,e){"use strict";e.r(n);var a,i,o,l=e(23),r=e(11),s=e(12),d=e(14),c=e(25);function g(){const t=h(["\n\t\t\t.lh {\n\t\t\t\tlist-style-type: none;\n\t\t\t\tmargin: 12px 0 8px;\n\t\t\t\tpadding-left: 0;\n\t\t\t\tcolor: var(--gray);\n\t\t\t}\n\n\t\t\t.caption {\n\t\t\t\tcolor: var(--gray);\n\t\t\t}\n\n\t\t\t.col-right .videogame-asset,\n\t\t\t.col-right .code {\n\t\t\t\tmargin-right: 10px;\n\t\t\t\tvertical-align: -6px;\n\t\t\t}\n\n\t\t\t.tech-used {\n\t\t\t\tmargin-top: 26px;\n\t\t\t\tmargin-bottom: 22px;\n\t\t\t}\n\n\t\t\t.tech-used .lh {\n\t\t\t\tmargin-left: -30px;\n\t\t\t}\n\n\t\t\t#div-default img {\n\t\t\t\tmargin-top: 15px;\n\t\t\t}\n\n\t\t\t#div-separate img {\n\t\t\t\twidth: 38px;\n\t\t\t}\n\n\t\t\t#div-separate .big-img {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 375px;\n\t\t\t\tmargin: 14px auto 0;\n\t\t\t}\n\n\t\t\t/* > mobile */\n\t\t\t@media (min-width: 801px) {\n\t\t\t\t#div-separate .big-img {\n\t\t\t\t\tmargin: 14px 0 0;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.additional-links ul {\n\t\t\t\tline-height: 1.6;\n\t\t\t}\n\n\t\t\t.additional-links ul .lh {\n\t\t\t\tmargin-top: 25px;\n\t\t\t}\n\t\t"]);return g=function(){return t},t}function m(){const t=h(['\n\t\t\t<div class="col-left card">\n\t\t\t\t<h1>Games</h1>\n\t\t\t\t<ul>\n\t\t\t\t\t<li class="lh">-Made with Unity-</li>\n\t\t\t\t\t<li><a id="blood-cell-brigade">Blood Cell Brigade</a></li>\n\t\t\t\t\t<li><a id="deflection">Deflection</a></li>\n\t\t\t\t\t<li class="lh">(pre WebGL Unity builds)</li>\n\t\t\t\t\t<li><a id="defend">Defend Thy Kingdom</a></li>\n\t\t\t\t\t<li><a id="zelda">The Legend of Zelda: Reservanted</a></li>\n\t\t\t\t\t<li><a id="separate">Divide & Conquer</a></li>\n\t\t\t\t\t<li class="lh">-Made with Unreal Engine 4-</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://github.com/ddolsen23/Unlit" target="_blank" rel="noopener">Unlit &#8599;</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://github.com/jonmann20/TigerWoods" target="_blank" rel="noopener">TigerWoods &#8599;</a> (prototype mobile game)\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://github.com/jonmann20/Uneven" target="_blank" rel="noopener">Uneven &#8599;</a> (prototype)\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="lh">-Custom engine demos-</li>\n\t\t\t\t\t<li><a id="jons-quest">Jon&#700;s Quest</a></li>\n\t\t\t\t\t<li><a id="dungeon">Dungeon</a></li>\n\t\t\t\t\t<li><a id="dormanticide">Dormanticide</a> (prototype)</li>\n\t\t\t\t\t<li><a id="vamp">Vamp: The Great and Powerful</a> (prototype)</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://github.com/jonmann20/Ray2d" target="_blank" rel="noopener">Ray2d &#8599;</a> (parallel game engine)\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://github.com/jonmann20/EZGui" target="_blank" rel="noopener">EZGui &#8599;</a> (Unity utility library)\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="col-right">\n\t\t\t\t<div id="div-default" class="card fade-in">\n\t\t\t\t\t<img src="/img/jon-and-timS.jpg" alt="Tim Schafer and Jon Wiedmann at PAX East 2014">\n\t\t\t\t\t<p class="caption">PAX East 2014 with Tim Schafer</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAs a hobbyist Game Developer, I have created several game prototypes using technologies like Unity with C# and custom game engines in HTML<sub>5</sub> Canvas with Javascript or Dart.\n\t\t\t\t\t\tUnless otherwise noted, all audio, graphics, and develepment was handmade.\n\t\t\t\t\t</p>\n\n\t\t\t\t</div>\n\t\t\t\t<div id="div-jons-quest" class="card">\n\t\t\t\t\t<h2>Jon\'s Quest</h2>\n\t\t\t\t\t<p>A platformer game engine demo written in pure Javascript.</p>\n\n\t\t\t\t\t<img src="/games/common/img/player/playerDown.png" alt="hero" width="48" height="65">\n\t\t\t\t\t<img src="/games/common/img/player/playerUp.png" alt="hero" width="48" height="65">\n\t\t\t\t\t<img src="/games/common/img/player/playerRight_Run3.png" alt="hero" width="48" height="65">\n\t\t\t\t\t<img src="/games/jonsQuest/img/syringe.png" alt="syringe" width="25" height="25">\n\t\t\t\t\t<img src="/games/jonsQuest/img/cash.png" alt="cash" width="22" height="24">\n\t\t\t\t\t<img src="/games/jonsQuest/img/sack.png" alt="sack" width="30" height="36">\n\t\t\t\t\t<img src="/games/jonsQuest/img/shuriken.png" alt="shuriken" width="31" height="31">\n\t\t\t\t\t<img src="/games/jonsQuest/img/medKit.png" alt="medical kit" width="31" height="30">\n\t\t\t\t\t<img src="/games/jonsQuest/img/cyborgBnW.png" alt="cyborg" width="40" height="55">\n\t\t\t\t\t<img src="/games/jonsQuest/img/crate.png" alt="crate" width="34" height="37">\n\n\t\t\t\t\t<ul class="tech-used">\n\t\t\t\t\t\t<li class="lh">Tech used in making the game:</li>\n\t\t\t\t\t\t<li><a href="https://github.com/wjaguar/mtPaint" target="_blank" rel="noopener">mtPaint</a> &mdash; A pixel art application.</li>\n\t\t\t\t\t\t<li><a href="http://famitracker.com/" target="_blank" rel="noopener">FamiTracker</a> &mdash; A NES/Famicom music creation app.</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<a class="big-btn" href="/games/jonsQuest">\n\t\t\t\t\t\t<i-con name="videogameAsset" class="videogame-asset"></i-con>Play Game\n\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t<a class="big-btn alt" href="https://github.com/jonmann20/jonmann20.github.com/tree/master/games/jonsQuest" target="_blank" rel="noopener" title="Source Code on Github">\n\t\t\t\t\t\t<i-con name="code" class="code"></i-con>Source Code &#8599;\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div id="div-dungeon" class="card">\n\t\t\t\t\t<h2>Dungeon</h2>\n\t\t\t\t\t<p>A top down RPG engine demo.</p>\n\n\t\t\t\t\t<img src="/games/dungeon/build/web/img/heart.png" alt="heart" width="9" height="9">\n\t\t\t\t\t<img src="/games/dungeon/build/web/img/stairsR.png" alt="stairs" width="40" height="40">\n\t\t\t\t\t<img src="/games/dungeon/build/web/img/wiseMan.png" alt="wise man" width="30" height="43">\n\t\t\t\t\t<img src="/games/dungeon/build/web/img/fish.png" alt="fish" width="69" height="40">\n\t\t\t\t\t<img src="/games/dungeon/build/web/img/sprites/items/sword/sword.png" alt="sword" width="24" height="24">\n\t\t\t\t\t<img src="/games/dungeon/build/web/img/sprites/items/device/device.png" alt="device" width="18" height="46">\n\n\t\t\t\t\t<ul class="tech-used">\n\t\t\t\t\t\t<li class="lh">Tech used in making the game:</li>\n\t\t\t\t\t\t<li><a href="https://github.com/wjaguar/mtPaint" target="_blank" rel="noopener">mtPaint</a> &mdash; A pixel art application.</li>\n\t\t\t\t\t\t<li><a href="https://www.dartlang.org" target="_blank" rel="noopener">Dart</a> &mdash; An intermediary language (created by google) which is then compiled into Javascript.</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<a class="big-btn" href="/games/dungeon/build/web">\n\t\t\t\t\t\t<i-con name="videogameAsset" class="videogame-asset"></i-con>Play Game\n\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t<a class="big-btn alt" href="https://github.com/jonmann20/jonmann20.github.com/tree/master/games/dungeon" target="_blank" rel="noopener" title="Source Code on Github">\n\t\t\t\t\t\t<i-con name="code" class="code"></i-con>Source Code &#8599;\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div id="div-separate" class="card">\n\t\t\t\t\t<h2>Divide & Conquer</h2>\n\t\t\t\t\t<p>A space shooter with an atypical splitting mechanic.  Created at my first 48-hour Game Jam (see source code for collaborators).  We took 2nd place!</p>\n\n\t\t\t\t\t<img src="/games/common/img/separate/spray_powerup.png">\n\t\t\t\t\t<img src="/games/common/img/separate/chain_powerup.png">\n\t\t\t\t\t<img src="/games/common/img/separate/Enemy0.png">\n\t\t\t\t\t<img src="/games/common/img/separate/Enemy1.png">\n\t\t\t\t\t<img src="/games/common/img/separate/Enemy2.png">\n\t\t\t\t\t<img src="/games/common/img/separate/Enemy3.png">\n\t\t\t\t\t<img src="/games/common/img/separate/Player.png">\n\t\t\t\t\t<img src="/games/common/img/separate/shield_powerup.png">\n\t\t\t\t\t<img src="/games/common/img/separate/spaceshipBlue.png">\n\t\t\t\t\t<img src="/games/common/img/separate/spaceshipFull.png">\n\t\t\t\t\t<img src="/games/common/img/separate/spaceshipRed.png">\n\t\t\t\t\t<img src="/games/common/img/separate/speed_powerup.png">\n\n\t\t\t\t\t<img class="big-img" src="/img/game-jam14.jpg">\n\n\t\t\t\t\t<ul class="tech-used">\n\t\t\t\t\t\t<li class="lh">Tech used in making the game:</li>\n\t\t\t\t\t\t<li><a href="https://unity3d.com" target="_blank" rel="noopener">Unity</a></li>\n\t\t\t\t\t\t<li>C#</li>\n\t\t\t\t\t\t<li><a href="https://www.apple.com/mac/garageband" target="_blank" rel="noopener">Garage Band</a></li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<a class="big-btn" href="/games/separate">\n\t\t\t\t\t\t<i-con name="videogameAsset" class="videogame-asset"></i-con>Play Game\n\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t<a class="big-btn alt" href="https://github.com/jonmann20/GameJam14" target="_blank" rel="noopener" title="Source Code on Github">\n\t\t\t\t\t\t<i-con name="code" class="code"></i-con>Source Code &#8599;\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div id="div-defend" class="card">\n\t\t\t\t\t<h2>Defend Thy Kingdom</h2>\n\t\t\t\t\t<p>A third person wave survival game about wizards.  This game was created as part of a four person team as a final project for EECS 494 - Computer Game Design at the University of Michigan - College of Engineering.</p>\n\n\t\t\t\t\t<img src="/img/defend-thy-kingdom.jpg">\n\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a class="big-btn" href="/games/defendThyKingdom/">\n\t\t\t\t\t\t\t<i-con name="videogameAsset" class="videogame-asset"></i-con>Play Game\n\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t<a class="big-btn alt" href="https://github.com/jonmann20/WizardSurvival" target="_blank" rel="noopener" title="Source Code on Github">\n\t\t\t\t\t\t\t<i-con name="code" class="code"></i-con>Source Code &#8599;\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div id="div-blood-cell-brigade" class="card">\n\t\t\t\t\t<h2>Blood Cell Brigade</h2>\n\t\t\t\t\t<p>Created for the Intel Code for Good Game Jam in 40 hours.</p>\n\n\t\t\t\t\t<img class="big-img" src="/img/blood-cell-brigade-title.jpg">\n\n\t\t\t\t\t<ul class="tech-used">\n\t\t\t\t\t\t<li class="lh">Tech used in making the game:</li>\n\t\t\t\t\t\t<li><a href="https://unity3d.com" target="_blank" rel="noopener">Unity</a> &mdash; A game development engine.</li>\n\t\t\t\t\t\t<li>C#</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<a class="big-btn" href="/games/bloodCellBrigade">\n\t\t\t\t\t\t<i-con name="videogameAsset" class="videogame-asset"></i-con>Play Game\n\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t<a class="big-btn alt" href="https://github.com/jonmann20/IntelGameJamW14" target="_blank" rel="noopener" title="Source Code on Github">\n\t\t\t\t\t\t<i-con name="code" class="code"></i-con>Source Code &#8599;\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div id="div-deflection" class="card">\n\t\t\t\t\t<h2>Deflection</h2>\n\t\t\t\t\t<p>A one week class project prototype.</p>\n\n\t\t\t\t\t<ul class="tech-used">\n\t\t\t\t\t\t<li class="lh">Tech used in making the game:</li>\n\t\t\t\t\t\t<li><a href="https://unity3d.com" target="_blank" rel="noopener">Unity</a> &mdash; A game development engine.</li>\n\t\t\t\t\t\t<li>C#</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<a class="big-btn" href="/games/deflection">\n\t\t\t\t\t\t<i-con name="videogameAsset" class="videogame-asset"></i-con>Play Game\n\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t<a class="big-btn alt" href="https://github.com/jonmann20/Deflection" target="_blank" rel="noopener" title="Source Code on Github">\n\t\t\t\t\t\t<i-con name="code" class="code"></i-con>Source Code &#8599;\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div id="div-zelda" class="card">\n\t\t\t\t\t<h2>The Legend of Zelda: Reservanted</h2>\n\t\t\t\t\t<p>A class project with the help of <a href="mailto:ayarger@umich.edu" target="_blank">Austin Yarger</a>, remaking part of the original Legend of Zelda plus an original level.  Coming in at around 5,500 lines of code.  How did they ever fit this all on an NES cartridge? I\'m guessing they had more than 3 weeks.</p>\n\n\t\t\t\t\t<ul class="tech-used">\n\t\t\t\t\t\t<li class="lh">Tech used in making the game:</li>\n\t\t\t\t\t\t<li><a href="https://unity3d.com" target="_blank" rel="noopener">Unity</a> &mdash; A game development engine.</li>\n\t\t\t\t\t\t<li>C#</li>\n\t\t\t\t\t\t<li>Sprites from <a href="http://www.spriters-resource.com/nes/thelegendofzelda/" target="_blank" rel="noopener">The Spriters Resource</a></li>\n\t\t\t\t\t\t<li>Overworld tilemap idea from <a href="http://inventwithpython.com/blog/2012/12/10/8-bit-nes-legend-of-zelda-map-data/" target="_blank" rel="noopener">Invent with Python Blog</a></li>\n\t\t\t\t\t\t<li>Audio from <a href="http://www.zeldadungeon.net/Zelda01-the-legend-of-zelda-soundtrack-music.php" target="_blank" rel="noopener">ZeldaDungeon.net</a> and <a href="http://www.sounds-resource.com/nes/legendofzelda/sound/598/" target="_blank" rel="noopener">The Sounds Resource</a></li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<p>Original game is copyrighted by Nintendo.</p>\n\n\t\t\t\t\t<a class="big-btn" href="/games/zeldaReservanted">\n\t\t\t\t\t\t<i-con name="videogameAsset" class="videogame-asset"></i-con>Play Game\n\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t<a class="big-btn alt" href="https://github.com/jonmann20/ZeldaReservanted" target="_blank" rel="noopener" title="Source Code on Github">\n\t\t\t\t\t\t<i-con name="code" class="code"></i-con>Source Code &#8599;\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div id="div-dormanticide" class="card">\n\t\t\t\t\t<h2>Dormanticide</h2>\n\t\t\t\t\t<p>A battle simulator (very early in development).</p>\n\n\t\t\t\t\t<a class="big-btn" href="/games/dormanticide">\n\t\t\t\t\t\t<i-con name="videogameAsset" class="videogame-asset"></i-con>Play Game\n\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t<a class="big-btn alt" href="https://github.com/jonmann20/jonmann20.github.com/tree/master/games/dormanticide" target="_blank" rel="noopener" title="Source Code on Github">\n\t\t\t\t\t\t<i-con name="code" class="code"></i-con>Source Code &#8599;\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div id="div-vamp" class="card">\n\t\t\t\t\t<h2>Vamp: The Great and Powerful</h2>\n\t\t\t\t\t<p>A game about a vamprie with the ability to save your game (very early in development)</p>\n\n\t\t\t\t\t<a class="big-btn" href="/games/vamp">\n\t\t\t\t\t\t<i-con name="videogameAsset" class="videogame-asset"></i-con>Play Game\n\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t<a class="big-btn alt" href="https://github.com/jonmann20/jonmann20.github.com/tree/master/games/vamp" target="_blank" rel="noopener" title="Source Code on Github">\n\t\t\t\t\t\t<i-con name="code" class="code"></i-con>Source Code &#8599;\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- Show links without deails --\x3e\n\t\t\t\t<div class="additional-links card">\n\t\t\t\t\t<h2>Additional Links</h2>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li class="lh">-Made with Unreal Engine 4-</li>\n\t\t\t\t\t\t<li><a href="https://github.com/ddolsen23/Unlit" target="_blank" rel="noopener">Unlit &#8599;</a></li>\n\t\t\t\t\t\t<li><a href="https://github.com/jonmann20/TigerWoods" target="_blank" rel="noopener">TigerWoods &#8599;</a> (prototype mobile game)</li>\n\t\t\t\t\t\t<li><a href="https://github.com/jonmann20/Uneven" target="_blank" rel="noopener">Uneven &#8599;</a> (prototype)</li>\n\t\t\t\t\t\t<li class="lh">-Custom engine demos-</li>\n\t\t\t\t\t\t<li><a href="https://github.com/jonmann20/Ray2d" target="_blank" rel="noopener">Ray2d &#8599;</a> (parallel game engine)</li>\n\t\t\t\t\t\t<li><a href="https://github.com/jonmann20/EZGui" target="_blank" rel="noopener">EZGui &#8599;</a> (Unity utility library)</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n        ']);return m=function(){return t},t}function h(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}class p extends l.a{constructor(){super(),document.title="Games"}firstUpdated(){new c.a(this.shadowRoot.querySelector(".col-left ul"),this.shadowRoot)}render(){return Object(l.c)(m())}}a=p,i="styles",o=[r.default,s.default,d.default,Object(l.b)(g())],i in a?Object.defineProperty(a,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[i]=o,customElements.define("page-games",p)},25:function(t,n,e){"use strict";n.a=class{constructor(t,n){let e,a="default",i=Array.from(t.querySelectorAll("a"));n=n||document,i.forEach(t=>{t.addEventListener("click",t=>{(e=t.target.id)&&a!==e&&(t.preventDefault(),n.querySelector("#div-".concat(a)).classList.remove("fade-in"),n.querySelector("#div-".concat(e)).classList.add("fade-in"),a=e)})})}}}}]);