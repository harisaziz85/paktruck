import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsreviewsnavstabsComponent } from './newsreviewsnavstabs.component';

describe('NewsreviewsnavstabsComponent', () => {
  let component: NewsreviewsnavstabsComponent;
  let fixture: ComponentFixture<NewsreviewsnavstabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsreviewsnavstabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsreviewsnavstabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
