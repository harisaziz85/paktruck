import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthmovigmachineryComponent } from './earthmovigmachinery.component';

describe('EarthmovigmachineryComponent', () => {
  let component: EarthmovigmachineryComponent;
  let fixture: ComponentFixture<EarthmovigmachineryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarthmovigmachineryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthmovigmachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
