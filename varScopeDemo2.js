v=30;
obj={
	 v: 40,
	 func: function(){
	 	 console.log(this);  //{v:40 func:f}
	 	 console.log(this.v);  //40
	 }
}
window.obj.func();
console.log(window.obj.func); //complete 'func' function().