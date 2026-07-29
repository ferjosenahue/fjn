(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1039,833);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.nameplate = function() {
	this.initialize(img.nameplate);
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
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,300,250), null);


(lib.red_rectangle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap6C0IAAlnIT1AAIAAFngApmicIAAE8ITLgBIAAk9g");
	this.shape.setTransform(63.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_rectangle_mc, new cjs.Rectangle(0,-0.5,127,36), null);


(lib.text4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.text2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.star_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// white_star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGmK+I841DMAiyAACMAJrgi5IAIAJMgEUAngI5vAAIVZNIMgNwAkwIgTAYg");
	this.shape.setTransform(-142.7,-287.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// red_background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A53115").s().p("EhPrAz1MAAAhnpMCfXAAAIAAN5IgIgJMgH4AkcI/+gCIaETgMgI0Ah/g");
	this.shape_1.setTransform(-510,-331.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_mc, new cjs.Rectangle(-1020,-663.4,1020,663.5), null);


(lib.star_draw_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAICCIlkkGIG7ACICJmkIB1GEIhijZIhlE0Ik+AAIEIChIiqHKIgDACg");
	this.shape.setTransform(34.9,55.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_draw_mc, new cjs.Rectangle(0,0,69.8,110.1), null);


(lib.nameplate_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nameplate();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nameplate_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.logo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-260,-217,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_mc, new cjs.Rectangle(-260,-217,519.5,416.5), null);


(lib.cta_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aw+BvIAAjdMAh8AAAIAADdg");
	this.shape.setTransform(108.7,11.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.clicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cta_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{on:0,off:19});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// mc
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,x:139,y:114.5},9).to({scaleX:1,scaleY:1,x:150,y:125},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib._2018VPPBrandMRMRETNEOtherOtherMilitaryH5SUSENGv1300x250NA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{EndFrame:348});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		
		var root = this;
		loop = false
		
		this.cta_btn.addEventListener("click", clickCta.bind(this));
		this.cta_btn.addEventListener("rollover", rolloverCta.bind(this));
		this.cta_btn.addEventListener("rollout", rolloutCta.bind(this));
		
		function clickCta() {
			root.gotoAndStop("EndFrame")
			window.open(clickTag1, "_blank");
		}
		
		function rolloverCta() {
			root.cta_mc.gotoAndPlay("on");
		}
		function rolloutCta() {
			root.cta_mc.gotoAndPlay("off");
		}
		this.clicktag.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			root.gotoAndStop("EndFrame")
			window.open(clickTag, "_blank");
		}
	}
	this.frame_348 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(348).call(this.frame_348).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A53115").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(349));

	// cta_btn
	this.cta_btn = new lib.cta_btn();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.parent = this;
	this.cta_btn.setTransform(225,298.2,0.584,1.666,0,0,0,112.4,26.3);
	new cjs.ButtonHelper(this.cta_btn, 0, 1, 2, false, new lib.cta_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(299).to({regY:26.4,x:225.7,y:243.9},0).wait(50));

	// clickthru_btn
	this.clicktag = new lib.clicktag();
	this.clicktag.name = "clicktag";
	this.clicktag.parent = this;
	this.clicktag.setTransform(150,125,1,1,0,0,0,150,125);
	this.clicktag.alpha = 0.012;
	new cjs.ButtonHelper(this.clicktag, 0, 1, 2, false, new lib.clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag).wait(349));

	// Layer 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_339 = new cjs.Graphics().p("AV9X3IAAqYIAoAAIAAKYg");
	var mask_graphics_340 = new cjs.Graphics().p("AV9W7IAAqYIAoAAIAAKYg");
	var mask_graphics_341 = new cjs.Graphics().p("AV9V/IAAqYIAoAAIAAKYg");
	var mask_graphics_342 = new cjs.Graphics().p("AV9VDIAAqYIAoAAIAAKYg");
	var mask_graphics_343 = new cjs.Graphics().p("AV9UHIAAqYIAoAAIAAKYg");
	var mask_graphics_344 = new cjs.Graphics().p("AV9TLIAAqYIAoAAIAAKYg");
	var mask_graphics_345 = new cjs.Graphics().p("AV9SPIAAqYIAoAAIAAKYg");
	var mask_graphics_346 = new cjs.Graphics().p("AV9RTIAAqYIAoAAIAAKYg");
	var mask_graphics_347 = new cjs.Graphics().p("AV9QXIAAqYIAoAAIAAKYg");
	var mask_graphics_348 = new cjs.Graphics().p("AV9PbIAAqYIAoAAIAAKYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(339).to({graphics:mask_graphics_339,x:144.5,y:152.7}).wait(1).to({graphics:mask_graphics_340,x:144.5,y:146.7}).wait(1).to({graphics:mask_graphics_341,x:144.5,y:140.7}).wait(1).to({graphics:mask_graphics_342,x:144.5,y:134.7}).wait(1).to({graphics:mask_graphics_343,x:144.5,y:128.7}).wait(1).to({graphics:mask_graphics_344,x:144.5,y:122.7}).wait(1).to({graphics:mask_graphics_345,x:144.5,y:116.7}).wait(1).to({graphics:mask_graphics_346,x:144.5,y:110.7}).wait(1).to({graphics:mask_graphics_347,x:144.5,y:104.7}).wait(1).to({graphics:mask_graphics_348,x:144.5,y:98.7}).wait(1));

	// red_rectangle
	this.instance = new lib.red_rectangle_mc();
	this.instance.parent = this;
	this.instance.setTransform(223.5,219,1,1,0,0,0,63.5,18);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(339).to({_off:false},0).wait(10));

	// Layer 27 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_334 = new cjs.Graphics().p("AyRSmIAAgoMAkjAAAIAAAog");
	var mask_1_graphics_335 = new cjs.Graphics().p("AyRSmIAAgoMAkjAAAIAAAog");
	var mask_1_graphics_336 = new cjs.Graphics().p("Ax+SmIAAgoMAkjAAAIAAAog");
	var mask_1_graphics_337 = new cjs.Graphics().p("AuySmIAAgoMAkjAAAIAAAog");
	var mask_1_graphics_338 = new cjs.Graphics().p("ArlSmIAAgoMAkjAAAIAAAog");
	var mask_1_graphics_339 = new cjs.Graphics().p("AoZSmIAAgoMAkjAAAIAAAog");
	var mask_1_graphics_340 = new cjs.Graphics().p("AlMSmIAAgoMAkjAAAIAAAog");
	var mask_1_graphics_341 = new cjs.Graphics().p("AiASmIAAgoMAkjAAAIAAAog");
	var mask_1_graphics_342 = new cjs.Graphics().p("ABMSmIAAgoMAkkAAAIAAAog");
	var mask_1_graphics_343 = new cjs.Graphics().p("AEYSmIAAgoMAkkAAAIAAAog");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(334).to({graphics:mask_1_graphics_334,x:39,y:119}).wait(1).to({graphics:mask_1_graphics_335,x:79.9,y:119}).wait(1).to({graphics:mask_1_graphics_336,x:118.9,y:119}).wait(1).to({graphics:mask_1_graphics_337,x:139.3,y:119}).wait(1).to({graphics:mask_1_graphics_338,x:159.8,y:119}).wait(1).to({graphics:mask_1_graphics_339,x:180.2,y:119}).wait(1).to({graphics:mask_1_graphics_340,x:200.7,y:119}).wait(1).to({graphics:mask_1_graphics_341,x:221.1,y:119}).wait(1).to({graphics:mask_1_graphics_342,x:241.6,y:119}).wait(1).to({graphics:mask_1_graphics_343,x:262,y:119}).wait(6));

	// red_rectangle
	this.instance_1 = new lib.red_rectangle_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.5,219,1,1,0,0,0,63.5,18);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).wait(15));

	// Layer 26 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_330 = new cjs.Graphics().p("AMCPgIAAqYIAoAAIAAKYg");
	var mask_2_graphics_331 = new cjs.Graphics().p("AMCQbIAAqXIAoAAIAAKXg");
	var mask_2_graphics_332 = new cjs.Graphics().p("AMCRXIAAqYIAoAAIAAKYg");
	var mask_2_graphics_333 = new cjs.Graphics().p("AMCSSIAAqXIAoAAIAAKXg");
	var mask_2_graphics_334 = new cjs.Graphics().p("AMCTOIAAqYIAoAAIAAKYg");
	var mask_2_graphics_335 = new cjs.Graphics().p("AMCUJIAAqYIAoAAIAAKYg");
	var mask_2_graphics_336 = new cjs.Graphics().p("AMCVEIAAqXIAoAAIAAKXg");
	var mask_2_graphics_337 = new cjs.Graphics().p("AMCWAIAAqYIAoAAIAAKYg");
	var mask_2_graphics_338 = new cjs.Graphics().p("AMCW7IAAqXIAoAAIAAKXg");
	var mask_2_graphics_339 = new cjs.Graphics().p("AMCX3IAAqYIAoAAIAAKYg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(330).to({graphics:mask_2_graphics_330,x:81,y:99.2}).wait(1).to({graphics:mask_2_graphics_331,x:81,y:105.1}).wait(1).to({graphics:mask_2_graphics_332,x:81,y:111.1}).wait(1).to({graphics:mask_2_graphics_333,x:81,y:117}).wait(1).to({graphics:mask_2_graphics_334,x:81,y:123}).wait(1).to({graphics:mask_2_graphics_335,x:81,y:128.9}).wait(1).to({graphics:mask_2_graphics_336,x:81,y:134.8}).wait(1).to({graphics:mask_2_graphics_337,x:81,y:140.8}).wait(1).to({graphics:mask_2_graphics_338,x:81,y:146.7}).wait(1).to({graphics:mask_2_graphics_339,x:81,y:152.7}).wait(10));

	// red_rectangle
	this.instance_2 = new lib.red_rectangle_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(223.5,219,1,1,0,0,0,63.5,18);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(330).to({_off:false},0).wait(19));

	// Layer 25 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_326 = new cjs.Graphics().p("AEOP3IAAgoMAkkAAAIAAAog");
	var mask_3_graphics_327 = new cjs.Graphics().p("ABDP3IAAgoMAkkAAAIAAAog");
	var mask_3_graphics_328 = new cjs.Graphics().p("AiHP3IAAgoMAkjAAAIAAAog");
	var mask_3_graphics_329 = new cjs.Graphics().p("AlRP3IAAgoMAkjAAAIAAAog");
	var mask_3_graphics_330 = new cjs.Graphics().p("AocP3IAAgoMAkjAAAIAAAog");
	var mask_3_graphics_331 = new cjs.Graphics().p("ArnP3IAAgoMAkjAAAIAAAog");
	var mask_3_graphics_332 = new cjs.Graphics().p("AuyP3IAAgoMAkjAAAIAAAog");
	var mask_3_graphics_333 = new cjs.Graphics().p("Ax8P3IAAgoMAkjAAAIAAAog");
	var mask_3_graphics_334 = new cjs.Graphics().p("AyRP3IAAgoMAkjAAAIAAAog");
	var mask_3_graphics_335 = new cjs.Graphics().p("AyRP3IAAgoMAkjAAAIAAAog");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(326).to({graphics:mask_3_graphics_326,x:261,y:101.5}).wait(1).to({graphics:mask_3_graphics_327,x:240.7,y:101.5}).wait(1).to({graphics:mask_3_graphics_328,x:220.4,y:101.5}).wait(1).to({graphics:mask_3_graphics_329,x:200.2,y:101.5}).wait(1).to({graphics:mask_3_graphics_330,x:179.9,y:101.5}).wait(1).to({graphics:mask_3_graphics_331,x:159.6,y:101.5}).wait(1).to({graphics:mask_3_graphics_332,x:139.3,y:101.5}).wait(1).to({graphics:mask_3_graphics_333,x:119.1,y:101.5}).wait(1).to({graphics:mask_3_graphics_334,x:80.6,y:101.5}).wait(1).to({graphics:mask_3_graphics_335,x:40,y:101.5}).wait(14));

	// red_rectangle
	this.instance_3 = new lib.red_rectangle_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(223.5,219,1,1,0,0,0,63.5,18);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(326).to({_off:false},0).wait(23));

	// cta
	this.instance_4 = new lib.cta_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.cta_mc = new lib.cta_mc();
	this.cta_mc.name = "cta_mc";
	this.cta_mc.parent = this;
	this.cta_mc.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},299).to({state:[{t:this.cta_mc}]},9).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(299).to({_off:false},0).to({_off:true,alpha:1},9).wait(41));

	// nameplate
	this.instance_5 = new lib.nameplate_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(289).to({_off:false},0).to({alpha:1},9).wait(51));

	// logo
	this.instance_6 = new lib.logo_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(289).to({_off:false},0).to({alpha:1},9).wait(51));

	// text4
	this.instance_7 = new lib.text4_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(279).to({_off:false},0).to({alpha:1},9).wait(61));

	// text3
	this.instance_8 = new lib.text3_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(190).to({_off:false},0).to({alpha:1},9).wait(60).to({alpha:0},9).to({_off:true},1).wait(80));

	// text2
	this.instance_9 = new lib.text2_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(111).to({_off:false},0).to({alpha:1},9).wait(60).to({alpha:0},9).to({_off:true},1).wait(159));

	// text1
	this.instance_10 = new lib.text1_mc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({_off:false},0).to({alpha:1},9).wait(60).to({alpha:0},9).to({_off:true},1).wait(238));

	// Layer 14 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_27 = new cjs.Graphics().p("AKxmiIBhAYIinKnIibDRg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AKjlqIBhAYIinKnIibDRg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AKVkyIBhAYIinKnIibDRg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AKHj6IBhAYIinKnIibDRg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AJ5jCIBhAYIinKnIiaDRg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AJriKIBhAYIinKnIiaDRg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_4_graphics_27,x:78.6,y:49.4}).wait(1).to({graphics:mask_4_graphics_28,x:77.2,y:55}).wait(1).to({graphics:mask_4_graphics_29,x:75.8,y:60.6}).wait(1).to({graphics:mask_4_graphics_30,x:74.4,y:66.2}).wait(1).to({graphics:mask_4_graphics_31,x:73,y:71.8}).wait(1).to({graphics:mask_4_graphics_32,x:71.6,y:77.4}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

	// star_draw
	this.star_draw_mc = new lib.star_draw_mc();
	this.star_draw_mc.name = "star_draw_mc";
	this.star_draw_mc.parent = this;
	this.star_draw_mc.setTransform(125.9,81.1,1,1,0,0,0,34.9,55.1);
	this.star_draw_mc._off = true;

	var maskedShapeInstanceList = [this.star_draw_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.star_draw_mc).wait(27).to({_off:false},0).to({_off:true},6).wait(316));

	// Layer 15 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_22 = new cjs.Graphics().p("Aj7gGIhMjEIMuHTIiDBMg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AjSAVIhMjDIMuHTIiDBMg");
	var mask_5_graphics_24 = new cjs.Graphics().p("AipAxIhMjDIMuHTIiDBMg");
	var mask_5_graphics_25 = new cjs.Graphics().p("AiABNIhMjDIMuHTIiDBMg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AhXBpIhMjDIMuHTIiDBMg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AguCFIhMjDIMuHTIiDBMg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_5_graphics_22,x:48.7,y:34.1}).wait(1).to({graphics:mask_5_graphics_23,x:52.8,y:36.9}).wait(1).to({graphics:mask_5_graphics_24,x:56.9,y:39.7}).wait(1).to({graphics:mask_5_graphics_25,x:61,y:42.5}).wait(1).to({graphics:mask_5_graphics_26,x:65.1,y:45.3}).wait(1).to({graphics:mask_5_graphics_27,x:69.2,y:48.1}).wait(6).to({graphics:null,x:0,y:0}).wait(316));

	// star_draw
	this.star_draw_mc_1 = new lib.star_draw_mc();
	this.star_draw_mc_1.name = "star_draw_mc_1";
	this.star_draw_mc_1.parent = this;
	this.star_draw_mc_1.setTransform(125.9,81.1,1,1,0,0,0,34.9,55.1);
	this.star_draw_mc_1._off = true;

	var maskedShapeInstanceList = [this.star_draw_mc_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.star_draw_mc_1).wait(22).to({_off:false},0).to({_off:true},11).wait(316));

	// Layer 16 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_17 = new cjs.Graphics().p("AD8EdIOsgJIABBkIq8AHg");
	var mask_6_graphics_18 = new cjs.Graphics().p("ADIEdIOsgJIABBkIq8AHg");
	var mask_6_graphics_19 = new cjs.Graphics().p("ACUEdIOsgKIABBkIq8AIg");
	var mask_6_graphics_20 = new cjs.Graphics().p("ABgEeIOsgLIABBkIq8AIg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AAsEeIOsgLIABBkIq8AIg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AgHEeIOrgMIABBkIq8AJg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_6_graphics_17,x:119.3,y:38.3}).wait(1).to({graphics:mask_6_graphics_18,x:114.1,y:38.3}).wait(1).to({graphics:mask_6_graphics_19,x:108.9,y:38.3}).wait(1).to({graphics:mask_6_graphics_20,x:103.7,y:38.3}).wait(1).to({graphics:mask_6_graphics_21,x:98.5,y:38.3}).wait(1).to({graphics:mask_6_graphics_22,x:93.3,y:38.3}).wait(11).to({graphics:null,x:0,y:0}).wait(316));

	// star_draw
	this.star_draw_mc_2 = new lib.star_draw_mc();
	this.star_draw_mc_2.name = "star_draw_mc_2";
	this.star_draw_mc_2.parent = this;
	this.star_draw_mc_2.setTransform(125.9,81.1,1,1,0,0,0,34.9,55.1);
	this.star_draw_mc_2._off = true;

	var maskedShapeInstanceList = [this.star_draw_mc_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.star_draw_mc_2).wait(17).to({_off:false},0).to({_off:true},16).wait(316));

	// Layer 17 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_12 = new cjs.Graphics().p("AIYFJIDnqUICyhwIk1N3g");
	var mask_7_graphics_13 = new cjs.Graphics().p("AIJFJIDnqUICyhwIk1N3g");
	var mask_7_graphics_14 = new cjs.Graphics().p("AH6FJIDnqUICyhwIk1N3g");
	var mask_7_graphics_15 = new cjs.Graphics().p("AHrFJIDnqUICyhwIk1N3g");
	var mask_7_graphics_16 = new cjs.Graphics().p("AHcFJIDnqUICyhwIk1N3g");
	var mask_7_graphics_17 = new cjs.Graphics().p("AHNFJIDnqUICyhwIk1N3g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_7_graphics_12,x:94.5,y:-11.2}).wait(1).to({graphics:mask_7_graphics_13,x:93,y:-2.4}).wait(1).to({graphics:mask_7_graphics_14,x:91.5,y:6.4}).wait(1).to({graphics:mask_7_graphics_15,x:90,y:15.2}).wait(1).to({graphics:mask_7_graphics_16,x:88.5,y:24}).wait(1).to({graphics:mask_7_graphics_17,x:87,y:32.8}).wait(16).to({graphics:null,x:0,y:0}).wait(316));

	// star_draw
	this.star_draw_mc_3 = new lib.star_draw_mc();
	this.star_draw_mc_3.name = "star_draw_mc_3";
	this.star_draw_mc_3.parent = this;
	this.star_draw_mc_3.setTransform(125.9,81.1,1,1,0,0,0,34.9,55.1);
	this.star_draw_mc_3._off = true;

	var maskedShapeInstanceList = [this.star_draw_mc_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.star_draw_mc_3).wait(12).to({_off:false},0).to({_off:true},21).wait(316));

	// Layer 18 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_7 = new cjs.Graphics().p("AJvBfIgVkCIGvNCIhZAug");
	var mask_8_graphics_8 = new cjs.Graphics().p("AJhBBIgVkCIGvNCIhZAug");
	var mask_8_graphics_9 = new cjs.Graphics().p("AJTAjIgVkCIGvNCIhZAug");
	var mask_8_graphics_10 = new cjs.Graphics().p("AJFAFIgVkCIGvNCIhZAug");
	var mask_8_graphics_11 = new cjs.Graphics().p("AI3gYIgVkDIGvNCIhZAug");
	var mask_8_graphics_12 = new cjs.Graphics().p("AIpg2IgVkDIGvNCIhZAug");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_8_graphics_7,x:103.3,y:71.7}).wait(1).to({graphics:mask_8_graphics_8,x:101.9,y:68.7}).wait(1).to({graphics:mask_8_graphics_9,x:100.5,y:65.7}).wait(1).to({graphics:mask_8_graphics_10,x:99.1,y:62.7}).wait(1).to({graphics:mask_8_graphics_11,x:97.7,y:59.7}).wait(1).to({graphics:mask_8_graphics_12,x:96.3,y:56.7}).wait(21).to({graphics:null,x:0,y:0}).wait(316));

	// star_draw
	this.star_draw_mc_4 = new lib.star_draw_mc();
	this.star_draw_mc_4.name = "star_draw_mc_4";
	this.star_draw_mc_4.parent = this;
	this.star_draw_mc_4.setTransform(125.9,81.1,1,1,0,0,0,34.9,55.1);
	this.star_draw_mc_4._off = true;

	var maskedShapeInstanceList = [this.star_draw_mc_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.star_draw_mc_4).wait(7).to({_off:false},0).to({_off:true},26).wait(316));

	// star_draw
	this.star_draw_mc_5 = new lib.star_draw_mc();
	this.star_draw_mc_5.name = "star_draw_mc_5";
	this.star_draw_mc_5.parent = this;
	this.star_draw_mc_5.setTransform(125.9,81.1,1,1,0,0,0,34.9,55.1);
	this.star_draw_mc_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star_draw_mc_5).wait(33).to({_off:false},0).wait(226).to({alpha:0},9).to({_off:true},1).wait(80));

	// star_background_mc
	this.instance_11 = new lib.star_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(428.7,248,0.434,0.434,0,0,0,-0.8,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(269).to({x:-1.3},9).to({_off:true},1).wait(70));

	// background
	this.instance_12 = new lib.bg_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(203,113);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(269).to({_off:false},0).to({regX:0.1,regY:0.2,scaleX:0.69,scaleY:0.69,x:148.1,y:112.2},39).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(136.1,86.9,442.9,329.5);
// library properties:
lib.properties = {
	id: '983129C4D924436A9BAA5D38D08015B8',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./bg.jpg", id:"bg"},
		{src:"./cta.png", id:"cta"},
		{src:"./logo.png", id:"logo"},
		{src:"./nameplate.png", id:"nameplate"},
		{src:"./text1.png", id:"text1"},
		{src:"./text2.png", id:"text2"},
		{src:"./text3.png", id:"text3"},
		{src:"./text4.png", id:"text4"}
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
an.compositions['983129C4D924436A9BAA5D38D08015B8'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;