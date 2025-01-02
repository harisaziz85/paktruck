import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedTrucksComponent } from './used-trucks.component';

describe('UsedTrucksComponent', () => {
  let component: UsedTrucksComponent;
  let fixture: ComponentFixture<UsedTrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsedTrucksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
