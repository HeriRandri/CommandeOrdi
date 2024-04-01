const readline = require("readline");
const fs = require("fs");
const path = require("path");
const { stdout, stdin } = require("process");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let marques = ["lenovo", "hp", "acer", "asus", "lg"];
let choixUtilisateurs = [];
let choixInconnue = [];

let afficherMarques = function () {
  console.log("Les marque disponible sont: ");
  marques.forEach((marque) => {
    console.log(" -" + marque);
  });
};

let demandeMarque = function () {
  rl.question("Entrer votre: ", (nomClient) => {
    rl.question("Votre numero Tel: ", (tel) => {
      afficherMarques();
      rl.question(
        "Quelles marques vous préférer ? (separes les marque par des virgules) ",
        (marqueUtilisateur) => {
          let marqueChoires = marqueUtilisateur
            .toLocaleLowerCase()
            .split(", ")
            .map((map) => map.trim());
          marqueChoires.forEach((choix) => {
            if (marques.includes(choix)) {
              console.log("Vous avez choisir: " + choix);
              marques = marques.filter((marque) => marque !== choix);
            } else {
              choixInconnue.push(choix);
            }
            if (choixInconnue.length > 0) {
              console.log(
                "Marques suivants ne sont pas dispo: " +
                  choixInconnue.join(", ")
              );
            }
            console.log("Les marques a éte mise ajour ");
            afficherMarques();
            rl.question("Voulez-vous choisir autre ?", (reponse) => {
              if (reponse.toLocaleLowerCase === "O") {
                afficherMarques();
              } else {
                console.log("Misaotra anao nampiasa ny tolotra");
                let date = new Date().toLocaleTimeString();
                choixUtilisateurs.push({
                  nomClient,
                  date,
                  tel,
                  marqueChoires,
                });
                choixInconnue.push({ nomClient, date, tel });
                const filelPath1 = path.join(__dirname, "choixDispo.json");
                fs.writeFileSync(
                  filelPath1,
                  JSON.stringify(choixUtilisateurs, null, 2)
                );
                const filelPath2 = path.join(__dirname, "choixIndispo.json");
                fs.writeFileSync(
                  filelPath2,
                  JSON.stringify(choixInconnue, null, 2)
                );
                console.log("Les commande ont été enregistre");
              }
            });
          });
        }
      );
    });
  });
};
demandeMarque();
