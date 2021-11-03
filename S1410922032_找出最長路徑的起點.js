//S1410922032_FindTheStartingPointOfTheLongestPath

const readline = require("readline-sync");

var Row=6, Col=6;    //Row & Column
var aryBox=[];    
var aryVisited=[]   //Visited
var StepRecord=[]   //Step Record

//Find The Longest Path Starting Point
//Take The Most Steps = The Beginning Of The Longest Path

   for(i=0;i<6;i++){ 
       for(k=0;k<6;k++){
           
        for (let r = 0; r <Row; r++) {    //6 Rows / Value 0~5
            aryBox.push([]);
            aryVisited.push([]);
            for (let c = 0; c < Col; c++) {
                aryBox[r][c]=Math.floor(Math.random()*Row)+","+Math.floor(Math.random()*Col); //"r,c"
                aryVisited[r][c]=0;
            }
        }

   var startR=i;
   var startC=k;
   var idx= aryBox[startR][startC].split(",");
   
   aryVisited[startR][startC]=1;  //The Place That Walked Becomes 1
   console.log("Visit:"+ startR+", "+startC);
   var StepCount=0; //Step Count
   

   
   //loop
   while(true){
       var nextR = parseInt(idx[0]);  //Next Step Of Row
       var nextC = parseInt(idx[1]);  //Next Step Of Column
       if(aryVisited[nextR][nextC]==1){  //If Go To A Repeated Location, End The Game
           console.log("GAME OVER!!!");
           console.log("Total Of Steps = " +StepCount) //Show Total Of Steps
           StepRecord.push(StepCount);
           break;
              }
        else      
       {
         var idx= aryBox[nextR][nextC].split(",");
         aryVisited[nextR][nextC]=1;      //If Not Repeating ,Continue The Game
         console.log("Visit:"+ nextR+", "+nextC);
         StepCount++; //Step Count +1
         
       }
   }
}
   }
   
   //Print StepRecord
   console.log(StepRecord.toString());

   //Find The Highest Number Of Steps
   Array.max = function( array ){
    return Math.max.apply( Math, array );
    };
    console.log("Highest Number Of Steps = "+Array.max(StepRecord)); 
    var x;
    x=(StepRecord.indexOf(Array.max(StepRecord)));  //Get The Highest Number Of Steps And Go Back To The Starting Point
    console.log("Starting Point Of The Longest Path Is：["+Math.floor(x/6)+","+(x%6+"]"));
  
