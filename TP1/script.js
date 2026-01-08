console.log("-----> Partie 1");

const classe = "B1A";
let stud_number = 3;
let is_open = false;

console.log(classe,stud_number,is_open);
console.log("");
//*************************Part 2******************************//
console.log(" 2");


let student1 = {
    name: "Maeva",
    maths: 14,
    french: 15
};

console.log(student1.name);
console.log("");
//*************************Part 3******************************//
console.log(" 3");

let group = [student1];

let student2 = {
    name: "Marine",
    maths: 13,
    french: 16
};

let student3 = {
    name: "Marion",
    maths: 15,
    french: 15
};

group.push(student2, student3);

for (let i=0; i<=group.length-1; i++){
    console.log(i);
    console.log(group[i].name);
}
console.log("");

//*************************Part 4******************************//
console.log("-----> Partie 4");

for (student of group){
    console.log(student.name);
    let avg = (student.maths+student.french)/2;
    console.log("Average : ", avg);
}

console.log("");

//**************************Part 5*******************************//
console.log("-----> Partie 5");

for (student of group) {
    let avg = (student.maths + student.french) / 2; //on calcule la moyenne de l'élève
    console.log(student.name);
    if (avg>=10){ //on regarde si la moyenne est supérieure ou égale à 10 :
        console.log("Admis(e)");
    } else{ // si elle n'est pas supérieure ou égale à dix :
        console.log("Refusé.e");
    }
}
console.log("");

//**************************Part 6*******************************//
console.log("-----> Partie 6");


for (student of group) { // pour chaque élève dans la classe
    let avg = (student.maths + student.french) / 2; // on calcule la moyenne
    console.log(student.name);
    if (avg >= 16) { // et on regarde à quelle mention cela correspond
        console.log("Très bien");
    } else if (avg >= 14) {
        console.log("Bien");
    } else if (avg >= 12) {
        console.log("Assez bien");
    } else if (avg >= 10) {
        console.log("Passable");
    } else {
        console.log("Insuffisant");
    }
}
console.log("");

//**************************Part 7*******************************//
console.log("-----> Partie 7");

let i = 0;
let count = 0; // nombre d'élèves qui sont admis
let stud = null; // on initialise la variable 
while (i < stud_number) {
    stud = group[i]; // on récupère l'élève à l'indice i du tableau group
    let avg = (stud.maths + stud.french) / 2;
    if (avg >= 10) {
        count++; //comme il est admis on ajoute 1 au compte 
    }
    i++ 
}
console.log(count);
console.log("");

//**************************Bonus*******************************//
console.log("Bonus");


let total =0;
i = 0;
while (i < stud_number) { 
    stud = group[i];
    let stud_avg = (stud.maths + stud.french) / 2;
    total += stud_avg;
    i++
}
let avg = total / stud_number;
console.log("La moyenne de la classe est de :",avg);    


let student4 ={
    name : "Mariva",
    maths : 20,
    french : 20
};

i = 0;
count = 0;
stud = null;
while (i < stud_number) {
    stud = group[i];
    let avg = (stud.maths + stud.french) / 2;
    if (avg >= 10) {
        count++;
    }
    i++
}

group.push(student4);

if (count===stud_number){
    console.log("Tout le monde est admis !")
}