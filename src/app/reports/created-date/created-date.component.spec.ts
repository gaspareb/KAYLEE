import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedDateComponent } from './created-date.component';

describe('CreatedDateComponent', () => {
  let component: CreatedDateComponent;
  let fixture: ComponentFixture<CreatedDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
