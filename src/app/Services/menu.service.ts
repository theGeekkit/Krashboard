import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddWidgetComponent } from '../dialog-add-widget/dialog-add-widget.component';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddWidgetComponent);
  }
}
