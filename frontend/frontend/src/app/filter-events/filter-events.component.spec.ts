import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterEventsComponent } from './filter-events.component';

describe('FilterEventsComponent', () => {
  let component: FilterEventsComponent;
  let fixture: ComponentFixture<FilterEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
