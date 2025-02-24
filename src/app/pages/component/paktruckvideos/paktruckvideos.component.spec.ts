import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaktruckvideosComponent } from './paktruckvideos.component';

describe('PaktruckvideosComponent', () => {
  let component: PaktruckvideosComponent;
  let fixture: ComponentFixture<PaktruckvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaktruckvideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaktruckvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
