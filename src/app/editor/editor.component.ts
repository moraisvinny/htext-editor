import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild('entrada') el: ElementRef;
  @ViewChildren(MatButtonToggle) botoes: QueryList<MatButtonToggle>;

  citacaoClicada: boolean = false;
  botaoSelecionado: MatButtonToggle;


  constructor() { }

  ngOnInit() {
    this.el.nativeElement.focus();
  }

  executa(comando: string, opcoes, nomeBotao) {

    if (this.citacaoClicada && opcoes == 'blockquote') {
      document.execCommand('formatBlock', false, 'div');
      this.citacaoClicada = false;
    } else if (opcoes == 'blockquote') {
      document.execCommand('formatBlock', false, 'blockquote');
      document.getElementsByTagName('blockquote')[0].classList.add('citacao');
      document.getElementsByTagName('blockquote')[0].setAttribute('_ngcontent-c1', "true");
      this.citacaoClicada = true;
    } else {
      document.execCommand(comando, false, opcoes);

      this.botaoSelecionado = this.botoes.find(botao => botao.id === nomeBotao);
      let estado = document.queryCommandState(comando);
      this.botaoSelecionado.checked = estado;
    }
    this.el.nativeElement.focus();
  }

  mudou(valor) {

  }

}
