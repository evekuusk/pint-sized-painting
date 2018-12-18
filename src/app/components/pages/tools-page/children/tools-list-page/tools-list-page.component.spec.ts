import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsListPageComponent } from './tools-list-page.component';

describe('ToolsListPageComponent', () => {
  let component: ToolsListPageComponent;
  let fixture: ComponentFixture<ToolsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
