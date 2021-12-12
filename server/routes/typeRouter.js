const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

router.post('/', typeController.create);
router.get('/', typeController.get_all);
router.get('/:id', typeController.get_one);
router.delete('/:id', typeController.delete_one);
router.put('/:id', typeController.update_one);

module.exports = router;