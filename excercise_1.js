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
/*
for loop backwards: for (let i = namen.length -1; i >=0 ; i--) {...}
nested loop: compare two arrays to see if any of the items match.
The big idea is that we can run a for loop inside another for loop to compare the items in two arrays.
Every time the outer for loop runs once, the inner for loop will run completely.
for loop for loop if  */

// Das ist ein bisschen old-school. In modenernem Javascript koennen wir die array-funktion forEach verwenden
namen.forEach(name => console.log(name));
// hier wird eine lambda funktion (array funktion forEach) verwendet 'name => console.log(name)' mehr dazu spaeter.

// if else construct
if(globalerNonsens === 'Donald Trump') { // Um Werte zu vergleichen wird in Javascript das dreifache gleicheheitszeichen verwendet.
  console.log(`Americas president is ${globalerNonsens}`);
  // rueckwaertsgerichtete Anfuehrungszeichen werden fuer template strings verwendet, dies ist gut um strings zusammenzusetzen.
  // mit ${variablennamen} wird die platzhalter variable definiert
  // heisst auch string interpolation
} else {
  console.log('The World is alright :-)');
}

// if kann auch ganz alleine stehen, in dem fall macht es gar nichts (im else case)
if(globalerNonsens === 'Donald Trump'){
  console.log(`Americas president is ${globalerNonsens}`);
}
/* falls nach if vergleich nur die var alleine steht, dann wird die Truthliness der var. überprüft.
dies ist immer truthly wenn die var. besteht.
Ausnahmen sind, wenn var auf folgenden gesetzt ist:
false
0 and -0
"" and '' (empty strings)
null
undefined
NaN (Not a Number)
document.all (something you will rarely encounter)
*/

//To say "both must be true," we use &&. To say "either can be true," we use ||.


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
//switch statement ist wie viele else if
let groceryItem = 'papaya';
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
//This keyword break will prevent the switch statement from executing any more of its code.

//ternary operator oder auch shorthand of if else
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// while loop
let actualName = ''; // leere string. Var def ist ausserhalb von while-construct (ungleich for-construct)
while(actualName !== 'Sepp') {  // ungleichheit (bzw. 'nicht') wird in Javascript mit !== geprueft.
  actualName = namenTest.shift(); // shift() entfernt das erste element von einem array und gibt den wert zurueck bzw. gibt den wert hier rein.
                                  // am Ende ist Variable namenTest leer.
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
    this.parents.forEach(p => console.log(p)); // 'this' weist auf ein element innerhalb des Objekts oder funktion hin.

    sayHello: () => {
     return 'Hello, there!'} // function im Objekt.
    sayHello() {
     return 'Hello, there!'} // wie oben aber andere schreibweise.
  }}
  // acces data in a Object by dot zB. baby.lastName oder by [], mit baby[...] wird die Var. gesucht oder baby['...'] den key.
  // adding or verädern key and value zb. baby.age = 12 oder baby['age'] = 12

console.log(baby);
console.log(`firstName is ${baby.firstName}`);
console.log(baby.middleName);
baby.printParents();


// Funtionen: Es gibt 3 unterschiedliche Arten eine Funktion zu definierne. Weitere folgen...

// Art 1, auch function expression genannt
const add = function (a, b) {
  return a + b;
}

// aufgerufen (oder funktion ausfuehren) wird die Funktion folgendermassen
const result = add(1,2);
console.log('result is:', result); //console log nimmt mehrere Pararmeter und printet alle aus. String zusammensetzen mit , nur im console.log
console.log(`result is: ${result}`); // gleich wie oben aber nur andere syntax

// oder direkt ausdrucken
console.log('result is:', add(4,5)); // oder ohne var. resulte var.uebergabe und direkt ausdrucken
console.log(add(5,3))


// Art 2 (global definert), function declaration
function multiply(a, b) { // oder nach Art 1 -> const multiply = function (a,b)...
  return a * b;
}

// aufgerufen wird die funtion genau gleich
const multiplyResult = multiply(2,5);
console.log('multiply result is:', multiplyResult);

// Art 3 als Lambda (modern) single expression Funktion, heisst auch arrow function syntax const name = () => {...}
const divide = (a, b) => a / b; // => ersetzt  function...{return...}, implicit return da drin, single line brauch auch keine {}, keine return, und wenn nur ein Parameter dann kann auf () verzichtet werden
divide(); // hier wird die funktion aufgerufen und ausgefuehrt

