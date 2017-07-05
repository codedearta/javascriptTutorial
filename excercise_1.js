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
namen.forEach(name => console.log(name));
// hier wird eine lambda funktion (array funktion forEach) verwendet 'name => console.log(name)' mehr dazu spaeter.

// if else construct
if(globalerNonsens === 'Donald Trump') { // Um Werte zu vergleichen wird in Javascript das dreifache gleicheheitszeichen verwendet.
  console.log(`Americas president is ${globalerNonsens}`);
  // rueckwaertsgerichtete Anfuehrungszeichen werden fuer template strings verwendet, dies ist gut um strings zusammenzusetzen.
  // mit ${variablennamen} wird die platzhalter variable definiert
} else {
  console.log('The World is alright :-)');
}

// if kann auch ganz alleine stehen, in dem fall macht es gar nichts (im else case)
if(globalerNonsens === 'Donald Trump'){
  console.log(`Americas president is ${globalerNonsens}`);
}

let namenTest = ['My-Yen', 'Nyla', 'Sepp'];
if(namenTest[0] === 'Nyla') {
  console.log('Nyla is always first.');
} else if(namenTest[0] === 'My-Yen') {
  // else if kommt nach id und kann beliebig oft wiederholt werden, else if ist die 2. bzw. n. Bedingung/Pruefung
  console.log(`${namenTest[0]} is always first.`);
} else {
  // else kommt am Schluss, muss aber nicht zwingend definiert werden
  console.log('Sepp is probabely first.');
}

// while loop
let actualName = ''; // leere string. Var def ist ausserhalb von while-construct (ungleich for-construct)
while(actualName !== 'Sepp') {  // ungleichheit (bzw. 'nicht') wird in Javascript mit !== geprueft.
  actualName = namenTest.shift(); // shift() entfernt das erste element von einem array und gibt den wert zurueck bzw. gibt den wert hier rein.
  console.log('actual name is: ' + actualName);
}

// do-while loop
let count = 10; // Var def ist ausserhalb von do-while-construct (ungleich for-construct)
do {
  console.log(`countdown is: ${count}`)
  count--;
} while(count > 0); // 0 wird nicht geprintet, nur wenn >= anstelle von > ist

// Objekte werden mit geschweiften Klammern definiert. Es koennen Werte und Funktionen auf Objekten definert werden.
const baby = {
  firstName : 'Nyla', // das sind attribute / properties, diese funktionieren wie Variablen sind aber auf Objekte definiert
  middleName: 'Josephine',
  lastName: 'Renfer',
  birthday: new Date(2017, 5, 17), // monat wir dooferweise null basiert angegeben. d.h. Juni ist 5 und nicht 6.
                                    // new ist ein schluesselwort um neue Objekte zu kreieren. Date ist ein klasse/datentyp
  parents: ['My-Yen', 'Sepp'],
  printParents: function() {    // printParents ist eine Funktion auf dem Objekt, die eigentliche Funktion ist 'function ()', hier ohne Parameter.
    this.parents.forEach(p => console.log(p));
  }
}


console.log(baby);
console.log(`firstName is ${baby.firstName}`);
console.log(baby.middleName);
baby.printParents();
