import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractorsComponent } from './tractors.component';

describe('TractorsComponent', () => {
  let component: TractorsComponent;
  let fixture: ComponentFixture<TractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TractorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
