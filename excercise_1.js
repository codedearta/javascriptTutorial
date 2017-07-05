// Um eine constante zu definieren benutzen wir das Schuesselwort 'const'
const name = 'Nyla';
// Konstanten koennen nicht veraendert werden.
// name = 'My-Yen'; // spukt einen Fehler aus.

// Um eine variable zu definierne benutzen wir das Schluesselwort 'let'
let alterInTagen = 14;
alterInTagen = 15; /* ist korrekt und funktioniert einwandfrei.
  let kann ueberschrieben werden, dabei wird hier zugegriffen und zuweisen.
  'let' nicht nur fuer definieren. */
// let und const sind scoped d.h. gekapselt im block

/* Um global eine variable zu definiern benutzen wir das Schluesselwort var.
   In der alten Javascript version war dies die einzige moeglichkeit variablen
   zu definieren. const und let war nicht verfuegbar. Dies ist der Grund wesshalb
   viele beispiele immer noch 'var' verwenden. Dies gilt aber heute als sehr schlechte
   Praxis und sollte nicht mehr verwendet werden.
   var kann von ueberall zugegriffen und ueberschrieben bzw. wieder zugewiesen werden */
var globalerNonsens = "Donald Trump";

/* Alle Ausdruecke sollte man mit einem Semikolon ';' beenden. Dies ist streng
   genommen nicht notwendig gilt aber als guter Stil und sollte desshal immer
   angewendet werden. */

/* Mehrzeilige Kommentare oeffnet man mit '/*' und schliesst man mit star slash. einfache mit doppel '//' */

// arrays in javascript sind sehr einfach wir definierne sie mit square brackets
const namen = ['Nyla', 'My-Yen', 'Sepp'];
/* namen[0] -> Nyla
  namen[1] -> My-Yen
  console.log(namen[0],namen[1]) -> Nyla My-Yen */

// um alle namen zu printen keonnen wir einen for-loop verwenden.
for (let i = 0; i < namen.length; i++) {
    console.log(namen[i]);
}

// Das ist ein bisschen old-school. In modenernem Javascript koennen wir die array-funktion forEach verwenden
namen.forEach(name => cosnole.log(name));
// hier wird eine lambda funktion verwendet 'name => console.log(name)' mehr dazu spaeter.

// if else construct
if(globalerNonsens === 'Donald Trump') { // Um Werte zu vergleichen wird in Javascript das dreifache gleicheheitszeichen verwendet.
  console.log(`Americas president is ${globalerNonsens}`);
  // rueckwaertsgerichtete anfuefrungszeichen werden fuer template strings verwendet.
  // mit ${variablennamen} wird die platzhalter variable definiert
} else {
  console.log('The World is alright :-)');
}

// if kann auch ganz alleine stehen
if(globalerNonsens === 'Donald Trump'){
  console.log(`Americas president is ${globalerNonsens}`);
}

let namenTest = ['My-Yen', 'Nyla', 'Sepp'];
if(namenTest[0] === 'Nyla') {
  console.log('Nyla is always first.');
} else if(namenTest[0] === 'My-Yen') {
  // else if kommt nach id un kann beliebig oft wiederholt werden
  console.log(`${namenTest[0]} is always first.`);
} else {
  // else kommt am Schluss, muss aber nicht zwingend definiert werden
  console.log('Sepp is probabely first.');
}

// while loop
let actualName = ''
while(actualName !== 'Sepp') {  // ungleichheit wird in Javascript mit !== geprueft.
  actualName = namenTest.shift(); // shift() entfernt das erste element von einem array un gibt den wert zurueck.
  console.log('actual name is: ' + actualName);
}

// do-while loop
let count = 10;
do {
  console.log(`countdown is: ${count}`)
  count--;
} while(count > 0);

// Objekte werden mit geschweiften Klammern definiert. Es koennen Werte und Funktionen auf Objekten definert werden.
const baby = {
  firstName : 'Nyla',
  middleName: 'Josephine',
  lastName: 'Renfer',
  birthday: new Date(2017, 5, 17), // monat wir doferweise null basiert angegeben
  parents: ['My-Yen', 'Sepp'],
  printParents: function() {
    this.parents.forEach(p => console.log(p));
  }
}


console.log(baby);
console.log(`firstName is ${baby.firstName}`);
console.log(baby.middleName);
baby2.printParents();
