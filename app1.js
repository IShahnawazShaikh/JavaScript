var arr=[function(a,b,k){
      var result=1;
      for(k=0;k<=b;k++){
            result=result*a;
      }
      return result;
},function(a,b,k){
      var result=1;
      for(k=0;k<=b;k++){
            result=result*a;
      }
      return result;
},function(a,b,k){
      var result=1;
      for(k=0;k<=b;k++){
            result=result*a;
      }
      return result;
}];

for(i=0;i<3;i++){
  var result=arr[i](5,i,0);
  alert(result);
}