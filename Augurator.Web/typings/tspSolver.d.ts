declare class BpTspSolver {
    constructor(map: google.maps.Map, directionsPanel: any);
    public addWaypoint(latLng: google.maps.LatLng, label: string): void;
    public solveRoundTrip(callback: Function): void;
    public setDirectionUnits(unit: string): void;
    public startOver(): void;
}