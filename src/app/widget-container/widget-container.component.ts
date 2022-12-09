import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css'],
})
export class WidgetContainerComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}
}
