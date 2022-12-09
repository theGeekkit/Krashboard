import { Injectable, OnInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Widget } from '../widget-model';

@Injectable({
  providedIn: 'root'
})
export class WidgetService implements OnInit {

  widgetForm!: FormGroup;

  emptylist = false;

  widgets: Widget[] = [
    {
      title: "Dad Jokes", content: ""
    },
  ];

  constructor() {
    this.widgetForm = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
    });
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
