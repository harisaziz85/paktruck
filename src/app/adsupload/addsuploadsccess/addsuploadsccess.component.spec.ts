import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsuploadsccessComponent } from './addsuploadsccess.component';

describe('AddsuploadsccessComponent', () => {
  let component: AddsuploadsccessComponent;
  let fixture: ComponentFixture<AddsuploadsccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddsuploadsccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsuploadsccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
