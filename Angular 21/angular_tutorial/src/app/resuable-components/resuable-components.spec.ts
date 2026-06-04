import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableComponents } from './resuable-components';

describe('ResuableComponents', () => {
  let component: ResuableComponents;
  let fixture: ComponentFixture<ResuableComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResuableComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(ResuableComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
