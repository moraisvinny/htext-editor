import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { EditorModule } from './editor.module';
import { MatButtonToggle } from '@angular/material';

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



});
