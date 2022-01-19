class Employee {
    constructor(id, firstName, lastName, active) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
    }
}

module.exports = {
    Employee: Employee
};