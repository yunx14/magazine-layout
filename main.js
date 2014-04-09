var pages = []; // keeps track of pages
var inst_full = []; // keeps track of instances of full ads
var inst_halftall = []; // keeps track of instances of halftall ads
var inst_halfwide = []; // keeps track of instances of halfwide ads
var inst_quarter = []; // keeps track of instances of quarter ads
var inst_eighthtall = []; // keeps track of instances of eighthtall ads
var inst_eighthwide = []; // keeps track of instances of eighthwide ads
var full = 0; // counter
var halftall = 0; // counter
var halfwide = 0; // counter
var quarter = 0; // counter
var eighthtall = 0; // counter
var eighthwide = 0; // counter

function BlankPage(id, area) {
	this.id = id;
	this.availableArea = 16;
	
	this.draw = function() {
		$('#content-pages').append("<div class='newpage' id='page"+id+"'></div>");
		console.log('BlankPage'+id+' has '+this.availableArea+' area available.')
	}

	this.addArea = function(area) {
		this.area -= area;
		console.log('BlankPage'+id+' has '+this.availableArea+' area available.')
	}

	this.subtractArea = function(area) {
		this.area += area;
		console.log('BlankPage'+id+' has '+this.availableArea+' area available.')
	}
}

function Full(id) {
	this.id = id;
	this.width = 4;
	this.height = 4;
	this.area = 16;

	this.draw = function() {
		$('#content-ads').append("<div class='full' id='"+id+"_full' onmousedown='inst_full[parseInt(this.id)].pickUp();' onmouseup='inst_full[parseInt(this.id)].drop();'></div>");
	}

	this.pickUp = function() {
		// pick up the ad to move it
		
		console.log('picked up full'+id+'.');
	}

	this.drop = function() {
		// place the ad back down 
		console.log('dropped full'+id+'.');
	}

}

function HalfTall(id) {
	this.id = id;
	this.width = 2;
	this.height = 4;
	this.area = 8;

	this.draw = function() {
		$('#content-ads').append("<div class='halftall' id='"+id+"_halftall' onmousedown='inst_halftall[parseInt(this.id)].pickUp();' onmouseup='inst_halftall[parseInt(this.id)].drop();'></div>");
	}

	this.pickUp = function() {
		// pick up the ad to move it
		console.log('picked up halftall'+id+'.');
	}

	this.drop = function() {
		// place the ad back down 
		console.log('dropped halftall'+id+'.');
	}
}

function HalfWide(id) {
	this.id = id;
	this.width = 4;
	this.height = 2;
	this.area = 8;

	this.draw = function() {
		$('#content-ads').append("<div class='halfwide' id='"+id+"_halfwide' onmousedown='inst_halfwide[parseInt(this.id)].pickUp();' onmouseup='inst_halfwide[parseInt(this.id)].drop();'></div>");
	}

	this.pickUp = function() {
		// pick up the ad to move it
		console.log('picked up halfwide'+id+'.');
	}

	this.drop = function() {
		// place the ad back down
		console.log('dropped halfwide'+id+'.'); 
	}
}

function Quarter(id) {
	this.id = id;
	this.width = 2;
	this.width = 2;
	this.area = 4;

	this.draw = function() {
		$('#content-ads').append("<div class='quarter' id='"+id+"_quarter' onmousedown='inst_quarter[parseInt(this.id)].pickUp();' onmouseup='inst_quarter[parseInt(this.id)].drop();'></div>");
	}

	this.pickUp = function() {
		// pick up the ad to move it
		console.log('picked up quarter'+id+'.');
	}

	this.drop = function() {
		// place the ad back down 
		console.log('dropped quarter'+id+'.');
	}
}

function EighthTall(id) {
	this.id = id;
	this.width = 1;
	this.height = 2;
	this.area = 2;

	this.draw = function() {
		$('#content-ads').append("<div class='eighthtall' id='"+id+"_eighthtall' onmousedown='inst_eighthtall[parseInt(this.id)].pickUp();' onmouseup='inst_eighthtall[parseInt(this.id)].drop();'></div>");
	}

	this.pickUp = function() {
		// pick up the ad to move it
		console.log('picked up eighthtall'+id+'.');
	}

	this.drop = function() {
		// place the ad back down 
		console.log('dropped eighthtall'+id+'.');
	}
}

function EighthWide(id) {
	this.id = id;
	this.width = 2; 
	this.height = 1;
	this.area = 2;

	this.draw = function() {
		$('#content-ads').append("<div class='eighthwide' id='"+id+"_eighthwide' onmousedown='inst_eighthwide[parseInt(this.id)].pickUp();' onmouseup='inst_eighthwide[parseInt(this.id)].drop();'></div>");
	}

	this.pickUp = function() {
		// pick up the ad to move it
		console.log('picked up eighthwide'+id+'.');
	}

	this.drop = function() {
		// place the ad back down 
		console.log('dropped eighthwide'+id+'.');
	}
}

$(document).ready(function(){
	$('#submit').click(function() {
		//Store total number of each type of ad
		var ad_full = parseInt($('#full').val()) || 0;
		var ad_halftall = parseInt($('#halftall').val()) || 0;
		var ad_halfwide = parseInt($('#halfwide').val()) || 0;
		var ad_quarter = parseInt($('#quarter').val()) || 0;
		var ad_eighthtall = parseInt($('#eighthtall').val()) || 0;
		var ad_eighthwide = parseInt($('#eighthwide').val()) || 0;

		// Calculate Total number of pages needed
		var totalarea = (ad_full*16)+(ad_halftall*8)+(ad_halfwide*8)+(ad_quarter*4)+(ad_eighthtall*2)+(ad_eighthwide*2); 
		var totalpages = Math.ceil(totalarea/16);
		var remainder = (totalarea % 16)/16;
		
		for (var i = 0; i < totalpages; i++) {
			pages[i] = new BlankPage(i);
			pages[i].draw();
		}
		console.log(totalpages);
		console.log(remainder);

		for(var i=0; i < ad_full; i++) {
			full++;
			inst_full[i] = new Full(i);
			inst_full[i].draw();
		}
		for(var i=0; i < ad_halftall; i++) {
			halftall++;
			inst_halftall[i] = new HalfTall(i);
			inst_halftall[i].draw();
		}
		for(var i=0; i < ad_halfwide; i++) {
			halfwide++;
			inst_halfwide[i] = new HalfWide(i);
			inst_halfwide[i].draw();
		}
		for(var i=0; i < ad_quarter; i++) {
			quarter++;
			inst_quarter[i] = new Quarter(i);
			inst_quarter[i].draw();
		}
		for(var i=0; i < ad_eighthtall; i++) {
			eighthtall++;
			inst_eighthtall[i] = new EighthTall(i);
			inst_eighthtall[i].draw();
		}
		for(var i=0; i < ad_eighthwide; i++) {
			eighthwide++;
			inst_eighthwide[i] = new EighthWide(i);
			inst_eighthwide[i].draw();
		}

		$('#submit').hide();
	});

	
});