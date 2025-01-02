import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveadsComponent } from './saveads.component';

describe('SaveadsComponent', () => {
  let component: SaveadsComponent;
  let fixture: ComponentFixture<SaveadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
