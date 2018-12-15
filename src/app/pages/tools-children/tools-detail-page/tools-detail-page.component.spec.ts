import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsDetailPageComponent } from './tools-detail-page.component';

describe('ToolsDetailPageComponent', () => {
  let component: ToolsDetailPageComponent;
  let fixture: ComponentFixture<ToolsDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
