const mainMenu= document.getElementById("mainMenu");
const gameScene =
document.getElementById("gameScene");
const ending=document.getElementById("ending");

const startButton=
document.getElementById("startButton");
const restartButton=
document.getElementById("restartButton");
const clueMessage=
document.getElementById("cluemessage");
const clueCount=document.getElementById("cluecount");
const secretCode=
document.getElementById("secretCode");
const unlockButton=
document.getElementById("unlockButton");
const gameMessage=
document.getElementById("gameMessage");
// stored discovered clues
const discoveredClues = new Set();
//clue information
const clues = {
    eye:{
        title:"THE WATCHER",
        message: "The silver eye reveals the first number:4"
    },
    clock:{
        title: "THE KEEPER",
        message:"The silent clock reveals the second number:2"
    },
    star:{
        title:" THE GUIDE",
        message: " The shining star reaveals the final number:7"
    }
    };
    //start game
    startButton.addEventListener("click",function(){
        mainMenu.classList.add("hidden");
        gameScene.classList.remove("hidden");
});
//examine clues
const clueButtons=
document.querySelectorAll(".clueButton");
clueButtons.forEach(function(button){
    button.addEventListener("click",function(){
        const clueName=button.dataset.clue;
        const clue=clues[clueName];
        discoveredClues.add(clueName);
        clueMessage.textContent=
        clue.title +":"+clue.message;
        clueCount.textContent=
        "Clues discovered:" + discoveredClues.size +"/3";
        button.textContent="DISCOVERED";
    });
});
//Check secret code
unlockButton.addEventListener("click",function(){
    if(discoveredClues.size<3){
        gameMessage.textContent=
        "You must discovered all three clues first";
        return;
    }
    if(secretCode.value.trim()==="472"){
        gameScene.classList.add("hidden");
        ending.classList.remove("hidden");
    }else{
        gameMessage.textContent=
        "That code is incorrect.Think again";
    }
});
//Restart game
restartButton.addEventListener("click",function(){
    discoveredClues.clear();
    secretCode.value="";
    clueMessage.textContent=
    "You haven't discovered any clues yet.";
    clueCount.textContent=
    "Clues discovered:0/3";
    clueButtons.forEach(function(button){
        button.textContent="EXAMINE";
    });
    ending.classList.add("hidden");
    mainMenu.classList.remove("hidden");
});
