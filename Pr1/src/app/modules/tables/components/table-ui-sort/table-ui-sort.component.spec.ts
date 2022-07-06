import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUiSortComponent } from './table-ui-sort.component';

describe('TableUiSortComponent', () => {
  let component: TableUiSortComponent;
  let fixture: ComponentFixture<TableUiSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUiSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUiSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
