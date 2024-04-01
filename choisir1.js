const fs = require("fs");
const readline = require("readline");

let marques = ["lenovo", "hp", "acer", "asus", "lg"];
let choixUtilisateurs = [];

function afficherMarques() {
  console.log("Le Marque disponible sont:");
  marques.forEach((marque) => {
    console.log("- " + marque);
  });
}

function choisirMarque() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  afficherMarques();

  rl.question(
    "Quelle marque préférez-vous ? (séparez les marques par des virgules) ",
    (marquesUtilisateur) => {
      const marquesChoisies = marquesUtilisateur
        .toLowerCase()
        .split(",")
        .map((marque) => marque.trim());
      let marquesInconnues = [];
      marquesChoisies.forEach((marqueChoisie) => {
        if (marques.includes(marqueChoisie)) {
          console.log("Vous avez choisi la marque " + marqueChoisie);
          marques = marques.filter((marque) => marque !== marqueChoisie);
          choixUtilisateurs.push(marqueChoisie);
        } else {
          marquesInconnues.push(marqueChoisie);
        }
      });

      if (marquesInconnues.length > 0) {
        console.log(
          "Les marques suivantes ne sont pas disponibles : " +
            marquesInconnues.join(", ")
        );
      }

      console.log("Le tableau de marques mis à jour est :");
      afficherMarques();

      rl.question(
        "Voulez-vous choisir une autre marque ? (O/N) ",
        (reponse) => {
          if (reponse.toLowerCase() === "o") {
            choisirMarque();
          } else {
            console.log("Merci d'avoir utilisé notre service.");

            // Écrire les choix des utilisateurs dans un fichier JSON
            const data = JSON.stringify({ choixUtilisateurs });
            fs.writeFileSync("choix_utilisateurs.json", data);

            rl.close();
          }
        }
      );
    }
  );
}

choisirMarque();
