var v=10;
var obj={
	  v: 20,
	  x:30,
	 func:function(x){
        console.log(this.v); //10
        console.log(this.x); //undefined because x is not present in Window object
	 }
}
var myFunc=obj.func;
window.myFunc();