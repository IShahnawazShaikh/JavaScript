function createCelebrity(obj,first,second,fans){
    obj.first=first;
    obj.second=second;
    obj.fans=fans;
}
var srk={};
createCelebrity(srk,"Bilal","Saeed",6.7);
console.log(srk);
console.log(srk.first);
console.log(srk.second);
console.log(srk.fans);



/*-------------Lets use 'this' keyword instead of obj----------------*/ 
function createCelebrity(obj,first,second,fans){
    this.first=first;
    this.second=second;
    this.fans=fans;
}
var srk={};
createCelebrity(srk,"Bilal","Saeed",6.7);
console.log(srk);        
console.log(srk.first);  //undefined
console.log(srk.second);  //undefined
console.log(srk.fans);    //undefined

console.log(first);        //Bilal
console.log(window.second);   //Saeed
console.log(this.fans);     //6.7          because this is referring to Window not srk object .




/*-------------------------Overriding 'this' using call method---------------------------------------*/
function createCelebrity(first,second,fans){
    this.first=first;
    this.second=second;
    this.fans=fans;
}
var srk={};
window.createCelebrity.call(srk,"Bilal","Saeed",6.7);
console.log(srk);        
console.log(srk.first);  //Bilal  
console.log(srk.second);   //Saeed
console.log(srk.fans);     //6.7




/*-----------------------------------------Lets Use the 'new' keyword to make it simple-------------------------------------------------------------*/
function createCelebrity(first,second,fans){
    this.first=first;
    this.second=second;
    this.fans=fans;
    return this;
}
var srk=new createCelebrity("Bilal","Saeed",6.7);
var shr=new createCelebrity("Shruti","Hasan",5.8);
console.log(srk);        
console.log(srk.first);  
console.log(srk.second); 
console.log(srk.fans); 

console.log(shr);        
console.log(shr.first);  
console.log(shr.second); 
console.log(shr.fans);    

   /*  Here this refer to the Anonymous object which is assigned to srk object and createcelebrity function is act like constructor */







/*---------------------------------------Lets Add the function with the object-------------------------------------------------------------*/

function createCelebrity(first,second,fans){
    this.first=first;
    this.second=second;
    this.fans=fans;
    this.greeting=function(){
    	  console.log("Hey folks I am "+this.first+' '+this.second);
    };
    return this;
}
var srk=new createCelebrity("Bilal","Saeed",6.7);
var shr=new createCelebrity("Shruti","Hasan",5.8);

console.log(srk);  
console.log(shr);
srk.greeting();  
shr.greeting();  

/*  Here we are defined function for each object which is not ideal. Lets make the code more optimize */





/*-----------------------------Function Prototype------------------------------------------*/
function greeting(){
	console.log("Hey folks I am "+this.first+' '+this.second);
}
function createCelebrity(first,second,fans){
    this.first=first;
    this.second=second;
    this.fans=fans;
    this.greeting=greeting;
    return this;
}
var srk=new createCelebrity("Bilal","Saeed",6.7);
var shr=new createCelebrity("Shruti","Hasan",5.8);

console.log(srk);  
console.log(shr);
srk.greeting();  
shr.greeting();





/*-----------

 But the above code cause headache if we add more function.Lets make it simple and when we add any method 
  autimatically object can access this method no need to assign one by one. In future we can add any method
   
--------------------------------------*/  

createCelebrity.methods={
	greeting:function(){
	console.log("Hey folks I am "+this.first+' '+this.second);
    },
    printFans:function(){
    	 console.log('I have '+this.fans+' fans');
    }
}
function createCelebrity(obj,first,second,fans){
    obj.__proto__=createCelebrity.methods;
    obj.first=first;
    obj.second=second;
    obj.fans=fans;
    return obj;
}
var srk=createCelebrity({},"Bilal","Saeed",6.7);
var shr=createCelebrity({},"Shruti","Hasan",5.8);

console.log(srk);  
console.log(shr);
srk.greeting();  
srk.printFans();  
shr.greeting();  
shr.printFans();  

/*Placing every every function in seperate object and preventing Global scope Pollution*/



/*--------------------------------Lets make the above code is more simple------------------------------------*/
createCelebrity.prototype={
	greeting:function(){
	console.log("Hey folks I am "+this.first+' '+this.second);
    },
    printFans:function(){
    	 console.log('I have '+this.fans+' fans');
    }
}
function createCelebrity(first,second,fans){
   // obj.__proto__=createCelebrity.methods;
    this.first=first;
    this.second=second;
    this.fans=fans;
    //return obj;
}
var srk=new createCelebrity("Bilal","Saeed",6.7);
var shr=new createCelebrity("Shruti","Hasan",5.8);

console.log(srk);  
console.log(shr);
srk.greeting();  
srk.printFans();  
shr.greeting();  
shr.printFans();  
