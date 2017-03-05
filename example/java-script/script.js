//var a = " hello world";

/*var message="in global";
console.log("global:message:"+message);

function a(){
	var message="in inside";
	console.log("messahe:"+message)
	function b()
{
	console.log("message is :"+message)
}
b();
}

function b()
{
	console.log("message is :"+message)
}
a();

*/


/*  daTA TYPE
var a; //undefined var
if(a==undefined)
{
	console.log("a is undefined")
}
a=5;
if(a==undefined)
{
	console.log("a is undefined")
}
else
{
console.log("a is defined and value is" +a)	
}

*/


//common language costucts

//string cocatination
/*
var ch="hello";
ch+=" world";
console.log(ch);

//regular math
console.log((5+4)/3);
console.log(undefined/3);

//equal
var x=4,y=4;
if(x==y)
{
	console.log("x is eqaul to y")
}
x='4';
if(x==y)//run due to type cast on value typy in other type
{
	console.log("x is eqaul to y")
}

//strict equality

if(x===y)//rep by 3 equal sign 
{
	console.log("x is eqaul to y")
}
else
{
	console.log("x is not equal to y");
}

//if statement9for false)
 <!-- if(false||undefined||null||0||""||NaN)
 {
 	console.log("it is true");
 }
 else{
 	console.log("it is false");
 }

 //if statement for true)
 if(true&&1&&-1&&"false"&&"hello"&& " ")
 {
 	console.log("it is true");
 }
 else{
 	console.log("it is false");
 }
 */


/*
 //best practice of{} 
 function a()
 {
 	return   //return undefined because { is on next line}
 	{
 		name:"aakash";
 	};
 }

 function b()
 {
 	return  {    // return obj beacouse curly on sane line
 		name:"aakash"
 	};
 }
 console.log(a());
 console.log(b());

*/
 
 /*
 //for ,loop
var sum=0;
 for(var i=0;i<10;i++)
 {
 	sum=sum+i;
 }
 console.log('sum of 0-10 is:='+sum)
*/


//handling defalt value
/*function orderdish(dish)
{
	// &if(dish===undefined)
		//dish="whatever";  //it is defalt set arg or below stmnt is also deflt
	dish = dish||"whatever";
	console.log("dish is "+ dish)

}
orderdish("anda");
orderdish();//if defalt is not than opt is= dis is undefind
*/

//object creation by 'new object()' keyword
/*var company = new Object() ;
company ["name"] ="facebook";   // or company.name="facebook";
console.log(company);
 company.ceo=new Object();
company.ceo.name="mark";
company.ceo.color="blue";
console.log(company.ceo);
console.log(company);
console.log("ceo of compane "+ company.ceo.name);
company ["turnover of comp"] =100;
console.log("ceo of compane "+ company["turnover of comp"]);
turn="turnover of comp"
company [turn] =100;
console.log("ceo of compane "+ company["turnover of comp"]);
console.log("ceo of compane "+ company[turn]);
*/

//creation of object by literal syntex :better way
/*
var company={
	name:"india",
	loc:{
		city:"indore",
		area:"bal"
	},
	"stock of company":1000,
	stock:1000
};
console.log(company);
console.log(company.name);
console.log(company.loc);
console.log(company.stock);
*/

//function are object
//function are first class dt
/*
function a(x,y)
{
	return x*y;
}
console.log(a(5,4));
a.version="v.1.1.0";  //like obj assign value name property
console.log(a);  //retun function defination 
console.log(a.version);
*/
/*
//function factory
function makemulti(multiplier)
{
	var myfun=function(x){   //myfun is ref of function
	return multiplier*x
}
	return myfun;  //returning refrance of func

}
var multiby=makemulti(3);//returninf refrance store in multiby var it contain defn of myfun 
console.log(multiby(100));//calling function by ref of var multiby
var double=makemulti(2);
console.log(double(100));//same here

//passing funct=ion as argument

function  dooperation(x,operation){  //here oprt can be ref of func
	return operation(x);
}
var result=dooperation(5,multiby)  //multiby pass as refarce which store in opraion and its defn is above 
console.log(result);
result=dooperation(100,double);
console.log(result);   //same as above function
*/

//copy by referance vs by value

/*
var a=7;
var b=a;
console.log("a= "+a);
console.log("b= "+b);
b=5;
console.log("After updation");
console.log("a= "+a);
console.log("b= "+b);
//by referance in object data type
var a={x:7};
var b=a;
console.log( a);
console.log( b);
b.x=9;
console.log("aftr update")
console.log(a);
console.log(b);

function chanval(primval)
{
	console.log("value befor cahnge")
	console.log(primval);
	primval=7;
	console.log("value after cahnge")
	console.log(primval);
}
var val=5;
chanval(val);
console.log("value after cahnge")
	console.log(val);

function chanobj(primobj)
{
	console.log("value befor cahnge")
	console.log(primobj);
	primobj.x=9;
	console.log("value after cahnge")
	console.log(primobj);
}

var val={x:5};
chanobj(val);
console.log("value after cahnge")
	console.log(val);
*/
 
 //function constructor
 /*
 function Circle(radius)
 {
 //	console.log(this);
   this.radius=radius;
  // this.getarea= function()
   //{
     //return Math.PI *Math.pow(this.radius,2)
   //};
 }
 Circle.prototype.getarea=function()
 {
 	return Math.PI *Math.pow(this.radius,2);
 }
 var mycircle=new Circle(10);
 console.log(mycircle);  
  console.log(mycircle.getarea());
  var myocircle=new Circle(10);
 console.log(myocircle);  
 */

 //object literals and 'this'
 /*
 var literalCircle={  //new object() this is object litrel
 	radius:10,
 	getarea:function(){
 		var self=this;
 		console.log(this);
 		var increaseradius=function()
 		{
 			//this.radius=20;
 			self.radius=20;
 		}
 		increaseradius();
 		//console.log(this.radius)//her radius should 20 but still 20
 		//because this point to gklobal obj window and value goes in window obj so to rerance this to the current objct use self
 	return Math.PI *Math.pow(self.radius,2);
 }	
 	
 };
 console.log(literalCircle.getarea());
 */




 //Arrays
 var array =new Array()
 {
 	array[0]="yakkov";
 	array[1]=2;
 	array[2]=function (name){
 		console.log("hello "+name);
 	};
 	array[3]={course:"html ,css,js"}
    console.log(array);
  }