import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreWithSignal } from './store-with-signal';

describe('StoreWithSignal', () => {
  let component: StoreWithSignal;
  let fixture: ComponentFixture<StoreWithSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreWithSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreWithSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
