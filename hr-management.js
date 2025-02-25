class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} (ID: ${this.id}) earns $${this.salary} per annum.`;
    }

    requestRaise(amount) {
        console.log(`${this.name} has requested a raise of $${amount}.`)
    }
}

class Manager extends Employee {
    constructor(name, id, salary, department) {
       super(name, id, salary);
        this.department = department;  
    }
   getDetails() {
    return `${super.getDetails()} He/She manages the ${this.department} deparment.`;
}
    assignTask(employee, task) {
        console.log(`${this.name} assigned the task "${task}" to ${employee.name}.`);
    } 
}

class WorkingStudent extends Employee {
    constructor(name, id, salary, department, university) {
        super(name, id, salary);
        this.department = department;
        this.university = university;
    }
    getDetails() {
        return `${super.getDetails()} Deparment: ${this.department} Enrolled University: ${this.university}.`;
    }
    approvedDayOff(employee, dayOff) {
        console.log(`${this.name} approved "${dayOff}" days to ${employee.name}.`);
    } 
}


//testing
const employee1 = new Employee("Fonni", "01", 5000);
console.log(employee1.getDetails());

const manager1 = new Manager("Micha", "02", 5500, "Tech");
console.log(manager1.getDetails());
//manager1.assignTask(employee1, "Fix bugs");

const workingStudent1 = new WorkingStudent("Machi", "03", 2000, "Sales", "University of Minnesota");
console.log(workingStudent1.getDetails());
//workingStudent1.approvedDayOff(employee1, 3);
workingStudent1.approvedDayOff(manager1, 15);