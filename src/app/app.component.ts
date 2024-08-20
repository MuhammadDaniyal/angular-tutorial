import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tut';
  data = 'hello';
  getValue() {
    return 'Get Value Function';
  }
}
