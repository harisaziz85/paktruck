import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphonevarificationComponent } from './addphonevarification.component';

describe('AddphonevarificationComponent', () => {
  let component: AddphonevarificationComponent;
  let fixture: ComponentFixture<AddphonevarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddphonevarificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddphonevarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
