//PART 3
type Employee ={                                                 
name : string,
hoursWorked : number,
hourlyRate : number,
salary : number
}
let employees : Employee[] = [                                  
{
name : "Employee1",
hoursWorked : 10,
hourlyRate : 20,
salary : 0
},
{
name : "Employee2",
hoursWorked : 15,
hourlyRate : 22,
salary : 0
},
{
name : "Employee3",
hoursWorked : 22,
hourlyRate : 25,
salary : 0
},
];
function calculateSalary(employee:Employee): number {                         
let employeeSalary = employee.hoursWorked * employee.hourlyRate;
if(employee.hoursWorked >=20){                                      
employeeSalary *= 1.1;
}
return employeeSalary ;                                                        
}
employees.forEach(employees => {                                                      
employees.salary = calculateSalary(employees);                                      
});
console.log("\n \t \t ***Employee Salaries*** \n");
console.log(employees);                                                                      