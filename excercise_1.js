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
