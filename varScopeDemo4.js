var v=60;
var x=70;
var obj1={
	 x:50,
	 obj2:{
	  	 x:40,
	  	 obj3:{
	  	 	 x:30,
	  	 	 obj4:{
	  	 		 x:20,
	  	 		 obj5:{
	  	 			x:10,
	  	 			func:function(){
	  	 				console.log(this.x);
	  	 		 }
	  	 	}
	  	 }
	  }
   },
   parent:function(){
   	 console.log(this.x);
   	 console.log(this.obj2.x);
   	 console.log(this.obj2.obj3.x);
   	 console.log(this.obj2.obj3.obj4.x);
   	 console.log(this.obj2.obj3.obj4.obj5.x);
   }
}
var func=obj1.obj2.obj3.obj4.obj5.func;
func(); //70
obj1.parent();  //{50,40,30,20,10}
var parent2=obj1.parent; 
//window.parent2();   //try this