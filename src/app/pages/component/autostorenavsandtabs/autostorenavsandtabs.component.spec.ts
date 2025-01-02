import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutostorenavsandtabsComponent } from './autostorenavsandtabs.component';

describe('AutostorenavsandtabsComponent', () => {
  let component: AutostorenavsandtabsComponent;
  let fixture: ComponentFixture<AutostorenavsandtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutostorenavsandtabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutostorenavsandtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
