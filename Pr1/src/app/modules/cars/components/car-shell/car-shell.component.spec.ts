import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShellComponent } from './car-shell.component';

describe('CarShellComponent', () => {
  let component: CarShellComponent;
  let fixture: ComponentFixture<CarShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
