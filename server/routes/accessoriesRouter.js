const Router = require('express');
const router = new Router();
const accessoriesController = require('../controllers/accessoriesController');

router.post('/', accessoriesController.create);
router.get('/', accessoriesController.get_all);
router.get('/:id', accessoriesController.get_one);
router.delete('/:id', accessoriesController.delete_one);
router.put('/:id', accessoriesController.update_one);

module.exports = router;