const Router = require('express');
const router = new Router();

const accessoriesRouter = require('./accessoriesRouter');
const typeRouter = require('./typeRouter');
const staffRouter = require('./staffRouter');
const positionRouter = require('./positionRouter');
const waybillRouter = require('./waybillRouter');
const serviceRouter = require('./serviceRouter');
const officeRouter = require('./officeRouter');
const customerRouter = require('./customerRouter');
const userRouter = require('./userRouter');

router.use('/customers', customerRouter);
router.use('/accessories', accessoriesRouter);
router.use('/typeAccessories', typeRouter);
router.use('/waybills', waybillRouter);
router.use('/staffs', staffRouter);
router.use('/services', serviceRouter);
router.use('/positions', positionRouter);
router.use('/offices', officeRouter);
router.use('/users', userRouter);

module.exports = router;