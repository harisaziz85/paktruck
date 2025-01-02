import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVarificationComponent } from './mobile-varification.component';

describe('MobileVarificationComponent', () => {
  let component: MobileVarificationComponent;
  let fixture: ComponentFixture<MobileVarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileVarificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
