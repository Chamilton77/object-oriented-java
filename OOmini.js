/*
the way to do the work is to break everything down to the loswest step you can.
chop everything up to steps and doing the first step to do one of the steps*/
//This object takes a given number and multiplies the first given number by 1
//and then mulitplies the value of that number by the given number.
function Multiplier(num){

	this.num = num;
	this.currentvalue = 1;
	this.multiply = function(){
		this.currentvalue = this.currentvalue * this.num;
	}
	this.getCurrentValue = function(){
		return this.currentvalue;
	}
}


//2

function Album(){
	var photos["photo1, Utah", "photo2, NewYork"];
	function Photos(filename, location){
		this.filename = filename;
		this.location = location;
		this.photostring = function(){
			return this.filename, + this.location;
		}
	}
	var newphoto = new Photo ("photo3, California");
	photos.push(newphoto);
	
}

//3

