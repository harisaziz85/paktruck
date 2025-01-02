import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakesmodelsComponent } from './makesmodels.component';

describe('MakesmodelsComponent', () => {
  let component: MakesmodelsComponent;
  let fixture: ComponentFixture<MakesmodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakesmodelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakesmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
