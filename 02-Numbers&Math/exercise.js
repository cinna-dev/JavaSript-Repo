let luckyNumArr = [];
let UserNumArr = [];
let WinningsArr = [];
let winnings = 0;
for(i=0;i<101;i++){ 
function luckyNumber(){
let luckyNum = Math.floor(Math.random()*100+1);  
    if(luckyNum == userNum){
        winnings += 100;
        WinningsArr.push(winnings);
        UserNumArr.push(userNum);
        luckyNumArr.push(luckyNum);
    }else if(Math.abs(luckyNum - userNum) <= 10){
      winnings += 100 - Math.abs(luckyNum - userNum);
      WinningsArr.push(winnings);
        UserNumArr.push(userNum);
        luckyNumArr.push(luckyNum);
    }else{
        winnings += 0;
        } 
    
        console.log
    return  winnings ;
}
let userNum = Math.floor(Math.random()*100+1);
luckyNumber();
}

console.log(`LuckyNumber:${luckyNumArr} UserNumber:${UserNumArr} Winnings:${WinningsArr}`);
//console.log(luckyNum,userNum,Math.abs(luckyNum-userNum));
