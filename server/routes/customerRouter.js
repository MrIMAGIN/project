const Router = require('express');
const router = new Router();
const customerController = require('../controllers/customerController');

router.post('/', customerController.create);
router.get('/', customerController.get_all);
router.get('/:id', customerController.get_one);
router.delete('/:id', customerController.delete_one);
router.put('/:id', customerController.update_one);

module.exports = router;