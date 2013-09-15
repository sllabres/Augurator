///<reference path="..\typings\google.maps.d.ts"/>
///<reference path="..\typings\jquery-2.0.3.d.ts"/>
var Google;
(function (Google) {
    var Geocoder = (function () {
        function Geocoder() {
            this.geocoder = new google.maps.Geocoder();
        }
        Geocoder.prototype.geocode = function (address) {
            this.geocoder.geocode({ 'address': address }, this.geocodeCallback);
        };

        Geocoder.prototype.geocodeCallback = function (result, status) {
        };
        return Geocoder;
    })();
    Google.Geocoder = Geocoder;

    var Map = (function () {
        function Map(window) {
            var _this = this;
            this.loadCompleteProxy = function () {
                _this.initialise();
            };

            google.maps.event.addDomListener(window, 'load', this.loadCompleteProxy);
        }
        Map.prototype.initialise = function () {
            var mapOptions = {
                zoom: 4,
                center: new google.maps.LatLng(53.2527111, -2.4774508000000424),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            $('#address').geocomplete();
        };
        return Map;
    })();
    Google.Map = Map;
})(Google || (Google = {}));
