import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tut';
  data = 'hello';
  displayName = '';
  getValue() {
    return 'Get Value Function';
  }
  getName(name: string) {
    alert('Get Name Function ' + name);
  }
  getData(val: string) {
    console.log('get Data Function', val);
  }
  getNameValue(val: string) {
    this.displayName = val;
  }
}
