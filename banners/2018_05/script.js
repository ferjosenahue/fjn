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



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cta_over = function() {
	this.initialize(img.cta_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.disclaimer = function() {
	this.initialize(img.disclaimer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.nameplate_black = function() {
	this.initialize(img.nameplate_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.nameplate_white = function() {
	this.initialize(img.nameplate_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.statics = function() {
	this.initialize(img.statics);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.wheel = function() {
	this.initialize(img.wheel);
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


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#66FF00").s().p("AjvBuIAAjbIHfAAIAADbg");
	this.shape.setTransform(24,11);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,22);


(lib.wheel_anim = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheel_anim, new cjs.Rectangle(0,0,300,250), null);


(lib.txt3_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt3_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.txt2_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt2_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.txt1_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt1_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.statics_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.statics();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.statics_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.nameplate_black_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nameplate_black();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nameplate_black_1, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_over_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cta_over();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_over_1, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,255,0,0.008)").s().p("AsnCWIAAkrIZPAAIAAErg");
	this.shape.setTransform(44.05,-9.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-24.4,161.5,30);


(lib.cta_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,250), null);


(lib.clicktag_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,0,0.008)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg3_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E6E4E5").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg3_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.bg2_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg2_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.bg1_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.disc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#66FF00").s().p("AlTBfIAAi9IKnAAIAAC9g");
	this.shape.setTransform(34,9.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,19);


(lib.clickTag_disc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#66FF00").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.wheel_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_95 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// wheel
	this.instance = new lib.wheel_anim();
	this.instance.setTransform(193,-4,1,1,0,0,0,193,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:1.5513},23,cjs.Ease.get(-1)).to({regX:193.1,scaleX:1,scaleY:1,rotation:3.9794,x:193.15},24,cjs.Ease.get(1)).to({scaleX:0.9999,scaleY:0.9999,rotation:2.0272,x:193.1,y:-3.95},24,cjs.Ease.get(-1)).to({regX:193,scaleX:1,scaleY:1,rotation:0,x:193,y:-4},24,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-13.4,317.20000000000005,270.29999999999995);


(lib.cta_mc_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"in":0,out:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// arrow
	this.instance = new lib.cta_1();
	this.instance.setTransform(10,8,1,1,0,0,0,10,8);

	this.instance_1 = new lib.cta_over_1();
	this.instance_1.setTransform(10,8,1,1,0,0,0,10,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.disclaimer_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// close
	this.close_btn = new lib.Symbol1();
	this.close_btn.name = "close_btn";
	this.close_btn.setTransform(272,14.05,1,1,0,0,0,24,11);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(1));

	// disclaimer
	this.clickTag_disc = new lib.clickTag_disc();
	this.clickTag_disc.name = "clickTag_disc";
	this.clickTag_disc.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag_disc, 0, 1, 2, false, new lib.clickTag_disc(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_disc).wait(1));

	// disclaimer
	this.instance = new lib.disclaimer();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.disclaimer_1, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib._2018ChevyCertifiedServiceCWRETERebateOtherFallTireRebate100H5SUSENGv1300x250NA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"final":276};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,279];
	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		var _instance = this;
		
		this.cta_btn.cursor = "pointer";
		this.cta_btn.mouseChildren = false;
		this.clicktag.cursor = "pointer";
		this.clicktag.mouseChildren = false;
		
		this.cta_btn.addEventListener("mouseover", overCta.bind(this));
		this.cta_btn.addEventListener("mouseout", outCta.bind(this));
		this.cta_btn.addEventListener("click", clickCta.bind(this));
		
		
		function overCta(){
			this.cta_mc.gotoAndStop("out");
		}
		
		function outCta(){
			this.cta_mc.gotoAndStop("in");
		}
		
		function clickCta(e) {
			if(e.nativeEvent.button==0){
				_instance.gotoAndStop("final");	
				window.open(clickTag1, "_blank");
			}
		}
		
		this.clicktag.addEventListener("click", fl_ClickToGoToWebPage.bind(this));
		
		
		function fl_ClickToGoToWebPage(e) {
			//console.log("CLICK "+e.nativeEvent.button)
			if(e.nativeEvent.button==0){
				closeDisc()
				_instance.gotoAndStop("final");	
				window.open(clickTag, "_blank");
			}	
		}
		
		//DISCLAIMER
		
		this.disc_btn.addEventListener("click", showDisc);
		this.disclaimer_mc.clickTag_disc.addEventListener("click", fl_ClickToGoToWebPage);
		this.disclaimer_mc.close_btn.addEventListener("click", closeDisc);
		
		function showDisc() {	
			_instance.disclaimer_mc.x = 0;
		}
		
		function clickDisc() {
		
			window.open(clickTag, "_blank");
		}
		
		function closeDisc() {
		
			_instance.disclaimer_mc.x = -300;
		}
	}
	this.frame_279 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(279).call(this.frame_279).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#50565D").ss(1,1,1).p("A3VzcMAurAAAMAAAAm5MgurAAAg");
	this.shape.setTransform(149.9,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(280));

	// disclaimer
	this.disclaimer_mc = new lib.disclaimer_1();
	this.disclaimer_mc.name = "disclaimer_mc";
	this.disclaimer_mc.setTransform(-300,0);

	this.timeline.addTween(cjs.Tween.get(this.disclaimer_mc).wait(280));

	// disc_btn
	this.disc_btn = new lib.disc();
	this.disc_btn.name = "disc_btn";
	this.disc_btn.setTransform(34,266.55,1,1,0,0,0,34,9.5);
	new cjs.ButtonHelper(this.disc_btn, 0, 1, 2, false, new lib.disc(), 3);

	this.timeline.addTween(cjs.Tween.get(this.disc_btn).wait(276).to({x:37,y:241.55},0).wait(4));

	// cta_btn
	this.cta_btn = new lib.cta_mc();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.setTransform(253.3,249.3,0.531,0.8159,0,0,0,44.4,9.2);
	new cjs.ButtonHelper(this.cta_btn, 0, 1, 2, false, new lib.cta_mc(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(280));

	// clickthru_btn
	this.clicktag = new lib.clicktag_mc();
	this.clicktag.name = "clicktag";
	this.clicktag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clicktag, 0, 1, 2, false, new lib.clicktag_mc(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag).wait(280));

	// cta
	this.cta_mc = new lib.cta_mc_1();
	this.cta_mc.name = "cta_mc";
	this.cta_mc.setTransform(109.5,25,1,1,0,0,0,109.5,25);

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(280));

	// statics
	this.instance = new lib.statics_mc();
	this.instance.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(280));

	// txt3
	this.instance_1 = new lib.txt3_mc();
	this.instance_1.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(266).to({alpha:1},10).wait(4));

	// nameplate_black
	this.instance_2 = new lib.nameplate_black_1();
	this.instance_2.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(254).to({alpha:1},10).wait(16));

	// bg3
	this.instance_3 = new lib.bg3_mc();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254).to({alpha:1},10).wait(16));

	// nameplate_white
	this.instance_4 = new lib.nameplate_white();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(280));

	// txt2
	this.instance_5 = new lib.txt2_mc();
	this.instance_5.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_5.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(156).to({alpha:1},10).wait(114));

	// bg2
	this.instance_6 = new lib.bg2_mc();
	this.instance_6.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_6.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({alpha:1},10).wait(126));

	// txt1
	this.instance_7 = new lib.txt1_mc();
	this.instance_7.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_7.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({alpha:1},10).wait(241));

	// wheel
	this.instance_8 = new lib.wheel_mc();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(280));

	// bg1
	this.instance_9 = new lib.bg1_mc();
	this.instance_9.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(280));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-150,124.5,450.3,151.60000000000002);
// library properties:
lib.properties = {
	id: '8BF4E9B88A504119892768187812A5E2',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bg1.jpg", id:"bg1"},
		{src:"bg2.jpg", id:"bg2"},
		{src:"cta.png", id:"cta"},
		{src:"cta_over.png", id:"cta_over"},
		{src:"disclaimer.png", id:"disclaimer"},
		{src:"nameplate_black.png", id:"nameplate_black"},
		{src:"nameplate_white.png", id:"nameplate_white"},
		{src:"statics.png", id:"statics"},
		{src:"txt1.png", id:"txt1"},
		{src:"txt2.png", id:"txt2"},
		{src:"txt3.png", id:"txt3"},
		{src:"wheel.png", id:"wheel"}
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
an.compositions['8BF4E9B88A504119892768187812A5E2'] = {
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