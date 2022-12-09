import { Injectable, OnInit, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
