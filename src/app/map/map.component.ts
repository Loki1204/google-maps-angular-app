import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environments';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  googleMapsApiKey = environment.googleMapsApiKey;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  };
  markers = [];
  infoContent = '';

  constructor() {
    this.center = {
      lat: 0, // Default latitude
      lng: 0, // Default longitude
    };
  }

  ngOnInit() {
    const location = window.location;
    console.log('location', location);
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
