import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainercarriertruckComponent } from './containercarriertruck.component';

describe('ContainercarriertruckComponent', () => {
  let component: ContainercarriertruckComponent;
  let fixture: ComponentFixture<ContainercarriertruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainercarriertruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainercarriertruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
