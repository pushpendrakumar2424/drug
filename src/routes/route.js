const express = require('express')
const drugController = require('../controllers/drugController')
const router = express.Router();

router.post('/drug',drugController.createDrug)
router.get("/drug", drugController.getDrug);

module.exports = router;