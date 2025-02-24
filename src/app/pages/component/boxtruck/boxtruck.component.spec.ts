import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxtruckComponent } from './boxtruck.component';

describe('BoxtruckComponent', () => {
  let component: BoxtruckComponent;
  let fixture: ComponentFixture<BoxtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxtruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
