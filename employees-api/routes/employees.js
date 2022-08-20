//Modulos
const express = require('express');
const employeesControllers = require('../controllers/employeesController');
const router = express.Router();


router.get('/', employeesControllers.getEmployees);
router.get('/:id', employeesControllers.getEmployeesId);
router.post('/', employeesControllers.postEmployees);
router.put('/:id', employeesControllers.putEmployees);
router.delete('/:id', employeesControllers.deleteEmployees);

module.exports = router;  

