//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  { nome: "Milan", punti: 0, falli: 0 },
  { nome: "Inter", punti: 0, falli: 0 },
  { nome: "Juventus", punti: 0, falli: 0 },
  { nome: "Roma", punti: 0, falli: 0 }
];

// numeri random
for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = Math.floor(Math.random() * 100);
  squadre[i].falli = Math.floor(Math.random() * 50);
}

// array con solo nome e falli
const nuovoArray = [];

for (let i = 0; i < squadre.length; i++) {
  nuovoArray.push({
    nome: squadre[i].nome,
    falli: squadre[i].falli
  });
}

console.log("Squadre complete:", squadre);
console.log("Nuovo array:", nuovoArray);
