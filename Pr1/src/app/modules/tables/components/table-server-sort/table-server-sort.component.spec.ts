import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableServerSortComponent } from './table-server-sort.component';

describe('TableServerSortComponent', () => {
  let component: TableServerSortComponent;
  let fixture: ComponentFixture<TableServerSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableServerSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableServerSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
