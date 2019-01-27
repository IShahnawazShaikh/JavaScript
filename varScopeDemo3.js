var x=10;
var obj1={
	x:20,
	 obj2:{
	 	 x:30,
	 	 func:function(){
	 	 	 console.log(this.x)
	 	 }
	 },
	 func:function(){
       console.log(this.x);  //20
       console.log(this.obj2.x); //30
	 }
}
var first=obj1.obj2.func;
window.first();   //10
obj1.func();
