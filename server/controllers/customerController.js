const {Сustomer} = require('../models/model');
const apiError = require('../error/apiError');

class customerController {

    async create(req, res, next) {
        try {
            const {surname, name, patronymic} = req.body
            const customer = await Сustomer.create({surname, name, patronymic});

            return res.json(customer);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async get_all(req, res) {
        const customer = await Сustomer.findAll();
        return res.json(customer);
    }

    async get_one(req, res) {
        try {
            const {id} = req.params;
            const customer = await Сustomer.findOne({where: {id}});

            return res.json(customer);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async delete_one(req, res, next) {
        try {
            const {id} = req.params;
            const customer = await Сustomer.destroy({where: {id}});

            return res.json("delete!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    async update_one(req, res, next) {
        try {
            const {id} = req.params;
            const {surname, name, patronymic} = req.body;
            const customer = await Сustomer.update({surname, name, patronymic}, {where: {id}});

            return res.json("update!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }   
    }
}

module.exports = new customerController();