const mongoose = require('mongoose');
const { Schema } = mongoose;

const MedidaSchema = new Schema({
    sensorName: {type: String, required: true},
    humedad: {type: Number, required: true},
    temp : {type: Number, required: true},
    gps :{type: String, required: true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Medida', MedidaSchema);