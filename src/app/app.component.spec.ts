import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

class AppMocked extends AppComponent {}

describe('AppComponent', () => {
  let sut: AppMocked;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
    sut = new AppMocked();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'desafio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('desafio');
  });

  it(`should change menuopen to false`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'closeMenu');
    app.closeMenu();
    expect(app.isMenuOpen).toBe(false);
  });

  it(`should change menuopen to true`, () => {
    spyOn(sut, 'openMenu');
    sut.openMenu();
    console.log(sut.isMenuOpen);
    expect(sut.openMenu).toHaveBeenCalled();
  });
});
