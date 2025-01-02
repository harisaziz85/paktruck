import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedtrucksforsaleComponent } from './featuredtrucksforsale.component';

describe('FeaturedtrucksforsaleComponent', () => {
  let component: FeaturedtrucksforsaleComponent;
  let fixture: ComponentFixture<FeaturedtrucksforsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedtrucksforsaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedtrucksforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
