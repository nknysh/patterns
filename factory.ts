interface IVehicle {
    brand: string;
    type: string;
};

class Bus {
    properties: IVehicle;
    wheels: number = 4;

    constructor(props: IVehicle) {
        this.properties = props;
    };
};

class Truck {
    properties: IVehicle;
    wheels: number = 6;

    constructor(props: IVehicle) {
        this.properties = props;
    };
};

// Factory class that creates a vehicle based on the type
class VehicleFactory {
    create = (data: IVehicle) => {
        switch (data.type) {
            case "Bus":
                return new Bus(data);
            case "Truck":
                return new Truck(data);
        };
        throw new Error("Invalid vehicle type");
    };
};

const factory = new VehicleFactory();

const vehicle1 = factory.create({ type: "Bus", brand: "Mercedes" });
vehicle1.properties.brand = "Icarus";

const vehicle2 = factory.create({type: "Truck", brand: "Volvo"});
const vehicle3 = factory.create({type: "Truck", brand: "Scania"});
// const vehicle4 = factory.create({type: "Hatchback", brand: "Scania"}); // Thows error

console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
