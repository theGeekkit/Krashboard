import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../modal/modal.component';
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  cards: any = [];
  hamburgerMenu = false;
  widgetTitle: string | null = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { widgetTitle: this.widgetTitle },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(this.widgetTitle);
      if (result != null) {
        this.widgetTitle = result;
      }
    });
  }

  disableCreateButton(){
    if (this.widgetTitle == null || this.widgetTitle.trim() == "") {
      return false
    }
    return true
  }
}
