import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild('entrada') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  italico() {
    document.execCommand('italic', false, null);
    this.el.nativeElement.focus();
  }

  negrito() {

    document.execCommand('bold', false, null);
    this.el.nativeElement.focus();

  }

  mudou(valor) {

  }




}
