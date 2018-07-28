import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-sheet-link',
  templateUrl: './sheet-link.component.html',
  styleUrls: ['./sheet-link.component.css']
})
export class SheetLinkComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<SheetLinkComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }


}
