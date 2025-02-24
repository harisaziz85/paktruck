import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderoperatorComponent } from './loaderoperator.component';

describe('LoaderoperatorComponent', () => {
  let component: LoaderoperatorComponent;
  let fixture: ComponentFixture<LoaderoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
