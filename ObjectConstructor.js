/*---------------------Object.assign()-----------*/
var obj1={
	x:10,
	y:30
}
obj3={
	z:100
}
obj2={}


Object.assign(obj2,obj1,obj3);           //obj1 and obj2 pointing to different Object
obj1.x=50;
console.log(obj1.x);
console.log(obj2.x);
console.log(obj2.z);

/*------------PART-2------*/
var obj1={
	x:10,
	y:30
}
var obj2={
	z:100
}
var mainObject={
	x:obj1,
	y:obj2,
	func:function(){
		console.log("in function")
	}
}
obj3={}
Object.assign(obj3,mainObject);    

console.log(obj3.x);
console.log(obj3.y);

console.log(obj3.x.x);
console.log(obj3.x.y);
console.log(obj3.y.z);
console.log(obj3.func());


/*------------------------------Object.defineProperty()-------------------------------*/

var obj={
	x:10
}
Object.defineProperty(obj,'x',{
   value:10,
   writable:true,
   enumerable:true,
   configurable:true

})
console.log(obj.x);
obj.x=30;
console.log(obj.x);
Object.defineProperty(obj,'x',{
   writable:false,
   enumerable:true,
   configurable:false

})
obj.x=60;
console.log(obj.x);

/*-----------------------------PART-2------------------------*/
var obj={}
Object.defineProperty(obj,'x',{
   value:10,
    writable:true,
   // enumerable:true,
   configurable:true
})
console.log(obj.x);
obj.x=30;
console.log(obj.x);


Object.defineProperty(obj,'x',{
   value:10,
    writable:false,
   // enumerable:true,
   configurable:false
})
console.log(obj.x);
obj.x=30;
console.log(obj.x);


/*-------------------------Enumerable--------------------*/
var obj={}
Object.defineProperty(obj,'a',{
  value:10,
  enumerable:true
})
Object.defineProperty(obj,'b',{
  value:20,
  enumerable:true
})
Object.defineProperty(obj,'c',{
  value:30,
  enumerable:false
})
Object.defineProperty(obj,'d',{
  value:40,
})
obj.e=40;
console.log(obj);
console.log(Object.keys(obj));
for(i in obj){
	console.log(obj[i]);
}


/*--------------------delete operator---------------------------------*/
var obj={
	x:10
}
console.log(obj.x);
console.log(delete obj.x);
console.log(obj.x);


/*-------------------PART-2----------------------------*/
var obj={
	func:function(){
		 console.log("in function")
	}
}
console.log(obj.x);
console.log(obj.func());
console.log(delete obj.x);
console.log(delete obj.fun);
console.log(obj.x);
console.log(obj.func());

var arr=['A','B','C','D'];
console.log(arr.length);
delete arr[1];
console.log(arr.length);
for(i in arr)
    console.log(arr[i]);
for(i of arr)
    console.log(i);
console.log(Object.keys(arr))
console.log(Object.entries(arr))



/*----------------------------------Object defineProperties() -------------------------------------------*/

var obj={}
Object.defineProperties(obj,{
	a:{
		 value:20,
		 writable:true,
		 configurable:true

	},
 	b:{
        value:30,
		 writable:true,
		 configurable:true
	}
})
console.log(obj.a,obj.b);

var obj={}
Object.defineProperties(obj,{
	a:{
		 value:60,
		 writable:true,
		 configurable:false

	},
 	b:{
        value:120,
		 writable:true,
		 configurable:false
	}
})
console.log(obj.a,obj.b);

obj.a=70;
obj.b=140;
console.log(obj.a,obj.b);
Object.defineProperties(obj,{
	a:{
		 writable:false,
		 configurable:false

	},
 	b:{
		 writable:false,
		 configurable:false
	}
})
obj.a=-1;          //cannot write as wrirabel:false
obj.b=-1;
console.log(obj.a,obj.b);

