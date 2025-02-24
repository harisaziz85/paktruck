import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumptruckComponent } from './dumptruck.component';

describe('DumptruckComponent', () => {
  let component: DumptruckComponent;
  let fixture: ComponentFixture<DumptruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumptruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumptruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
