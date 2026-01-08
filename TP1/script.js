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

let trio = [student1];

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

trio.push(student2,student3);



for (let i=0; i<=trio.length-1; i++){
    console.log(i);
    console.log(trio[i].name);
}

//*************************Part 4******************************//