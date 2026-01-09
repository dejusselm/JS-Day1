/*************************************Partie 1*******************************/

console.log("------> Partie 1");

function genererEleves() {
    let eleves = [];
    // Définir la taille du tableau d'élèves au hasard entre 7 et 10
    let taille_minimum = 7;
    let taille_maximum = 10;
    let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;
    let noms = ["Marine", "Maeva", "Marion", "Nathanael", "Nathan", "Gabriel", "Thomas", "Pierre", "Jade", "Chloé", "Louis", "Mathis", "Mathilde"];
    // Itérer autant de fois qu'on a d'élèves à générer
    for (let i = 0; i < taille; i++) {
        let randomName = noms[Math.floor(Math.random() * noms.length)];
        let notes = [];
        let note_maximum = 20;
        for (let i = 0; i < 3; i++) {// On génère 3 notes aléatoires pour l'élève
            let note = Math.floor(Math.random() * (note_maximum + 1));
            notes.push(note);        // Ajouter la note générée au tableau
        }
        let avg = (notes[0] + notes[1] + notes[2]) / 3;
        let eleve = {                //création de l'élève
            nom: randomName,
            noteFrancais: notes[0],
            noteMaths: notes[1],
            noteHistoire: notes[2],
            moyenne: Math.round((avg + Number.EPSILON) * 10) / 10
        };
        eleves.push(eleve);         // Ajouter la note générée au tableau
    } return eleves;
}

let tab = genererEleves();
console.log(tab, "\n");

/*************************************Partie 2*******************************/

console.log("\n------> Partie 2");

function afficherEleves(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        console.log("Eleve : ", tableau[i].nom, " |  Moyenne : ", tableau[i].moyenne);
    }
}

afficherEleves(tab);

/*************************************Partie 3*******************************/

console.log("\n------> Partie 3");

function trouverMoyenneMin(tableau, indexDepart) {
    let mini_moyenne = tableau[indexDepart].moyenne;
    let i_mini = indexDepart;
    for (let i = indexDepart; i < tableau.length; i++) {
        //comparaison pour trouver la moyenne la plus petite
        if (tableau[i].moyenne < mini_moyenne) {
            mini_moyenne = tableau[i].moyenne;
            i_mini = i;
        }
    }
    return i_mini;
}

console.log("Indice : ", trouverMoyenneMin(tab, 1));

/*************************************Partie 4*******************************/

console.log("\n------> Partie 4");

function trouverMoyenneMax(tableau, indexDepart) {
    let maxi_moyenne = tableau[indexDepart].moyenne;
    let i_maxi = indexDepart;
    for (let i = indexDepart; i < tableau.length; i++) {
        //comparaison pour trouver la moyenne la plus petite
        if (tableau[i].moyenne > maxi_moyenne) {
            maxi_moyenne = tableau[i].moyenne;
            i_maxi = i;
        }
    }
    return i_maxi;
}

function afficherDonnees(tableau) {
    let i_mini = trouverMoyenneMin(tableau, 0);
    let i_maxi = trouverMoyenneMax(tableau, 0);
    console.log("Nombre d'élèves : ", tableau.length);
    console.log("Moyenne la plus petite : ", tableau[i_mini].moyenne,
        " Moyenne la plus grande : ", tableau[i_maxi].moyenne);
}

afficherDonnees(tab);

/*************************************Partie 5*******************************/

console.log("\n------> Partie 5");
//échange de deux valeurs
function swap(tableau, indexA, indexB) {
    let temp = tableau[indexA];
    tableau[indexA] = tableau[indexB];
    tableau[indexB] = temp;
}

console.log("------------ Exemple de swap // Avant : ");
let tab2 = genererEleves();
afficherEleves(tab2);
swap(tab2, 2, 5);
console.log("------------ Après : ");
afficherEleves(tab2);

/*************************************Partie 6*******************************/

console.log("\n------> Partie 6");

function triParSelection(tableau) {
    i = 0;
    let ech_nb = 0;
    //parcours global du tableau
    while (i < tableau.length) {
        moyenne_mini = tableau[i].moyenne;
        let i_mini = i;
        // recherche du minimum 
        i_mini = trouverMoyenneMin(tableau, i);
        // si la valeur la plus petite est une autre que celle de base, on échange
        if (i_mini !== i) {
            swap(tableau, i_mini, i);
            ech_nb++;
            console.log("( Echange ", ech_nb, ") Tableau actuel : ", tableau);
        }
        i++; //incrémentation du compteur général pour passer à la moyenne suivante
    }
}


/*************************************Partie 7*******************************/

console.log("\n------> Partie 7");

console.log('');
console.log("X-----------------> Avant tri <---------------X");
afficherEleves(tab);
console.log('');
console.log('X-----------------> Tri <---------------X');
triParSelection(tab);
console.log('');
console.log("X-----------------> Après tri <---------------X");
afficherEleves(tab);