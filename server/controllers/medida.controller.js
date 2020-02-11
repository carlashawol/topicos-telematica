const Medida = require('../models/medida');
const medidaCtrl = {};

medidaCtrl.getMedidas = async (req, res) => {
    const medidas = await Medida.find();
    res.json(medidas);
}

medidaCtrl.createMedida = async (req, res) => {
    const medida = new Medida({
        sensorName: req.body.sensorName,
        humedad: req.body.humedad,
        temp: req.body.temp,
        gps: req.body.gps
    });
    await medida.save();
    res.json({
        status: 'guardado'
    });
}

medidaCtrl.deleteMedida = async (req, res) => {
    await Medida.findByIdAndRemove(req.params.id);
    res.json({
        status: 'eliminado'
    });
}

medidaCtrl.editMedida = async(req, res) => {
    const medida = {
        sensorName: req.body.sensorName,
        humedad: req.body.humedad,
        temp: req.body.temp,
        gps: req.body.gps
    };
    await Medida.findByIdAndUpdate(req.params.id, {$set: medida}, {new: true});
    res.json({status: 'Medida actualizada'});
}

module.exports = medidaCtrl;