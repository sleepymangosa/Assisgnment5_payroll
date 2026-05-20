
// PAYROLL MANAGEMENT SYSTEM


// Employee Class
class Employee{

    constructor(name, department, payRate, daysWorked){

        this.name = name;
        this.department = department;
        this.payRate = payRate;
        this.daysWorked = daysWorked;

        this.grossSalary = 0;
        this.tax = 0;
        this.netSalary = 0;
    }

    // Calculate Salary
    calculateSalary(){

        this.grossSalary = this.payRate * this.daysWorked;

        if(this.grossSalary >= 10000){
            this.tax = this.grossSalary * 0.10;
        }
        else{
            this.tax = 0;
        }

        this.netSalary = this.grossSalary - this.tax;
    }
}

// Employee Array
let employees = [];

// Add Employee Function
function addEmployee(){

    let name = document.getElementById("empName").value;
    let department = document.getElementById("empDept").value;

    let payRate = Number(document.getElementById("empRate").value);
    let daysWorked = Number(document.getElementById("empDays").value);

    // Validation using while loop
    while(payRate < 0 || daysWorked < 0){

        alert("Values cannot be negative");
        return;
    }

    // Create Object
    let employee = new Employee(name, department, payRate, daysWorked);

    employee.calculateSalary();

    // Store in Array
    employees.push(employee);

    displayEmployees();
}

// Display Employees using For Loop
function displayEmployees(){

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    for(let i = 0; i < employees.length; i++){

        table.innerHTML += `
        <tr>
            <td>${employees[i].name}</td>
            <td>${employees[i].department}</td>
            <td>R${employees[i].grossSalary}</td>
            <td>R${employees[i].tax}</td>
            <td>R${employees[i].netSalary}</td>
        </tr>
        `;
    }
}



// ATM BANKING SYSTEM


class BankAccount{

    constructor(accountName, accountNumber, balance){

        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.balance = balance;

        this.transactions = [];
    }

    // Deposit Method
    deposit(amount){

        this.balance += amount;

        this.transactions.push("Deposited R" + amount);
    }

    // Withdraw Method
    withdraw(amount){

        if(amount > this.balance){

            alert("Insufficient Funds");
        }
        else{

            this.balance -= amount;

            this.transactions.push("Withdrawn R" + amount);
        }
    }

    // Display Balance
    displayBalance(){

        return this.balance;
    }
}

// Create Object
const user1 = new BankAccount("John", 1001, 5000);

// Deposit Function
function depositMoney(){

    let amount = Number(document.getElementById("amount").value);

    while(amount <= 0){

        alert("Amount must be greater than 0");
        return;
    }

    user1.deposit(amount);

    updateTransactions();

    showBalance();
}

// Withdraw Function
function withdrawMoney(){

    let amount = Number(document.getElementById("amount").value);

    while(amount <= 0){

        alert("Amount must be greater than 0");
        return;
    }

    user1.withdraw(amount);

    updateTransactions();

    showBalance();
}

// Show Balance
function showBalance(){

    document.getElementById("balance").textContent =
    "Balance: R" + user1.displayBalance();
}

// Display Transactions using For Loop
function updateTransactions(){

    let list = document.getElementById("transactionList");

    list.innerHTML = "";

    for(let i = 0; i < user1.transactions.length; i++){

        list.innerHTML += `
        <li>${user1.transactions[i]}</li>
        `;
    }
}