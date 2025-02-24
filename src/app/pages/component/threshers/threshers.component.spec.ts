import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreshersComponent } from './threshers.component';

describe('ThreshersComponent', () => {
  let component: ThreshersComponent;
  let fixture: ComponentFixture<ThreshersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreshersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreshersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
