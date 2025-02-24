import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotlaAdsComponent } from './totla-ads.component';

describe('TotlaAdsComponent', () => {
  let component: TotlaAdsComponent;
  let fixture: ComponentFixture<TotlaAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotlaAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotlaAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
