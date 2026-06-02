import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinalInput } from './sinal-input';

describe('SinalInput', () => {
  let component: SinalInput;
  let fixture: ComponentFixture<SinalInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinalInput],
    }).compileComponents();

    fixture = TestBed.createComponent(SinalInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
