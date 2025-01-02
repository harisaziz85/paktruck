import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiescategorynavandtabsComponent } from './citiescategorynavandtabs.component';

describe('CitiescategorynavandtabsComponent', () => {
  let component: CitiescategorynavandtabsComponent;
  let fixture: ComponentFixture<CitiescategorynavandtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitiescategorynavandtabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiescategorynavandtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
