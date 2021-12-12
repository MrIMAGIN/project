const {Service} = require('../models/model');
const apiError = require('../error/apiError');

class serviceController {

    async create(req, res, next) {
        try {
            const {name} = req.body
            const service = await Service.create({name});

            return res.json(service);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async get_all(req, res) {
        const service = await Service.findAll();
        return res.json(service);
    }

    async get_one(req, res) {
        try {
            const {id} = req.params;
            const service = await Service.findOne({where: {id}});

            return res.json(service);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async delete_one(req, res, next) {
        try {
            const {id} = req.params;
            const service = await Service.destroy({where: {id}});

            return res.json("delete!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    async update_one(req, res, next) {
        try {
            const {id} = req.params;
            const {name} = req.body;
            const service = await Service.update({name}, {where: {id}});

            return res.json("update!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }   
    }
}

module.exports = new serviceController();