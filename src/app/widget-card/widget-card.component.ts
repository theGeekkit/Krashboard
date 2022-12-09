import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css'],
})
export class WidgetCardComponent implements OnInit {
  @Input() card: any = '';
  @Input() i: any = '';

  constructor() {}

  ngOnInit(): void {}
}
