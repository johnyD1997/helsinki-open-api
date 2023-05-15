import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images!: GalleryItem[];


  constructor() { }

  ngOnInit() {

    this.images = [
      new ImageItem({ 
        src: 'http://via.placeholder.com/640x360', 
        thumb: 'http://via.placeholder.com/640x360'}),
        new ImageItem({ 
          src: 'http://via.placeholder.com/640x360', 
          thumb: 'http://via.placeholder.com/640x360'}),
          new ImageItem({ 
            src: 'http://via.placeholder.com/640x360', 
            thumb: 'http://via.placeholder.com/640x360'}),

        
    
    
    ]
      // ... more items

  }

}
