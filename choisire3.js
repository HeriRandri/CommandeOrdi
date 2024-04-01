const fs = require("fs");
const path = require("path");
const readline = require("readline");

let marquesDisponibles = ["lenovo", "hp", "acer", "asus", "lg"];
let commandes = [];

function afficherMarquesDisponibles() {
  console.log("Les marques disponibles sont :");
  marquesDisponibles.forEach((marque) => {
    console.log("- " + marque);
  });
}

function enregistrerCommande(nomClient, dateCommande, marquesChoisies) {
  commandes.push({ nomClient, dateCommande, marquesChoisies });
  console.log("Commande enregistrée avec succès !");
}

function demanderCommande() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Entrez votre nom : ", (nomClient) => {
    afficherMarquesDisponibles();

    rl.question(
      "Quelle(s) marque(s) préférez-vous ? (séparez les marques par des virgules) ",
      (marquesUtilisateur) => {
        const marquesChoisies = marquesUtilisateur
          .toLowerCase()
          .split(",")
          .map((marque) => marque.trim());
        let marquesInconnues = [];
        marquesChoisies.forEach((marqueChoisie) => {
          if (!marquesDisponibles.includes(marqueChoisie)) {
            marquesInconnues.push(marqueChoisie);
          }
        });

        if (marquesInconnues.length > 0) {
          console.log(
            "Les marques suivantes ne sont pas disponibles : " +
              marquesInconnues.join(", ")
          );
          rl.close();
          return;
        }

        const dateCommande = new Date().toISOString(); // Date de la commande actuelle
        enregistrerCommande(nomClient, dateCommande, marquesChoisies);
        rl.close();
      }
    );
  });
}

function sauvegarderCommandes() {
  const filePath = path.join(__dirname, "commandes.json");
  fs.writeFileSync(filePath, JSON.stringify(commandes, null, 2));
  console.log(
    "Les commandes ont été enregistrées avec succès dans le fichier commandes.json."
  );
}

function commander() {
  demanderCommande();
}

commander();
