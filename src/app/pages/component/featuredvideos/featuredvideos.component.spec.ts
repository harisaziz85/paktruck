import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedvideosComponent } from './featuredvideos.component';

describe('FeaturedvideosComponent', () => {
  let component: FeaturedvideosComponent;
  let fixture: ComponentFixture<FeaturedvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedvideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
