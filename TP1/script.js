const classe = "B1A";
let stud_number  = 28;
let is_open = false;

// console.log(classe,stud_number,is_open);

//*************************Part 2******************************//

let student1 = {
    name : "Maeva",
    maths : 14,
    french : 15
};

// console.log(student1.name);

//*************************Part 3******************************//

let group = [student1];

let student2 = {
    name : "Marine",
    maths : 13,
    french : 16
};

let student3 = {
    name : "Marion",
    maths : 15,
    french : 15
};

group.push(student2,student3);

// for (let i=0; i<=group.length-1; i++){
//     console.log(i);
//     console.log(group[i].name);
// }

//*************************Part 4******************************//

for (student of group){
    console.log(student.name);
    let avg = (student.maths+student.french)/2;
    console.log("Average : ", avg);
}


//**************************Part 5*******************************//