import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlattruckComponent } from './flattruck.component';

describe('FlattruckComponent', () => {
  let component: FlattruckComponent;
  let fixture: ComponentFixture<FlattruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlattruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlattruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
