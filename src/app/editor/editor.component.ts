import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SheetLinkComponent } from '../sheet-link/sheet-link.component';


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

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {

    this.el.nativeElement.focus();
  }

  executa(comando: string, opcoes) {

    document.execCommand(comando, false, opcoes);
    this.botaoSelecionado = this.botoes.find(botao => botao.id === comando);
    this.botaoSelecionado.checked = document.queryCommandState(comando);
    this.el.nativeElement.focus();
  }

  pressionou() {
    this.botoes.forEach(botao => botao.checked = document.queryCommandState(botao.id));
  }

  // TODO
  citacao() {

  }

  // TODO
  imagem() {

  }

  // TODO
  code(){

  }
  // TODO
  link(rotulo, url) {
    this.bottomSheet.open(SheetLinkComponent);
  }

}
