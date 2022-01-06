const {Positions} = require('../models/model');
const apiError = require('../error/apiError');

class positionController {

    async create(req, res) {
        const {name} = req.body
        const position = await Positions.create({name});

        return res.json(position);
    }

    async get_all(req, res) {
        const position = await Positions.findAll();
        return res.json(position);
    }

    //получить запись по id
    async get_one(req, res) {
        try {
            const {id} = req.params;
            const positions = await Positions.findOne({where: {id}});

            return res.json(positions);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    //удалить запись по id
    async delete_one(req, res, next) {
        try {
            const {id} = req.params;
            const positions = await Positions.destroy({where: {id}});

            return res.json("delete!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    async update_one(req, res, next) {
        try {
            const {id} = req.params;
            const {name} = req.body;
            const positions = await Positions.update({name}, {where: {id}});

            return res.json("update!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }   
    }
}

module.exports = new positionController();