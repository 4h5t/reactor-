import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  playSinglePlayer() {
    this.routerExtensions.navigate(['/game'], { queryParams: { mode: 'single' } });
  }

  playMultiplayer() {
    this.routerExtensions.navigate(['/game'], { queryParams: { mode: 'multi' } });
  }
}