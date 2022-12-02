import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

widgetTitle?: string;



  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }


}
