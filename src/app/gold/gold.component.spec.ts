import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../api.service';

import { GoldComponent } from './gold.component';

describe('GoldComponent', () => {
  let component: GoldComponent;
  let fixture: ComponentFixture<GoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoldComponent],
      imports: [HttpClientModule],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should call showvalues method`, () => {
    const fixture = TestBed.createComponent(GoldComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'showValues');
    app.showValues(0, 40);
    expect(app.showValues).toHaveBeenCalled();
  });
});
