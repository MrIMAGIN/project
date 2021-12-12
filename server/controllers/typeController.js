const {TypeAccessories} = require('../models/model');
const apiError = require('../error/apiError');

class typeController {

    async create(req, res, next) {
        try {
            const {typeAcc} = req.body
            const type = await TypeAccessories.create({typeAcc});

            return res.json(type);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async get_all(req, res) {
        const type = await TypeAccessories.findAll();
        return res.json(type);
    }

    async get_one(req, res) {
        try {
            const {id} = req.params;
            const type = await TypeAccessories.findOne({where: {id}});

            return res.json(type);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async delete_one(req, res, next) {
        try {
            const {id} = req.params;
            const type = await TypeAccessories.destroy({where: {id}});

            return res.json("delete!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    async update_one(req, res, next) {
        try {
            const {id} = req.params;
            const {typeAcc} = req.body;
            const type = await TypeAccessories.update({typeAcc}, {where: {id}});

            return res.json("update!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }   
    }
}

module.exports = new typeController();