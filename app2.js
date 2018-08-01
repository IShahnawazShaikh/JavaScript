var customerArray=['Irfan','Sami','Pasha','Pasha','Shahnawaz','Anas','Umar'];
function findArray(Name){
	var i;
	var k=0;
	var myFunction;
	 for(i=0;i<customerArray.length;i++){
	 	if(customerArray[i]==Name){
	 		k=i;
	 		myFunction=function(){
	 			alert("You are Custumer Number="+(k+1));
	 		}
	 	}
	 	
	 }
	 return myFunction;
	 
}
var Answer=findArray('Shahnawaz');
var h=Answer();