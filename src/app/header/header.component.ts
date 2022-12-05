import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

widgetTitle= "";
hamburgerMenu=false;




  constructor(public menuService: MenuService, public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.widgetTitle},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }


}
