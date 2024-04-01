const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nomStocker = [];
function dern() {
  rl.question("entre un liste nom: ", (liste) => {
    const tousList = liste.split(",").map((map) => map.trim());
    nomStocker.push(tousList);
    let derika = tousList.slice(tousList.length - 1);
    console.log("le premier element de tableau est :" + tousList[0]);
    console.log(`le derinier element de tableau est: ${derika.join(" ")}`);
    let indice_pair = tousList.forEach((nom, index) => {
      if (index % 2 == 0) {
        console.log(index, nom);
      }
    });
  });
}
dern();
function indice_pair() {
  nomStocker.forEach((tab, index) => {
    if (index % 2 == 0) {
      console.log(index, tab);
    }
  });
}
