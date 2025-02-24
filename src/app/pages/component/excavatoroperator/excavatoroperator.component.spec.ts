import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcavatoroperatorComponent } from './excavatoroperator.component';

describe('ExcavatoroperatorComponent', () => {
  let component: ExcavatoroperatorComponent;
  let fixture: ComponentFixture<ExcavatoroperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcavatoroperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcavatoroperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
