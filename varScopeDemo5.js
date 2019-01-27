var x=20;
var obj={
	 x:10,
	 func:function(){
	 	console.log(this.x);
	 }
}
var obj3={
	x: "obj3",
	obj4:{
		 x:"obj4"
	}
}
var obj5={
	 x:"obj5"
}
var func1=obj.func.bind(window);
var func2=obj.func.bind(obj);
var func3=obj.func.bind(obj3);
var func4=obj.func.bind(obj3.obj4);

window.func1();//20
window.func2(); //10
window.func3();//obj3
window.func4(); //obj4
window.setTimeout(window.func4,3000); //obj4

var newFunc=obj.func;
window.setTimeout(window.myFunc.bind(obj5),5000); //obj5