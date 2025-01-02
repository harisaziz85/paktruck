import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryusedpartsComponent } from './machineryusedparts.component';

describe('MachineryusedpartsComponent', () => {
  let component: MachineryusedpartsComponent;
  let fixture: ComponentFixture<MachineryusedpartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachineryusedpartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineryusedpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
