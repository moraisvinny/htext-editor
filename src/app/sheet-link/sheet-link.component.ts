import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Link } from '../models/link.model';

@Component({
  selector: 'app-sheet-link',
  templateUrl: './sheet-link.component.html',
  styleUrls: ['./sheet-link.component.css']
})
export class SheetLinkComponent {

  link = new FormControl('',[Validators.required]);
  rotulo = new FormControl('');

  constructor(private bottomSheetRef: MatBottomSheetRef<SheetLinkComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {

  }

  envia() {

    if(this.link.errors) {
      return;
    }
    const retorno: Link = new Link(this.rotulo.value, this.link.value);
    this.bottomSheetRef.dismiss(retorno);



  }

}
