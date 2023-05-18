import { Component, Input, SimpleChanges } from '@angular/core';
import { MapScreenComponent } from '../map-screen/map-screen.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';

@Component({
  selector: 'app-list-bar',
  templateUrl: './list-bar.component.html',
  styleUrls: ['./list-bar.component.css']
})
export class ListBarComponent {
  @Input() placesContent: any[] = [];
  
  ngOnChanges(changes: SimpleChanges) {
    for (let i = 0; i < changes["placesContent"].currentValue.length; i++) {
      let element = changes["placesContent"].currentValue[i];
      console.log(element)
    }
  }

}
