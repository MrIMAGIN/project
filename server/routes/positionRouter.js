const Router = require('express');
const router = new Router();
const positionController = require('../controllers/positionController');

router.post('/', positionController.create);
router.get('/', positionController.get_all);
router.get('/:id', positionController.get_one);
router.delete('/:id', positionController.delete_one);
router.put('/:id', positionController.update_one);

module.exports = router;