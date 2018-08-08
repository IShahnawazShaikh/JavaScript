var array=["shahnawaz","shakib","Amil","Pasha","Irfan"];
function createFunction(arr,callback){
	    var array2=[];
	    for(var i=0;i<arr.length;i++){
	    
                 array2[i]=callback(arr[i]);
	    }
    return array2;
}

var Engineer=createFunction(array,function(x){
	return ("Er."+x);

});
console.log(Engineer);
/////////////////////////////////////////////////

function print(){
	console.log("setTimeout function");
}
setTimeout(print,2000);

/////////////////////////////////////////////////