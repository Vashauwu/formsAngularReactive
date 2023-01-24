import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRhComponent } from './form-rh.component';

describe('FormRhComponent', () => {
  let component: FormRhComponent;
  let fixture: ComponentFixture<FormRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
