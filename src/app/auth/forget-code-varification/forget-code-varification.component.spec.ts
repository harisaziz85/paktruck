import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetCodeVarificationComponent } from './forget-code-varification.component';

describe('ForgetCodeVarificationComponent', () => {
  let component: ForgetCodeVarificationComponent;
  let fixture: ComponentFixture<ForgetCodeVarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgetCodeVarificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetCodeVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
