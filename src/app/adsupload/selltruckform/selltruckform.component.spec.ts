import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelltruckformComponent } from './selltruckform.component';

describe('SelltruckformComponent', () => {
  let component: SelltruckformComponent;
  let fixture: ComponentFixture<SelltruckformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelltruckformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelltruckformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
