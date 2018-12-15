import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintsPageComponent } from './paints-page.component';

describe('PaintsPageComponent', () => {
  let component: PaintsPageComponent;
  let fixture: ComponentFixture<PaintsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
