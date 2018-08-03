import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { EditorModule } from './editor.module';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EditorModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register icons when ngOnInit is called', () => {

    spyOn(component, 'registraIcones');
    component.ngOnInit();
    expect(component.registraIcones).toHaveBeenCalledTimes(1);

  });

  it(`should call executa with 'bold' parameter`, () => {

    spyOn(component, 'executa');
    component.executa('bold');
    expect(component.executa).toHaveBeenCalledWith('bold');

  })


  it(`should call executa with 'justifyLeft' parameter`, () => {

    spyOn(component, 'executa');
    component.executa('justifyLeft');
    expect(component.executa).toHaveBeenCalledWith('justifyLeft');
  })

  it('should mark the action button as checked', () => {

    component.executa('bold');
    const isChecked = component.botoes.find((botao) => botao.id === 'bold').checked;
    expect(isChecked).toBeTruthy;

  });

  it(`should call 'pressionou' when text is inserted into input area`, () => {
    spyOn(component, 'pressionou');
    const documento: HTMLDocument = fixture.nativeElement;

    const entrada: HTMLInputElement =  documento.getElementsByClassName("entrada")[0] as HTMLInputElement;
    let evento = document.createEvent('KeyboardEvent');
    evento.initKeyboardEvent('keyup',true,false,window,'',0,'',false,'');
    entrada.dispatchEvent(evento);

    expect(component.pressionou).toHaveBeenCalled();

  })

  it(`'entrada' should have the blockquote html text when 'citacao' is pressed`, () => {

    component.citacao();
    const texto: string = component.el.nativeElement.innerHTML;
    expect(texto.includes('blockquote')).toBeTruthy();
  });

  it(`'entrada' should have the code html text when 'code' is pressed`, () => {
    component.code();
    const texto: string = component.el.nativeElement.innerHTML;
    expect(texto.includes('code')).toBeTruthy();
  })

  it(`should have the innerHTML text in return value of 'getHtmlGerado'`, () =>{
    const returnedValue = component.getHtmlGerado();
    expect(returnedValue).toBe(component.el.nativeElement.innerHTML);
  })

});
