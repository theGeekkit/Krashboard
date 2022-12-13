import { Injectable, OnInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Widget } from '../widget-model';
import { MenuService} from 'src/app/Services/menu.service'

@Injectable({
  providedIn: 'root'
})
export class WidgetService implements OnInit {

  widgetForm!: FormGroup;

  emptylist = false;

  cards: Widget[] = [
    {
      title: "Dad Jokes", content: ""
    },
  ];
  name: string = "name";

  pushToStorage(){

    this.cards.push({title: this.menuService.widgetTitle, content: ""})
    localStorage.setItem('storedWidgets', JSON.stringify(this.cards))
  }


  constructor( public menuService:MenuService
  ) {
    this.pushToStorage()

    this.widgetForm = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
    });
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 clearAllWidgets() {
 this.cards=[]
}
}

