import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { SheetLinkComponent } from './sheet-link/sheet-link.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    EditorComponent,
    SheetLinkComponent,
  ],
  entryComponents: [SheetLinkComponent],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
