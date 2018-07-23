import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild('entrada') el: ElementRef;
  @ViewChild('negrito') negrito: MatButtonToggle;

  constructor() { }
  citacaoClicada: boolean = false;

  ngOnInit() {
    this.el.nativeElement.focus();
  }

  executa(comando:string , opcoes) {


    document.execCommand(comando, false, opcoes);
    this.negrito.checked = false;
    if(this.citacaoClicada && opcoes == 'blockquote') {
      document.execCommand('formatBlock', false, 'div');
    } else if(opcoes == 'blockquote') {
      document.getElementsByTagName('blockquote')[0].classList.add('citacao');
      document.getElementsByTagName('blockquote')[0].setAttribute('_ngcontent-c1', "true");
    }
    this.citacaoClicada ? this.citacaoClicada = false : this.citacaoClicada = true;
    this.el.nativeElement.focus();
  }

  mudou(valor) {

  }

}
