////////////////////////////////////////////////////////////////////// Private Eigenschaften
// Private Eigenschaften mit _ kennzeichnen --> let _name = 'peter';
class Tier {
  constructor(name, alter) {
    let _name = name;
    let _alter = alter;
  }
}
const tigerli = new Tier('Tigerli', 18);
console.log(tigerli._name); // undefined <-- von aussen kann nicht auf die private Eigenschaft zugegriffen werden




////////////////////////////////////////////////////////////////////// Öffentliche Methoden
// Hat Performance-Nachteile, da die priviligierten öffentlichen Methoden für jede Objektinstanz existieren
// Klasse
class Tier {
  constructor(name, alter) {
    let _name = name; //private Eigenschaft
    let _alter = alter;
    this.getName = function() { //öffentliche Methode
      return _name;
    }
  }
}
const tigerli = new Tier('Tigerli', 18);
console.log(tigerli._name); // undefined <-- von aussen kann nicht auf die private Eigenschaft zugegriffen werden
console.log(tigerli.getName()); // Tigerli <-- Aufruf von öffentlicher Methode





// Kapselung in IIFE die (mit Closure) Tier als Rückgabewert gibt
const Tier = (function() {
  function Tier(name, alter) {
    var _name = name;
    var _alter = alter;
    this.getName = function() {
      return _name;
    }
  }
  return Tier;
})();
const tigerli = new Tier('Tigerli', 3);
tigerli._name = "Toger";
console.log(tigerli.getName()); // Tigerli





