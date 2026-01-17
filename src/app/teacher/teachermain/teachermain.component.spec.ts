import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachermainComponent } from './teachermain.component';

describe('TeachermainComponent', () => {
  let component: TeachermainComponent;
  let fixture: ComponentFixture<TeachermainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachermainComponent]
    });
    fixture = TestBed.createComponent(TeachermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
