 var arr=[1,2,4,3,7];

// function reducer(acc,cur){
// 	 return acc+cur;
// }
// console.log(arr.reduce(reducer));





//Implementation
function main(arr,callback){
	cur=5;
	   for(i=0;i<arr.length;i++){
	   	  cur=callback(arr[i],cur);
	   }
    return cur;
}
var result=main(arr,function(acc,cur){
	    return acc+cur;
});
console.log(result);