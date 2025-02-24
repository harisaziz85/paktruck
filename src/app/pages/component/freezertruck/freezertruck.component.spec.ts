import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezertruckComponent } from './freezertruck.component';

describe('FreezertruckComponent', () => {
  let component: FreezertruckComponent;
  let fixture: ComponentFixture<FreezertruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreezertruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreezertruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
