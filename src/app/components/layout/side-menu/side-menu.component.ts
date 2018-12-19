import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  pathname: string;
  currentSiteSectionArr: string[];
  currentSiteSection: string;
  constructor() { }

  ngOnInit() {
    this.pathname = window.location.pathname;
    if (this.pathname[0] === '/') {
      this.pathname = this.pathname.substring(1);
    }
    this.currentSiteSectionArr = this.pathname.split('/')
    this.currentSiteSection = this.currentSiteSectionArr[0]

  }

}
