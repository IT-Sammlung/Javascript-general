/////////////////////////////////////////////////////////////// Einfaches Basis-Beispiel
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






/////////////////////////////////////////////////////////////// Vererbung
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





/////////////////////////////////////////////////////////////// Mixin-Pattern
class Tier {
  constructor(name, alter) {
    this.name = name;
    this.alter = alter;
  }
  atmen() {
    console.log(this.name + ' hat geatmet');
  }
}
// Klasse welche von übergebener Klasse abgeleitet wird und methode fliegen enthält
const LuftMixin = (superclass) => class extends superclass {
  fliegen() {
    console.log(this.name + " ist geflogen");
  }
}
class LuftTier extends LuftMixin(Tier) {
}
// Aufruf
const vogelu = new LuftTier('vogelu', 3);
vogelu.atmen();
vogelu.fliegen();
