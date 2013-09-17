///<reference path="..\typings\google.maps.d.ts"/>
///<reference path="..\typings\jquery-2.0.3.d.ts"/>
///<reference path="..\typings\tspSolver.d.ts"/>
var Google;
(function (Google) {
    var AddressFactory = (function () {
        function AddressFactory() {
        }
        AddressFactory.prototype.create = function (address, latitude, longitude) {
            $("#sortableAddressList").append($("<li style='z-index: 1000' long='" + longitude + "' lat='" + latitude + "'>" + address + "</li>"));
        };
        return AddressFactory;
    })();
    Google.AddressFactory = AddressFactory;

    var Map = (function () {
        function Map(window) {
            var _this = this;
            this.loadCompleteProxy = function () {
                _this.initialise();
            };

            this.roundTripCallbackProxy = function (response) {
                _this.roundTripCallback(response);
            };

            google.maps.event.addDomListener(window, 'load', this.loadCompleteProxy);
        }
        Map.prototype.initialise = function () {
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
        };

        Map.prototype.zoomTo = function (latitude, longitude) {
            this.map.setZoom(17);
            this.map.panTo(new google.maps.LatLng(latitude, longitude));
        };

        Map.prototype.addWaypoint = function (latitude, longitude) {
            var latLong = new google.maps.LatLng(latitude, longitude);
            this.solver.addWaypoint(latLong, "Label");
        };

        Map.prototype.solveRoundTrip = function () {
            this.solver.solveRoundTrip(this.roundTripCallbackProxy);
        };

        Map.prototype.roundTripCallback = function (response) {
            this.directionsDisplay.setDirections(response.getGDirections());
        };
        return Map;
    })();
    Google.Map = Map;
})(Google || (Google = {}));
