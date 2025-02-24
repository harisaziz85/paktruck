import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalusersComponent } from './totalusers.component';

describe('TotalusersComponent', () => {
  let component: TotalusersComponent;
  let fixture: ComponentFixture<TotalusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
