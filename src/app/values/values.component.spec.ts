import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ValuesComponent } from './values.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ValuesComponent', () => {
  let component: ValuesComponent;
  let fixture: ComponentFixture<ValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValuesComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should call showElements method`, () => {
    const fixture = TestBed.createComponent(ValuesComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'showElements');
    app.showElements();
    expect(app.showElements).toHaveBeenCalled();
  });

  it(`should call showvalues method`, () => {
    const fixture = TestBed.createComponent(ValuesComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'showValues');
    app.showValues(0, 40);
    expect(app.showValues).toHaveBeenCalled();
  });
});
