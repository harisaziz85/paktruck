import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaktruckshowroomsComponent } from './paktruckshowrooms.component';

describe('PaktruckshowroomsComponent', () => {
  let component: PaktruckshowroomsComponent;
  let fixture: ComponentFixture<PaktruckshowroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaktruckshowroomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaktruckshowroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
