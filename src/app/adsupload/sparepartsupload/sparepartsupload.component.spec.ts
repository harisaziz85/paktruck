import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartsuploadComponent } from './sparepartsupload.component';

describe('SparepartsuploadComponent', () => {
  let component: SparepartsuploadComponent;
  let fixture: ComponentFixture<SparepartsuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SparepartsuploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparepartsuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
