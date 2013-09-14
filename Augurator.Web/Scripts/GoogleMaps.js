///<reference path="..\typings\google.maps.d.ts"/>
var GoogleMaps;
(function (GoogleMaps) {
    var GoogleMap = (function () {
        function GoogleMap(window) {
            var _this = this;
            this.loadCompleteProxy = function () {
                _this.initialise();
            };

            google.maps.event.addDomListener(window, 'load', this.loadCompleteProxy);
        }
        GoogleMap.prototype.initialise = function () {
            var mapOptions = {
                zoom: 3,
                center: new google.maps.LatLng(-34.397, 150.644),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        };
        return GoogleMap;
    })();
    GoogleMaps.GoogleMap = GoogleMap;
})(GoogleMaps || (GoogleMaps = {}));
