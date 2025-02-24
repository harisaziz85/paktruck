import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedbussesforsaleComponent } from './usedbussesforsale.component';

describe('UsedbussesforsaleComponent', () => {
  let component: UsedbussesforsaleComponent;
  let fixture: ComponentFixture<UsedbussesforsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsedbussesforsaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedbussesforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
