import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivityService } from 'src/app/activity.service';
import { EventService } from 'src/app/event.service';
import { PlaceService } from 'src/app/place.service';


@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css'],
})

export class MapScreenComponent implements OnInit {
  mapLoaded!: boolean;
  map!: google.maps.Map;
  geocoder = new google.maps.Geocoder();
  infoWindow!: google.maps.InfoWindow;
  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: true,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    center: {
      lat: 60.16833266,
      lng: 24.951496194,
    },
    zoom: 16,
  };

  markers = [] as any;

  constructor(private eventService: EventService, private activityService: ActivityService, private placeService: PlaceService) {} 

  ngOnInit() {
    this.map = new google.maps.Map(
      document.getElementById("map")!,
      this.options
    );
    this.infoWindow = new google.maps.InfoWindow();
  }


  showContent(contentType: string) {

    this.ngOnInit();
    this.markers = []

    let content: any = null

    if(contentType === "events") {
      content = this.eventService.getEvents()
    }
    else if(contentType === "activities") {
      content = this.activityService.getActivities()
    }
    else if(contentType === "places") {
      content = this.placeService.getPlaces()
    }
    else {
      console.error("unknown content type");
      return
    }

    console.log("click")

    content.subscribe((response: any) => {
      
        let arr = response.data as Array<any>

        arr.forEach((place: any) => {
          let marker = new google.maps.Marker({
            position: {
              lat: place.location.lat,
              lng: place.location.lon,
            },
            title: place.name.fi
          });
          


          let markerContent = '<div class="infoPlace">' +
                              `<h4 class="place_name">${place.name.fi}</h4>` + 
                              `<p class="place_text">${place.location.address.street_address}</p>` +
                              `<p class="place_text">${place.location.address.postal_code}, ${place.location.address.locality}</p>` +
                              `<figure class="picture"><img  style="width:100%" src=${place.description.images[0]?.url}></figure>` +
                              '<button class="btn_favourite" onclick="AddtoFavourites()"><i class="bi bi-heart-fill"></i>My favourite</button>' +
                              "</div>";

          

          // To add the marker to the map, call setMap();
          marker.setMap(this.map);
          google.maps.event.addListener(marker, "click", () => {
            let infowindow = new google.maps.InfoWindow();
            infowindow.setContent(markerContent)
            infowindow.open(this.map, marker);
          });
        });
        
      });
    
  }

}
