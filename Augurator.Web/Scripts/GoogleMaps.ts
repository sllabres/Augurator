///<reference path="..\typings\google.maps.d.ts"/>

module Google {

    export class Geocoder {
        private geocoder: google.maps.Geocoder;

        constructor() {
            this.geocoder = new google.maps.Geocoder();
        }

        public geocode() {
        }
    }

    export class Map {
        private loadCompleteProxy: () => void;
        private map: google.maps.Map;

        constructor(window: Window) {
            this.loadCompleteProxy = () => {                
                this.initialise();
            }            

            google.maps.event.addDomListener(window, 'load', this.loadCompleteProxy);            
        }

        private initialise() {                         
                var mapOptions = {
                    zoom: 3,
                    center: new google.maps.LatLng(-34.397, 150.644),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

            this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);            
        }
    }
}