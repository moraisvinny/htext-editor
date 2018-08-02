import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module';
import { EditorComponent } from './editor/editor.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
