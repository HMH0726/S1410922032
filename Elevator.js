//S1410922032_Elevator
//https://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing

console.log("S1410922032");

const readline = require('readline-sync');

var Floor =Array(25) ;
var CurrentFloor ;
var TargetFloor ;



var delay = function(s){
  return new Promise(function(resolve,reject){
   setTimeout(resolve,s); 
  });
};



for(var i=0;i<=25;i++)  //Building
{
    
    Floor[i]=i;
     
};

console.log("This Building Have"+Floor+"Floors"); //Print Each Floor Names 


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

CurrentFloor = getRndInteger(0,25)  //Set Current Floor



console.log(TargetFloor);



while(true){ //Loop
  //Enter Target Floor
  TargetFloor = readline.question("We Are On The Floor "+CurrentFloor+",Which Floor Do You Want To Go?"); //Set TargetFloor
  
  if(TargetFloor==CurrentFloor){

      console.log("Already Here");      
    sleep(1000)
      console.log("GET OUT!!");     

      break;
  }else{
   
   if(TargetFloor<CurrentFloor){ //Down
      console.log("Going Down...");
      
      while(TargetFloor < CurrentFloor){
        
           CurrentFloor--;
          console.log("We Are On The Floor"+CurrentFloor);
          
      }
      
   }else{//Up
      console.log("Going Up...");
      
      do{    
          CurrentFloor = CurrentFloor + 1;
          console.log("We Are On The Floor"+CurrentFloor);
          
      }while(TargetFloor > CurrentFloor);
   }
  }
}






//sleep(1000)

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}