function ticketCountr(Time){
  var iteration=0;
  var s=[];
    return [function(Name){
     s.push(Name);
     ++iteration;
     console.log("Welcome "+Name+" You are Customer Number "+iteration+" For "+Time+" Show");
    },
     function(){
      alert("Name of Persons in "+Time+" Show="+s);
      }
    ];
    
}
var day=ticketCountr("Day");
var evening=ticketCountr("Evening");
var night=ticketCountr("night");
day[0]("Shahnawaz");
day[0]("Pasha");
day[0]("Irfan");
evening[0]("Amil");
evening[0]("Anas");
evening[0]("Arif");
night[0]("Umar");
night[0]("Talha");
night[0]("Sami");
day[1]();
evening[1]();
night[1]();
