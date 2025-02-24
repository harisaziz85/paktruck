import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopusersComponent } from './shopusers.component';

describe('ShopusersComponent', () => {
  let component: ShopusersComponent;
  let fixture: ComponentFixture<ShopusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
