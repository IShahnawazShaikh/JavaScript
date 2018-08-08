// var myArray=["Pas","irfan","Shahnawaz","Umar"];
var myArray2=[3,44,12,77,34,15,78,3,12,123,66,88,123,6];
var result=myArray2.filter(function(x){
  	if(x%2==0)
       return x;
     })
console.log(result);



 //Implementation

function main1(arr,callback1){
	  var newArray=[];
	  var k;
	  var l=0;
	  for(i=0;i<arr.length;i++){
	  	k=callback1(arr[i]);
	  	if(k!=undefined){
	  		newArray[l]=k;
	  		l++;
	  	}
	  }
  return newArray;
}
var finalResult=main1(myArray2,function(value){
	   if(value%2==0)
           return value;
       });
console.log(finalResult);
