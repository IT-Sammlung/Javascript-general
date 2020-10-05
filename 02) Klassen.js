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


// Prototypische Vererbung
class Tier {
  constructor(name, typ, alter) {
    this.name = name;
    this.typ = typ;
    this.alter = alter;
  }
}
Tier.prototype.log = function() {
  console.log(this.name,this.typ,this.alter);
}
const tigerchen = new Tier('Tigerchen', "Katze", 3);
tigerchen.log(); // "Tigerchen", "Katze", 3
