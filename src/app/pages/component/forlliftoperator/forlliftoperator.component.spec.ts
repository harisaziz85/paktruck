import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForlliftoperatorComponent } from './forlliftoperator.component';

describe('ForlliftoperatorComponent', () => {
  let component: ForlliftoperatorComponent;
  let fixture: ComponentFixture<ForlliftoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForlliftoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForlliftoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
