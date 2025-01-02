import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurvideosComponent } from './ourvideos.component';

describe('OurvideosComponent', () => {
  let component: OurvideosComponent;
  let fixture: ComponentFixture<OurvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurvideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
