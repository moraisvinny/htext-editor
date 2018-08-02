import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EditorModule } from './editor/editor.module';
describe('AppComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        EditorModule
      ]

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
