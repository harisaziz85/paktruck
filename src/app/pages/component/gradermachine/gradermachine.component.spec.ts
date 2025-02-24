import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradermachineComponent } from './gradermachine.component';

describe('GradermachineComponent', () => {
  let component: GradermachineComponent;
  let fixture: ComponentFixture<GradermachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradermachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradermachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
