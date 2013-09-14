///<reference path="..\typings\google.maps.d.ts"/>
var Google;
(function (Google) {
    var Geocoder = (function () {
        function Geocoder() {
            this.geocoder = new google.maps.Geocoder();
        }
        Geocoder.prototype.geocode = function () {
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
                zoom: 3,
                center: new google.maps.LatLng(-34.397, 150.644),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        };
        return Map;
    })();
    Google.Map = Map;
})(Google || (Google = {}));
