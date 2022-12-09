import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css'],
})
export class WidgetCardComponent implements OnInit {
  @Input() card: any = '';
  @Input() i: any = '';

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  removeCard(index: number) {
    this.menuService.cards.splice(index, 1);
  }
}
