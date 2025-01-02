import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopindividualvarificationComponent } from './shopindividualvarification.component';

describe('ShopindividualvarificationComponent', () => {
  let component: ShopindividualvarificationComponent;
  let fixture: ComponentFixture<ShopindividualvarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopindividualvarificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopindividualvarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
