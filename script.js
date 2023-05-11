
//to select an element by id
let score0e=document.querySelector('#score--0');
let score1e=document.getElementById('score--1');
let curscore0=document.querySelector('#current--0');
let curscore1=document.querySelector('#current--1');
let dicel=document.querySelector('.dice');
let btnnew=document.querySelector('.btn--new');
let btnroll=document.querySelector('.btn--roll');
let btnhold=document.querySelector('.btn--hold');
let player0= document.querySelector('#name--0');
let player1= document.querySelector('#name--1');


let curscore=0;
let score0=0,score1=1;
let ok=true;
//assignig text to 0
score0e.textContent=0,score1e.textContent=0;

//hidding the dice image we add a hidden class to this
dicel.classList.add('hidden');

//rolling dice functionallity

btnroll.addEventListener('click',()=>{
    //generate random number
   const random=(Math.floor(Math.random()*6))+1;

   //display dice
   dicel.classList.remove('hidden');
  // to change to src of image 
   dicel.src=`dice-${random}.png`;

  //check for rolled dice
  
   if(random!=1)
   {
      //add dice to current score
      curscore+=random;
      if(ok)
      {curscore0.textContent=curscore;
         if(score0+curscore>=100)
         {
          
            player0.textContent='Player 1 won the game';
            player0.style.color='green';
            score0+=curscore;
         score0e.textContent=score0;

         }
    }
      else 
      {curscore1.textContent=curscore;
        if(score1+curscore>=100)
        {
        
           player1.textContent='Player 2 won the game';
           player1.style.color='green';
           score1+=curscore;
         score1e.textContent=score1;

        }
    }

   }
   else 
   {
      if(ok)
      {
         score0+=curscore;
         score0e.textContent=score0;
         curscore=0;
         curscore0.textContent=curscore;
         ok=!ok;
      }
      else 
      {
        score1+=curscore;
        score1e.textContent=score1;
        curscore=0;
        curscore1.textContent=curscore;
         ok=!ok;
      }
       
   }


});

let reset=()=>{
    curscore=0;
    score0=0,score1=1;
     ok=true;
     dicel.classList.add('hidden');
     curscore0.textContent=curscore;
     curscore1.textContent=curscore;
     score0e.textContent=score0;
     score1e.textContent=score0;
     player0.textContent='Player 1 ';
     player0.style.color='black';
     player1.textContent='Player 2 ';
     player1.style.color='black';
};
btnnew.addEventListener('click',reset);

btnhold.addEventListener('click',()=>{
    if(ok)
    {
       score0+=curscore;
       score0e.textContent=score0;
       curscore=0;
       curscore0.textContent=curscore;
       ok=!ok;
    }
    else 
    {
      score1+=curscore;
      score1e.textContent=score1;
      curscore=0;
      curscore1.textContent=curscore;
       ok=!ok;
    }
});