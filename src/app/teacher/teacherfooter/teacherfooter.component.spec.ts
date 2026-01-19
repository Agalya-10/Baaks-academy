import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherfooterComponent } from './teacherfooter.component';

describe('TeacherfooterComponent', () => {
  let component: TeacherfooterComponent;
  let fixture: ComponentFixture<TeacherfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherfooterComponent]
    });
    fixture = TestBed.createComponent(TeacherfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
