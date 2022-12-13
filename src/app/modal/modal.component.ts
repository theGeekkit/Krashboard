import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';
import { WidgetService } from '../Services/widget.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(
    public menuService: MenuService,
    public widgetService: WidgetService
  ) {}

  ngOnInit(): void {}

  createCard() {
    const newCard = {
      title: this.menuService.widgetTitle,
      content: this.menuService.widgetContent,
    };
    this.menuService.cards.splice(0, 0, newCard);
    console.log(this.menuService.cards);
  }
}
