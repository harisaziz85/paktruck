import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsadsComponent } from './shopsads.component';

describe('ShopsadsComponent', () => {
  let component: ShopsadsComponent;
  let fixture: ComponentFixture<ShopsadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopsadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopsadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
