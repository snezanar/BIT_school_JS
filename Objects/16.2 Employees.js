
// Create constructor functions with properties representing the following:
// ○	Person: name, surname
// ○	Employee: inherits Person and has job and salary
// ○	Developer: inherits from Employee and has specialization
// ○	Manager: inherits from Employee and has department
function Person(name,surname) {
    this.name = name;
    this.surname = surname;
 
  };
Person.prototype.getFullName=function(){
    console.log(this.name+' '+this.surname);
}
function Employee(name,surname,job,salary)  {
    Person.call(this,name,surname);
    this.job=job;
    this.salary=salary;
}
Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee;

Employee.prototype.getData = function(){  
    console.log(this.name+' '+ this.surname+ ' '+this.salary);
}
Employee.prototype.getSalary = function(){  
    console.log(this.salary);
}
Employee.prototype.increaseSalary = function(){ 
    this.salary=this.salary+0.1*this.salary; 
    console.log(this.salary);
}


function Developer(name,surname,job,salary,specialization)  {
    Employee.call(this,name,surname,job,salary);
    this.specialization=specialization;
}
Developer.prototype=Object.create(Employee.prototype);
Developer.prototype.constructor=Developer;

// All developers should inherit method:
// ○	getSpecialization which prints out the name of the specialization

Developer.prototype.getSpecialization = function(){  
    console.log(this.specialization);
}



function Manager(name,surname,job,salary,department)  {
    Employee.call(this,name,surname,job,salary);
    this.department=department;
}
Manager.prototype=Object.create(Employee.prototype);
Manager.prototype.constructor=Manager;
// All managers should inherit methods:
// ○	getDepartment which prints out the name of the department
// ○	changeDepartment which sets the department value on the given value
Manager.prototype.getDepartment=function(){
    console.log(this.department);
}
Manager.prototype.changeDepartment=function(newDep){       //!!!!!!!!!!!!!!!!!!!!
    this.department=newDep;
    console.log(newDep);
}


var sneza=new Person('Snezana', 'Rajcic');
var pera=new Person('Pera', 'Detlic');
var emp1=new Employee('Snezana','Rajcic','BA',1200);
var emp2=new Employee('Pera','Detlic','PMO',1500);
sneza.getFullName();
console.log(emp1.salary);
emp2.getFullName();
console.log('---------------');
emp1.getData();
emp1.getSalary();
emp1.increaseSalary();
console.log('---------------');
var dev1=new Developer('Pera','Detlic','PMO',1500, 'JS developer');
dev1.getSpecialization();

var man1=new Manager('Snezana','Rajcic','BA', 1200, 'Backoffice');
man1.getDepartment();
man1.changeDepartment('IT department');
