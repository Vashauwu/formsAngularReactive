import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEhsComponent } from './form-ehs.component';

describe('FormEhsComponent', () => {
  let component: FormEhsComponent;
  let fixture: ComponentFixture<FormEhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormEhsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
