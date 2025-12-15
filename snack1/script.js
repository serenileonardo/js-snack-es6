// 
//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.
//

const bici = [
  { nome: "bianca", peso: 7 },
  { nome: "nera", peso: 6.8 },
  { nome: "rossa", peso: 7.2 },
  { nome: "blu", peso: 6.5 }
];

// Supponiamo che la prima sia la più leggera
let biciLeggera = bici[0];

// Ciclo per confrontare i pesi
for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
  }
}

console.log("La bici più leggera è:", biciLeggera);
