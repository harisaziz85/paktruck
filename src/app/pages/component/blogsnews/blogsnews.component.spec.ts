import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsnewsComponent } from './blogsnews.component';

describe('BlogsnewsComponent', () => {
  let component: BlogsnewsComponent;
  let fixture: ComponentFixture<BlogsnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogsnewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
