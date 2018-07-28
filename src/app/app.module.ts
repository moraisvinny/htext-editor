import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorComponent } from './editor/editor.component';
import { MaterialModule } from './material/material.module';
import { SheetLinkComponent } from './sheet-link/sheet-link.component';



@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SheetLinkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [SheetLinkComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
