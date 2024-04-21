import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appoinment-app';
  message: string = 'Hello World';
  items: string[] = ['item 1', 'item 2'];
  log(text: string): void {
    var message = 'Message ' + text;
  }
}
