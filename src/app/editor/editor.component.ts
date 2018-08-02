import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SheetLinkComponent } from './sheet-link/sheet-link.component';
import { Link } from './models/link.model';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'vm-hte',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {

  @ViewChild('entrada') el: ElementRef;
  @ViewChildren(MatButtonToggle) botoes: QueryList<MatButtonToggle>;

  public botaoSelecionado: MatButtonToggle;

  constructor(
    private bottomSheet: MatBottomSheet,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.registraIcones();
    this.focus();
  }
  registraIcones() {

    this.iconRegistry.addSvgIcon(
      'format_bold',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-bold.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_italic',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-italic.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_underlined',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-underline.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_strikethrough',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-strikethrough.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_list_numbered',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-list-numbers.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_list_bulleted',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-list-bulleted.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_align_left',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-align-left.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_align_center',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-align-center.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_align_right',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-align-right.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_align_justify',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-align-justify.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_indent_increase',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-indent-increase.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_indent_decrease',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-indent-decrease.svg')
    );

    this.iconRegistry.addSvgIcon(
      'format_quote',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/format-quote-open.svg')
    );

    this.iconRegistry.addSvgIcon(
      'insert_photo',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/image.svg')
    );

    this.iconRegistry.addSvgIcon(
      'insert_link',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/link.svg')
    );

    this.iconRegistry.addSvgIcon(
      'code',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/code-tags.svg')
    );

  }
  executa(comando: string) {
    return true;
    // document.execCommand(comando, false, null);
    // this.botaoSelecionado = this.botoes.find(botao => botao.id === comando);
    // console.log(this.botaoSelecionado);
    // this.botaoSelecionado.checked = document.queryCommandState(comando);
    // this.focus();
  }

  pressionou() {
    this.botoes.forEach(botao => botao.checked = document.queryCommandState(botao.id));
  }

  citacao() {
    this.el.nativeElement.innerHTML = `${this.el.nativeElement.innerHTML} <div><br></div><p><blockquote _ngcontent-c1>  citação aqui...</blockquote></p><div><br></div>`;
  }

  imagem() {
    this.bottomSheet
      .open(SheetLinkComponent, { data: { tipo: 'image' } })
      .afterDismissed()
      .subscribe({ next: ((link: Link) => this.geraImagem(link)) })
  }


  code() {
    this.el.nativeElement.innerHTML = `${this.el.nativeElement.innerHTML} <div><br></div><pre><code _ngcontent-c1>codigo aqui...</code></pre><div><br></div>`;
    this.focus();
  }

  link() {
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
