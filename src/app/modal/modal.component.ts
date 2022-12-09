import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  createCard() {
    const newCard = this.menuService.widgetTitle;
    this.menuService.cards.push(newCard);
  }
}
