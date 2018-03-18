

class Drone {

    constructor() {
        this.drones = [];
    }

    create( { lat, long, alt }) {
        var drone1 = ({
            lat, long, alt,
            availability: "Available",
            order: null
        });
        this.drones.push(drone1);
        console.log("Drones: " + JSON.stringify(this.drones, null, 2));
    }

    move(warehouseLocation, stationLocation) {
        this.drones.forEach(function(drone) {
            if (drone.availability == "In Transit to Warehouse") {
                if (warehouseLocation.lat > drone.lat) {
                    drone.lat+=0.0045045045;
                  }
                  else if (warehouseLocation.lat < drone.lat) {
                    drone.lat-=0.0045045045;
                  }
                  if (warehouseLocation.long > drone.long) {
                    drone.long+=0.0045045045;
                  }
                  else if (warehouseLocation.long < drone.long) {
                    drone.long-=0.0045045045;
                  }
                  if (warehouseLocation.alt > drone.alt) {
                    drone.alt++;
                  }
                  else if (warehouseLocation.alt < drone.alt) {
                    drone.alt--;
                  }
                  if (warehouseLocation.lat - drone.lat < 0.0045045045
                    && warehouseLocation.long - drone.long < 0.0045045045
                    && warehouseLocation.alt == drone.alt) {
                        drone.availability = "In Transit to Consumer"
                    }
            }
            else if (drone.availability == "In Transit to Consumer") {
                if (drone.order.lat > drone.lat) {
                    drone.lat+=0.0045045045;
                  }
                  else if (drone.order.lat < drone.lat) {
                    drone.lat-=0.0045045045;
                  }
                  if (drone.order.long > drone.long) {
                    drone.long+=0.0045045045;
                  }
                  else if (drone.order.long < drone.long) {
                    drone.long-=0.0045045045;
                  }
                  if (drone.order.alt > drone.alt) {
                    drone.alt++;
                  }
                  else if (drone.order.alt < drone.alt) {
                    drone.alt--;
                  }
                  if (drone.order.lat - drone.lat < 0.0045045045
                    && drone.order.long - drone.long < 0.0045045045
                    && drone.order.alt == drone.long) {
                        drone.availability = "Returning to Station";
                        drone.order = null;
                    }
            }
            else if (drone.availability == "Returning to Station") {
                if (stationLocation.lat > drone.lat) {
                    drone.lat+=0.0045045045;
                  }
                  else if (stationLocation.lat < drone.lat) {
                    drone.lat-=0.0045045045;
                  }
                  if (stationLocation.long > drone.long) {
                    drone.long+=0.0045045045;
                  }
                  else if (stationLocation.long < drone.long) {
                    drone.long-=0.0045045045;
                  }
                  if (stationLocation.alt > drone.alt) {
                    drone.alt++;
                  }
                  else if (stationLocation.alt < drone.alt) {
                    drone.alt--;
                  }
                  if (stationLocation.lat - drone.lat < 0.0045045045
                    && stationLocation.long - drone.long < 0.0045045045
                    && stationLocation.alt == drone.alt) {
                        drone.availability = "Available";
                    }
            }
          });
    }

    findAvailable() {
        const availableDrones = this.drones.filter(function(drone) {
            return drone.availability == "Available";
        });
        
        return availableDrones[0];
    }

}

module.exports = Drone;