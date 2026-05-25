import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldsValues } from './input-fields-values';

describe('InputFieldsValues', () => {
  let component: InputFieldsValues;
  let fixture: ComponentFixture<InputFieldsValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFieldsValues],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFieldsValues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
