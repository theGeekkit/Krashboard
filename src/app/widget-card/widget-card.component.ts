import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MenuService } from '../Services/menu.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css'],
})
export class WidgetCardComponent implements OnInit {
  @Input() card: any = {};
  @Input() i: any = '';
  dadJoke: any = '';

  constructor(public menuService: MenuService, public http: HttpClient) {}

  ngOnInit(): void {}

  removeCard(index: number) {
    this.menuService.cards.splice(index, 1);
  }

  getUrl() {
    this.http.get(this.card.content).subscribe((result) => {
      this.dadJoke = result;
      console.log(this.dadJoke);
    });
  }
}
