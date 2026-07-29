window.onload = function(e){

  var open = document.getElementById("open");
  
  var tl = new TimelineMax();

    var _copy1 = document.getElementById('copy1').offsetWidth;
    var _copy2 = document.getElementById('copy2').offsetWidth;
    var _copy1 = document.getElementById('copy3').offsetWidth;
    var _copy2 = document.getElementById('copy4').offsetWidth;
    
    var copy1Length = _copy1 + 100 ;
    var copy2Length = _copy2 + 100 ;
    var copy3Length = _copy1 + 100 ;
    var copy4Length = _copy2 + 100 ;

  tl.from(adWrap, 0, {autoAlpha:0})
  
  // FRAME 1
  
    .from(footer, 0.25, {height:250, ease: Strong.easeNone}, 2)
    .to(logo, 0.25, {scale:0.54, x:92, y:100, ease: Strong.easeNone}, 2)

  // FRAME 2

    .from(copy1, 0.5, {left:-copy1Length, ease: Strong.easeOut}, 2.5)
    .from(copy2, 1, {left:-copy2Length, ease: Strong.easeOut}, 3.5)   
    .to([copy1, copy2], 0.25, {opacity:0}, 7) 
    
   // FRAME 3

    .from(copy3, 0.5, {left:-copy3Length, ease: Strong.easeOut}, 7.5)
    .from(copy4, 1, {left:-copy4Length, ease: Strong.easeOut}, 8.5)   
    .to([copy3, copy4], 0.25, {opacity:0}, 11.5) 

 
  //ENDFRAME  
  
    .from(bg2, 0.5, {height:0}, 12)
    .to(Head, 0.5, {left:9, ease: Strong.easeOut}, 12.25)
    .from(bg2Sub, 0.5, {height: 0}, 12.5)
    .to(subHead, 0.5, {left:10, ease: Strong.easeOut}, 12.5)
    .to(cta, 0.5, {opacity: 1, scale: 1, display:"block", ease: Strong.easeOut }, 13)
  
    .set(open, {display:"block"}, 12.5)
    .from(open, 0.5, {opacity: 0}, 12.5);

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
