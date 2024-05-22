//PART 2
var students = [{
        name: "Ali",
        grades: [21, 12, 70, 75, 90]
    },
    {
        name: "Ayesha",
        grades: [40, 56, 45, 35, 65]
    },
    {
        name: "Sana",
        grades: [32, 41, 44, 13, 70]
    }
];
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (acc, grade) { return acc + grade; }, 0);
    return sum / grades.length;
}
console.log("\n \t \t ***Students Grading System*** \n");
students.forEach(function (students) {
    var averageGrade = calculateAverageGrade(students.grades);
    console.log("".concat(students.name, " average grade is : ").concat(averageGrade));
});
