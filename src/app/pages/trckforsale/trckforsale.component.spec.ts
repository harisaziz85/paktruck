import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrckforsaleComponent } from './trckforsale.component';

describe('TrckforsaleComponent', () => {
  let component: TrckforsaleComponent;
  let fixture: ComponentFixture<TrckforsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrckforsaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrckforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
