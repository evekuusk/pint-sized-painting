import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-list-page',
  templateUrl: './gallery-list-page.component.html',
  styleUrls: ['./gallery-list-page.component.scss']
})
export class GalleryListPageComponent implements OnInit {
  pathname: string;
  currentSiteSectionArr: string[];
  currentSiteSection: string;

  constructor() {
    this.pathname = window.location.pathname;
    if (this.pathname[0] === '/') {
      this.pathname = this.pathname.substring(1);
    }
    this.currentSiteSectionArr = this.pathname.split('/')
    this.currentSiteSection = this.currentSiteSectionArr[0]
    console.log(this.currentSiteSection)
  }

  ngOnInit() {

  }

}
