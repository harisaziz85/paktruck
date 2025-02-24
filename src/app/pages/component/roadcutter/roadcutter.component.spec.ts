import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadcutterComponent } from './roadcutter.component';

describe('RoadcutterComponent', () => {
  let component: RoadcutterComponent;
  let fixture: ComponentFixture<RoadcutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadcutterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadcutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
