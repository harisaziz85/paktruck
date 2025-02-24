import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredshopsComponent } from './registeredshops.component';

describe('RegisteredshopsComponent', () => {
  let component: RegisteredshopsComponent;
  let fixture: ComponentFixture<RegisteredshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredshopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
