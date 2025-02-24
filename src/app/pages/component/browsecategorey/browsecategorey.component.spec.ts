import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsecategoreyComponent } from './browsecategorey.component';

describe('BrowsecategoreyComponent', () => {
  let component: BrowsecategoreyComponent;
  let fixture: ComponentFixture<BrowsecategoreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowsecategoreyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsecategoreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
