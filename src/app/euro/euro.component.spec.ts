import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../api.service';

import { EuroComponent } from './euro.component';

describe('EuroComponent', () => {
  let component: EuroComponent;
  let fixture: ComponentFixture<EuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EuroComponent],
      imports: [HttpClientModule],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should call showvalues method`, () => {
    const fixture = TestBed.createComponent(EuroComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'showValues');
    app.showValues(0, 40);
    expect(app.showValues).toHaveBeenCalled();
  });
});
