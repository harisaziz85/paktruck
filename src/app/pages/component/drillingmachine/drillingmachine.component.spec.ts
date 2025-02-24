import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillingmachineComponent } from './drillingmachine.component';

describe('DrillingmachineComponent', () => {
  let component: DrillingmachineComponent;
  let fixture: ComponentFixture<DrillingmachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrillingmachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrillingmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
