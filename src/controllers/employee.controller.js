'use strict';
const { validationResult } = require('express-validator');
const Employee = require('../models/employee.model');
const {success, error, validation} = require('../../common/responseApi')

exports.findAll = function(req, res) {
    Employee.findAll(function(err, employee) {
        if (err)
            res.send(err);
        res.json(success(employee))
    });
};
exports.create = function(req, res) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.json(error(errors.array(), 422));
            return;
        }

        const new_employee = new Employee(req.body);
        Employee.create(new_employee, function (err, employee) {
            if (err)
                res.json(error(err));
            res.json(success(employee));
        });
    } catch (err) {
        return next(err);
    }
};
exports.findById = function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Employee.update(req.params.id, new Employee(req.body), function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Employee successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    Employee.delete( req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Employee successfully deleted' });
    });
};