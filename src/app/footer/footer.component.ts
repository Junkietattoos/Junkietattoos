import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
//TODO: Get the Customs Google Map 2 work u dumbass
// this ur API KEY: AIzaSyAoM6xB1MUM50-5uN_0UIFhtYVDvW3EffE
 //  map: google.maps.Map;
  constructor() { }

  ngOnInit(): void {
 /** this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  }); **/
  }
}
