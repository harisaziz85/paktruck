import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitruckcategoreyComponent } from './minitruckcategorey.component';

describe('MinitruckcategoreyComponent', () => {
  let component: MinitruckcategoreyComponent;
  let fixture: ComponentFixture<MinitruckcategoreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinitruckcategoreyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinitruckcategoreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
