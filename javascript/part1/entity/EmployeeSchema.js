const EntitySchema = require("typeorm").EntitySchema;
const Employee = require("../model/Employee").Employee;

module.exports = new EntitySchema({
    name: "Employee",
    target: Employee,
    tableName: "employees",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        firstName: {
            type: "varchar"
        },
        lastName: {
            type: "varchar"
        },
        active: {
            type: "bool"
        }
    }
});