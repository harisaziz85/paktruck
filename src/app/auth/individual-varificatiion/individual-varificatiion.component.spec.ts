import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualVarificatiionComponent } from './individual-varificatiion.component';

describe('IndividualVarificatiionComponent', () => {
  let component: IndividualVarificatiionComponent;
  let fixture: ComponentFixture<IndividualVarificatiionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualVarificatiionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualVarificatiionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
