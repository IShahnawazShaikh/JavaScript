var x="I am Global"
var obj1={
   x:20,
   y:30,
   func:function(){
   	   console.log(this.x);
   }
}
var obj2=Object.create(obj1);
obj2.z=70;

console.log(obj2.x);
console.log(obj2.y);
console.log(obj2.z);

var fun=obj2.func;
window.fun();
obj2.x=10;   //try to modify obj1 property but it cannot modify.
console.log(obj1.x);
console.log(obj2.x);

obj1.x=100;      //object1 modify thier own property and it reflects to all objects which is linked to this
console.log(obj1.x);
console.log(obj2.x);