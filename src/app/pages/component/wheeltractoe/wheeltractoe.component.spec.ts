import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheeltractoeComponent } from './wheeltractoe.component';

describe('WheeltractoeComponent', () => {
  let component: WheeltractoeComponent;
  let fixture: ComponentFixture<WheeltractoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheeltractoeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheeltractoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
