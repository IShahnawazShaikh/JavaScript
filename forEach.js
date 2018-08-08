var array=["shahnawaz","shakib","Pasha","Irfan"];
// array.forEach(function(x){
// 	  console.log(x);
// });


    //   Implementation   //
   
function main(arr,callback){
	 for(i=0;i<arr.length;i++){
                 callback(arr[i],i);
	 }
   	    
 }
 main(array,function(x,i){
   console.log(x+"Your at position "+(i+1));
             
 });
 
