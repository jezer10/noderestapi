const express = require('express')
const router = express.Router()


const userController = require('../controllers/user.controller')

router.get('/', userController.readAll);
router.get('/:id', userController.readUser);
router.post('/add', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports= router;