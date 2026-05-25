import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCall } from './function-call';

describe('FunctionCall', () => {
  let component: FunctionCall;
  let fixture: ComponentFixture<FunctionCall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionCall],
    }).compileComponents();

    fixture = TestBed.createComponent(FunctionCall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
