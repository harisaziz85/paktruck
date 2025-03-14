import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercomponentComponent } from './filtercomponent.component';

describe('FiltercomponentComponent', () => {
  let component: FiltercomponentComponent;
  let fixture: ComponentFixture<FiltercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltercomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
