export class Medida {

    constructor(_id="", sensorName="", humedad=0, temp=0, gps=""){
        this._id=_id;
        this.sensorName=sensorName;
        this.humedad=humedad;
        this.temp=temp;
        this.gps=gps;
    }

    _id: string;
    sensorName: string;
    humedad: number;
    temp: number;
    gps: string;
}
