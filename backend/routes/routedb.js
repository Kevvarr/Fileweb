const express = require('express')

const pathController = require('../controllers/path.controller');
const router = express.Router();

// Routing
router.get('/:var(home)?', pathController.getPath);
router.put('/create', pathController.createPath);
router.post('/update/:id', pathController.updatePath);
router.delete('/delete/:id', pathController.deletePath);


module.exports = router;