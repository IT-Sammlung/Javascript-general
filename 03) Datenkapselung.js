// Private Eigenschaften mit _ kennzeichnen --> let _name = 'peter';
class Tiere {
  constructor(name, alter) {
    let _name = name;
    let _alter = alter;
  }
}
const tigerli = new Tiere('Tigerli', 18);
console.log(tigerli.name); // undefined <-- von aussen kann nicht auf die private Eigenschaft zugegriffen werden
