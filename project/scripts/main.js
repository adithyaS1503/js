//PC stat
let maxH = 20;
let maxS = 10;
let maxM = 5;

//nme stat 
let fhH = 15;
let grdsmnH = 30;

let OPPONENTS_QUEUE = 3;
let ROUNDS = 0;
let SUMMON_GUARD = 0;

function userPrompt(){
    let userInput = prompt("Choose: \n\t1. A \n\t2. H \n\t3. B\n\t4. Use Special\n\t5. Forego Round");
    switch(parseInt(userInput)){
        case 1: case 2: case 3: 
            actionRoll(userInput);
            break;
        case 4: 
            let spclMove = prompt("WIP\n");
            // let spclMove = prompt("Choose Special:\n\t1. Potion of Second Chance\n\t2. Healing Elixir\n\t3. Stamina Elixir\n\t4. Magicka Elixir\n\t5. exit")
            console.log("Chosen special:",spclMove)
        default:
            console.log("idk");
    }
}


while(maxH>0){
    if(fhH<=0){
        break;
    }
    userPrompt();
    fhAttack();
    fhAttack();
    ROUNDS++;
}




// maybe I'll combine this function and actModifier into one. 
// atkBase - atk Modifier float, atk - atk modifier, actionOut - 
function actionRoll(userInput){
    let isBlock = 0;
    let actionOut = 0;

    // checking what the user input was
    if(userInput==1){
        console.log("A:10dmg");
        userInput = 10;
    } else if(userInput==2){
        console.log("H:15dmg");
        userInput = 15;
    } else{
        console.log("B:-10dmg");
        isBlock = 1;
        userInput = 10;
    }
    
    let actBase = Math.random()
    console.log("Your RNG bw 0-1:",actBase)
    act = parseFloat(actBase.toFixed(1))
    console.log("You rolled:",act)
    actionOut = userInput * act;
    
    if(isBlock!=0){
        console.log("Your block/damage negation is:",actionOut);
    } else{
        console.log("Your attack output:",actionOut);
        fhH -= actionOut;
        console.log("Feral Hound health is:",fhH);
        if(fhH <= 0){
            alert("You have killed the beast.");
        }
    }
}

const feralHound = {
    gnaw: 10,
    pounce: 10,
    howl: SUMMON_GUARD++
};

//Enemy rolls
function fhAttack(){
    let enemyActOut = 0;
    let enemyAtk = Math.random();
    console.log("Enemy RNG:",enemyAtk);
    enemyAtk = parseFloat(enemyAtk.toFixed(1));
    console.log("Enemy rolled:",enemyAtk);
    maxH -= enemyAtk;
    console.log("Your health is now:",maxH);
    
    if(maxH<=0){
        alert("Game Over");
    }
    return enemyAtk;
}