const wordText = document.querySelector('.word');
const clue = document.querySelector('.hint span');
const refreshBtn = document.querySelector('.refresh-word');
const checkBtn = document.querySelector('.check-word');
const inputEl = document.querySelector('input');
const timeEl = document.querySelector('.time b');

let randomObj, timer;

const timeCounter = maxTime => {
    clearTimeout(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeEl.innerHTML = maxTime;
        }
        clearInterval(timer);
        alert("Oops! Try again!");
        initGame();
    }, 1000);
}
const initGame = ()=> {
    timeCounter(30);
    // Pick random object(i.e word and hint)
    randomObj = words[Math.floor(Math.random() * words.length)];
    // Pick a word from the object and split it to character
    let wordArray = randomObj.word.split("");
    //console.log(wordArray);
    // Shuffle and swap the characters
    for(let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        //console.log(j);
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    console.log(wordArray);
    wordText.innerHTML = wordArray.join("");
    clue.innerHTML = randomObj.hint;
}
initGame();

refreshBtn.addEventListener("click", ()=>{
    initGame();
    inputEl.value = "";
});

checkBtn.addEventListener("click", ()=>{

     let userAns = inputEl.value.toLocaleLowerCase();
     if(!userAns) {
        alert("You didn't type any thing.");
    }else {
        if(userAns === randomObj.word) {
            alert("Correct!");
         }else {
            alert("Wrong!");
         }
    }
});




