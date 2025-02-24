import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractormachineComponent } from './tractormachine.component';

describe('TractormachineComponent', () => {
  let component: TractormachineComponent;
  let fixture: ComponentFixture<TractormachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TractormachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TractormachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
