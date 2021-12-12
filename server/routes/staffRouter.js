const Router = require('express');
const router = new Router();
const staffController = require('../controllers/staffController');

router.post('/', staffController.create);
router.get('/', staffController.get_all);
router.get('/:id', staffController.get_one);
router.delete('/:id', staffController.delete_one);
router.put('/:id', staffController.update_one);

module.exports = router;