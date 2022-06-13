import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLeavePageComponent } from './dialog-leave-page.component';

describe('DialogLeavePageComponent', () => {
  let component: DialogLeavePageComponent;
  let fixture: ComponentFixture<DialogLeavePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLeavePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLeavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
