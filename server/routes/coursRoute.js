const express = require('express')
const router = express.Router()
const coursCtrl = require('../controllers/coursCtrl')
const verifyToken = require('../middlewares/verifyToken')
const multer = require('../middlewares/multer-config')

router.get('/selectAll',verifyToken,coursCtrl.getStudentCours)
router.post('/selectOne', coursCtrl.getOneStudentCours)
router.post('/add',multer,coursCtrl.addStudentCours)

module.exports= router
