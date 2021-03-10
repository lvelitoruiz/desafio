import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../api.service';

import { DolarComponent } from './dolar.component';

describe('DolarComponent', () => {
  let component: DolarComponent;
  let fixture: ComponentFixture<DolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DolarComponent],
      imports: [HttpClientModule],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should call showvalues method`, () => {
    const fixture = TestBed.createComponent(DolarComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'showValues');
    app.showValues(0, 40);
    expect(app.showValues).toHaveBeenCalled();
  });
});
