
/****************************Partie 1*****************************/

console.log("-------------------> Partie 1");


//déclarer le tableau pour stocker les élèves
let eleves = [];

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

let noms = ["Marine", "Maeva", "Marion", "Nathanael", "Nathan", "Gabriel", "Thomas", "Pierre", "Jade", "Chloé", "Louis"];

// Itérer autant de fois qu'on a d'élèves à générer
for (let i = 0; i < taille; i++) {
    let randomName = noms[Math.floor(Math.random() * noms.length)];
    // Générer une note aléatoire entre 0 et note_maximum (inclus)// Déclarer le tableau pour stocker les notes
    let notes = [];
    // Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
    let note_maximum = 20;
    // On génère 3 notes aléatoires pour l'élève
    for (let i = 0; i < 3; i++) {
        // Générer une note aléatoire entre 0 et note_maximum (inclus)
        let note = Math.floor(Math.random() * (note_maximum + 1));
        // Ajouter la note générée au tableau
        notes.push(note);
    }
    let avg = (notes[0] + notes[1] + notes[2]) / 3;
    //création de l'élève
    let eleve = {
        nom: randomName,
        noteFrancais: notes[0],
        noteMaths: notes[1],
        noteHistoire: notes[2],
        moyenne: Math.round((avg + Number.EPSILON) * 10) / 10
    };
    // Ajouter la note générée au tableau
    eleves.push(eleve);
}

console.log(eleves);
for (let i = 0; i < taille; i++) {
    console.log("Eleve : ",eleves[i].nom," |  Moyenne : ", eleves[i].moyenne);
}


/****************************Partie 2*****************************/

console.log("-------------------> Partie 2");

/*
let mini_moyenne = eleves[0].moyenne;
let maxi_moyenne = eleves[0].moyenne;
//recherche de la plus petite et la plus grande moyenne
for (let i = 0; i < taille; i++) {
    //comparaison pour trouver la moyenne la plus petite
    if (eleves[i].moyenne < mini_moyenne) {
        mini_moyenne = eleves[i].moyenne;
    }
    if (eleves[i].moyenne > maxi_moyenne){
        maxi_moyenne = eleves[i].moyenne;
    }
}

console.log("Nombre d'élèves : ", taille);
console.log("Moyenne la plus petite : ", mini_moyenne, " Moyenne la plus grande : ", maxi_moyenne);
*/

console.log("");

/****************************Partie 3*****************************/

console.log("-------------------> Partie 3 ");

/*
let mini_moyenne = eleves[0].moyenne;
let i_mini = 0;
//recherche de la plus petite et la plus grande moyenne
for (let i = 0; i < taille; i++) {
    //comparaison pour trouver la moyenne la plus petite
    if (eleves[i].moyenne < mini_moyenne) {
        mini_moyenne = eleves[i].moyenne;
        i_mini=i;
    }
}

console.log("Nombre d'élèves : ", taille);
console.log("Elève : ", eleves[i_mini].nom," | Moyenne la plus petite : ", mini_moyenne, " | Indice : ", i_mini);

*/
console.log("");

/****************************Partie 4*****************************/

console.log("-------------------> Partie 4");
/*
let mini_moyenne = eleves[0].moyenne;
let i_mini = 0;

//recherche de la plus petite et la plus grande moyenne
for (let i = 0; i < taille; i++) {
    //comparaison pour trouver la moyenne la plus petite
    if (eleves[i].moyenne < mini_moyenne) {
        mini_moyenne = eleves[i].moyenne;
        i_mini=i;
    }
}

let temp = eleves[0];
eleves[0] = eleves[i_mini];
eleves[i_mini] = temp;

//tableau après premier échange
for (let i = 0; i < taille; i++) {
    console.log("Eleve : ",eleves[i].nom," |  Moyenne : ", eleves[i].moyenne);
}
*/
console.log("");

/****************************Partie 5*****************************/

console.log("-------------------> Partie 5");

/*
i = 0;
//parcours global du tableau
while (i < taille) {
    let temp = eleves[i].moyenne;
    moyenne_mini = eleves[i].moyenne;
    let i_mini = i;
    //recherche de la moyenne la plus petite
    for (let j = i; j < taille; j++) {
        if (eleves[j].moyenne < moyenne_mini) {
            moyenne_mini = eleves[j].moyenne;
            i_mini = j;
        }
    }
    eleves[i] = eleves[i_mini];
    eleves[i_mini] = temp;
    i++;  //incrémentation du compteur général pour passer à la note suivante
}
*/

console.log("");

/****************************Partie 6*****************************/

console.log("-------------------> Partie 6");

console.log("Tableau avant tri : ")
for (let i = 0; i < taille; i++) {
    console.log("Eleve : ",eleves[i].nom," |  Moyenne : ", eleves[i].moyenne);
}
console.log("");
//initialisation des variables
i = 0;
let j = 0;
let verif_nb = 0;
let ech_nb = 0;
//parcours global du tableau
while (i < taille) {
    let temp = eleves[i];
    moyenne_mini = eleves[i].moyenne;
    let i_mini = i;
    // recherche du minimum 
    for (j = i+1; j < taille; j++) {
        if (eleves[j].moyenne < moyenne_mini) {
            moyenne_mini = eleves[j].moyenne;
            i_mini = j;
        }
    }
    // si la valeur la plus petite est une autre que celle de base, on échange
    if (i_mini !== i) {
        eleves[i] = eleves[i_mini];
        eleves[i_mini] = temp;
        ech_nb++;
        console.log("( Echange ", ech_nb, ") Tableau actuel : ", eleves);
    }
    i++; //incrémentation du compteur général pour passer à la moyenne suivante
}
console.log("");
console.log("Tableau après tri : ");
for (let i = 0; i < taille; i++) {
    console.log("Eleve : ",eleves[i].nom," |  Moyenne : ", eleves[i].moyenne);
}
console.log("");
console.log(" - Nombre de vérifications : ", j);
console.log(" - Nombre d'échange : ", ech_nb);
console.log("");

/****************************Bonus*****************************/
console.log("-------------------> Bonus");

console.log("Tableau avant tri : ")
for (let i = 0; i < taille; i++) {
    console.log("Eleve : ",eleves[i].nom," |  Moyenne : ", eleves[i].moyenne);
}
console.log("");
//initialisation des variables
i = 0;
j = 0;
verif_nb = 0;
ech_nb = 0;
//parcours global du tableau
while (i < taille) {
    let temp = eleves[i];
    note_mini = eleves[i].noteMaths;
    let i_mini = i;
    // recherche du minimum 
    for (j = i+1; j < taille; j++) {
        if (eleves[j].noteMaths < note_mini) {
            note_mini = eleves[j].noteMaths;
            i_mini = j;
        }
    }
    // si la valeur la plus petite est une autre que celle de base, on échange
    if (i_mini !== i) {
        eleves[i] = eleves[i_mini];
        eleves[i_mini] = temp;
        ech_nb++;
        console.log("( Echange ", ech_nb, ") Tableau actuel : ", eleves);
    }
    i++; //incrémentation du compteur général pour passer à la note suivante
}
console.log("");
console.log("Tableau après tri : ");
for (let i = 0; i < taille; i++) {
    console.log("Eleve : ",eleves[i].nom," |  Note de français : ", eleves[i].noteMaths," | Moyenne : ",eleves[i].moyenne);
}
console.log("");
console.log(" - Nombre de vérifications : ", j);
console.log(" - Nombre d'échange : ", ech_nb);
console.log("");
