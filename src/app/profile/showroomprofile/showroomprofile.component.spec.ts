import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomprofileComponent } from './showroomprofile.component';

describe('ShowroomprofileComponent', () => {
  let component: ShowroomprofileComponent;
  let fixture: ComponentFixture<ShowroomprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowroomprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
