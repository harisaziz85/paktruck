import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyalertsComponent } from './myalerts.component';

describe('MyalertsComponent', () => {
  let component: MyalertsComponent;
  let fixture: ComponentFixture<MyalertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyalertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
