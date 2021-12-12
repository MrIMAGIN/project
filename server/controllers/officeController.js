const {Office} = require('../models/model');
const apiError = require('../error/apiError');

class officeController {

    async create(req, res, next) {
        try {
            const {address, openTime, closeTime} = req.body
            const office = await Office.create({address, openTime, closeTime});

            return res.json(office);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async get_all(req, res) {
        const office = await Office.findAll();
        return res.json(office);
    }

    async get_one(req, res) {
        try {
            const {id} = req.params;
            const office = await Office.findOne({where: {id}});

            return res.json(office);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async delete_one(req, res, next) {
        try {
            const {id} = req.params;
            const office = await Office.destroy({where: {id}});

            return res.json("delete!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    async update_one(req, res, next) {
        try {
            const {id} = req.params;
            const {address, openTime, closeTime} = req.body;
            const office = await Office.update({address, openTime, closeTime}, {where: {id}});

            return res.json("update!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }   
    }
}

module.exports = new officeController();