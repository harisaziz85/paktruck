import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureMachineryComponent } from './agriculture-machinery.component';

describe('AgricultureMachineryComponent', () => {
  let component: AgricultureMachineryComponent;
  let fixture: ComponentFixture<AgricultureMachineryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgricultureMachineryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgricultureMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
