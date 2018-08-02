import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetLinkComponent } from './sheet-link.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

describe('SheetLinkComponent', () => {
  let component: SheetLinkComponent;
  let fixture: ComponentFixture<SheetLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MaterialModule
      ],
      providers: [
        { provide: MatBottomSheetRef, useValue: {} },
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: [] },
      ],
      declarations: [SheetLinkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
