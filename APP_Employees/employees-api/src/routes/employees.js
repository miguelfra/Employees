//Modulos
const express = require('express');
const mysqlConnection = require('../database'); 
const router = express.Router();


router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query(`SELECT * FROM employees WHERE id = ${id}`, (err, rows) =>{
        if (!err) {
            res.json(rows[0])
        } else{
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
     mysqlConnection.query(`INSERT INTO employees(name, salary)
     VALUES('${req.body.name}', ${req.body.salary})`, (err) =>{
        if (!err) {
            res.json({
                status: 'employees SAVED'
             })
        } else{
            console.log(err);
        }
    })
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query(`UPDATE employees SET name = '${req.body.name}', salary = ${req.body.salary} 
    WHERE id = ${id}`, (err) =>{
        if (!err) {
            res.json({
                 status: 'employees UPDATE'
             })
        } else{
            console.log(err);
        }
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query(`DELETE FROM employees WHERE id = ${id}`, (err) =>{
        if (!err) {
            res.json({
                status: 'employed DELETE'
            })
        } else{
            console.log(err);
        }
    });
})

module.exports = router;  

