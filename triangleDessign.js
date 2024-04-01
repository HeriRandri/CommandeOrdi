// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Définition des triangles prédéfinis
// const triangles = [
//   { nom: "Triangle Isocèle", type: "isocèle", base: 5, hauteur: 4 },
//   { nom: "Triangle Rectangle", type: "rectangle", base: 8, hauteur: 6 },
//   { nom: "Triangle Équilatéral", type: "équilatéral", côté: 7 },
// ];

// // Fonction pour dessiner un triangle isocèle
// function dessinerTriangleIsocèle(base, hauteur) {
//   for (let i = 1; i <= hauteur; i++) {
//     let ligne = "";
//     for (let j = 1; j <= i; j++) {
//       ligne += "*";
//     }
//     console.log(ligne);
//   }
// }

// // Fonction pour dessiner un triangle rectangle
// function dessinerTriangleRectangle(base, hauteur) {
//   for (let i = 1; i <= hauteur; i++) {
//     let ligne = "";
//     for (let j = 1; j <= i; j++) {
//       ligne += "*";
//     }
//     console.log(ligne);
//   }
// }

// // Fonction pour dessiner un triangle équilatéral
// function dessinerTriangleEquilatéral(côté) {
//   for (let i = 1; i <= côté; i++) {
//     let ligne = "";
//     for (let j = 1; j <= i; j++) {
//       ligne += "*";
//     }
//     console.log(ligne);
//   }
// }

// // Fonction pour afficher les informations sur les triangles
// function afficherInformationsTriangles() {
//   console.log("Liste des triangles disponibles :");
//   triangles.forEach((triangle, index) => {
//     console.log(`${index + 1}. ${triangle.nom}`);
//   });
// }

// // Fonction principale pour permettre à l'utilisateur de choisir et d'interagir avec les triangles
// function gestionTriangles() {
//   afficherInformationsTriangles();

//   rl.question("Veuillez choisir un triangle par son numéro : ", (choix) => {
//     choix = parseInt(choix);

//     if (isNaN(choix) || choix < 1 || choix > triangles.length) {
//       console.log("Choix invalide.");
//       gestionTriangles();
//       return;
//     }

//     const triangleChoisi = triangles[choix - 1];

//     console.log(`Vous avez choisi le ${triangleChoisi.nom}`);

//     switch (triangleChoisi.type) {
//       case "isocèle":
//         dessinerTriangleIsocèle(triangleChoisi.base, triangleChoisi.hauteur);
//         break;
//       case "rectangle":
//         dessinerTriangleRectangle(triangleChoisi.base, triangleChoisi.hauteur);
//         break;
//       case "équilatéral":
//         dessinerTriangleEquilatéral(triangleChoisi.côté);
//         break;
//       default:
//         console.log("Type de triangle non pris en charge.");
//         break;
//     }

//     rl.close();
//   });
// }

// gestionTriangles();

// function puissance(base, exposant) {
//   if (exposant === 0) {
//     return 1;
//   } else if (exposant < 0) {
//     return "L'exposant doit être un entier positif.";
//   } else {
//     let resultat = 1;
//     for (let i = 0; i < exposant; i++) {
//       resultat *= base;
//     }
//     return resultat;
//   }
// }

let tab1 = [
  "Grégoire",
  "Noémie",
  "Pierre",
  "Léa",
  "Jacques",
  "Annie",
  "Frédéric",
  "Magalie",
  "Lucas",
];
let test = tab1.slice(tab1.length - 1);
console.log(test);
