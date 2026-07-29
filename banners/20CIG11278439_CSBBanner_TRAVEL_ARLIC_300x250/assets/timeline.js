window.onload = function(e){

  var open = document.getElementById("open");
  
  var tl = new TimelineMax();
  
	
  tl.from(adWrap, 0, {autoAlpha:0})

  
  // FRAME 1
  
	.from(footer, 0.25, {height:250, ease: Strong.easeNone}, 1.5)
	.to(logo, 0.25, {scale:0.5, x:102, y:101, ease: Strong.easeNone}, 1.5)
	.to(tagline_large, 0.25, {opacity: 0, ease: Strong.easeNone}, 1.25)


  // FRAME 2

	.to(tagline_small, 0.25, {opacity: 1, ease: Strong.easeNone}, 1.75)

	.to(rv_bg, 7, {left:0, ease:Linear.easeNone}, 1.5) 
	.to(rv_mg, 6, {left:300, ease:Linear.easeNone}, 1.5) 
	.to(rv_fg, 4, {left:300, ease:Linear.easeNone}, 1.5) 
	.from(rv, 1.5, {left:305, ease:Power2.easeOut}, 1.5) 
	.to(copy1, .5, {opacity:1, ease:Power1.easeOut}, 1.75)


  // FRAME 3

	.to(copy1, 0.5, {opacity:0, ease:Power1.easeOut}, 5.25) 
	.to(rv_scene, 1, {top:200, ease:Power1.easeInOut}, 5.5) 
	.to(air_scene, 1, {top:0, ease:Power1.easeInOut}, 5.5)

	.to(air_bg, 7, {left:0, ease:Linear.easeNone}, 5.5) 
	.to(air_mg, 6, {left:300, ease:Linear.easeNone}, 5.5) 
	.to(air_fg, 5, {left:300, ease:Linear.easeNone}, 5.5) 
	.from(air, 1.5, {left:305, ease:Power2.easeOut}, 5.5) 
	.to(air_puff, 0, {opacity:0, ease:Linear.easeNone}, 7) 
	.to(copy2, 0.5, {opacity:1, ease:Power1.easeOut}, 6.25) 


  // FRAME 4

	.to(copy2, 0.5, {opacity:0, ease:Power1.easeOut}, 8.5) 
	.to(air_scene, 1, {top:-200, ease:Power1.easeInOut}, 9)
	.to(rail_scene, 1, {top:0, ease:Power1.easeInOut}, 9) 

	.to(rail_bg, 5, {left:50, ease:Linear.easeNone}, 9) 
	.to(rail_mg, 4.5, {left:115, ease:Linear.easeNone}, 9) 
	.to(rail_fg, 3.5, {left:350, ease:Linear.easeNone}, 9) 
	.from(rail, 1.5, {left:305, ease:Power2.easeOut}, 9)
	.to(copy3, 0.5, {opacity:1, ease:Power1.easeOut}, 10) 
	
	
	//END FRAME
	
	.to([rv_scene, air_scene, rail_scene, copy2], 0.25, {opacity:0, ease:Power1.easeOut}, 13.75)
	
	.to(copy3, 0.25, {opacity:0, ease:Power1.easeOut}, 14)
	.to(tagline_small, 0.25, {opacity: 0, ease: Strong.easeNone}, 14)
  
	.from(eyebrow, 0.5, {left:-300, ease: Power1.easeOut}, 13.9)
	.from(end_head, 0.5, {left:-300, ease: Power1.easeOut}, 14)

	.from(bottom_bar, 0.25, {height: 0}, 14.25)
	.set(open, {display:"block"}, 14.25)
	.from(open, 0.25, {bottom: -19}, 14.25)

	.from(end_subhead, 0.5, {left:-300, ease: Power1.easeOut}, 14.5)
	.to(cta, 0.25, {opacity: 1, scale: 1, display:"block", ease: Power1.easeOut }, 14.75)
  
  console.log("duration is: " + tl.duration());

}

function glitters() {
  TweenLite.to(glitter, 0.4, {x: 350, ease: Strong.easeOut, onComplete: glitterPos});
}
function glitterPos(){
  TweenLite.set(glitter, {x:-250});
}
function showIt(){
  document.getElementById("disclosure").style.display = "block";
  document.getElementById("close").style.display = "block";
  document.getElementById("open").style.display = "none";
}
function hideIt(){
  document.getElementById("disclosure").style.display = "none";
  document.getElementById("close").style.display = "none";
  document.getElementById("open").style.display = "block";
}
  document.getElementById("cta").addEventListener("mouseover", glitters);
  document.getElementById("open").addEventListener("click", showIt);
  document.getElementById("close").addEventListener("click", hideIt);
