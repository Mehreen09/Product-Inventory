//PART 2
type Student = {                                        
    name : string,
    grades : number[]
};
let students : Student[] = [ {                                           
    name :"Ali",
    grades :[21,12,70,75,90]
},
{
    name:"Ayesha",
    grades:[40,56,45,35,65]
},
{
    name:"Sana",
    grades:[32,41,44,13,70]
}
];
function calculateAverageGrade(grades:number[]):number{                             
    let sum = grades.reduce((acc,grade) => acc + grade, 0);
    return sum/grades.length;
}
console.log("\n \t \t ***Students Grading System*** \n")
students.forEach (students =>{                                                          
    let averageGrade = calculateAverageGrade(students.grades);                         
    console.log(`${students.name} average grade is : ${averageGrade}`);
})