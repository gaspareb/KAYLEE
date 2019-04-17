import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummmaryComponent } from './summmary.component';

describe('SummmaryComponent', () => {
  let component: SummmaryComponent;
  let fixture: ComponentFixture<SummmaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummmaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
