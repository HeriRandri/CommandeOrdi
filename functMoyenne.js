const canPass = (names, notes, matieres) => {
  let resultat = [];
  for (let i = 0; i < notes.length; i++) {
    let sum = 0;
    let messg;
    let detailMatNote = [];
    let moyenne;
    for (let j = 0; j < notes[i].length; j++) {
      sum += notes[i][j];
      detailMatNote.push(`${matieres[j]}: ${notes[i][j]}`);
    }
    moyenne = (sum / notes[i].length).toFixed(2);
    messg =
      moyenne > 10 ? `Félicitaion ${names[i]}` : `Dommage pour ${names[i]}`;
    resultat.push(
      `${names[i]} dia manana ireto naoty ireto ${detailMatNote.join(
        ", "
      )}. Moyenne de ${moyenne} => ${messg} `
    );
  }
  return resultat;
};

let nom = ["Niavo", "Irene", "Fanomezana"];
let notes = [
  [18, 15, 14],
  [13, 9, 12],
  [19, 6, 3],
];
let matieres = ["math", "pc", "svt"];

let resultat = canPass(nom, notes, matieres);
console.log(resultat);
