import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsandadviceComponent } from './tipsandadvice.component';

describe('TipsandadviceComponent', () => {
  let component: TipsandadviceComponent;
  let fixture: ComponentFixture<TipsandadviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsandadviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsandadviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
