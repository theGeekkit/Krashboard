import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {



  constructor(public menuService: MenuService, ) { }

  ngOnInit(): void {
  }



}
