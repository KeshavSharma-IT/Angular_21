import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssStyling } from './css-styling';

describe('CssStyling', () => {
  let component: CssStyling;
  let fixture: ComponentFixture<CssStyling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssStyling],
    }).compileComponents();

    fixture = TestBed.createComponent(CssStyling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
