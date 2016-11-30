//This object takes a given number and multiplies the first given number by 1
//and then mulitplies the value of that number by the given number.
function Multiplier(num){
	this.num = num;
	this.currentvalue = 1;//sets the current valuse of this
	this.multiply = function(){
		this.currentvalue = this.currentvalue * this.num;// takes the current value and multiplies it by the number passed in 
	}
	this.getCurrentValue = function(){
		return this.currentvalue; //returns the new current value
	}
}

var mult1 = new Multiplier(3); //make a new instance of the object
mult1.getCurrentValue(); //run the get current value function on the new instance
mult1.multiply(); // run the multiply function on the instance

//////////////////////////////////////////////////////////2
//Set up an album function that holds photo objects in an array 
//
function Album(){
	this.photos = [];
	this.add = function(image){
		this.photos.push(image);//this adds photos to the array
	}
	this.listPhotos = function(){
		var list = ""; //this is the function that chooses a photo in the array
		for(i = 0; i < this.photos.length; i++){
			list += this.photos[i].file;
		}
		return list;
	}
	this.specific = function(index){
		return this.photos[index];//this returns the photo that you got out of the array
	}
}

function Photo(file, location){
	this.file = file; //this is the constructor for the photo objects that takes parameters
	this.location = location;
}

var pic1 = new Photo("Carson", "Utah");
var pic2 = new Photo("Carson", "Florida");

var album = new Album();
album.add(pic1);
album.add(pic2);
album.listPhotos();
album.specific(2);

////////////////////////////////////////////////////3
//set up the Person object and set name 
function Person(name) {
  this.name = name;
}
//set up the student object and set parameters for name and subject
// get name by calling the Person object
function Student(name, subject){
	Person.call(this, name)
	this.subject = subject;
	Student.prototype.gotoClass = function(){
		console.log("I am " + this.name + " and I am going to my " + this.subject + " class!");
	};
}
//set up the teacher object and set parameters
function Teacher(name, subject){
	this.subject = subject;
	Person.call(this,name)
	Teacher.prototype.sayHello = function(){
		console.log("Hello my name is " + this.name + " and I teach " + this.subject);
	};
}
//set up the school function with instances of student and teacher
function School(){
	this.kid1 = new Student ("Tommy", "math");
	this.teach1 = new Teacher ("Mr.Teacher", "English");
}
//make new instance of school object
var school1 = new School();
//call student and teacher functions
school1.kid1.gotoClass();
school1.teach1.sayHello();













