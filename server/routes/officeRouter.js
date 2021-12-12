const Router = require('express');
const router = new Router();
const officeController = require('../controllers/officeController');

router.post('/', officeController.create);
router.get('/', officeController.get_all);
router.get('/:id', officeController.get_one);
router.delete('/:id', officeController.delete_one);
router.put('/:id', officeController.update_one);

module.exports = router;