import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurveysComponent } from './view-surveys.component';

describe('ViewSurveysComponent', () => {
  let component: ViewSurveysComponent;
  let fixture: ComponentFixture<ViewSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
