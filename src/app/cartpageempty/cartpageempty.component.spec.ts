import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpageemptyComponent } from './cartpageempty.component';

describe('CartpageemptyComponent', () => {
  let component: CartpageemptyComponent;
  let fixture: ComponentFixture<CartpageemptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartpageemptyComponent]
    });
    fixture = TestBed.createComponent(CartpageemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
