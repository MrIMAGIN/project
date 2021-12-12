const Router = require('express');
const router = new Router();
const waybillController = require('../controllers/waybillController');

router.post('/', waybillController.create);
router.get('/', waybillController.get_all);
router.get('/:id', waybillController.get_one);
router.delete('/:id', waybillController.delete_one);
router.put('/:id', waybillController.update_one);

module.exports = router;