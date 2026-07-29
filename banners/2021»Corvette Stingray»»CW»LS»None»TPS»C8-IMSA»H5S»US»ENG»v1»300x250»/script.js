var tl = TweenMax;
var tlx = new TimelineMax();
function initThis(){
    tl.set('#main_content', {display:"block", visibility:"visible"});

    document.getElementById("disclaimer-btn").addEventListener("click", showDisclaimer);
    document.getElementById("close").addEventListener("click", hideDisclaimer);
    document.getElementById("cta-clicktag").addEventListener("mouseover", onOverHandler);
    document.getElementById("cta-clicktag").addEventListener("mouseout", onOutHandler);

    startAnimation();
}
function onOverHandler(e){
    tl.to('#explore-hover', .15, {opacity:1});
}
function onOutHandler(e){
    tl.to('#explore-hover', .15, {opacity:0});
}
function showDisclaimer(e){
    tl.set('#close', {display:"none"})
    tl.set('#disclaimer', {display:"block", opacity:1, y:0});
    tl.set('#disclaimer-content', {y:300});
    tl.set('#close', {display:'block', delay:.25})
    tl.to('#disclaimer-content', .25, {opacity:1, y:0, ease:Power0.easeOut});
}
function hideDisclaimer(e){
    tl.to('#disclaimer', .25, {y:300, ease:Power0.easeIn});
}

function startAnimation(){
    tlx.set('#bg1, #bg2, #bg3', {scale:1.15, opacity:1})
       .addLabel("frame1")
       .to('#bg1', 4, {scale:1, ease:Power2.easeOut, force3D:true, rotation:.00001}, 'frame1')
       .to('#c1', 1, {opacity:1, ease:Power0.easeInOut}, '-=3.5')
       
       .addLabel("frame2", "+=1.5")
       .to('#c1', 1, {opacity:0, ease:Power0.easeInOut}, 'frame2')
       .to('#bg1', .5, {opacity:0, ease:Power0.easeInOut}, 'frame2')
       .to('#bg2', 4, {scale:1, ease:Power2.easeOut, force3D:true, rotation:.00001}, 'frame2')
       .to('#c2', 1, {opacity:1, ease:Power0.easeInOut}, '-=3')

       
       .addLabel("frame3", "+=1.5")
       .to('#c2', .5, {opacity:0, ease:Power0.easeInOut}, 'frame3')
       .to('#bg2', .5, {opacity:0, ease:Power0.easeInOut}, 'frame3')
       .to('#bg3', 4, {scale:1, ease:Power2.easeOut, force3D:true, rotation:.00001}, 'frame3')
       .to('#c3', 1, {opacity:1, ease:Power0.easeInOut}, '-=3.5')

}

