const {Staff} = require('../models/model');
const apiError = require('../error/apiError');

class staffController {

    //создать запись
    async create(req, res, next) {
        try {
            const {surname, name, patronymic, positionId} = req.body;
            const staff = await Staff.create({surname, name, patronymic, positionId});

            return res.json(staff);
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    //получить все записи
    async get_all(req, res) {
        try {
            const staff = await Staff.findAll();
            return res.json(staff);
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    //получить запись по id
    async get_one(req, res) {
        try {
            const {id} = req.params;
            const staff = await Staff.findOne({where: {id}});

            return res.json(staff);
        } catch (e) {
            next(apiError.badRequest(e.message));
        } 
    }

    //удалить запись по id
    async delete_one(req, res, next) {
        try {
            const {id} = req.params;
            const staff = await Staff.destroy({where: {id}});

            return res.json("delete!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }  
    }

    //обновить запись по id
    async update_one(req, res, next) {
        try {
            const {id} = req.params;
            const {surname, name, patronymic, positionId} = req.body;
            const staff = await Staff.update({surname, name, patronymic, positionId}, {where: {id}});

            return res.json("update!");
        } catch (e) {
            next(apiError.badRequest(e.message));
        }   
    }
}

module.exports = new staffController();