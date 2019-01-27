var obj1={
   x:20,
}
var obj2=Object.create(obj1);
obj2.y=30;

var obj3=Object.create(obj2);
obj3.z=40;

var obj4=Object.create(obj3);
 obj4.s=50;

 console.log(obj4.x);
 console.log(obj4.y);
 console.log(obj4.z);
 console.log(obj4.s);
