 var arr=[2,62,8,70,90,42,74];
var func=function(x){
     // alert(x);          	//check the element till the condition is not satisfied the return tru
    return x%2==0;
}
 console.log(arr.every(func));

 //Implementation
function Main(arr,callback){
	  var check=[];
	  count=0;
	  for(i=0;i<arr.length;i++){
	  	      check[i]=callback(arr[i]);
	  }
         for(i=0;i<check.length;i++){
         	   if(check[i]==true)
         	   	 ++count;
         }
       return count==check.length?true:false
       
}
var result=Main(arr,function(value){
       return value%2==0?true:false;
});
console.log(result);
