(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.cta_arrow = function() {
	this.initialize(img.cta_arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cta_box = function() {
	this.initialize(img.cta_box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cta_box_over1 = function() {
	this.initialize(img.cta_box_over1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cta_text = function() {
	this.initialize(img.cta_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fondo1 = function() {
	this.initialize(img.fondo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,801,500);


(lib.fondo2 = function() {
	this.initialize(img.fondo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,643);


(lib.logos = function() {
	this.initialize(img.logos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.mas = function() {
	this.initialize(img.mas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.raya = function() {
	this.initialize(img.raya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.replayicon1 = function() {
	this.initialize(img.replayicon1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,21);


(lib.replaytext = function() {
	this.initialize(img.replaytext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text4B = function() {
	this.initialize(img.text4B);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.raya();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.fondo2();
	this.instance.setTransform(-150,-160.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-160.7,300,321.5);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.fondo2();
	this.instance.setTransform(-150,-160.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-160.7,300,321.5);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.mas();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.mas();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.fondo1();
	this.instance.setTransform(-200.25,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.2,-125,400.5,250);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.fondo1();
	this.instance.setTransform(-200.25,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.2,-125,400.5,250);


(lib.rep_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1CBBA").s().p("AiICJIAAkRIERAAIAAERg");
	this.shape.setTransform(13.55,13.85);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,27.5,27.6);


(lib.text4b_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.text4B();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text4b_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.text4_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.text4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text4_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.text3_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.text3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text3_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.text2_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.text2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.text1_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.text1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.replay_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.replayicon1();
	this.instance.setTransform(0,0,0.5238,0.5238);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.replay_icon, new cjs.Rectangle(0,0,11,11), null);


(lib.flechita = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.cta_arrow();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flechita, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_on = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.instance = new lib.cta_box_over1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_on, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_off = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.instance = new lib.cta_box();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_off, new cjs.Rectangle(0,0,574,475), null);


(lib.cta_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aw9BvIAAjdMAh7AAAIAADdg");
	this.shape.setTransform(101.35,17.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,0,217.3,28.5);


(lib.clicktag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {on:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// icon rep
	this.instance = new lib.replay_icon();
	this.instance.setTransform(255.2,12.9,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},8).to({rotation:270},5).to({rotation:360},4).wait(1));

	// rep
	this.instance_1 = new lib.replaytext();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flechita
	this.instance = new lib.flechita();
	this.instance.setTransform(4,4,1,0.9999,0,0,0,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.95},8,cjs.Ease.get(-1)).to({x:4},8,cjs.Ease.get(1)).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305,250.1);


(lib.cta_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"on":1,off:29};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
		//this.gotoAndPlay("on")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(2));

	// on
	this.instance = new lib.cta_on();
	this.instance.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},13,cjs.Ease.get(-1)).wait(17));

	// off
	this.instance_1 = new lib.cta_off();
	this.instance_1.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},13,cjs.Ease.get(-1)).to({alpha:1},15,cjs.Ease.get(1)).wait(2));

	// arrow
	this.instance_2 = new lib.cta_arrow();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.arrow();
	this.instance_3.setTransform(548.8,449,1,1,0,0,0,548.8,449);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},28).wait(1));

	// text
	this.instance_4 = new lib.cta_text();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib._2018ACDelcoLBLSNoneOtherProductBrakesH5SUSENGv1300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {restart:1,loop:355};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,355,382];
	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		
		var root = this;
		loop = false
		
		this.cta_btn.addEventListener("click", clickCta.bind(this));
		this.cta_btn.addEventListener("click", endframeCta.bind(this));
		this.cta_btn.addEventListener("rollover", rolloverCta.bind(this));
		this.cta_btn.addEventListener("rollout", rolloutCta.bind(this));
		
		function clickCta() {
			window.open(clickTag1, "_blank");
		}
		
		function endframeCta() {
			root.gotoAndStop("loop");
		}
		
		function rolloverCta() {
			root.cta_mc.gotoAndPlay("on");
		}
		function rolloutCta() {
			root.cta_mc.gotoAndPlay("off");
		}
		
		this.clicktag.addEventListener("click", fl_ClickToGoToWebPage);
		this.clicktag.addEventListener("click", fl_endFrame);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTag, "_blank");
		}
		
		function fl_endFrame() {
			root.gotoAndStop("loop");
		}
		
		this.replay_btn.addEventListener("rollover", rolloverRep.bind(this));
		this.replay_btn.addEventListener("rollout", rolloutRep.bind(this));
		
		this.replay_btn.addEventListener("click", clickReplay.bind(this));
		
		function clickReplay() {
			root.gotoAndPlay("restart");
		}
		
		function rolloverRep() {
			root.replaybtn_mc.gotoAndPlay("on");
		}
		function rolloutRep() {
			root.replaybtn_mc.gotoAndPlay("off");
		}
	}
	this.frame_355 = function() {
		this.stop();
		/*console.log("loop = "+loop)
		if(!loop){
			loop = true
			this.play()
		}*/
	}
	this.frame_382 = function() {
		this.stop()
		this.gotoAndPlay("restart")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(355).call(this.frame_355).wait(27).call(this.frame_382).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#050101").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(383));

	// rep btn
	this.replay_btn = new lib.rep_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(275.25,11.8,1.9002,0.6019,0,0,0,14,14.1);
	this.replay_btn._off = true;
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.rep_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(341).to({_off:false},0).wait(42));

	// cta_btn
	this.cta_btn = new lib.cta_btn();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.setTransform(237.7,233.65,0.4969,1.1468,0,0,0,110.5,25.4);
	new cjs.ButtonHelper(this.cta_btn, 0, 1, 2, false, new lib.cta_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(383));

	// clickthru_btn
	this.clicktag = new lib.clicktag();
	this.clicktag.name = "clicktag";
	this.clicktag.setTransform(150,125,1,1,0,0,0,150,125);
	this.clicktag.alpha = 0.0117;
	new cjs.ButtonHelper(this.clicktag, 0, 1, 2, false, new lib.clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag).wait(383));

	// replay
	this.replaybtn_mc = new lib.replay();
	this.replaybtn_mc.name = "replaybtn_mc";
	this.replaybtn_mc.setTransform(150,125,1,1,0,0,0,150,125);
	this.replaybtn_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replaybtn_mc).wait(341).to({_off:false},0).wait(42));

	// text4b
	this.instance = new lib.text4b_mc();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(311).to({_off:false},0).to({alpha:1},30,cjs.Ease.get(1)).wait(42));

	// MaskRaya (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_298 = new cjs.Graphics().p("AIIK3IAAjIIBGAAIAADIg");
	var mask_graphics_299 = new cjs.Graphics().p("AHWK3IAAjIICqAAIAADIg");
	var mask_graphics_300 = new cjs.Graphics().p("AGpK3IAAjIIEFAAIAADIg");
	var mask_graphics_301 = new cjs.Graphics().p("AF+K3IAAjIIFaAAIAADIg");
	var mask_graphics_302 = new cjs.Graphics().p("AFYK3IAAjIIGmAAIAADIg");
	var mask_graphics_303 = new cjs.Graphics().p("AE1K3IAAjIIHsAAIAADIg");
	var mask_graphics_304 = new cjs.Graphics().p("AEWK3IAAjIIIqAAIAADIg");
	var mask_graphics_305 = new cjs.Graphics().p("AD6K3IAAjIIJiAAIAADIg");
	var mask_graphics_306 = new cjs.Graphics().p("ADjK3IAAjIIKRAAIAADIg");
	var mask_graphics_307 = new cjs.Graphics().p("ADOK3IAAjIIK6AAIAADIg");
	var mask_graphics_308 = new cjs.Graphics().p("AC+K3IAAjIILbAAIAADIg");
	var mask_graphics_309 = new cjs.Graphics().p("ACxK3IAAjIIL0AAIAADIg");
	var mask_graphics_310 = new cjs.Graphics().p("ACoK3IAAjIIMHAAIAADIg");
	var mask_graphics_311 = new cjs.Graphics().p("ACiK3IAAjIIMSAAIAADIg");
	var mask_graphics_312 = new cjs.Graphics().p("AmKBkIAAjHIMVAAIAADHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(298).to({graphics:mask_graphics_298,x:59.0012,y:69.525}).wait(1).to({graphics:mask_graphics_299,x:63.9602,y:69.525}).wait(1).to({graphics:mask_graphics_300,x:68.5519,y:69.525}).wait(1).to({graphics:mask_graphics_301,x:72.7763,y:69.525}).wait(1).to({graphics:mask_graphics_302,x:76.6333,y:69.525}).wait(1).to({graphics:mask_graphics_303,x:80.1229,y:69.525}).wait(1).to({graphics:mask_graphics_304,x:83.2453,y:69.525}).wait(1).to({graphics:mask_graphics_305,x:86.0003,y:69.525}).wait(1).to({graphics:mask_graphics_306,x:88.388,y:69.525}).wait(1).to({graphics:mask_graphics_307,x:90.4083,y:69.525}).wait(1).to({graphics:mask_graphics_308,x:92.0613,y:69.525}).wait(1).to({graphics:mask_graphics_309,x:93.347,y:69.525}).wait(1).to({graphics:mask_graphics_310,x:94.2653,y:69.525}).wait(1).to({graphics:mask_graphics_311,x:94.8163,y:69.525}).wait(1).to({graphics:mask_graphics_312,x:150.525,y:129.05}).wait(71));

	// raya
	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.setTransform(150,125);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(298).to({_off:false},0).wait(85));

	// text4
	this.instance_2 = new lib.text4_mc();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(270).to({_off:false},0).to({alpha:1},29).wait(84));

	// text3
	this.instance_3 = new lib.text3_mc();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).to({alpha:1},30).wait(31).to({alpha:0},19).to({_off:true},1).wait(122));

	// MaskText2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_49 = new cjs.Graphics().p("ArQNUIAAoRIevAAIAAIRg");
	var mask_1_graphics_50 = new cjs.Graphics().p("ArQNfIAAouIevAAIAAIug");
	var mask_1_graphics_51 = new cjs.Graphics().p("ArQNpIAApJIevAAIAAJJg");
	var mask_1_graphics_52 = new cjs.Graphics().p("ArQNzIAApkIevAAIAAJkg");
	var mask_1_graphics_53 = new cjs.Graphics().p("ArQN9IAAp/IevAAIAAJ/g");
	var mask_1_graphics_54 = new cjs.Graphics().p("ArQOHIAAqaIevAAIAAKag");
	var mask_1_graphics_55 = new cjs.Graphics().p("ArQORIAAq1IevAAIAAK1g");
	var mask_1_graphics_56 = new cjs.Graphics().p("ArQObIAArQIevAAIAALQg");
	var mask_1_graphics_57 = new cjs.Graphics().p("ArQOlIAArrIevAAIAALrg");
	var mask_1_graphics_58 = new cjs.Graphics().p("ArQOvIAAsGIevAAIAAMGg");
	var mask_1_graphics_59 = new cjs.Graphics().p("ArQO5IAAshIevAAIAAMhg");
	var mask_1_graphics_60 = new cjs.Graphics().p("ArQPDIAAs8IevAAIAAM8g");
	var mask_1_graphics_61 = new cjs.Graphics().p("ArQPNIAAtXIevAAIAANXg");
	var mask_1_graphics_62 = new cjs.Graphics().p("ArQPWIAAtyIevAAIAANyg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_1_graphics_49,x:124.725,y:85.25}).wait(1).to({graphics:mask_1_graphics_50,x:124.7269,y:86.2532}).wait(1).to({graphics:mask_1_graphics_51,x:124.7288,y:87.2564}).wait(1).to({graphics:mask_1_graphics_52,x:124.7308,y:88.2596}).wait(1).to({graphics:mask_1_graphics_53,x:124.7327,y:89.2628}).wait(1).to({graphics:mask_1_graphics_54,x:124.7346,y:90.266}).wait(1).to({graphics:mask_1_graphics_55,x:124.7365,y:91.2692}).wait(1).to({graphics:mask_1_graphics_56,x:124.7385,y:92.2724}).wait(1).to({graphics:mask_1_graphics_57,x:124.7404,y:93.2756}).wait(1).to({graphics:mask_1_graphics_58,x:124.7423,y:94.2788}).wait(1).to({graphics:mask_1_graphics_59,x:124.7442,y:95.282}).wait(1).to({graphics:mask_1_graphics_60,x:124.7462,y:96.2852}).wait(1).to({graphics:mask_1_graphics_61,x:124.7481,y:97.2884}).wait(1).to({graphics:mask_1_graphics_62,x:124.725,y:98.25}).wait(99).to({graphics:null,x:0,y:0}).wait(222));

	// text2
	this.instance_4 = new lib.text2_mc();
	this.instance_4.setTransform(150,76,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({y:125.2,alpha:1},51,cjs.Ease.get(0.51)).wait(36).to({y:113.5,alpha:0},24).to({_off:true},1).wait(222));

	// +
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.setTransform(150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({_off:false},0).to({_off:true,alpha:1},28,cjs.Ease.get(1)).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},28,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({alpha:0},24).to({_off:true},1).wait(222));

	// text1
	this.instance_7 = new lib.text1_mc();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},29).wait(20).to({y:81.95},51,cjs.Ease.get(0.51)).wait(36).to({y:99.5,alpha:0},24).to({_off:true},1).wait(222));

	// cta
	this.cta_mc = new lib.cta_mc();
	this.cta_mc.name = "cta_mc";
	this.cta_mc.setTransform(109.5,25,1,1,0,0,0,109.5,25);

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(383));

	// logo
	this.instance_8 = new lib.logos();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(383));

	// fondo2
	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.setTransform(150,160.75);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween8("synched",0);
	this.instance_10.setTransform(150,90.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},136).to({state:[{t:this.instance_9}]},24).to({state:[{t:this.instance_10}]},181).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(136).to({_off:false},0).to({y:148.7,alpha:1},24).to({_off:true,y:90.75},181,cjs.Ease.get(1)).wait(42));

	// fondo1
	this.instance_11 = new lib.Tween1("synched",0);
	this.instance_11.setTransform(161.25,125);

	this.instance_12 = new lib.Tween2("synched",0);
	this.instance_12.setTransform(116.25,125);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,x:116.25},103,cjs.Ease.get(1)).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:false},103,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({alpha:0},24).to({_off:true},1).wait(222));

	// Negro
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(383));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(66,55,295.5,266.5);
// library properties:
lib.properties = {
	id: 'A9D407C7BA3D4676BF88A39101183D89',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./cta_arrow.png", id:"cta_arrow"},
		{src:"./cta_box.png", id:"cta_box"},
		{src:"./cta_box_over1.png", id:"cta_box_over1"},
		{src:"./cta_text.png", id:"cta_text"},
		{src:"./fondo1.jpg", id:"fondo1"},
		{src:"./fondo2.jpg", id:"fondo2"},
		{src:"./logos.png", id:"logos"},
		{src:"./mas.png", id:"mas"},
		{src:"./raya.png", id:"raya"},
		{src:"./replayicon1.png", id:"replayicon1"},
		{src:"./replaytext.png", id:"replaytext"},
		{src:"./text1.png", id:"text1"},
		{src:"./text2.png", id:"text2"},
		{src:"./text3.png", id:"text3"},
		{src:"./text4.png", id:"text4"},
		{src:"./text4B.png", id:"text4B"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A9D407C7BA3D4676BF88A39101183D89'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;