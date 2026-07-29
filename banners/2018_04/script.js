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


(lib.fr1_txt_a = function() {
	this.initialize(img.fr1_txt_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr1_txt_b = function() {
	this.initialize(img.fr1_txt_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr1_txt_c = function() {
	this.initialize(img.fr1_txt_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr2_txt_a = function() {
	this.initialize(img.fr2_txt_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr2_txt_b = function() {
	this.initialize(img.fr2_txt_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr2_txt_c = function() {
	this.initialize(img.fr2_txt_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr3_txt_a = function() {
	this.initialize(img.fr3_txt_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr3_txt_b = function() {
	this.initialize(img.fr3_txt_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr4_txt = function() {
	this.initialize(img.fr4_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr5_txt = function() {
	this.initialize(img.fr5_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.fr6_txt = function() {
	this.initialize(img.fr6_txt);
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


(lib.txt10_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fr5_txt();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt10_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.txt9_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fr4_txt();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt9_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.txt8_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fr3_txt_b();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt8_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.txt7_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fr3_txt_a();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt7_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.txt6_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fr2_txt_c();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt6_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.txt5_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fr2_txt_b();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt5_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.txt4_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fr2_txt_a();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt4_mc, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance = new lib.fr1_txt_c();
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
	this.instance = new lib.fr1_txt_b();
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
	this.instance = new lib.fr1_txt_a();
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
	this.instance = new lib.fr6_txt();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.statics_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_over_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cta_over();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_over_mc, new cjs.Rectangle(0,0,300,250), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5BF17").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1_mc, new cjs.Rectangle(0,0,300,250), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5BF17").s().p("AnGB9IAAj5IONAAIAAD5g");
	this.shape.setTransform(45.5,12.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,25);


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


(lib.cta_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {out:0,over:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// cta_over
	this.instance = new lib.cta_over_mc();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

	// cta_bg
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib._2018ChevroletBrandCWLSNoneTPSCMOParentsH5SUSENGv1300x250NA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {endFrame:225};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,225];
	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		
		var root = this;
		
		this.clickthrough.addEventListener("click", clickThrough.bind(this));
		
		this.cta_btn.addEventListener("click", clickCta.bind(this));
		this.cta_btn.addEventListener("rollover", rolloverCta.bind(this));
		this.cta_btn.addEventListener("rollout", rolloutCta.bind(this));
		
		function clickThrough(e) {
			if(e.nativeEvent.button==0){	
				endFrame()	
				window.open(window.clickTag, "_blank");
			}
		}
		function clickCta(e) {
			if(e.nativeEvent.button==0){	
				endFrame()	
				window.open(window.clickTag1, "_blank");
			}
		}
		
		function rolloverCta(e) {
			root.cta_mc.gotoAndStop("over");	
		}
		function rolloutCta(e) {
			root.cta_mc.gotoAndStop("out");
		}
		function endFrame(){	
			root.gotoAndStop("endFrame");
		}
	}
	this.frame_225 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(225).call(this.frame_225).wait(1));

	// cta_btn
	this.cta_btn = new lib.cta_btn();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.setTransform(-117.5,179.55,1,1,0,0,0,45.5,12.5);
	new cjs.ButtonHelper(this.cta_btn, 0, 1, 2, false, new lib.cta_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(216).to({x:62.5},0).wait(10));

	// clickthru_btn
	this.clickthrough = new lib.clicktag();
	this.clickthrough.name = "clickthrough";
	this.clickthrough.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(226));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#505D61").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(226));

	// cta
	this.cta_mc = new lib.cta_mc();
	this.cta_mc.name = "cta_mc";
	this.cta_mc.setTransform(150,125,1,1,0,0,0,150,125);
	this.cta_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(216).to({alpha:1},9,cjs.Ease.get(-1)).wait(1));

	// statics
	this.instance = new lib.statics_mc();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(216).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(-1)).wait(1));

	// txt10
	this.instance_1 = new lib.txt10_mc();
	this.instance_1.setTransform(150,125,1.5,1.5,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9).wait(41));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_127 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_170 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_171 = new cjs.Graphics().p("A2fTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_172 = new cjs.Graphics().p("AzrTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_173 = new cjs.Graphics().p("Au/TiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_174 = new cjs.Graphics().p("AobTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_175 = new cjs.Graphics().p("AAATiMAAAgnDMAu4AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(127).to({graphics:mask_graphics_127,x:150,y:125}).wait(43).to({graphics:mask_graphics_170,x:150,y:125}).wait(1).to({graphics:mask_graphics_171,x:156,y:125}).wait(1).to({graphics:mask_graphics_172,x:174,y:125}).wait(1).to({graphics:mask_graphics_173,x:204,y:125}).wait(1).to({graphics:mask_graphics_174,x:246,y:125}).wait(1).to({graphics:mask_graphics_175,x:300,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(50));

	// txt9
	this.instance_2 = new lib.txt9_mc();
	this.instance_2.setTransform(-150,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({x:150},6,cjs.Ease.get(-1)).wait(19).to({_off:true},1).wait(50));

	// txt8
	this.instance_3 = new lib.txt8_mc();
	this.instance_3.setTransform(450,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(127).to({_off:false},0).to({x:150},6,cjs.Ease.get(-1)).wait(42).to({_off:true},1).wait(50));

	// txt7
	this.instance_4 = new lib.txt7_mc();
	this.instance_4.setTransform(-150,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(127).to({_off:false},0).to({x:150},6,cjs.Ease.get(-1)).wait(17).to({x:450},6,cjs.Ease.get(-1)).to({_off:true},1).wait(69));

	// background 2
	this.instance_5 = new lib.bg2_mc();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(127).to({_off:false},0).wait(99));

	// txt6
	this.instance_6 = new lib.txt6_mc();
	this.instance_6.setTransform(150,125,1.5,1.5,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(87).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).to({_off:true},32).wait(98));

	// txt5
	this.instance_7 = new lib.txt5_mc();
	this.instance_7.setTransform(150,125,1.5,1.5,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(78).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).to({_off:true},41).wait(98));

	// txt4
	this.instance_8 = new lib.txt4_mc();
	this.instance_8.setTransform(150,125,1.5,1.5,0,0,0,150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).to({_off:true},50).wait(98));

	// txt3
	this.instance_9 = new lib.txt3_mc();
	this.instance_9.setTransform(150,125,1.5,1.5,0,0,0,150,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(32).to({x:-150},10,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// txt2
	this.instance_10 = new lib.txt2_mc();
	this.instance_10.setTransform(150,125,1.5,1.5,0,0,0,150,125);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(41).to({x:-150},10,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// txt1
	this.instance_11 = new lib.txt1_mc();
	this.instance_11.setTransform(150,125,1.5,1.5,0,0,0,150,125);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(50).to({x:-150},10,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// background
	this.instance_12 = new lib.bg1_mc();
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(226));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-150,62.5,750,250);
// library properties:
lib.properties = {
	id: 'AC19789E2B1640178DA98E5B69F72E1E',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./bg2.jpg", id:"bg2"},
		{src:"./cta.png", id:"cta"},
		{src:"./cta_over.png", id:"cta_over"},
		{src:"./fr1_txt_a.png", id:"fr1_txt_a"},
		{src:"./fr1_txt_b.png", id:"fr1_txt_b"},
		{src:"./fr1_txt_c.png", id:"fr1_txt_c"},
		{src:"./fr2_txt_a.png", id:"fr2_txt_a"},
		{src:"./fr2_txt_b.png", id:"fr2_txt_b"},
		{src:"./fr2_txt_c.png", id:"fr2_txt_c"},
		{src:"./fr3_txt_a.png", id:"fr3_txt_a"},
		{src:"./fr3_txt_b.png", id:"fr3_txt_b"},
		{src:"./fr4_txt.png", id:"fr4_txt"},
		{src:"./fr5_txt.png", id:"fr5_txt"},
		{src:"./fr6_txt.png", id:"fr6_txt"}
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
an.compositions['AC19789E2B1640178DA98E5B69F72E1E'] = {
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