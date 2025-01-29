// import { enemyData } from "./additionalEncounters.js";

/*
Stuff to do: 
1. implement block
2. deal with stamina damage
3. GuardsMan


*/


//PC stat
let maxH = 20;
let maxS = 10;
let maxM = 5;
let BLOCK = 0;

//nme stat
let fhH = 20;
let fhH2 = 30;
let grdsmnH = 30;

// enemy stats for the module
let fhHealth1 = 20;
let fhHealth2 = 20;
let grdHealth = 25;

// Meta
let OPPONENTS_QUEUE = 3;
let ROUNDS = 0;
let SUMMON_GUARD = 0;

let isHound2Active = 0;
let isGuardsManActive = 0;


function userPrompt(){
    let userInput = prompt("Choose: \n\t1. A \n\t2. H \n\t3. B\n\t4. Use Special\n\t5. Forego Round");
    switch(parseInt(userInput)){
        case 1: case 2: case 3:
            actionRoll(userInput);
            break;
        case 4:
            let spclMove = prompt("WIP\n");
            console.log("Chosen special:",spclMove)
        default:
            console.log("idk");
    }
}




const enemyData = {
    gnaw: 10,
    pounce: 10,
    howl: function() {
        if(SUMMON_GUARD<5){
            SUMMON_GUARD++;
        } 
        console.log("The hound seems to be calling out...");
    },
    attackRoll: function(){
        // Generate random number bw 0-1
        this.enemyAtkMod = Math.random();
        console.log("Enemy RNG:", this.enemyAtkMod);
    
        // Round up the random number
        this.enemyAtk = parseFloat(this.enemyAtkMod.toFixed(1));
        console.log("Enemy rolled:", this.enemyAtk);
    },    
    hound1: function fhAttack1(){
        console.log("\nFeral Hound Turn");
    
        // Call attackRoll() to assign enemyAtkMod and enemyAtk
        this.attackRoll();
    
        if(this.enemyAtkMod >= 0.66){
            let enemyActOut = this.pounce * this.enemyAtk; 
            console.log("Feral Hound used POUNCE to deal STAMINA DAMAGE:", enemyActOut);
            maxS -= enemyActOut;
            console.log("Your STAMINA is now:", maxS);
        } else if(this.enemyAtkMod >= 0.33) {
            let enemyActOut = this.gnaw * this.enemyAtk;  
            console.log("Feral Hound used GNAW to deal HEALTH DAMAGE:", enemyActOut);
    
            if(maxS >= 8){
                maxH -= enemyActOut;
            } else if(maxS >= 5) {
                enemyActOut += 2;
                console.log("+LOW STAMINA BONUS, Feral Hound now deals damage:", enemyActOut);
                maxH -= enemyActOut;
            } else if(maxS > 0) {
                enemyActOut += 5;
                maxH -= enemyActOut;
            } else {
                enemyActOut *= enemyActOut;
                maxH -= enemyActOut;
            }
            console.log("Your HEALTH is now:", maxH);
        } else {
            this.howl();  
        }
    
        if(maxH <= 0){
            alert("Game Over");
        }
    },
    hound2: function fhAttack2(){
        console.log("\nFeral Hound 2 Turn");

        if(this.enemyAtkMod >= 0.75){
            let enemyActOut = this.pounce * this.enemyAtk; 
            console.log("Feral Hound used POUNCE to deal STAMINA DAMAGE:", enemyActOut);
            maxS -= enemyActOut;
            console.log("Your STAMINA is now:", maxS);
        } else if(this.enemyAtkMod >= 0.25) {
            let enemyActOut = this.gnaw * this.enemyAtk;  
            console.log("Feral Hound used GNAW to deal HEALTH DAMAGE:", enemyActOut);
            
            if(maxS >= 8){
                maxH -= enemyActOut;
            } else if(maxS >= 5) {
                enemyActOut += 2;
                console.log("+LOW STAMINA BONUS, Feral Hound now deals damage:", enemyActOut);
                maxH -= enemyActOut;
            } else if(maxS > 0) {
                enemyActOut += 5;
                maxH -= enemyActOut;
            } else {
                enemyActOut *= enemyActOut;
                maxH -= enemyActOut;
            }
            console.log("Your HEALTH is now:", maxH);
        } else {
            this.howl();  
        }
        if(maxH <= 0){
            alert("Game Over");
        }
    }
};


const guardsMan = {
    attack: 10,
    block: 5,
    isAttacking: function guardAttack(){

    } 
};


// Queues 

while(maxH>0){
    if(ROUNDS==0){
        console.log("COMMENCE BATTLE");
    } else if(ROUNDS>0){
        console.log("NEW ROUND. ROUND number: ",ROUNDS);
        console.log("Your STATS are now: H:",maxH," S:",maxS," M:",maxM);
        console.log("Feral Hound STATS: H:",fhH," Howls:",SUMMON_GUARD);
    }
    userPrompt();
    enemyData.hound1();
    console.log("\nEND OF ROUND");
    ROUNDS++;
}




// maybe I'll combine this function and actModifier into one.
// atkBase - atk Modifier float, atk - atk modifier, actionOut -
function actionRoll(userInput){
    let isBlock = 0;
    let actionOut = 0;

    // checking what the user input was
    if(userInput==1){
        console.log("You used ATTTACK:10dmg");        
        userInput = 10;
        if(maxS>=3){
            userInput -= 2;
        }
        maxS -= 1;
        if(maxS<=0){
            userInput = 0;
        }
    } else if(userInput==2){
        console.log("You used HEAVY-ATTACK:15dmg");
        userInput = 15;
        maxS -= 2;
    } else{
        console.log("You used BLOCK:-10dmg");
        isBlock = 1;
    }

    let actBase = Math.random()
    console.log("Your RNG bw 0-1:",actBase)
    act = parseFloat(actBase.toFixed(1))
    console.log("You rolled:",act)
    actionOut = userInput * act;

    if(isBlock!=0){
        console.log("Your block/damage negation is:",actionOut);
        BLOCK += userInput;
    } else{
        console.log("Your attack output:",actionOut);
        fhH -= actionOut;
        console.log("Feral Hound health is:",fhH);
        if(fhH <= 0){
            alert("You have killed Feral Hound.");
        }
    }
}