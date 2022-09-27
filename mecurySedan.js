//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor (
        maximumPassengers,
        passenger,
        numberOfWheels,
        maximumSpeed,
        fuel,
        scheduleService;
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.engineOn = false;
              )
            super( 
                maximumPassengers,
                passenger,
                 numberOfWheels,
                  maximumSpeed,
                   fuel,
                    scheduleService)
            }

            

            start() {
                if (this.fuel > 0) {
                    console.log("Engine has started.")
                    return this.engineStart = true;
                } else {
                    console.log("No Fuel");
                    return this.engineStart = false;

                }
            }
            checkService() {
                if (this.mileage >= 3000) {
                    this.scheduleService = true
                    return this.scheduleService;
                }
            }

            loadPassenger(num) {
                if (this.passenger < this.maxPassengers) {
                    if ((num + this.passenger) <= this.maxPassengers) {
                        this.passenger = num;
                        return this.passenger;
                    } else {
                        console.log(this.model +
                            " " +
                            this.make +
                            " not have enough space to take all passengers.");
                    }
                }else {
                    console.log(this.model +
                        " " +
                        this.make +
                        " is full");
                }
            }
