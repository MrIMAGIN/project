const sequlize = require('../db')
const {DataTypes} = require('sequelize')

const Staff = sequlize.define('staffs', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING},
})

const Positions = sequlize.define('positions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Accessories = sequlize.define('accessories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    availability: { type: DataTypes.STRING, allowNull: false },
})

const TypeAccessories = sequlize.define('typeAccessories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    typeAcc: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Сustomer = sequlize.define('customers', {
    surname: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    patronymic: { type: DataTypes.STRING }
})

const Office = sequlize.define('offices', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    address: { type: DataTypes.STRING, unique: true, allowNull: false },
    openTime: { type: DataTypes.INTEGER, allowNull: false },
    closeTime: { type: DataTypes.INTEGER, allowNull: false }
})

const Service = sequlize.define('services', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Waybill = sequlize.define('waybills', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    saleTime: { type: DataTypes.INTEGER, allowNull: false },
})

const User = sequlize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false, unique: true }
})

Positions.hasMany(Staff)
Staff.belongsTo(Positions)

TypeAccessories.hasMany(Accessories)
Accessories.belongsTo(TypeAccessories)

Service.hasMany(Waybill)
Waybill.belongsTo(Service)

Office.hasMany(Waybill)
Waybill.belongsTo(Office)

Сustomer.hasMany(Waybill)
Waybill.belongsTo(Сustomer)

Staff.hasMany(Waybill)
Waybill.belongsTo(Staff)

Accessories.hasMany(Waybill)
Waybill.belongsTo(Accessories)

module.exports = {
    Staff,
    Positions,
    Accessories,
    TypeAccessories,
    Сustomer,
    Office,
    Service,
    Waybill,
    User
}