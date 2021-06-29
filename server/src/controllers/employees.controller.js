const Employee = require('../models/Employee');
const employeesCtrl = {};

employeesCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};
employeesCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};
employeesCtrl.deleteEmployee = async (req, res) => {
    await Employee.deleteOne({_id: req.params.id});
    res.send({message: "Eliminado"});
};
employeesCtrl.editEmployee = async (req, res) => {
    const employee = { _id: req.params.id };
    const update = { name: req.body.name };
    await Employee.findOneAndUpdate(employee, update);
    res.send({message: "Editado"});
};
employeesCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.send({message: "Creado"});
};

module.exports = employeesCtrl;