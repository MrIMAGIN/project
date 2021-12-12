const Router = require('express');
const router = new Router();
const serviceController = require('../controllers/serviceController');

router.post('/', serviceController.create);
router.get('/', serviceController.get_all);
router.get('/:id', serviceController.get_one);
router.delete('/:id', serviceController.delete_one);
router.put('/:id', serviceController.update_one);

module.exports = router;