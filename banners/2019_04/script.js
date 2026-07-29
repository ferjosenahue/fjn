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



(lib.bk = function() {
	this.initialize(img.bk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,136);


(lib.handcard1 = function() {
	this.initialize(img.handcard1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,544,389);


(lib.handcard2 = function() {
	this.initialize(img.handcard2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,403);


(lib.r1 = function() {
	this.initialize(img.r1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


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


(lib.top = function() {
	this.initialize(img.top);
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


(lib.hotspot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#637D53").s().p("Egu3ADSIAAmjMBdvAAAIAAGjg");
	this.shape.setTransform(300,21);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,42);


(lib.gleem = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.537)","rgba(255,255,255,0.776)","rgba(255,255,255,0)"],[0,0.412,0.584,1],-28.9,-7.8,30.7,9.9).s().p("ApNI6IAAxzISbAAIAARzg");
	this.shape.setTransform(58.975,112.9981,1,1.9824);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gleem, new cjs.Rectangle(0,0,118,226), null);


(lib.topbar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.topbar, new cjs.Rectangle(0,0,600,500), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text4_mc, new cjs.Rectangle(0,0,600,500), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text3_mc, new cjs.Rectangle(0,0,600,500), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2_mc, new cjs.Rectangle(0,0,600,500), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1_mc, new cjs.Rectangle(0,0,600,500), null);


(lib.secondCardHand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.instance = new lib.handcard2();
	this.instance.setTransform(67,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.secondCardHand, new cjs.Rectangle(67,-117,366,403), null);


(lib.learnMore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1CBBA").s().p("AhIAHIACgHIgnhpIBTApICHBBIjaBpg");
	this.shape.setTransform(256.95,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBwIAAhYIhWiHIA6AAIA0BaIA2haIA5AAIhXCGIAABZg");
	this.shape_1.setTransform(227.125,25.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABDBxIgUgyIheAAIgUAyIgzAAIBgjhIAtAAIBgDhgAAdATIgdhIIgdBIIA6AAg");
	this.shape_2.setTransform(203.075,25.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhmBwIAAjfIBXAAQAiAAAbAPQAbAOAPAaQAPAZAAAfIAAAAQAAAggPAZQgPAZgbAPQgbAPgiAAgAg1BEIAmAAQATAAAPgJQAQgIAIgQQAIgOAAgVIAAAAQAAgTgIgPQgIgPgQgJQgPgIgTAAIgmAAg");
	this.shape_3.setTransform(178.575,25.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9BkQgagPgQgaQgPgaAAghIAAAAQAAgfAPgaQAQgaAagQQAcgPAhgBQAjABAbAPQAaAPAPAaQAQAaAAAgIAAAAQAAAggQAbQgPAagaAPQgcAQgiAAQgiAAgbgQgAgjg8QgOAKgJAPQgJAQAAATIAAAAQAAATAJAQQAJAQAPAKQAPAJATAAQAUAAAPgJQAPgJAJgQQAJgQgBgUIAAAAQAAgSgJgRQgIgPgPgKQgQgKgTAAQgUAAgPAKg");
	this.shape_4.setTransform(152.05,25.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYBwIAAixIhEAAIAAguIC5AAIAAAuIhEAAIAACxg");
	this.shape_5.setTransform(128.175,25.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYBwIAAhYIhWiHIA6AAIA0BaIA2haIA5AAIhXCGIAABZg");
	this.shape_6.setTransform(96.975,25.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhQBwIAAjfIAyAAIAACyIBuAAIAAAtg");
	this.shape_7.setTransform(76.55,25.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhYBwIAAjfIBbAAQAbAAATAKQATAJAKASQAKASAAAWIAAABQAAAagMAQQgMASgUAJQgVAJgYAAIglAAIAABDgAgmABIAmAAQASgBAKgIQALgKAAgOIAAAAQAAgRgLgJQgKgIgTAAIglAAg");
	this.shape_8.setTransform(56.05,25.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhXBwIAAjfIBaAAQAaAAAUAKQATAJAKASQALASgBAWIAAABQAAAagMAQQgMASgUAJQgVAJgYAAIgmAAIAABDgAgnABIAnAAQASgBALgIQAKgKAAgOIAAAAQAAgRgLgJQgLgIgSAAIgmAAg");
	this.shape_9.setTransform(34.75,25.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABDBxIgUgyIheAAIgUAyIgzAAIBgjhIAtAAIBgDhgAAdATIgdhIIgdBIIA6AAg");
	this.shape_10.setTransform(10.625,25.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.learnMore, new cjs.Rectangle(-4,4,271.9,42.4), null);


(lib.hand1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.handcard1();
	this.instance.setTransform(-140,-132,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand1, new cjs.Rectangle(-140,-132,272,194.5), null);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clicktag, new cjs.Rectangle(0,0,300,250), null);


(lib.weels = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.r1();
	this.instance.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.weels, new cjs.Rectangle(0,0.6,34,34), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bk();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance = new lib.weels();
	this.instance.setTransform(0,-0.45,1.008,0.9943,0,-16.7778,-16.268,17.1,17.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336699").s().p("AgqBYQgTgkAAg0QAAg0ATglQASgjAYAAQAaAAASAjQASAlAAA0QAAA0gSAkQgSAlgaAAQgYAAgSglg");
	this.shape.setTransform(-0.25,-0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-21,42.7,42);


(lib.cta_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {over:1,out:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// hotspot
	this.hotspot = new lib.hotspot();
	this.hotspot.name = "hotspot";
	this.hotspot.setTransform(300.6,0.35,1,1.0479,0,0,0,300.6,0.3);
	new cjs.ButtonHelper(this.hotspot, 0, 1, 2, false, new lib.hotspot(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hotspot).wait(14));

	// learnMore
	this.learnMore = new lib.learnMore();
	this.learnMore.name = "learnMore";
	this.learnMore.setTransform(299.75,20.9,0.62,0.62,0,0,0,135.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.learnMore).to({regX:135.4,regY:19.4,scaleX:0.66,scaleY:0.66,x:299.35,y:20.8},7).to({regX:135.1,regY:19.2,scaleX:0.62,scaleY:0.62,x:299.75,y:20.9},6).wait(1));

	// rule
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#929192").ss(2,2,0,3).p("Egu3AAAMBdvAAA");
	this.shape.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14));

	// green
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#567F57").s().p("Egu3ADaIAAmzMBdvAAAIAAGzg");
	this.shape_1.setTransform(300,21.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,602,45.1);


(lib.hand2_inside = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {gleem:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		console.log("ended "+ended)
	}
	this.frame_1 = function() {
		ended = false
	}
	this.frame_14 = function() {
		ended=true
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADZI2QhDAAAAhBIAAvpQAAhBBDAAIJIAAQBCAAABBBIAALsIgFgCQgPgIgWgGIgOgIQg6gZg8gFIgVgBIgMAAQgbAAgOADQgIACgHAEIgFAAQgagDgVAOQgWAOgGAaQgGAeAaAqQAVAmAZAQIAMAGIAEAEQASAQAfAOIA2AWIAeAQIAgAOQAjAQAxAJIALACIABAAIAAADQgBBBhCAAg");
	mask.setTransform(86.7888,56.6111);

	// gleem
	this.instance = new lib.gleem();
	this.instance.setTransform(17.15,-63.3,1.5763,1.5763,0,0,0,102.3,57);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:102.2,scaleX:1.6879,scaleY:1.6879,x:432.15,y:-68.2,alpha:0.4883},14).wait(1));

	// Layer 2
	this.instance_1 = new lib.secondCardHand();
	this.instance_1.setTransform(103.95,29.05,0.5,0.5,0,0,0,91.9,-57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91.5,-0.5,183,201.5);


(lib.hand2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"over":1,"out":9};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(8).call(this.frame_14).wait(1));

	// Layer 1
	this.hand_final = new lib.hand2_inside();
	this.hand_final.name = "hand_final";
	this.hand_final.setTransform(441.9,-54,1,1,0,0,0,95.9,91);

	this.timeline.addTween(cjs.Tween.get(this.hand_final).to({regX:95.8,regY:91.1,scaleX:1.04,scaleY:1.0399,x:438.65,y:-52.25},4).wait(5).to({regY:91.2,scaleY:1.04,y:-52.15},0).to({scaleX:1,scaleY:1,x:441.8,y:-53.8},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(189.1,-306.2,435.4,370.5);


(lib.car_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {wheels:0,endcar:19,wheels2:190,endcar2:223};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_223 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(170).call(this.frame_189).wait(34).call(this.frame_223).wait(4));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgqBYQgTgkAAg0QAAg0ATglQASgjAYAAQAaAAASAjQASAlAAA0QAAA0gSAkQgSAlgaAAQgYAAgSglg");
	var mask_graphics_189 = new cjs.Graphics().p("AgqBYQgTgkAAg0QAAg0ATglQASgjAYAAQAaAAASAjQASAlAAA0QAAA0gSAkQgSAlgaAAQgYAAgSglg");
	var mask_graphics_223 = new cjs.Graphics().p("AgqBYQgTgkAAg0QAAg0ATglQASgjAYAAQAaAAASAjQASAlAAA0QAAA0gSAkQgSAlgaAAQgYAAgSglg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:120.55,y:29.875}).wait(189).to({graphics:mask_graphics_189,x:120.55,y:29.875}).wait(34).to({graphics:mask_graphics_223,x:120.55,y:29.875}).wait(4));

	// rueda_izq copy
	this.instance = new lib.weels();
	this.instance.setTransform(120.3,30.35,1.008,0.9943,0,-16.7778,-16.268,17.1,17.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336699").s().p("AgqBYQgSgkAAg0QAAg0ASglQARgjAZAAQAaAAASAjQARAlAAA0QAAA0gRAkQgSAlgaAAQgZAAgRglg");
	this.shape.setTransform(120.05,30.375);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(120.3,30.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.shape,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{regY:17.2,scaleX:1.008,scaleY:0.9943,skewX:-16.7778,skewY:-16.268,y:30.35,alpha:1}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance,p:{regY:17.1,scaleX:1.0103,scaleY:0.9939,skewX:0,skewY:0,y:30.4,alpha:0}}]},4).to({state:[{t:this.shape},{t:this.instance,p:{regY:17.2,scaleX:1.008,scaleY:0.9943,skewX:-16.7778,skewY:-16.268,y:30.35,alpha:1}}]},170).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},28).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1.0074,scaleY:0.9947,rotation:-279.8166,x:120.1,y:30.5},14).to({_off:true,regX:17.1,regY:17.1,scaleX:1.0103,scaleY:0.9939,rotation:-360,x:120.3,y:30.4,alpha:0,mode:"independent"},4).wait(171).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,y:30.8,alpha:1,mode:"synched",startPosition:0},0).to({rotation:-434.9998,y:30.75},28).to({alpha:0},4).wait(1).to({startPosition:0},0).wait(4));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Ag1BfQgWgnAAg4QAAg4AWgnQAXgoAeAAQAfAAAXAoQAWAnAAA4QAAA4gWAnQgXApgfAAQgeAAgXgpg");
	var mask_1_graphics_189 = new cjs.Graphics().p("Ag1BfQgWgnAAg4QAAg4AWgnQAXgoAeAAQAfAAAXAoQAWAnAAA4QAAA4gWAnQgXApgfAAQgeAAgXgpg");
	var mask_1_graphics_223 = new cjs.Graphics().p("Ag1BfQgWgnAAg4QAAg4AWgnQAXgoAeAAQAfAAAXAoQAWAnAAA4QAAA4gWAnQgXApgfAAQgeAAgXgpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:48.05,y:30.35}).wait(189).to({graphics:mask_1_graphics_189,x:48.05,y:30.35}).wait(34).to({graphics:mask_1_graphics_223,x:48.05,y:30.35}).wait(4));

	// rueda_izq
	this.instance_2 = new lib.weels();
	this.instance_2.setTransform(45.4,31.95,1.1203,1.1741,0,0,0,17.2,17.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:16.8,scaleX:1.1739,scaleY:1.1202,skewX:90.562,skewY:90.5116},0).to({scaleX:1.1217,scaleY:1.17,rotation:-337.722,skewX:0,skewY:0,x:45.45,y:32},14).wait(1).to({regX:17,regY:17.6,scaleX:1.1211,scaleY:1.1718,rotation:-347.4686,x:45,y:32.9,alpha:0.5625},0).wait(1).to({scaleX:1.1207,scaleY:1.1731,rotation:-354.4305,x:45.05,alpha:0.25},0).wait(1).to({scaleX:1.1205,scaleY:1.1739,rotation:-358.6076,x:45.1,alpha:0.0625},0).wait(1).to({regX:17.2,regY:17.2,scaleX:1.1203,scaleY:1.1741,rotation:-360,x:45.4,y:31.95,alpha:0},0).wait(170).to({alpha:1},0).wait(1).to({regY:16.8,scaleX:1.1739,scaleY:1.1202,skewX:90.562,skewY:90.5116},0).to({regY:16.9,skewX:-22.9857,skewY:-23.0363,x:45.55,y:32.05},28).to({skewX:-22.9857,skewY:-23.0363,alpha:0},4).wait(5));

	// car
	this.instance_3 = new lib.car();
	this.instance_3.setTransform(-42,-18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(227));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-18,176,68);


// stage content:
(lib._2019GMCardBrandBuyPowerCardMRMProgrammaticNoneRetargetingApplyTodayCTANoneH5SUSENGv1300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {end:243};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,77,191,239,243];
	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		var raiz = this; 
		
		ended = false;
		
		this.clicktag.cursor = "pointer";
		this.cta_btn.cursor = "pointer";
		this.clicktag.mouseChildren = false;
		this.cta_btn.mouseChildren = false;
		
		this.cta_btn.addEventListener("mouseover", overCta.bind(this));
		this.cta_btn.addEventListener("mouseout", outCta.bind(this));
		this.cta_btn.addEventListener("click", clickCta.bind(this));
		
		function overCta(){
			this.hand_2.gotoAndPlay("over");
			this.cta_btn.gotoAndPlay("over");
			if(ended){
				this.hand_2.hand_final.gotoAndPlay("gleem");
			}
		}
		
		function outCta(){
			this.hand_2.gotoAndPlay("out");
			this.cta_btn.gotoAndPlay("out");
		}
		
		function clickCta() {
			window.open(clickTag1, "_blank");
			this.cta_btn.gotoAndStop("in");
			//Enabler.exit('clickTag1');
			//raiz.gotoAndStop("end"); 
			//raiz.car.gotoAndStop("endcar");
		}
		
		//clicktag
		
		//this.clicktag.addEventListener("mouseout", outClick.bind(this));
		//this.clicktag.addEventListener("mouseover", overClick.bind(this));
		this.clicktag.addEventListener("click", fl_ClickToGoToWebPage);
		/*
		function overClick(){
			this.hand_2.gotoAndPlay("over");
			this.cta.gotoAndStop("out");
		}
		function outClick(){
			this.hand_2.gotoAndPlay("out");
			this.cta.gotoAndStop("in");
		} 
		*/ 
		function fl_ClickToGoToWebPage() {
			window.open(clickTag, "_blank");
			//Enabler.exit('clickTag');
			//raiz.gotoAndStop("end"); 
			//raiz.car.gotoAndStop("endcar");
		}
	}
	this.frame_77 = function() {
		this.car.gotoAndPlay("wheels");
	}
	this.frame_191 = function() {
		this.car.gotoAndPlay("wheels2");
	}
	this.frame_239 = function() {
		this.hand_2.hand_final.gotoAndPlay("gleem");
		//this.gleem2_mc.gotoAndPlay('gleem2');
	}
	this.frame_243 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(77).call(this.frame_77).wait(114).call(this.frame_191).wait(48).call(this.frame_239).wait(4).call(this.frame_243).wait(11));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(254));

	// cta_btn
	this.cta_btn = new lib.cta_btn();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.setTransform(150,353.75,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(254));

	// clicktag
	this.clicktag = new lib.clicktag();
	this.clicktag.name = "clicktag";
	this.clicktag.setTransform(150,125,1,1,0,0,0,150,125);
	this.clicktag.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.clicktag).wait(254));

	// topbar
	this.topbar = new lib.topbar();
	this.topbar.name = "topbar";
	this.topbar.setTransform(75,7,0.5,0.5,0,0,0,150,14);

	this.timeline.addTween(cjs.Tween.get(this.topbar).wait(254));

	// hand2
	this.hand_2 = new lib.hand2();
	this.hand_2.name = "hand_2";
	this.hand_2.setTransform(318.3,166.85,0.9978,0.9928,0,14.296,14.1376,342.7,-59.9);

	this.timeline.addTween(cjs.Tween.get(this.hand_2).wait(195).to({regX:342.4,regY:-60.1,scaleX:0.9994,scaleY:0.9975,rotation:-0.5013,skewX:0,skewY:0,x:98.65,y:182.05},28,cjs.Ease.get(1)).to({regX:342.3,regY:-60,scaleX:1,scaleY:1,rotation:0,x:103.3,y:182},6).wait(25));

	// hand1
	this.instance = new lib.hand1();
	this.instance.setTransform(295.95,170.1,1.1994,1.1982,5.7476,0,0,34.6,-47);
	this.instance.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-47.1,scaleX:1,scaleY:1,rotation:-0.0009,x:253.6,y:170.9,alpha:1},17,cjs.Ease.get(1)).wait(55).to({rotation:-0.0009},0).to({regY:-47,scaleX:1.1497,scaleY:1.1497,rotation:3.5168,x:293,y:169.5},7).to({regX:34.5,regY:-46.9,scaleX:1.1996,scaleY:1.1996,rotation:4.5194,x:490.7,y:185.15,alpha:0.0117},14,cjs.Ease.get(1)).to({_off:true},1).wait(160));

	// text4
	this.instance_1 = new lib.text4_mc();
	this.instance_1.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(191).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(48));

	// text3
	this.instance_2 = new lib.text3_mc();
	this.instance_2.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(138).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(20).to({alpha:0},15).wait(66));

	// text2
	this.instance_3 = new lib.text2_mc();
	this.instance_3.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(28).to({alpha:0},15).to({_off:true},1).wait(118));

	// text1
	this.instance_4 = new lib.text1_mc();
	this.instance_4.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(33).to({alpha:0},15).to({_off:true},1).wait(181));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AldPeQgyAAAAgyIAAtNQAAgyAyABILAAAQAygBAAAyIAANNQAAAygyAAg");
	var mask_graphics_72 = new cjs.Graphics().p("AldPeQgyAAAAgyIAAtNQAAgyAyABILAAAQAygBAAAyIAANNQAAAygyAAg");
	var mask_graphics_73 = new cjs.Graphics().p("AloPeQgzAAAAgyIAAtNQAAgyAzABILWAAQA0gBAAAyIAANNQAAAyg0AAg");
	var mask_graphics_74 = new cjs.Graphics().p("AlyPeQg1AAAAgyIAAtNQAAgyA1ABILrAAQA1gBAAAyIAANNQAAAyg1AAg");
	var mask_graphics_75 = new cjs.Graphics().p("Al9PeQg3AAAAgyIAAtNQAAgyA3ABIMBAAQA2gBAAAyIAANNQAAAyg2AAg");
	var mask_graphics_76 = new cjs.Graphics().p("AmIPeQg4AAAAgyIAAtNQAAgyA4ABIMWAAQA5gBAAAyIAANNQAAAyg5AAg");
	var mask_graphics_77 = new cjs.Graphics().p("AmSPeQg6AAAAgyIAAtNQAAgyA6ABIMrAAQA6gBAAAyIAANNQAAAyg6AAg");
	var mask_graphics_78 = new cjs.Graphics().p("AmdPeQg7AAAAgyIAAtNQAAgyA7ABINBAAQA7gBAAAyIAANNQAAAyg7AAg");
	var mask_graphics_79 = new cjs.Graphics().p("AmoPeQg8AAAAgyIAAtNQAAgyA8ABINXAAQA8gBAAAyIAANNQAAAyg8AAg");
	var mask_graphics_80 = new cjs.Graphics().p("AoaPeQhNAAAAgyIAAtNQAAgyBNABIQ8AAQBNgBAAAyIAANNQAAAyhNAAg");
	var mask_graphics_81 = new cjs.Graphics().p("AqFPeQhcAAAAgyIAAtNQAAgyBcABIUSAAQBcgBAAAyIAANNQAAAyhcAAg");
	var mask_graphics_82 = new cjs.Graphics().p("ArmPeQhqAAAAgyIAAtNQAAgyBqABIXVAAQBqgBAAAyIAANNQAAAyhqAAg");
	var mask_graphics_83 = new cjs.Graphics().p("As/PeQh2AAAAgyIAAtNQAAgyB2ABIaHAAQB2gBAAAyIAANNQAAAyh2AAg");
	var mask_graphics_84 = new cjs.Graphics().p("AuPPeQiCAAAAgyIAAtNQAAgyCCABIcoAAQCCgBAAAyIAANNQAAAyiCAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AvXPeQiMAAAAgyIAAtNQAAgyCMABIe4AAQCMgBAAAyIAANNQAAAyiMAAg");
	var mask_graphics_86 = new cjs.Graphics().p("AwWPeQiVAAAAgyIAAtNQAAgyCVABMAg2AAAQCVgBAAAyIAANNQAAAyiVAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AxMPeQidAAAAgyIAAtNQAAgyCdABMAiiAAAQCdgBAAAyIAANNQAAAyidAAg");
	var mask_graphics_88 = new cjs.Graphics().p("Ax5PeQikAAAAgyIAAtNQAAgyCkABMAj9AAAQCjgBAAAyIAANNQAAAyijAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AygPeQipAAAAgyIAAtNQAAgyCpABMAlIAAAQCogBAAAyIAANNQAAAyioAAg");
	var mask_graphics_90 = new cjs.Graphics().p("Ay+PeQisAAAAgyIAAtNQAAgyCsABMAmDAAAQCtgBAAAyIAANNQAAAyitAAg");
	var mask_graphics_91 = new cjs.Graphics().p("AzbPeQixAAAAgyIAAtNQAAgyCxABMAm+AAAQCwgBAAAyIAANNQAAAyiwAAg");
	var mask_graphics_92 = new cjs.Graphics().p("Az5PeQi1AAAAgyIAAtNQAAgyC1ABMAn5AAAQC1gBAAAyIAANNQAAAyi1AAg");
	var mask_graphics_93 = new cjs.Graphics().p("A0WPeQi5AAAAgyIAAtNQAAgyC5ABMAo0AAAQC5gBAAAyIAANNQAAAyi5AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:40.525,y:99}).wait(72).to({graphics:mask_graphics_72,x:40.525,y:99}).wait(1).to({graphics:mask_graphics_73,x:41.7566,y:99}).wait(1).to({graphics:mask_graphics_74,x:42.9882,y:99}).wait(1).to({graphics:mask_graphics_75,x:44.2198,y:99}).wait(1).to({graphics:mask_graphics_76,x:45.4514,y:99}).wait(1).to({graphics:mask_graphics_77,x:46.6831,y:99}).wait(1).to({graphics:mask_graphics_78,x:47.9147,y:99}).wait(1).to({graphics:mask_graphics_79,x:49.116,y:99}).wait(1).to({graphics:mask_graphics_80,x:62.2879,y:99}).wait(1).to({graphics:mask_graphics_81,x:74.4674,y:99}).wait(1).to({graphics:mask_graphics_82,x:85.6545,y:99}).wait(1).to({graphics:mask_graphics_83,x:95.849,y:99}).wait(1).to({graphics:mask_graphics_84,x:105.0511,y:99}).wait(1).to({graphics:mask_graphics_85,x:113.2607,y:99}).wait(1).to({graphics:mask_graphics_86,x:120.4779,y:99}).wait(1).to({graphics:mask_graphics_87,x:126.7026,y:99}).wait(1).to({graphics:mask_graphics_88,x:131.9348,y:99}).wait(1).to({graphics:mask_graphics_89,x:136.0061,y:99}).wait(1).to({graphics:mask_graphics_90,x:139.3749,y:99}).wait(1).to({graphics:mask_graphics_91,x:142.7437,y:99}).wait(1).to({graphics:mask_graphics_92,x:146.1125,y:99}).wait(1).to({graphics:mask_graphics_93,x:149.4813,y:99}).wait(161));

	// car
	this.car = new lib.car_1();
	this.car.name = "car";
	this.car.setTransform(138,150);

	var maskedShapeInstanceList = [this.car];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.car).wait(77).to({x:101},15,cjs.Ease.get(1)).to({x:105},4).wait(95).to({x:64},32,cjs.Ease.get(1)).wait(31));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.setTransform(150,125,1.05,1.05,0,0,0,150,125);
	this.instance_5.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,alpha:1},19,cjs.Ease.get(1)).wait(235));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(254));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(106.2,28.3,509.2,317.7);
// library properties:
lib.properties = {
	id: '754A33F905C24D30B6CEFF658F5F1508',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bk.jpg", id:"bk"},
		{src:"car.png", id:"car"},
		{src:"handcard1.png", id:"handcard1"},
		{src:"handcard2.png", id:"handcard2"},
		{src:"r1.png", id:"r1"},
		{src:"text1.png", id:"text1"},
		{src:"text2.png", id:"text2"},
		{src:"text3.png", id:"text3"},
		{src:"text4.png", id:"text4"},
		{src:"top.png", id:"top"}
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
an.compositions['754A33F905C24D30B6CEFF658F5F1508'] = {
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