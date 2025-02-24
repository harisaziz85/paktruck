import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankertruckComponent } from './tankertruck.component';

describe('TankertruckComponent', () => {
  let component: TankertruckComponent;
  let fixture: ComponentFixture<TankertruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TankertruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankertruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
