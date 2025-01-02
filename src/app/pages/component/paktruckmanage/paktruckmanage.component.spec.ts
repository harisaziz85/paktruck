import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaktruckmanageComponent } from './paktruckmanage.component';

describe('PaktruckmanageComponent', () => {
  let component: PaktruckmanageComponent;
  let fixture: ComponentFixture<PaktruckmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaktruckmanageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaktruckmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
