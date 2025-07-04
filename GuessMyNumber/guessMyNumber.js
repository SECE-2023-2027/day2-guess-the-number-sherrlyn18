//get all nodes from html
const againbtn=document.querySelector(".btn-again");
const number=document.querySelector(".number");
const inputnumber=document.querySelector(".guess");
const checkbtn=document.querySelector(".btn-check");
const msg=document.querySelector(".message");
const score=document.querySelector(".score")
const highscore=document.querySelector(".highscore")

//generate a random num and score
let random=Math.trunc(Math.random()*20)+1;
let scores=20;
console.log(random);
console.log(scores);

//check btn functionality
const checkBtnFunc=()=>{
    const guessed=Number(inputnumber.value);
    if(!guessed){
        msg.textContent="Not entered any value";
    }else if(guessed===random){
        msg.textContent="Win";
        document.querySelector("body").style.backgroundColor="green";       
        number.textContent=guessed;
        highscore.textContent=scores;
        

    }else if(guessed<random){
        scores-=1;
        score.textContent=scores;
        msg.textContent="too low"
    }else if(guessed>random){
        scores-=1;
        score.textContent=scores;
        msg.textContent="too high";
    }
}
checkbtn.addEventListener("click",checkBtnFunc);

//again btn
const againbtnFunc=()=>{
    document.querySelector("body").style.backgroundColor="black";
    
}
againbtn