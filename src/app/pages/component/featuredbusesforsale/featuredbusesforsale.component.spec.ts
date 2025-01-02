import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedbusesforsaleComponent } from './featuredbusesforsale.component';

describe('FeaturedbusesforsaleComponent', () => {
  let component: FeaturedbusesforsaleComponent;
  let fixture: ComponentFixture<FeaturedbusesforsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedbusesforsaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedbusesforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
