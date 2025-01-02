import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdetailspageComponent } from './blogdetailspage.component';

describe('BlogdetailspageComponent', () => {
  let component: BlogdetailspageComponent;
  let fixture: ComponentFixture<BlogdetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogdetailspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
