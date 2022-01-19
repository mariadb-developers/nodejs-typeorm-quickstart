
const typeorm = require("typeorm"); 
const Employee = require("./model/Employee").Employee;

typeorm.createConnection({
    type: "mariadb",
    host: "<host_address>",
    port: 3306,
    username: "<user>",
    password: "<password>",
    database: "company",
    synchronize: true,
    entities: [
        require("./entity/EmployeeSchema")
    ]
}).then(async function (connection) {

    const employee1 = new Employee(0, "Jane", "Foster", true);
    const employee2 = new Employee(0, "Kyle", "Brown", true);

    const manager = connection.manager;

    // INSERT Employees
    await manager.save([employee1, employee2]);
    console.log("***Employees have been added***");

    // SELECT All Employees
    //const employees = await manager.getMany()
    const employees = await manager.createQueryBuilder(Employee, "employee").getMany();
    console.log("***Select all employees***");
    console.log(employees);

    // UPDATE Employee
    await manager.createQueryBuilder(Employee, "employee")
                 .update()
                 .set({
                     active: false
                 })
                 .where("id = :id", { id: 1 })
                 .execute();

    // SELECT Single Employee
    const employee = await manager.createQueryBuilder(Employee, "employee")
                                   .where("employee.id = :id", { id: 1 })
                                   .getOne();
    console.log("***Select single employee***");
    console.log(employee);

    // DELETE Employee
    await manager.createQueryBuilder(Employee, "employee")
                 .delete()
                 .where("id = :id", { id: 2 })
                 .execute();
    console.log("***Employee (id=2) has been removed***");

}).catch(function(error) {
    console.log("Error: ", error);
});