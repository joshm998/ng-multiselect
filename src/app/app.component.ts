import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multiSelectDemo';
  selectedOptions: KeyValue<String, String>[];

  getMockOptions():KeyValue<String,String>[]{
    return [
      {key: 'abc123', value: 'Test'},
      {key: 'abc1234', value: 'Test1'},
      {key: 'abc12345', value: 'Test2'},
      {key: 'abc123456', value: 'Test3'}
    ];
  }
  logSelect() {
    console.log(this.selectedOptions)
  }
}
