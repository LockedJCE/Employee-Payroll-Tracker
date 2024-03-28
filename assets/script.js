const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {

const employees = [];

let employeeData = true;

while(employeeData) {
  const firstName = prompt("Enter employee's first Name");
  const lastName = prompt("Enter employee's last Name");
  let salary = prompt("Enter the employee's salary");

  if(salary === null || salary ==""|| isNaN(salary)){
    salary=0;
  }

  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: parseInt(salary)
  }

  employees.push(employee);

  employeeData= confirm("Do you want to add another employee");

}
return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary= 0;
  let numEmployees = employeesArray.length;


  for(let index=0; index < numEmployees; index++){
    totalSalary += employeesArray[index].salary;
    
  }
  const averageSalary = totalSalary / numEmployees;
  console.log(`The average employee salary between our ${numEmployees} employee(s) is $${averageSalary.toFixed(2)}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]
  console.log(`Random Employee: ${randomEmployee["firstName"]} ${randomEmployee["lastName"]} is our employee of the day!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
