// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {

    let health1 = fighter1.health
    let health2 = fighter2.health
    let damage1 = fighter1.damagePerAttack
    let damage2 = fighter2.damagePerAttack
    let name1 = fighter1.name
    let name2 = fighter2.name
    if(firstAttacker === name1){
      while(health1 > 0 || health2 > 0){
        health2 -= damage1
        console.log(`${name1} attacks ${name2}; ${name2} now has ${health2} health.`)
        if(health2<=0){
          break
        }
        health1 -= damage2
        console.log(`${name2} attacks ${name1}; ${name1} now has ${health1} health.`)
        if(health1<=0){
          break
        }
      }
    }else{
       while(health1 > 0 || health2 > 0){
        health1 -= damage2
        console.log(`${name1} attacks ${name2}; ${name2} now has ${health2} health.`)
        if(health1<=0){
          break
        }
        health2 -= damage1
        console.log(`${name2} attacks ${name1}; ${name1} now has ${health1} health.`)
        if(health2<=0){
          break
        }
      }
    }
    if(health1 > health2){
      return `${name1}`
    }else{
      return `${name2}`
    }
  }