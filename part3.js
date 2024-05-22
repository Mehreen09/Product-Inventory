//PART 3
var employees = [
    {
        name: "Employee1",
        hoursWorked: 15,
        hourlyRate: 18,
        salary: 0
    },
    {
        name: "Employee2",
        hoursWorked: 20,
        hourlyRate: 25,
        salary: 0
    },
    {
        name: "Employee3",
        hoursWorked: 22,
        hourlyRate: 25,
        salary: 0
    },
];
function calculateSalary(employee) {
    var employeeSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employeeSalary *= 1.1;
    }
    return employeeSalary;
}
employees.forEach(function (employees) {
    employees.salary = calculateSalary(employees); 
});
console.log("\n \t \t ***Employee Salaries*** \n");
console.log(employees); 
