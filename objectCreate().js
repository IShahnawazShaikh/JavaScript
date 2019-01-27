var x="I am Global"
var obj1={
   x:20,
   y:30,
   func:function(){
   	   console.log(this.x);
   }
}
var obj2={
   x:obj1.x+10,
   y:obj1.y+10,
   func:obj1.func,
}
console.log(obj1.x);
console.log(obj1.y);
window.obj1.func();
var func=obj1.func;
window.func();

console.log(obj2.x);
console.log(obj2.y);
window.obj2.func();
window.func();