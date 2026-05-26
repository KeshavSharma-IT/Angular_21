import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopComponents } from './loop-components';

describe('LoopComponents', () => {
  let component: LoopComponents;
  let fixture: ComponentFixture<LoopComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(LoopComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
