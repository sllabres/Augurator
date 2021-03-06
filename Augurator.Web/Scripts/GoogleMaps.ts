///<reference path="..\typings\google.maps.d.ts"/>
///<reference path="..\typings\jquery-2.0.3.d.ts"/>
///<reference path="..\typings\tspSolver.d.ts"/>
                                               
module Google {
    export class AddressFactory {
        constructor() {
        }

        public create(address: string, latitude: number, longitude: number) {
            
            $("#sortableAddressList")
                .append($("<li style='z-index: 1000' long='" + longitude + "' lat='" + latitude + "'>" + address + "</li>"));
        }
    }

    export class Map {
        private loadCompleteProxy: () => void;
        private map: google.maps.Map;
        private directionsService: google.maps.DirectionsService;
        private directionsDisplay: google.maps.DirectionsRenderer;
        private solver: BpTspSolver;        
        private roundTripCallbackProxy: (response: any) => void;        

        constructor(window: Window) {
            this.loadCompleteProxy = () => {
                this.initialise();
            }

            this.roundTripCallbackProxy = (response: any) => {
                this.roundTripCallback(response);
            }

            google.maps.event.addDomListener(window, 'load', this.loadCompleteProxy);
        }

        private initialise() {
            var mapOptions = {
                zoom: 5,
                center: new google.maps.LatLng(53.2527111, -2.4774508000000424),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            this.directionsService = new google.maps.DirectionsService();
            this.directionsDisplay = new google.maps.DirectionsRenderer();
            this.directionsDisplay.setMap(this.map);
            this.solver = new BpTspSolver(this.map, "");
            this.solver.setDirectionUnits("m");
            //this.solver.startOver();
        }

        public zoomTo(latitude: number, longitude: number) {
            this.map.setZoom(17);
            this.map.panTo(new google.maps.LatLng(latitude, longitude));
        }

        public addWaypoint(latitude: number, longitude: number) {
            var latLong = new google.maps.LatLng(latitude, longitude);
            this.solver.addWaypoint(latLong, "Label");            
        }

        public solveRoundTrip() {
            this.solver.solveRoundTrip(this.roundTripCallbackProxy);
        }

        private roundTripCallback(response: any) {  
            this.directionsDisplay.setDirections(response.getGDirections());            
        }    

        //public getDirections(addressList: string[]) {            
        //    var start = addressList[0];
        //    var end = addressList[1];
        //    var request = {
        //        origin: start,
        //        destination: end,
        //        travelMode: google.maps.TravelMode.DRIVING
        //    };

        //    this.directionsService.route(request, this.setDirectionsProxy);            
        //}

        //private setDirections(response: any, status: any) {
        //    if (status == google.maps.DirectionsStatus.OK) {                
        //        this.directionsDisplay.setDirections(response);
        //    }
        //}
    }
}