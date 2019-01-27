var x=10;
var obj1={
   x:20,
   func:function(){
   	 console.log(this.x); //10
   }
}
var obj2={
  func:function(){
  	  obj1.func.call(window);
  }
}
obj2.func();