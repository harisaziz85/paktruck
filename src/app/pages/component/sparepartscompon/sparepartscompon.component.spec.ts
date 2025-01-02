import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartscomponComponent } from './sparepartscompon.component';

describe('SparepartscomponComponent', () => {
  let component: SparepartscomponComponent;
  let fixture: ComponentFixture<SparepartscomponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SparepartscomponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparepartscomponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
