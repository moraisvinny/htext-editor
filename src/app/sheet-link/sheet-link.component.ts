import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
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

  constructor(private bottomSheetRef: MatBottomSheetRef<SheetLinkComponent>) {

  }

  enviaLink() {

    if(this.link.errors) {
      return;
    }
    const retorno: Link = new Link(this.rotulo.value, this.link.value);
    this.bottomSheetRef.dismiss(retorno);

  }

}
