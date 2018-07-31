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

  @ViewChild('entrada') private el: ElementRef;
  @ViewChildren(MatButtonToggle) private botoes: QueryList<MatButtonToggle>;

  private citacaoClicada: boolean = false;
  private botaoSelecionado: MatButtonToggle;

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {

    this.focus();
  }

  private executa(comando: string, opcoes) {

    document.execCommand(comando, false, opcoes);
    this.botaoSelecionado = this.botoes.find(botao => botao.id === comando);
    this.botaoSelecionado.checked = document.queryCommandState(comando);
    this.focus();
  }

  private pressionou() {
    this.botoes.forEach(botao => botao.checked = document.queryCommandState(botao.id));
  }

  private citacao() {
    this.el.nativeElement.innerHTML = `${this.el.nativeElement.innerHTML} <div><br></div><p><blockquote _ngcontent-c1>  citação aqui...</blockquote></p><div><br></div>`;
  }

  private imagem() {
    this.bottomSheet
      .open(SheetLinkComponent, { data: { tipo: 'image' } })
      .afterDismissed()
      .subscribe({ next: ((link: Link) => this.geraImagem(link)) })
  }


  private code() {
    this.el.nativeElement.innerHTML = `${this.el.nativeElement.innerHTML} <div><br></div><pre><code _ngcontent-c1>codigo aqui...</code></pre><div><br></div>`;
    this.focus();
  }

  private link() {
    this.bottomSheet
      .open(SheetLinkComponent, { data: { tipo: 'link' } })
      .afterDismissed()
      .subscribe({ next: ((link: Link) => this.geraLink(link)) })

  }

  private geraLink(link: Link) {

    let anchor = `<a href='${link.getLink()}'>${link.getRotulo() ? link.getRotulo() : link.getLink()}</a>`;
    this.el.nativeElement.innerHTML = `${this.el.nativeElement.innerHTML} ${anchor}`;
    this.botoes.find(botao => botao.id === 'link').checked = false;
    this.focus();
  }

  private geraImagem(link: Link) {
    this.focus();
    document.execCommand('insertImage', false, link.getLink());
    this.botaoSelecionado = this.botoes.find(botao => botao.id === 'imagem');
    this.botaoSelecionado.checked = document.queryCommandState('insertImage');
    this.focus();
  }

  private focus() {
    this.el.nativeElement.focus();
  }

  getHtmlGerado() {
    return this.el.nativeElement.innerHTML;
  }

}
