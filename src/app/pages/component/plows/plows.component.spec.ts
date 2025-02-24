import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlowsComponent } from './plows.component';

describe('PlowsComponent', () => {
  let component: PlowsComponent;
  let fixture: ComponentFixture<PlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
