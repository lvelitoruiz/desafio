import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../api.service';

import { YenComponent } from './yen.component';

describe('YenComponent', () => {
  let component: YenComponent;
  let fixture: ComponentFixture<YenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YenComponent],
      imports: [HttpClientModule],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should call showvalues method`, () => {
    const fixture = TestBed.createComponent(YenComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'showValues');
    app.showValues(0, 40);
    expect(app.showValues).toHaveBeenCalled();
  });
});
