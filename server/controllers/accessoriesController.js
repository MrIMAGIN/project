const {Accessories} = require('../models/model');
const apiError = require('../error/apiError');

class accessoriesController {

    async create(req, res, next) {
        try {
            const {name, price, availability} = req.body
            const accessories = await Сustomer.create({name, price, availability});

            return res.json(accessories);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async get_all(req, res) {
        const accessories = await Сustomer.findAll();
        return res.json(accessories);
    }

    async get_one(req, res) {
        try {
            const {id} = req.params;
            const accessories = await Accessories.findOne({where: {id}});

            return res.json(accessories);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async delete_one(req, res, next) {
        try {
            const {id} = req.params;
            const accessories = await Accessories.destroy({where: {id}});

            return res.json("delete!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    async update_one(req, res, next) {
        try {
            const {id} = req.params;
            const {name, price, availability} = req.body;
            const accessories = await Accessories.update({name, price, availability}, {where: {id}});

            return res.json("update!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }   
    }
}

module.exports = new accessoriesController();