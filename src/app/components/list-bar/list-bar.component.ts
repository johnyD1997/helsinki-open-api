import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-bar',
  templateUrl: './list-bar.component.html',
  styleUrls: ['./list-bar.component.css']
})
export class ListBarComponent {
  @Input() placesList: any[] = [];
}
