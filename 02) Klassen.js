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






// Vererbung
class Tier {
  constructor(name, alter) {
    this.name = name;
    this.alter = alter;
  }
  bewegen() {
    console.log(this.name + ' hat sich 1m bewegt!')
  }
}
class Katze extends Tier {
  constructor(name, alter, farbe) {
    super(name, alter);
    this.typ = "Katze";
    this.farbe = farbe;
  }
  miau() {
    console.log("Miau");
  }
  log() {
    console.log(this.name,this.alter,this.typ,this.farbe);
  }
}
const tigerchen = new Katze("Tigerchen", 25, "Schwarz");
tigerchen.bewegen(); // Tigerchen hat sich 1m bewegt!
tigerchen.miau(); // Miau
tigerchen.log(); // Tigerchen 25 Katze Schwarz




//Todo Mixin
