import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedersComponent } from './seeders.component';

describe('SeedersComponent', () => {
  let component: SeedersComponent;
  let fixture: ComponentFixture<SeedersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeedersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
