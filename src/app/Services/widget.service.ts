import { Injectable, OnInit, Component } from '@angular/core';
import { Widget } from '../widget-model';

@Injectable({
  providedIn: 'root'
})
export class WidgetService implements OnInit {

  widgets: Widget[] = [
    {
      title: "Dad Jokes", content: ""
    },
  ];
  name: string = "name";

  localStorage(){
    localStorage.setItem('storedWidgets', JSON.stringify(this.widgets))
  }


  constructor() {
    this.localStorage()
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
