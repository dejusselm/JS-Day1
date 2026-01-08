const classe = "B1A";
let stud_number = 3;
let is_open = false;

// console.log(classe,stud_number,is_open);

//*************************Part 2******************************//

let student1 = {
    name: "Maeva",
    maths: 14,
    french: 15
};

// console.log(student1.name);

//*************************Part 3******************************//

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

/*for (let i=0; i<=group.length-1; i++){
    console.log(i);
    console.log(group[i].name);
}*/

//*************************Part 4******************************//

/*for (student of group){
    console.log(student.name);
    let avg = (student.maths+student.french)/2;
    console.log("Average : ", avg);
}*/


//**************************Part 5*******************************//

/*for (student of group) {
    let avg = (student.maths + student.french) / 2;
    console.log(student.name);
    if (avg>=10){
        console.log("Admis(e)");
    } else{
        console.log("Refusé.e");
    }
}*/

//**************************Part 6*******************************//

/*for (student of group) {
    let avg = (student.maths + student.french) / 2;
    console.log(student.name);
    if (avg >= 16) {
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
}*/

//**************************Part 7*******************************//

let i = 0;
let count = 0;
let stud = null;
while (i < stud_number) {
    stud = group[i];
    let avg = (stud.maths + stud.french) / 2;
    if (avg >= 10) {
        count++;
    }
    i++
}
console.log(count);