// Art 3 als Lambda multiline expression
const divideSave = (a, b) => {
  if(b === 0) {
    throw 'division by zero'; // throw ruft einen Fehler hervor und bricht ab. Kommentare kommt auch
  } else if(Number.isFinite(a) && Number.isFinite(b))  /* Number ist ein Objekt wie console.
                                                    Number.isFinite(a) ueberprueft ob a eine endliche numer ist.
                                                    && ist mathematische Verknuepfung (logical operator)*/
  {
    return a / b;
  } else {
    throw 'can\'t devide ' + a + ' and ' + b; // string zusammensetzen mit +
  }
}

// aufgerufen wird die funtion genau gleich
const divideResult = divide(2,5);
console.log('divide result is:', divideResult);

console.log(divideSave('hallo', 0)); // fehlermeldung, geht nicht

// Lambdas sind praktisch wenn man sie inline verwendet, sie koennen anderen Funktionen ubergeben werden.
const delegatorPrint = function(lambda) { // lamda ist hier der selbergewaehlte name, die funktion ist leer
  console.log(lambda());            /* diese zwei Zeilen ist nur definition:
                                    die funktion uebernimmt eine funktion und print die aus. wird ausgefuehrt wenn aufgerufen */
}

delegatorPrint(() => 'ich bin eine Lambdafunktion ;-)'); // aufruf der funktion. keine feste zuweisung, wird nur einmal ausgefuehrt

delegatorPrint(() => 'Pi ist: ' + Math.PI); // Math ist ein Hilfsobjekt fuer math. Konstante und Funktionen
// Math.PI ist eine fixe Konstante und keine funktion, deshalb keine ()

//split()
const buchstabenArray = 'Hallo My-Yen'.split(''); // gibt ['H', 'a'...]
const woerterArray = 'Hallo My-Yen'.split(' '); // gibt ['Hallo','My-Yen']
const listenArray = '1,2,3,4,5,6,Banane'.split(','); // gibt [ '1', '2', '3', '4', '5', '6', 'Banane' ]
const listenArray2 = '1;2;3;4;5;6;Banane'.split(';'); // gibt [ '1', '2', '3', '4', '5', '6', 'Banane' ]

// join()
const einString = ['H','a','l','l','o'].join(''); // gibt 'Hallo'
const einAndererString = ['H','a','l','l','o'].join(','); //gibt 'H,a,l,l,o' (nimm alles zwischen '' und kommas)

/* array methode:
.length
.push  -> hängt weitere items am Ende an
.pop  -> löscht das letzte element
.shift() -> removes the first element from an array and returns that element
.unshift() -> setzt neue items am anfang ein
.slice(begin,end) -> make copy of a portion of an array into a new array object
.join(), .splice(), and .concat()
*/

// sehr wichtige array built in function : .forEach, .map, .filter, .some, .every, .reduce

// IMPOTIEREN UND EXORTIEREN von Module (Modules in JavaScript are reusable pieces of code that can be exported from one program and imported for use in another program)
let Airplane {
  myAirplane: "StarJet",
};
module.exports = Airplane; // das Objekt wird als module exportiert. nur ein module pro file zulässig.
export default Airplane; // gleich wie oben nur andere syntax ES6

const AirplaneImp = require('./airplane.js'); // für module importieren in a new file, es macht eine invisible copy
import AirplaneImp from './airplane.js'; // gleich wie oben, syntax ES6

//export von Variable, mehrere export in einem file möglich
let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};
export { specialty, isVegetarian as isVeg}; // alias export mit as
import { specialty, isVeg, isLowSodium as lowSod } from './menu'; // hier wird importiert, beim imortierten kann aus alias erzeugt werden
// import entire module with alias
import * as Carte from './menu';

// named exports
export let specialty = ''; // wird exportiert sobald die Variable definiert ist. Mehrere export in einem file möglich
import { specialty} from './menu'; // wie oben


