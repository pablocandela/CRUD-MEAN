const { Router } = require('express');
const router = Router();
const employeesCtrl = require('../controllers/employees.controller');

router.get('/', employeesCtrl.getEmployees);
router.get('/:id', employeesCtrl.getEmployee);
router.post('/', employeesCtrl.createEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);

module.exports = router;