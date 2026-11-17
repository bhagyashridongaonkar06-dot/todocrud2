import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todocrud1Component } from './todocrud1.component';

describe('Todocrud1Component', () => {
  let component: Todocrud1Component;
  let fixture: ComponentFixture<Todocrud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todocrud1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todocrud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
