import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsindividualpopupComponent } from './shopsindividualpopup.component';

describe('ShopsindividualpopupComponent', () => {
  let component: ShopsindividualpopupComponent;
  let fixture: ComponentFixture<ShopsindividualpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopsindividualpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopsindividualpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
