//Iterator

var x=["A","B","C","D"];

var p=x[Symbol.iterator]();
console.log(p.next());
console.log(p.next());
console.log(p.next());
console.log(p.next());
console.log(p.next());

/*-----------------------------------Iterate in Array-------------------------------------*/


var x=["A","B","C","D"];

x[Symbol.iterator]=function(){
	alert(this);
	var that=this;
	count=0;
	 var itr={
	 	 next:function(){
            if(count==x.length)
            	return {done:true ,value:undefined};
            else
            	return {done:false ,value:that[count++]};
	 	 }
	 }
	 return itr;
}
var p=x[Symbol.iterator]();
for(var i in x){
console.log(p.next());
console.log(x[i]);	 
}
// console.log(p.next());
// console.log(p.next());
// console.log(p.next());
// console.log(p.next());
// console.log(p.next());


/*-------------------------------------------------Iteration in object-------------------------------------------------*/
var obj={
	x:10,
	y:20,
	z:30
};

obj[Symbol.iterator]=function(){
	var key=Object.keys(this);
	var count=0;
	var that=this;
	var itr={next:function(){
		if(count==key.length)
			return {done: true  ,value: undefined};
		else
			return {done: false  ,value: that[key[count++]]};
	}};
	return itr;
}

var p=obj[Symbol.iterator]();
console.log(p.next());
console.log(p.next());
console.log(p.next());
console.log(p.next());

for(var i of obj){
	
	console.log(i);

}



/*-------------------------------------------------Iteration in object in (reverse)------------------------------------------------*/
var obj={
	x:10,
	y:20,
	z:30
};
obj[Symbol.iterator]=function(){
	var key=Object.keys(this);
	var count=key.length-1;
	var that=this;
	var itr={next:function(){
		if(count == -1)
			return {done: true  ,value: undefined};
		else
			return {done: false  ,value: that[key[count--]]};
	}};
	return itr;
}

var p=obj[Symbol.iterator]();
//console.log(p.next());
//console.log(p.next());
//console.log(p.next());
// console.log(p.next());

for(var i of obj){
	console.log(p.next());
	console.log(i);
}

/*------------------------------------------------Iteration in object without [Symbol.iterate]-----------*/
var obj={
	x:10,
	y:20,
	z:30
};
obj["shahnawaz"]=function(){
	var key=Object.keys(this);
	var count=0;
	var that=this;
	var itr={next:function(){
		if(count==key.length)
			return {done: true  ,value: undefined};
		else
			return {done: false  ,value: that[key[count++]]};
	}};
	return itr;
}

var p=obj["shahnawaz"]();
console.log(p.next());
console.log(p.next());
console.log(p.next());



/*------------------------------------------------Iteration in object without [Symbol.iterate]  (reverse)-----------*/
var obj={
	x:10,
	y:20,
	z:30
};
obj["shahnawaz"]=function(){
	var key=Object.keys(this);
	var count=key.length-1;
	var that=this;
	var itr={next:function(){
		if(count == -1)
			return {done: true  ,value: undefined};
		else
			return {done: false  ,value: that[key[count--]]};
	}};
	return itr;
}

var p=obj["shahnawaz"]();
console.log(p.next());
console.log(p.next());
console.log(p.next());

