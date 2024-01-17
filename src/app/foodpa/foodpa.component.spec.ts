import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpaComponent } from './foodpa.component';

describe('FoodpaComponent', () => {
  let component: FoodpaComponent;
  let fixture: ComponentFixture<FoodpaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodpaComponent]
    });
    fixture = TestBed.createComponent(FoodpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
