import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetbarComponent } from './setbar.component';

describe('SetbarComponent', () => {
  let component: SetbarComponent;
  let fixture: ComponentFixture<SetbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
