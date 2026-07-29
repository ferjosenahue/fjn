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



(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,409);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.nameplate = function() {
	this.initialize(img.nameplate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib._static = function() {
	this.initialize(img._static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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

	// Layer_1
	this.instance = new lib.text3();

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

	// Layer_1
	this.instance = new lib.text2();

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

	// Layer_1
	this.instance = new lib.text1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.static_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._static();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.static_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.over_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D3A438").s().p("AnLB4IAAjvIOXAAIAADvg");
	this.shape.setTransform(46,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.over_mc, new cjs.Rectangle(0,0,92,24), null);


(lib.nameplate_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nameplate();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nameplate_1, new cjs.Rectangle(0,0,600,500), null);


(lib.img2_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.img2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img2_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.img1_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.img1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img1_mc, new cjs.Rectangle(0,0,421,409), null);


(lib.cta_text_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAJAvIgQghIgEAFIAAAcIgRAAIAAhdIARAAIAAAuIASgTIAVAAIgXAWIAYAsg");
	this.shape.setTransform(62.8,10.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAfQgGgFgDgHQgCgGAAgHIAAgLQAAgHACgFQADgIAGgEQAHgFAIAAQAJAAAHAFQAGAEADAIQACAFAAAHIAAALQAAAHgCAGQgDAHgGAFQgHAEgJAAQgIAAgHgEgAgIgLIgBAHIAAAJIABAIQACAGAGAAQAHAAACgGIABgIIAAgJIgBgHQgCgHgHAAQgGAAgCAHg");
	this.shape_1.setTransform(55.725,11.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAfQgGgFgDgHQgCgGAAgHIAAgLQAAgHACgFQADgIAGgEQAHgFAIAAQAJAAAHAFQAGAEADAIQACAFAAAHIAAALQAAAHgCAGQgDAHgGAFQgHAEgJAAQgIAAgHgEgAgIgLIgBAHIAAAJIABAIQACAGAGAAQAHAAACgGIABgIIAAgJIgBgHQgCgHgHAAQgGAAgCAHg");
	this.shape_2.setTransform(49.025,11.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAtIAAhZIASAAIAABIIAkAAIAAARg");
	this.shape_3.setTransform(42.8,10.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAdQgHgGAAgKQAAgIAEgFQAEgEAGgCQAFgBAHAAIAKAAIAAgCQAAgLgJAAQgHAAgBAHIgRAAQACgKAHgFQAHgGAKAAQASAAAFAPQACAEAAAIIAAApIgLAAIgCgLQgGAMgMAAQgJAAgGgGgAgEAFQgFACAAAFQAAAJAJAAQADAAAEgEQADgEAAgGIAAgDIgJAAIgFABg");
	this.shape_4.setTransform(33.025,11.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAfQgGgFgDgHQgCgGAAgHIAAgLQAAgHACgFQADgIAGgEQAHgFAIAAQAJAAAHAFQAGAEADAIQACAFAAAHIAAAKIgkAAIAAABIABAIQACAGAGAAQAHAAACgHIARAAIgBAGQgDAHgGAFQgHAEgJAAQgIAAgHgEgAAKgHIgBgGQgCgHgHAAQgGAAgCAHIgBAGIATAAIAAAAg");
	this.shape_5.setTransform(23.825,11.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJAvIgQghIgEAFIAAAcIgRAAIAAhdIARAAIAAAuIASgTIAVAAIgXAWIAYAsg");
	this.shape_6.setTransform(17.95,10.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAdQgHgGAAgKQAAgIAEgFQAEgEAGgCQAFgBAHAAIAKAAIAAgCQAAgLgJAAQgHAAgBAHIgRAAQACgKAHgFQAHgGAKAAQASAAAFAPQACAEAAAIIAAApIgLAAIgCgLQgGAMgMAAQgJAAgGgGgAgEAFQgFACAAAFQAAAJAJAAQADAAAEgEQADgEAAgGIAAgDIgJAAIgFABg");
	this.shape_7.setTransform(10.725,11.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAtIAAhIIgXAAIAAgRIA/AAIAAARIgYAAIAABIg");
	this.shape_8.setTransform(5.4,10.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_text_mc, new cjs.Rectangle(0,0,68,21.1), null);


(lib.cta_bg_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {intro:1,endframe:24};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_24 = function() {
		this.stop()
		console.log(ctaEnabled)
		ctaEnabled=true
		console.log(ctaEnabled)
		this.parent.cta_text_mc.gotoAndPlay("intro")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// mask_fill (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_15 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_16 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_17 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_18 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_19 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_20 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_21 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_22 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_23 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");
	var mask_graphics_24 = new cjs.Graphics().p("AqcCbIAAk1IU5AAIlFE1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:-66.875,y:11.65}).wait(1).to({graphics:mask_graphics_15,x:-54.3749,y:11.65}).wait(1).to({graphics:mask_graphics_16,x:-41.8748,y:11.65}).wait(1).to({graphics:mask_graphics_17,x:-29.3747,y:11.65}).wait(1).to({graphics:mask_graphics_18,x:-16.875,y:11.65}).wait(1).to({graphics:mask_graphics_19,x:-4.3754,y:11.65}).wait(1).to({graphics:mask_graphics_20,x:8.1247,y:11.65}).wait(1).to({graphics:mask_graphics_21,x:20.6248,y:11.65}).wait(1).to({graphics:mask_graphics_22,x:33.1249,y:11.65}).wait(1).to({graphics:mask_graphics_23,x:45.6251,y:11.65}).wait(1).to({graphics:mask_graphics_24,x:58.1251,y:11.65}).wait(1));

	// cta_fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B923").s().p("AnLB4IAAjvIOXAAIAADvg");
	this.shape.setTransform(46,12);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:false},0).wait(11));

	// mask_border (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AvhCbIAAk1IfDAAIudE1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-98.375,y:11.65}).wait(1).to({graphics:mask_1_graphics_1,x:-85.1607,y:11.65}).wait(1).to({graphics:mask_1_graphics_2,x:-71.9465,y:11.65}).wait(1).to({graphics:mask_1_graphics_3,x:-58.7322,y:11.65}).wait(1).to({graphics:mask_1_graphics_4,x:-45.518,y:11.65}).wait(1).to({graphics:mask_1_graphics_5,x:-32.3037,y:11.65}).wait(1).to({graphics:mask_1_graphics_6,x:-19.0895,y:11.65}).wait(1).to({graphics:mask_1_graphics_7,x:-5.8748,y:11.65}).wait(1).to({graphics:mask_1_graphics_8,x:7.339,y:11.65}).wait(1).to({graphics:mask_1_graphics_9,x:20.5537,y:11.65}).wait(1).to({graphics:mask_1_graphics_10,x:33.7675,y:11.65}).wait(1).to({graphics:mask_1_graphics_11,x:46.9822,y:11.65}).wait(1).to({graphics:mask_1_graphics_12,x:60.1965,y:11.65}).wait(1).to({graphics:mask_1_graphics_13,x:73.4107,y:11.65}).wait(1).to({graphics:mask_1_graphics_14,x:86.625,y:11.65}).wait(11));

	// cta_border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F1B923").ss(1,1,1).p("AnLh3IOXAAIAADvIuXAAg");
	this.shape_1.setTransform(46,12);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,94,26);


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


(lib.black_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"intro":1,"endframe":13};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// cta_text
	this.instance = new lib.cta_text_mc();
	this.instance.setTransform(34,9.7,1,1,0,0,0,34,9.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,21.1);


(lib.cta_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {over:1,out:10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// cta_text
	this.cta_text_mc = new lib.cta_text();
	this.cta_text_mc.name = "cta_text_mc";
	this.cta_text_mc.setTransform(250,233.7,1,1,0,0,0,34,9.7);

	this.timeline.addTween(cjs.Tween.get(this.cta_text_mc).wait(19));

	// cta_over
	this.instance = new lib.over_mc();
	this.instance.setTransform(250,234,1,1,0,0,0,46,12);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},9).wait(1));

	// cta_bg
	this.cta_bg = new lib.cta_bg_mc();
	this.cta_bg.name = "cta_bg";
	this.cta_bg.setTransform(250,234,1,1,0,0,0,46,12);

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,217.7,290.7,32);


// stage content:
(lib._2018_Chevrolet_Equinox_CW_Brand_Standard_Canada_EN_awd_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {endFrame:227};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,214,227];
	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		
		var root = this;
		ctaEnabled = false;
		
		this.clickthrough.addEventListener("click", clickCta.bind(this));
		this.clickthrough.addEventListener("rollover", rolloverCta.bind(this));
		this.clickthrough.addEventListener("rollout", rolloutCta.bind(this));
		
		function clickCta(e) {
			if(e.nativeEvent.button==0){	
				endFrame()	
				window.open(window.clickTag, "_blank");
			}
		}
		
		function rolloverCta() {
			if(ctaEnabled){		
				root.cta_mc.gotoAndPlay("over");
			}
		}
		function rolloutCta() {
			if(ctaEnabled){		
				root.cta_mc.gotoAndPlay("out");
			}
		}
		function endFrame(){
			ctaEnabled = true;
			root.cta_mc.cta_bg.gotoAndStop("endframe")
			root.cta_mc.cta_text_mc.gotoAndStop("endframe")
			root.gotoAndStop("endFrame");
		}
	}
	this.frame_214 = function() {
		this.cta_mc.cta_bg.gotoAndPlay("intro")
	}
	this.frame_227 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(214).call(this.frame_214).wait(13).call(this.frame_227).wait(1));

	// clickthru_btn
	this.clickthrough = new lib.clicktag();
	this.clickthrough.name = "clickthrough";
	this.clickthrough.setTransform(150,125,1,1,0,0,0,150,125);
	this.clickthrough.alpha = 0.0117;
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(228));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#474B51").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(228));

	// static
	this.instance = new lib.static_mc();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(228));

	// nameplate
	this.instance_1 = new lib.nameplate_1();
	this.instance_1.setTransform(6.5,43.95,1,1,0,0,0,13,87.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:1},10).wait(15).to({regY:87.8,scaleX:0.5,scaleY:0.5,x:6.45,y:43.9},10).wait(179));

	// cta
	this.cta_mc = new lib.cta_mc();
	this.cta_mc.name = "cta_mc";
	this.cta_mc.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(228));

	// text3
	this.instance_2 = new lib.text3_mc();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).to({alpha:1},10).wait(15));

	// img2
	this.instance_3 = new lib.img2_mc();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(181).to({_off:false},0).to({alpha:1},10).wait(37));

	// bg_mc
	this.instance_4 = new lib.black_mc();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(170).to({_off:false},0).to({alpha:1},10).wait(48));

	// text2
	this.instance_5 = new lib.text2_mc();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115).to({_off:false},0).to({alpha:1},10).to({_off:true},56).wait(47));

	// text1
	this.instance_6 = new lib.text1_mc();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({alpha:1},10).wait(45).to({alpha:0},10).to({_off:true},1).wait(113));

	// img1
	this.instance_7 = new lib.img1_mc();
	this.instance_7.setTransform(150,145.8,0.7126,0.7126,0,0,0,210.5,204.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,x:209.5,y:136.6},180).to({_off:true},1).wait(47));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(143.5,57,450,399.1);
// library properties:
lib.properties = {
	id: '1BDCC31D9EFF4A0D820FB90C8B623282',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./img1.jpg", id:"img1"},
		{src:"./img2.jpg", id:"img2"},
		{src:"./nameplate.png", id:"nameplate"},
		{src:"./_static.png", id:"_static"},
		{src:"./text1.png", id:"text1"},
		{src:"./text2.png", id:"text2"},
		{src:"./text3.png", id:"text3"}
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
an.compositions['1BDCC31D9EFF4A0D820FB90C8B623282'] = {
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