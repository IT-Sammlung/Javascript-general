//////////////////////////////// export.js
// Benannter Export
export function hello() {
  console.log("Hello");
}

// Export einer Default-Komponente
export default class {
  constructor(name, alter) {
    this.name = name;
    this.alter = alter;
  }
}


//////////////////////////////// import.js
// Import einzelner Komponente
import {hello} from 'export';
hello();

// Benannter Import mit Alias
import {hello as hallo} from 'export';

// Import eines ganzen Moduls mit Alias
import 'export' as import;

// Import einer Default-Komponente
import Katze from 'export';
