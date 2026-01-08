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


console.log("Taille du tableau : ",taille);

let note_mini=notes[0];
let note_maxi=notes[0];
for (let i=0; i<taille; i++){
    if (notes[i]<note_mini){
        note_mini = notes[i];
    }
    if (notes[i]>note_maxi){
        note_maxi = notes[i];
    }
}
console.log("Note la plus petite : ", note_mini);
console.log("Note la plus grande : ", note_maxi);
console.log(notes);

console.log("");

/****************************Partie 2*****************************/

console.log("-------------------> Partie 2");

note_mini=notes[0];
let i_mini=0;
for (let i=0; i<taille; i++){
    if (notes[i]<note_mini){
        note_mini = notes[i];
        i_mini = i;
    }
}

console.log("Note la plus petite : ", note_mini, " Indice : ",i_mini);

console.log("");

/****************************Partie 3*****************************/

console.log("-------------------> Partie 3");

let temp = notes[0];
notes[0] = notes[i_mini];
notes[i_mini] = temp;

console.log(notes);

console.log("");