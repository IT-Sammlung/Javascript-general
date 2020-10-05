// Einfaches Basis-Beispiel
// Objekterzeugung durch Klassen-Syntax [ES05]
class Tier {
  constructor(name, typ, alter) {
    this.name = name;
    this.typ = typ;
    this.alter = alter;
  }
  // Methode
  log() {
    console.log(this.name,this.typ,this.alter);
  }
}
const tigerchen = new Tier('Tigerchen', "Katze", 3);
tigerchen.log(); // "Tigerchen", "Katze", 3




// Pseudoklassische Vererbung
// Definiere Klasse Tier
function Tier(name, alter) {
    this.name = name;
    this.alter = alter;
}
// Definiere unterklasse von Tier
function Katze(name, farbe, alter) {
  Tier.call(this, name, alter);
  this.typ = 'Katze';
  this.farbe = farbe;
}
// Erweitere Tier Klasse
Tier.prototype.log = function() {
  console.log(this.name,this.typ,this.farbe,this.alter);
}
// Bindung
Katze.prototype = new Tier();
Katze.prototype.constructor = Katze;
// Aufruf
const tigerchen = new Katze('Tigerchen', 3, "Schwarz");
tigerchen.log(); // "Tigerchen", "Katze", 3, "Schwarz";