// HTTP Request (webrequest), AJAX (technologie fuer schnelles laden), XHR (webrequest mit JS, =XMLHttpRequest)
//XHR GET Requests (boilerplate code) GET ladet Daten; 4 types of HTTP requests: GET, POST, PUT, DELETE
const xhr = new XMLHttpRequest(); // new operator bzw. new object, write 'new' for new object and then the type (not the naming), naming xhr is common practise
const url = 'http://api-to-call-com/endpoint'; // URL to which we are going to make our request and save it in the constante named url
xhr.responseType = 'json'; // access the properties of the const xhr object and set the response type, can be another as well
xhr.onreadystatechange = function() {    // event handler, wird aktiviert wenn value von readyState veraendert
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url);  // opens request by calling the method .open() and pass two parameter - type of request and url to querying.
xhr.send();          // calling the send methode / sends object
// in GET request the query information (what youre asking the server) si sent as part of the URL, in diesem Beispiel ist nichts drin.


// POST (ladet Daten und speichert Daten, can change information on another site and receive information in response)
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({ id: '200'});
// converts data to a string, the query information is not part of the URL sent, hier ist die angefragte info mitsamt der erforderliche format (depends on the API)

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);  // code to execute with response
  }
};
xhr.open('POST', url);
xhr.send(data);  // die gefrage information wird im constante data verpackt und als argument von send() methode yum API gesendet

/*
$.ajax() is a method provided by the jQuery library
specifically to handle AJAX requests.
 All parts of the request are included in a single object that is passed to the method as an argument.
jQuery ist ein libray auch fuer JS requests, jQuery wird heute nicht mehr oft eingesetzt, ist veraltet.
jQuery wird nur fuer kleine Teile verwendet, da heute die apps gross und komplexer ist. heutzutage verwendet man frameworks wie React und angular...
*/

//jQuery GET
$.ajax({  //$ ist ein jQuery-Objekt, ajax ist eine Funktion auf dem Objekt.
  url:'http://api-to-call.com/endpoint',  //diese und die 2 weiteren Zeilen sind settings
  type: 'GET',
  dataType: 'json',
  success(response) {
    console.log(response); // code to execute with response on success
  },
  error(jqXHR, status, errorThrown) {
    console.log(jqXHR); // Code to execute with response on failure
  }
});

//jQuery POST
$.ajax({
  url: 'http://api-to-call.com/endpoint',  //diese und die 3 weiteren Zeilen sind settings
  type: 'POST',
  dataType: JSON.stringify({ id: '200'}), //hier ist anders als GET
  dataType: 'json',
  success(response) {
    console.log(response); // code to execute with response on success
  },
  error(jqXHR, status, errorThrown) {
    console.log(jqXHR); // Code to execute with response on failure
  }
});

//AXAJ request with $.get(), this is another request with jQuery
$.get('https://api-to-call.com/endpoint', response => {...}, 'json');
/* $.get( opens the method call.
'https://api-to-call.com/endpoint' is the URL to which we're making our request.
The second parameter, response => {...} is an arrow function. This is the success callback function. Between the curly braces, specify what to do with the response if it is successful, such as logging it to the console or appending it to the body of the HTML.
The third parameter, 'json', is the response format
diese Schreibweise erlaubt keine weitere settings, falls mehr dann $.ajax() verwenden.
*/
$.getJSON() // wie oben aber noch kuerzerer.

//AXAJ request with $.post()
$.post('https://api-to-call.com/endpoint', {data}, response => {...}, 'json');
/* $.post( opens the method call.
'https://api-to-call.com/endpoint' is the URL to which we're making our request.
The second parameter, {data} is the object you'll use to send data with your request.
The third parameter, response => {...} is an arrow function. This is the success callback function. Between the curly braces, you would specify what you want to do with the response if it is successful, such as logging it to the console or appending it to the body of the HTML.
The fourth parameter, 'json', is the response format.
feste Order von Parameter.
*/

// ES6
// Promise is an object, acts as a placeholder for data that has been requested but not yet received.
// fetch() function uses Primises to handle request. .then() method handle fullfiled and rejected Promises. async and await keywords.

//fetch GET, fetch() function; this is a web API not all browsers support it. in that case add a polyfill
fetch('https://api-to-call.com/endpoint').then(response => {  // sends request
  if (response.ok) {               // diese und die 2 weiteren Zeilen converts response object to JSON
    return response.json();
  }
  throw new Error('Request failed!'); // diese und naechste Zeile handles errors
}, networkError => console.log(networkError.message)
).then(jsonRespnse => {               // diese und 2 weitere Zeile handles success
  //Code to execute with jsonResonse
});
// we call the response function when it has been received.
// ).then() ist callback
