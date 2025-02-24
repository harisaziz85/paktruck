import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllshopsComponent } from './allshops.component';

describe('AllshopsComponent', () => {
  let component: AllshopsComponent;
  let fixture: ComponentFixture<AllshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllshopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
