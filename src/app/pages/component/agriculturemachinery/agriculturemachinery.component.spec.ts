import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturemachineryComponent } from './agriculturemachinery.component';

describe('AgriculturemachineryComponent', () => {
  let component: AgriculturemachineryComponent;
  let fixture: ComponentFixture<AgriculturemachineryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgriculturemachineryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriculturemachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
