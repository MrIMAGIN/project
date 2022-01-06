const {User} = require('../models/model');
const apiError = require('../error/apiError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email) => {
    return jwt.sign({id, email}, process.env.SECRET_KEY, {expiresIn: '24h'});
}

class userController {

    async registration(req, res, next) {
        const {email, password} = req.body;
        if (!email || !password) {
            return next(apiError.badRequest('Некорректные данные.'));
        }

        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(apiError.badRequest('Такой пользователь уже существует.'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, password: hashPassword});

        const token = generateJwt(user.id, user.email);

        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});

        if(!user) {
            return next(apiError.internal('Пользователь не найден.'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword) {
            return next(apiError.internal('Пароль не верен.'));
        }

        const token = generateJwt(user.id, user.email);

        return res.json({token});
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email);
        return res.json({token});
    }
}

module.exports = new userController();