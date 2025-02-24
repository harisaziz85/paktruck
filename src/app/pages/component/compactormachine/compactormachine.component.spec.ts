import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactormachineComponent } from './compactormachine.component';

describe('CompactormachineComponent', () => {
  let component: CompactormachineComponent;
  let fixture: ComponentFixture<CompactormachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompactormachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompactormachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
