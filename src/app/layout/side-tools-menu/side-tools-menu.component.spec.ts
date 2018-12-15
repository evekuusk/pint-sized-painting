import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideToolsMenuComponent } from './side-tools-menu.component';

describe('SideToolsMenuComponent', () => {
  let component: SideToolsMenuComponent;
  let fixture: ComponentFixture<SideToolsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideToolsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideToolsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
