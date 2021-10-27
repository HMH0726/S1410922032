//S1410922032
var PokerDeck=[];	//Make A Deck

for(var i=0;i<13;i++){
    
   PokerDeck.push("H"+(parseInt(i%13)+1));	//Heart
   PokerDeck.push("S"+(parseInt(i%13)+1));	//Spade
   PokerDeck.push("C"+(parseInt(i%13)+1));	//Club
   PokerDeck.push("D"+(parseInt(i%13)+1));	//Diamond
   
}

console.log(PokerDeck.toString());	//Print Cards

var player1=[], player2=[], player3=[],player4=[];	//Define Player

//Sort
function sortnumber(a,b){
    if(b.charCodeAt(0) == a.charCodeAt(0)) 
    {  return b.slice(1,b.length)-a.slice(1,a.length);}

    else{ return b.charCodeAt(0) - a.charCodeAt(0)
        }
}

//Shuffle
function compare(a,b){
        return Math.random()-0.5;
}
PokerDeck.sort(compare);
console.log(PokerDeck.toString()); 

//Dealing Cards...
console.log("Dealing Cards...");

//Dealing Cards To Player1
for(var x=0,y=0; y<13; x++){   
	player1[x]=PokerDeck[y++];}
	player1.sort(sortnumber);//Sorting Hands
	console.log("Player1:"+player1)

//Dealing Cards To Player2
for(var x=0,y=13; y<26; x++){  
	player2[x]=PokerDeck[y++];}
	player2.sort(sortnumber);//Sorting Hands
	console.log("Player2:"+player2)

//Dealing Cards To Player3
for(var x=0,y=26; y<39; x++){  
	player3[x]=PokerDeck[y++];}
	player3.sort(sortnumber);//Sorting Hands
	console.log("Player3:"+player3)

//Dealing Cards To Player4
for(var x=0,y=39; y<52; x++){  
	player4[x]=PokerDeck[y++];}
	player4.sort(sortnumber);//Sorting Hands
	console.log("Player4:"+player4)