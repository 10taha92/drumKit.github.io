var Buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < Buttons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    count_p();
    //count_p2();

    var buttonInnerHTML = this.innerHTML;

    scoreIn(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  count_p(event.key);

  //count_p2(event.key);

  buttonAnimation(event.key);

});
var p1=0,p2=0;

var win_count_p1=0,win_count_p2=0;


var round = 1;
function count_p(key)
{

  if(key=="w" )
  {
    var randomNumber1 = Math.floor(Math.random() * 5) + 1;
 p1=p1+randomNumber1;

 console.log("player 1  :" +p1);

  }

else
{
  var randomNumber2 = Math.floor(Math.random() * 5) + 1;


p2=p2+randomNumber2;
 console.log("player 2  :" +p2);
}

if(p1>p2 && p1 >=100)
{
  console.log("winner is p1"+ win_count_p1);
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins the round "+round+" ! ";
  win_count_p1=win_count_p1+1;
  round=round+1;
   
  p1=0;
  p2=0;
 
 
  
}
else if(p2>p1 && p2>=100)
{
  win_count_p2=win_count_p2+1;
    console.log("winner is p2 : wincount : " + win_count_p2);
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins the round "+round+" ! ";
    round=round+1;
  
    p1=0;
  p2=0;
  
  

}
  else if(p2>p1 && p1>=100 && p2>=1000){
     document.querySelector("h1").innerHTML = round+" 🚩 draw";
     round=round+1;
     
  }

  if(round==6 && win_count_p1>win_count_p2)
  {
    console.log("p1 is ultimate winner");
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins whole match by "+win_count_p1+" ! ";
    document.querySelector("h2").innerHTML = "refresh the page";

    win_count_p1=0;
  round=1;


  }
  else if(round==6 && win_count_p2>win_count_p1){
    console.log("p2 is ultimate winner");
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins whole match by "+win_count_p2+" ! ";
    document.querySelector("h2").innerHTML = "refresh the page";
    
    win_count_p2=0;
  round=1;
  }
 
  else if(round==6 && win_count_p2==win_count_p1) {
   document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("h2").innerHTML = "refresh the page";
   }


 
  // if (randomNumber1 > randomNumber2) {
  //   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  // }
  // else if (randomNumber2 > randomNumber1) {
  //   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  // }
  // else {
  //   document.querySelector("h1").innerHTML = "Draw!";
  // }




}





function scoreIn(key) {

  switch (key) {
    case "w":
      count_p1();

      break;

    case "a":
     
      count_p2();
      break;

    


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
