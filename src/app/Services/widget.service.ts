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

  // widgets: Widget[] = [
  //   {
  //     title: "Dad Jokes", content: ""
  //   },
  // ];
  // name: string = "name";



  constructor( public menuService:MenuService
  ) {
    this.pushToStorage()

    this.widgetForm = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
    });
   }

   pushToStorage(){

    this.menuService.cards.push({title: this.menuService.widgetTitle, content: ""})
    localStorage.setItem('storedWidgets', JSON.stringify(this.menuService.cards))
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 clearAllWidgets() {
 this.menuService.cards=[]
 this.pushToStorage()
}
}

