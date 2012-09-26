﻿<? ob_start(); ?>

<h2>Jon&#700;s Quest:</h2>

<div class="canvasWrap jonsQuest clr">
	<canvas>
		Your Browser Does Not Support Canvas =(. Try <a href="//www.google.com/intl/en/chrome/browser/">Google Chrome</a>
	</canvas>
	<p>Audio <button class='audioState off'>Off</button></p>
</div>
<div class="upgradeStore clr">
	<table>
		<thead>
			<tr>
				<th>Attribute</th> 
				<th>Value</th>
				<th>Cost</th>
				<th>Upgrade</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Bullet Speed</td>
				<td><input id="bulletSpeed" readonly></td>
				<td><input id="bulletCost" readonly></td>
				<td><a class="btnUpgrade bulletUpgrade"></a></td>
			</tr>
			<tr>
				<td>Hero Speed</td>
				<td><input id="heroSpeed" readonly></td>
				<td><input id="heroSpeedCost" readonly></td>
				<td><a class="btnUpgrade heroSpeedUpgrade"></a></td>
			</tr>
			<tr>
				<td>Hero Jump</td>
				<td><input id="heroJump" readonly></td>
				<td><input id="heroJumpCost" readonly></td>
				<td><a class="btnUpgrade heroJumpUpgrade"></a></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td>Upgrade Points</td>
				<td><input id="upgradePoints" readonly></td>
			</tr>
			<tr>
				<td>Current Level</td>
				<td><input id="curLvl" readonly></td>
			</tr>
			<tr>
                <td>Monsters Caught</td>
                <td><input id="numCaught" readonly></td>
            </tr>
			<tr>
				<td colspan="4" id="gameMsg"></td>
			</tr>
		</tfoot>
	</table>
</div>
<div class="debug"></div>

<br class="clrB" />
<h3>Instructions</h3>
<ul class="goals">
	<li><span>GOAL:</span> collect goblins</li>
</ul>
<ul>
	<!-- <li class="lh">Keys</li> -->
	<li><span class="keyAction">LEFT:</span> A</li>
	<li><span class="keyAction">RIGHT:</span> D</li>
	<li><span class="keyAction">SHOOT:</span> J</li>
	<li><span class="keyAction">JUMP:</span> K</li>
</ul>

<h4>External References</h4>
<ul>
    <li><a href="//www.lostdecadegames.com/demos/simple_canvas_game/" target="_blank">Original</a></li>
    <li><a href="//strd6.com/space_demo/" target="_blank">Inspiration</a></li>
    <li><a href="//simonsarris.com/blog/510-making-html5-canvas-useful" target="_blank">Inspiration2</a></li>
</ul>

<?
	  $pageMainContent = ob_get_contents();
	  ob_end_clean();
	  
	  $pageTitle = "Jon&rsquo;s Quest - Games";
	  $pageRoot = '../';
      $pageBodyClass = 'games';
	  $pageJs = '
	  	<script src="../js/jonsQuest/logic.js"></script>
	  	<script src="../js/jonsQuest/display.js"></script>
	  	<script src="../js/jonsQuest/main.js"></script>
	  ';
	  include_once($pageRoot . 'master.php');
?>
     