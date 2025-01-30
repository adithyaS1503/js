/*
To do: 
Stop executing functions when chars are dead.
*/


let isBlock = 0;
let userInput = 0;

// Have to put health and stamina values here otherwise they reset
let health = 20;
let stamina = 10; 
let feralHoundHealth = 10;


// Meta
let OPPONENTS_QUEUE = 1; // ++ when any other enemy spawns
let ROUNDS = 0;
let SUMMON_GUARD = 0;

let isHound1Active = 1; //always 1, first enemy



const enemyData = {

    // feralHoundHealth: 10,
    gnaw: 15,
    pounce: 5, // Pounce used to be 10. OP. Then 5, also OP.
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
            if(isBlock!=0){
                let enemyActOut = this.pounce * this.enemyAtk;
                console.log("Before damage negate:",enemyActOut);
                enemyActOut -= 5;
                if(enemyActOut<=0){
                    console.log("Perfect BLOCK!");
                    enemyActOut = 0;
                }
                console.log("Feral Hound used POUNCE to deal STAMINA DAMAGE:", enemyActOut);
                stamina -= enemyActOut;
                console.log("Your STAMINA is now:", stamina);
            
            } else{

                enemyActOut = this.pounce * this.enemyAtk; 
                stamina -= enemyActOut;
                if(stamina <= 0)
                {
                    enemyActOut=0;
                    console.log("You have no STAMINA left, the Feral Hound knocks you down.");           
                }else{
                console.log("Feral Hound used POUNCE to deal STAMINA DAMAGE:", enemyActOut);
                console.log("Your STAMINA is now:", stamina);
                }
            }

        } else if(this.enemyAtkMod >= 0.33) {
            
            if(isBlock!=0){
                let enemyActOut = this.gnaw * this.enemyAtk;
                console.log("Before damage negate:",enemyActOut);
                enemyActOut -= 5;
                if(enemyActOut<=0){
                    console.log("Perfect BLOCK!");
                    enemyActOut = 0;
                }
                console.log("Feral Hound used GNAW to deal HEALTH DAMAGE:", enemyActOut);
                health -= enemyActOut;
                console.log("Your HEALTH is now:", health);
            } else{
                let enemyActOut = this.gnaw * this.enemyAtk;
                console.log("Feral Hound used GNAW to deal HEALTH DAMAGE:", enemyActOut);
                health -= enemyActOut;
                console.log("Your HEALTH is now:", health);
            }
        } else {
            this.howl();  
        }
    }
};


// Need to figure out how this works.
const queueMgmt = {
    execEle: function(){
        console.log(`Array is: ${nmeQ}`);
        var nmeQ = [enemyData.hound1()];
    },
    addEle: function(){
        this.nmeQ.push();
    },
    removeEle: function(){
        this.nmeQ.pop();
    }
};



const playerDat = {
    attack: 10,
    hAttack: 15,
    determineAction: function(){
        if(userInput==1){
            console.log("You used ATTTACK:10dmg");        
            userInput = this.attack;
            this.playerRoll(userInput);
        } else if(userInput==2){
            console.log("You used HEAVY-ATTACK:15dmg");
            userInput = this.hAttack;
            this.playerRoll(userInput);
        } else if(userInput==3) {
            console.log("You used BLOCK.");
            isBlock++;
        } else{
            console.log("Foregoing Round...");
        }
        
        // this.playerRoll(userInput);
    },
    playerRoll: function(userInput){
        // RNG bw 0-1
        let roll = Math.random();
        console.log("Your RNG bw 0-1:",roll);
        // converting something like 2.89279 to 3
        let modifier = parseFloat(roll.toFixed(1));
        console.log("Your modifier:",modifier);
        attackValue = userInput * modifier;
        console.log("Your output:",attackValue);
        this.playerAttack(attackValue);
    },
    playerAttack: function(attackValue){
        // Actual damage happens here:
        if ((feralHoundHealth - attackValue) <= 0){
            feralHoundHealth = 0;
            isHound1Active = 0;
            console.log(`Feral Hound has died.`);
        } else{
            feralHoundHealth -= attackValue;
            console.log(`Feral Hound health is now: ${feralHoundHealth}`);
        }
    }
};



while(health > 0){
    if(ROUNDS == 0){
        console.log("COMMENCE BATTLE");
        console.log(`Your HEALTH is ${health} and STAMINA is ${stamina}`);
    } else if(ROUNDS>0){
        console.log(`\nROUND ${ROUNDS}`);
        console.log(`Your current stats: \nHEALTH is ${health} \nSTAMINA is ${stamina}`);
    }


    userInput = parseInt(prompt("Choose: \n\t1. Attack \n\t2. Heavy-Attack \n\t3. Block\n\t4. Forego Round"));
    playerDat.determineAction(userInput);


    // Checking to see if enemy is active
    if(feralHoundHealth!=0){
        if(isHound1Active!=0){

            // is this the code that exeuctes attack?
            queueMgmt.execEle();

            // enemyData.hound1(); 
            // this or the one above, both work.
            
            // console.log("Checking if I can call fhAttack1 from array")
            // nmeQ[0];
        } else{
            queueMgmt.removeEle(); //removes first element which is always feralHound1.
        }
        console.log(`Feral Hound stats:\nHealth: ${feralHoundHealth}\nHowls: ${SUMMON_GUARD}`);
    } else{
        console.log("Feral Hound Slain");
        break;
    }

    // userPrompt();

    if (health <= 0) {
        console.log("You have died.");
        break;
    }

    console.log("\nEND OF ROUND");
    isBlock = 0;
    ROUNDS++;
}