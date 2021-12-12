const {Waybill} = require('../models/model');
const apiError = require('../error/apiError');

class waybillController {

    async create(req, res, next) {
        try {
            const {saleTime} = req.body
            const waybill = await Waybill.create({saleTime});

            return res.json(waybill);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async get_all(req, res) {
        const waybill = await Waybill.findAll();
        return res.json(waybill);
    }

    async get_one(req, res) {
        try {
            const {id} = req.params;
            const waybill = await Waybill.findOne({where: {id}});

            return res.json(waybill);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    async delete_one(req, res, next) {
        try {
            const {id} = req.params;
            const waybill = await Waybill.destroy({where: {id}});

            return res.json("delete!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    async update_one(req, res, next) {
        try {
            const {id} = req.params;
            const {saleTime} = req.body;
            const waybill = await Waybill.update({saleTime}, {where: {id}});

            return res.json("update!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }   
    }
}

module.exports = new waybillController();