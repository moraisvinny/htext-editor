import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoComponent } from './testando.component';

describe('TestandoComponent', () => {
  let component: TestandoComponent;
  let fixture: ComponentFixture<TestandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
