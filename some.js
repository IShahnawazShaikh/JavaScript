var arr=[1,5,1,7,9,4,7];
// var func=function(x){
// 	  // alert(x);          	check the element till the condition is not satisfied the return tru
//        return x%2==0;
// }
// console.log(arr.some(func));

//Implementation
function Main(arr,callback){
	  var check;
	  for(i=0;i<arr.length;i++){
	  	      check=callback(arr[i]);
	  	      if(check==true)
	  	      	break;
	  }
     return check;
}
var result=Main(arr,function(value){
       return value%2==0?true:false;
});
console.log(result);
