var express = require('express');
var router = express.Router();
const users = require('../controllers/userController');
/* GET users listing. */
router.post('/', users.create);
router.get('/', users.findAll);
router.get('/:userId', users.findOne);
router.put('/', users.update);
router.delete('/:userId', users.delete);


module.exports = router;
