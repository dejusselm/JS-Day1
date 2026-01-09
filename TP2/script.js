//////////////////////// Code fourni (ne pas moidifier) ////////////////////////

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}

///////////////////////////////////////////////////////////////////////////////


/****************************Partie 1*****************************/

console.log("-------------------> Partie 1");


console.log("Taille du tableau : ", taille);

let note_mini = notes[0];
let note_maxi = notes[0];
//recherche de la note la plus petite et la note la plus grande
for (let i = 0; i < taille; i++) {
    if (notes[i] < note_mini) {
        note_mini = notes[i];
    }
    if (notes[i] > note_maxi) {
        note_maxi = notes[i];
    }
}
console.log("Note la plus petite : ", note_mini);
console.log("Note la plus grande : ", note_maxi);
console.log(notes);

console.log("");

/****************************Partie 2*****************************/

console.log("-------------------> Partie 2");

note_mini = notes[0];
let i_mini = 0;
//recherche du minimum
for (let i = 0; i < taille; i++) {
    //comparaison pour trouver la valeur la plus petite
    if (notes[i] < note_mini) {
        note_mini = notes[i];
        i_mini = i;
    }
}

console.log("Note la plus petite : ", note_mini, " Indice : ", i_mini);

console.log("");

/****************************Partie 3*****************************/

console.log("-------------------> Partie 3 ");

//création d'une variable temporaire pour y copier une des valeurs
let temp = notes[0];
//échange des valeurs
notes[0] = notes[i_mini];
notes[i_mini] = temp;

console.log(notes);

console.log("");

/****************************Partie 4*****************************/

console.log("-------------------> Partie 4 (Partie commentée pour ne pas interférer avec la suite)");
/*

let i = 0;
//parcours global du tableau
while (i < taille) {
    let temp = notes[i];
    note_mini = notes[i];
    let i_mini = i;
    //recherche du minimum
    for (let j = i; j < taille; j++) {
        if (notes[j] < note_mini) {
            note_mini = notes[j];
            i_mini = j;
        }
    }
    notes[i] = notes[i_mini];
    notes[i_mini] = temp;
    i++;  //incrémentation du compteur général pour passer à la note suivante
}
}
*/
console.log("");

/****************************Partie 5*****************************/

console.log("-------------------> Partie 5 (Partie commentée pour ne pas interférer avec le bonus)");
/*
console.log("Tableau de départ : ",notes);

i = 0;
//parcours global du tableau
while (i < taille) {
    let temp = notes[i];
    note_mini = notes[i];
    let i_mini = i;
    //recherche du minimum
    for (let j = i; j < taille; j++) {
        if (notes[j] < note_mini) {
            note_mini = notes[j];
            i_mini = j;
        }
    }
    notes[i] = notes[i_mini];
    notes[i_mini] = temp;
    i++;  //incrémentation du compteur général pour passer à la note suivante
}
}

console.log("Tableau trié : ",notes);
*/

/****************************Bonus*****************************/

console.log("-------------------> Bonus ");

console.log("---Tri croissant---");
console.log("Tableau de départ : ", notes);
console.log("");

//initialisation des variables
i = 0;
let j = 0;
let verif_nb = 0;
let ech_nb = 0;
//parcours global du tableau
while (i < taille) {
    let temp = notes[i];
    note_mini = notes[i];
    let i_mini = i;
    // recherche du minimum 
    for (j = i; j < taille; j++) {
        if (notes[j] < note_mini) {
            note_mini = notes[j];
            i_mini = j;
        }
    }
    // si la valeur la plus petite est une autre que celle de base, on échange
    if (i_mini !== i) {
        notes[i] = notes[i_mini];
        notes[i_mini] = temp;
        ech_nb++;
        console.log("( Echange ", ech_nb, ") Tableau actuel : ", notes);
    }
    i++; //incrémentation du compteur général pour passer à la note suivante
}

console.log("");
console.log("Tableau trié : ", notes);
console.log(" - Nombre de vérifications : ", j);
console.log(" - Nombre d'échange : ", ech_nb);
console.log("");

console.log("---Tri décroissant---");
console.log("Tableau de départ : ", notes);
console.log("");


//initialisation des variables
i = 0;
verif_nb = 0;
ech_nb = 0;
//parcours global du tableau
while (i < taille) {
    let temp = notes[i];
    note_maxi = notes[i];
    let i_maxi = i;
    // recherche du maximum
    for (let j = i; j < taille; j++) { 
        verif_nb++;
        if (notes[j] > note_maxi) {
            note_maxi = notes[j];
            i_maxi = j;
        }
    }
    // si il y a une valeur plus grande que celle de base, on l'échange avec
    if (i_maxi !== i) {
        notes[i] = notes[i_maxi];
        notes[i_maxi] = temp;
        ech_nb++;
        console.log("( Echange ", ech_nb, ") Tableau actuel : ", notes);
    }
    i++;//incrémentation du compteur général pour passer à la note suivante
}

console.log("");
console.log("Tableau trié (décroissant): ", notes);
console.log(" - Nombre de vérifications : ", verif_nb);
console.log(" - Nombre d'échange : ", ech_nb);
console.log("");