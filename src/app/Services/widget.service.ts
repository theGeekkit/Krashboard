import { Injectable, OnInit, Component } from '@angular/core';
import { Widget } from '../widget-model';

@Injectable({
  providedIn: 'root'
})
export class WidgetService implements OnInit {

  widgets: Widget[] = [];

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
