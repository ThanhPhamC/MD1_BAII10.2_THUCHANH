class FlashLamp {
    status;
    battery;

    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }
    setStatus(status){
        this.status=status;
    }
    getStatus(){
        return this.status
    }
    SetBattery(battery){
        this.battery=battery
    }
    getBattery(){
        return this.battery
    }
    getBatteryInfo(){
        return this.battery.getEnergy();
    }
    getLight(){
        if (this.status){
            alert("Lighting")
        }else {
            alert("Not lighting")
        }
    }
    getTurnOn(){
        return this.status=true;
    }
    getTurnoff(){
        return this.status=false;
    }
}