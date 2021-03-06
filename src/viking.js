// Soldier
class Soldier {
constructor(health, strength) {
this.health = health;
this.strength = strength;
}
attack(){
return this.strength;
}
receiveDamage(damage) {
 this.health= this.health -damage ;
}
}

// Viking
class Viking extends Soldier{
constructor (name, health, strength ){
super(); //not sure if i need to receive health and strength/
this.name = name;
this.health = health;
this.strength =strength;
}
receiveDamage(damage) {
this.health= this.health - damage ;
if (this.health > 0){
return `${this.name} has received ${damage} points of damage`;
}
else {
   return `${this.name} has died in act of combat`; 
}
}
battleCry(){
return `Odin Owns You All!`;  
}
}

// Saxon
class Saxon extends Soldier {
attack(){
return this.strength;
}
receiveDamage(damage){
this.health= this.health - damage ;
if(this.health > 0){
return`A Saxon has received ${damage} points of damage`; 
} else {
return `A Saxon has died in combat`;
}
}
}

// War
class War {
 constructor() {
     this.vikingArmy = [];
     this.saxonArmy =[];
 }
 addViking(Viking){
 this.vikingArmy.push(Viking);
 }
 addSaxon(Saxon){
 this.saxonArmy.push(Saxon);
 }
 vikingAttack(){
 const saxon = Math.floor(Math.random()*this.saxonArmy.length); 
 const viking = Math.floor(Math.random()*this.vikingArmy.length);
 const damageCause = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[viking].strength); 
 if (this.saxonArmy[saxon].health<=0){
 this.saxonArmy.splice(saxon,1);
 }
 return damageCause;
 }
 saxonAttack(){
 const saxon = Math.floor(Math.random()*this.saxonArmy.length); 
 const viking = Math.floor(Math.random()*this.vikingArmy.length);
 const damageCause = this.vikingArmy[viking].receiveDamage(this.saxonArmy[saxon].strength); 
 if (this.vikingArmy[viking].health<=0){
 this.vikingArmy.splice(viking,1);
 }
 return damageCause;
 }

 showStatus(){
  if (this.saxonArmy.length === 0){
  return `Vikings have won the war of the century!`;
  } else if (this.vikingArmy.length === 0){
  return `Saxons have fought for their lives and survived another day...`;
  } else {
  return `Vikings and Saxons are still in the thick of battle.`;
  }
 }
}
