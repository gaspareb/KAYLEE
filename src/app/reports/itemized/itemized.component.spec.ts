import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemizedComponent } from './itemized.component';

describe('ItemizedComponent', () => {
  let component: ItemizedComponent;
  let fixture: ComponentFixture<ItemizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
