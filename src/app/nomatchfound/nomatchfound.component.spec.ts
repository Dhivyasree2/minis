import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomatchfoundComponent } from './nomatchfound.component';

describe('NomatchfoundComponent', () => {
  let component: NomatchfoundComponent;
  let fixture: ComponentFixture<NomatchfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomatchfoundComponent]
    });
    fixture = TestBed.createComponent(NomatchfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
