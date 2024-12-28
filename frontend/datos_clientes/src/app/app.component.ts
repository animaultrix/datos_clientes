import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientAppComponent } from "./components/client-app/client-app.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-root';
}
