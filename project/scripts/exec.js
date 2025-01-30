// Player Stats
let playerHealth = 20;
let playerStamina = 10;
let isBlock = 0;

// Enemy Stats
let feralHoundHealth = 10;
let feralHoundHealth2 = 10;
let grdsmnH = 30;

// Meta
let OPPONENTS_QUEUE = 1;
let ROUNDS = 0;
let SUMMON_GUARD = 0;

let isHound1Active = 1;
let isHound2Active = 0;

let nmeQ = [];

const enemyData = {
    gnaw: 15,
    pounce: 5,
    howl: function() {
        if (SUMMON_GUARD < 5) {
            SUMMON_GUARD++;
        }
        console.log("The hound seems to be calling out...");
    },
    attackRoll: function() {
        this.enemyAtkMod = Math.random();
        this.enemyAtk = parseFloat(this.enemyAtkMod.toFixed(1));
        console.log("Enemy RNG:", this.enemyAtkMod, "Enemy rolled:", this.enemyAtk);
    },
    houndAttack: function(houndName) {
        console.log("Block:", isBlock);
        console.log(`\n${houndName} Turn`);

        this.attackRoll();

        if (this.enemyAtkMod >= 0.66) {
            let enemyActOut = this.pounce * this.enemyAtk;
            if (isBlock) {
                console.log("Before damage negate:", enemyActOut);
                enemyActOut = Math.max(0, enemyActOut - 5);
                console.log(enemyActOut === 0 ? "Perfect BLOCK!" : `${houndName} used POUNCE to deal STAMINA DAMAGE: ${enemyActOut}`);
            }
            playerStamina = Math.max(0, playerStamina - enemyActOut);
            console.log("Your STAMINA is now:", playerStamina);
        } else if (this.enemyAtkMod >= 0.33) {
            let enemyActOut = this.gnaw * this.enemyAtk;
            if (isBlock) {
                console.log("Before damage negate:", enemyActOut);
                enemyActOut = Math.max(0, enemyActOut - 5);
                console.log(enemyActOut === 0 ? "Perfect BLOCK!" : `${houndName} used GNAW to deal HEALTH DAMAGE: ${enemyActOut}`);
            }
            playerHealth = Math.max(0, playerHealth - enemyActOut);
            console.log("Your HEALTH is now:", playerHealth);
        } else {
            this.howl();
        }
    }
};

const playerData = {
    attack: 10,
    hAttack: 15,
    determineAction: function(userInput) {
        if (userInput === 1) {
            console.log("You used ATTACK: 10dmg");
            this.playerRoll(this.attack);
        } else if (userInput === 2) {
            console.log("You used HEAVY-ATTACK: 15dmg");
            this.playerRoll(this.hAttack);
        } else {
            console.log("You used BLOCK");
            isBlock++;
        }
    },
    playerRoll: function(userInput) {
        let roll = Math.random();
        let modifier = parseFloat(roll.toFixed(1));
        let attackValue = userInput * modifier;
        console.log("Your output:", attackValue);
    }
};

while (playerHealth > 0) {
    if (ROUNDS === 0) {
        console.log("COMMENCE BATTLE");
    } else {
        console.log(`\nNEW ROUND. ROUND number: ${ROUNDS}`);
        console.log(`Your STATS are now: H: ${playerHealth} S: ${playerStamina}`);
    }

    let userInput = parseInt(prompt("Choose: \n1. Attack \n2. Heavy-Attack \n3. Block"));
    playerData.determineAction(userInput);
    
    if (feralHoundHealth > 0 && isHound1Active) {
        enemyData.houndAttack("Feral Hound 1");
    }
    
    if (ROUNDS > 3 && isHound2Active && feralHoundHealth2 > 0) {
        enemyData.houndAttack("Feral Hound 2");
    }
    
    if (playerHealth <= 0) {
        console.log("You have died.");
        break;
    }

    console.log("\nEND OF ROUND");
    isBlock = 0;
    ROUNDS++;
}