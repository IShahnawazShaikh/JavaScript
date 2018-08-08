var acc=["Insta","Fb","whatsApp"];
var Singer={
    Name:"Bilal Saeed",
   'no of follower':0,
   account:acc,
   addFollower:function(fan){
        for(var i=0;i<this.account.length;i++){
        	// console.log("Shahnawaz")
        	if(fan.acc==this.account[i]){
        	this['no of follower']++;
        	//console.log(this['no of follower']);
        	this['Follower'+this['no of follower']]=fan.Name;
        }
    }
                 
  },

    printDetail:function(){
       console.log("Total Fan "+this['no of follower']);
       console.log("Fan List are");
       for(var i=1;i<=this['no of follower'];i++){
       	console.log(i+". "+this['Follower'+i])
       } 
    }
};
var fan1={
	Name:"Shahnawaz Shaikh",
	acc:"whatsApp"
};
var fan2={
	Name:"Amil",
	acc:"Gmail"
};

var fan3={
	Name:"Pasha",
	acc:"Fb"
};

var fan4={
	Name:"Irfan",
	acc:"Insta"
};

var fan5={
	Name:"Sami",
	acc:"whatsApp"
};

var fan6={
	Name:"Umar",
	acc:"Github"
};
Singer.addFollower(fan1)
Singer.addFollower(fan2)
Singer.addFollower(fan3)
Singer.addFollower(fan4)
Singer.addFollower(fan5)
Singer.addFollower(fan6)
Singer.printDetail();

/////////////////////////////////////////////////////////
                ///Access Without Using function////
                  console.log(Singer['Follower1']);
                 console.log(Singer['Follower2']);
                 console.log(Singer['Follower3']);
                 console.log(Singer['Follower4']);
//////////////////////////////////////////////////////////
