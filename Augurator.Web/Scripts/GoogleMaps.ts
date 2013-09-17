///<reference path="..\typings\google.maps.d.ts"/>
///<reference path="..\typings\jquery-2.0.3.d.ts"/>
                                               
module Google {
    export class AddressFactory {
        constructor() {
        }

        public create(address: string) {
            
            $("#sortableAddressList")
                .append($("<li style='z-index: 1000'>" + address + "</li>"));
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
                    zoom: 4,
                    center: new google.maps.LatLng(53.2527111, -2.4774508000000424),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

            this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);            
        }
    }
}