import { Component } from '@angular/core';
import { ErrorService } from './services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ShareMyCarWebApp';

  constructor(public errorService: ErrorService) { }
}
