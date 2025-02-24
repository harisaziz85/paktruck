import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollermachineComponent } from './rollermachine.component';

describe('RollermachineComponent', () => {
  let component: RollermachineComponent;
  let fixture: ComponentFixture<RollermachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RollermachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollermachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
