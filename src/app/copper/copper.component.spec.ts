import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperComponent } from './copper.component';

import { ApiService } from '../api.service';

import {
  HttpClient,
  HttpClientModule,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

class ApiServiceMocked extends ApiService {}

describe('CopperComponent', () => {
  let component: CopperComponent;
  let fixture: ComponentFixture<CopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopperComponent],
      imports: [HttpClientModule],
      providers: [ApiServiceMocked],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should call showvalues method`, () => {
    const fixture = TestBed.createComponent(CopperComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'showValues');
    app.showValues(0, 40);
    expect(app.showValues).toHaveBeenCalled();
  });
});
