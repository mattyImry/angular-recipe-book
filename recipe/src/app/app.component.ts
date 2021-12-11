import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';  // setting the property loadedFeature the same 'recipe' line 11 header.html


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
