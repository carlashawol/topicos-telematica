const express = require('express');
const router = express.Router();
const medida = require('../controllers/medida.controller');

router.get('/', medida.getMedidas);
router.post('/', medida.createMedida);
router.put('/:id', medida.editMedida);
router.delete('/:id', medida.deleteMedida);

module.exports = router;