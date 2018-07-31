import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SheetLinkComponent } from '../sheet-link/sheet-link.component';
import { Link } from '../models/link.model';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {

  @ViewChild('entrada') el: ElementRef;
  @ViewChildren(MatButtonToggle) botoes: QueryList<MatButtonToggle>;

  citacaoClicada: boolean = false;
  botaoSelecionado: MatButtonToggle;

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {

    this.focus();
  }

  executa(comando: string, opcoes) {

    document.execCommand(comando, false, opcoes);
    this.botaoSelecionado = this.botoes.find(botao => botao.id === comando);
    this.botaoSelecionado.checked = document.queryCommandState(comando);
    this.focus();
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
  code() {

  }
  // TODO
  link() {
    this.bottomSheet
      .open(SheetLinkComponent)
      .afterDismissed()
      .subscribe({ next: ((link: Link) => this.geraLink(link)) })

  }

  private geraLink(link: Link) {

    let anchor = `<a href='${link.getLink()}'>${link.getRotulo() ? link.getRotulo() : link.getLink()}</a>`;
    this.el.nativeElement.innerHTML = `${this.el.nativeElement.innerHTML} ${anchor}`;
    this.botoes.find(botao => botao.id === 'link').checked = false;
    this.focus();
  }

  private focus() {
    this.el.nativeElement.focus();
  }
}
