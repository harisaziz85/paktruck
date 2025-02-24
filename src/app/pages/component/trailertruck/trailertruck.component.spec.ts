import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailertruckComponent } from './trailertruck.component';

describe('TrailertruckComponent', () => {
  let component: TrailertruckComponent;
  let fixture: ComponentFixture<TrailertruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrailertruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailertruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
