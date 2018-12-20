import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesListPageComponent } from './services-list-page.component';

describe('ServicesListPageComponent', () => {
  let component: ServicesListPageComponent;
  let fixture: ComponentFixture<ServicesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
