import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfooterComponent } from './studentfooter.component';

describe('StudentfooterComponent', () => {
  let component: StudentfooterComponent;
  let fixture: ComponentFixture<StudentfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentfooterComponent]
    });
    fixture = TestBed.createComponent(StudentfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
