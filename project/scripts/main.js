let userInput = prompt("Choose: \n\t1. A \n\t2. H \n\t3. B\n\t4. Use Special\n\t5. Forego Round");
console.log(userInput, typeof userInput);


switch(parseInt(userInput)){
    case 1: 
        userInput = 10;
        console.log("Perfect attack deals 10 damage")
        actionRoll(userInput);
        break;
    case 2:
        userInput = 15;
        console.log("Perfect heavy attack deals 15 damage")
        actionRoll(userInput);
        break;
    case 3: 
        userInput = 10;
        console.log("Perfect block negates 10 damage")
        actionRoll(userInput);
        break;
    case 4: 
        let spclMove = prompt("WIP\n");
        // let spclMove = prompt("Choose Special:\n\t1. Potion of Second Chance\n\t2. Healing Elixir\n\t3. Stamina Elixir\n\t4. Magicka Elixir\n\t5. exit")
        console.log("Chosen special:",spclMove)
    default:
        console.log("Onwards!");
}

// actionRoll(parseInt(userInput));

// For brb/wrr/kng
const a = 10;
const h = 15;
const b = 10;
// const aFlry = 15;
// I'll make aFlry and impShld as yes/no boolean. 

// maybe I'll combine this function and actModifier into one. 
function actionRoll(userInput){
    let atkBase = Math.random()
    atk = parseFloat(atkBase.toFixed(1))
    console.log("You rolled:",atk)
    return actModifier(atk, userInput)
}

function actModifier(atk, userInput){
    let actionOut = userInput * atk;
    console.log("Your attack/block output:",actionOut);
    fhAttack();
}


//Enemy stuff 

function enemyQueue(){
    const feralHound ={
        gnaw: fhAttack(),
        pounce: fhAttack(),
        howl: fhAttack(),
    };
    const guardsMan = {
        attack: fhAttack(),
        heavyAttack: fhAttack(),
        block: fhAttack(),
    };
}

// reusing for now
function fhAttack(){
    let enemyAtk = Math.random()
    enemyAtk = parseFloat(enemyAtk.toFixed(1))
    console.log("Enemy rolled:",enemyAtk)
}
