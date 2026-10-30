// Niveau 1: Basis en Algoritmes

// Oefening 1
for (let i = 0; i <= 25; i++) {
  console.log(i * 2);
}

console.log("------------------------------");

// Oefening 2:

for (let i = 0; i <= 10; i++) {
  let maal = i * 7;
  console.log(`7 x ${i} = ${maal}`);
}

console.log("------------------------------");

let som = 0;

// Oefening 3:
for (let i = 0; i <= 100; i++) {
  som = i + som;
}

console.log(`De totale som van de getallen van 1-100 is ${som}`);

console.log("-----------------------------");

// Oefening 4:
let b = 10;

while (b > 0) {
  console.log(b);
  b--;
}

console.log("Launch sequence initiated");

console.log("---------------------------");

// Oefening 5

let totaal = 0;

let gemiddeldeArray = [14, 18, 8, 12, 15, 11];

for (let i = 0; i < gemiddeldeArray.length; i++) {
  totaal = gemiddeldeArray[i] + totaal;
}

let deling = totaal / gemiddeldeArray.length;

console.log(`Het gemiddelde is ${deling}`);

console.log("------------------------------------");

// oefening 6

let wachtwoordenLijst = [
  "test123",
  "123test",
  "KarelKleintjes",
  "Admin2026",
  "Admin2025",
];

for (let i = 0; i < wachtwoordenLijst.length; i++) {
  if (wachtwoordenLijst[i] == "Admin2026!") {
    console.log("Toegang Verleend");
    break;
  } else {
    console.log(
      `Je wachtwoord dat je invulde "${wachtwoordenLijst[i]}" is verkeerd`,
    );
  }
}

console.log("------------------------------");

// Oefening 7

let grootsteGetallen = [45, 12, 89, 32, 97, 23];

let grootste = 0;

for (let i = 1; i < grootsteGetallen.length; i++) {
  if (grootsteGetallen[i] > grootste) {
    grootste = grootsteGetallen[i];
  }
}
console.log(`Het grootste getal is: ${grootste}`);

console.log("--------------------------");

// Niveau 2: Array- en Dataverwerking
// Oefening 8

let gebruikersNamen = ["jan", "pieter", "laura", "sam", "elena"];

for (let i = 0; i < gebruikersNamen.length; i++) {
  if (gebruikersNamen[i] === "sam") {
    console.log("De naam sam is aanwezig op indexpositie " + i);
  }
}

console.log("------------------------------");

// Oefening 9

let voorraadAantallen = [12, 0, 5, 0, 18, 3];

let legeVoorraad = 0;

for (let i = 0; i < voorraadAantallen.length; i++) {
  if (voorraadAantallen[i] == 0) {
    legeVoorraad++;
  }
}

console.log(`Er zijn ${legeVoorraad} product(en) met lege voorraad`);

console.log("--------------------------");

// Oefening 10

let exclusiefBTW = [10.0, 25.5, 40.0, 5.99];
let inclusiefBTW = [];
let resultaat = 0;

for (let i = 0; i < exclusiefBTW.length; i++) {
  resultaat = (exclusiefBTW[i] / 100) * 21 + exclusiefBTW[i];
  inclusiefBTW.push(resultaat);
}

console.log(inclusiefBTW);

console.log("----------------------------");

// Oefening 11

let woord = "Applicatie";
let omgekeerd = "";

for (let i = woord.length - 1; i >= 0; i--) {
  omgekeerd += woord[i];
}

console.log(omgekeerd);

console.log("--------------------------------");

// Oefening 12

let emailAdressen = [
  "test@school.be",
  "ongeldig.be",
  "user@domain.com",
  "fout@",
];

for (let i = 0; i < emailAdressen.length; i++) {
  let hasAt = false;
  let hasDot = false;

  for (let k = 0; k < emailAdressen[i].length; k++) {
    if (emailAdressen[i].charAt(k) === "@") {
      hasAt = true;
    }

    if (emailAdressen[i].charAt(k) === ".") {
      hasDot = true;
    }

  }

  if (hasAt == true && hasDot == true) {
      console.log(emailAdressen[i]);
    }
}

// kortere versie van ai met includes:

for(let i = 0; i < emailAdressen.length; i++){

    if(emailAdressen[i].includes("@") && emailAdressen[i].includes(".")){
        console.log(emailAdressen[i]);
    }
}

console.log("--------------------------------");

// Oefening 13

let statusStrings = ["active", "inactive", "active", "pending", "active", "inactive"]
let aantalActief = 0;
let c = 0

while(c < statusStrings.length){
    if(statusStrings[c] === "active"){
        aantalActief++
    }
    c++
}

console.log(`Er zijn in totaal ${aantalActief} actieve accounts`);

console.log("-------------------");


// Oefening 14

let IDs = [101, 102, 103, 102, 104, 101];


for(let i = 0; i < IDs.length; i++){

    let aantalID = 0

    for(let b = 0; b < IDs.length; b++){
        if(IDs[i] === IDs[b]){
            aantalID++
        }

    }

    if(aantalID >= 2){
        console.log(`Het id ${IDs[i]} staat 2 of meer keer in de lijst`);
        
    }


}