// actions for Feral Hound

// let fhHealth1 = 20;
// let fhHealth2 = 20;
// let grdHealth = 25;

let SUMMON_GUARD = 0;
let maxH = 20;

export const enemyData = {
    gnaw: 10,
    pounce: 10,
    grdsmnAttack: 15,
    howl: function(){
        if(SUMMON_GUARD<5){
            SUMMON_GUARD++;
        }
    },
    attackRoll: function(){
        // generate number bw 0-1
        let enemyAtkMod = Math.random();
        console.log("Enemy RNG:", enemyAtkMod);
        // round up the generated number
        let enemyAtk = parseFloat(enemyAtkMod.toFixed(1));
        console.log("Enemy rolled:", enemyAtk);
    },
    feralHound1Attack: function(){
        this.attackRoll();
        if(this.enemyAtkMod >= 0.66){
            let enemyActOut = this.pounce * this.enemyAtk;  
            console.log("Feral Hound used POUNCE to deal STAMINA DAMAGE:", enemyActOut);
            maxS -= enemyActOut;
            console.log("Your STAMINA is now:", maxS);
        } else if(this.enemyAtkMod >= 0.33) {
            let enemyActOut = this.gnaw * this.enemyAtk;  
            console.log("Feral Hound used GNAW to deal HEALTH DAMAGE:", enemyActOut);
            
            // Stamina check
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
            this.howl();  // Call howl method properly
        }
    
        if(maxH <= 0){
            alert("Game Over");
        }
    },
    feralHound2Attack: function(){
        this.attackRoll();
        if(this.enemyAtkMod >= 0.66){
            let enemyActOut = this.pounce * this.enemyAtk;  
            console.log("Feral Hound used POUNCE to deal STAMINA DAMAGE:", enemyActOut);
            maxS -= enemyActOut;
            console.log("Your STAMINA is now:", maxS);
        } else if(this.enemyAtkMod >= 0.33) {
            let enemyActOut = this.gnaw * this.enemyAtk;  
            console.log("Feral Hound used GNAW to deal HEALTH DAMAGE:", enemyActOut);
            
            // Stamina check
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
            this.howl();  // Call howl method properly
        }
    
        if(maxH <= 0){
            alert("Game Over");
        }
    },
    // guardsManAttack: function(){

    // },
};