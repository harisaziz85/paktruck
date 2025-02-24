import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CranemachineComponent } from './cranemachine.component';

describe('CranemachineComponent', () => {
  let component: CranemachineComponent;
  let fixture: ComponentFixture<CranemachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CranemachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CranemachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
