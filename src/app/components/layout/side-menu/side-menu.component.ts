import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  // currentSiteSection: string;
  constructor() { }

  ngOnInit() {
    this.currentSiteSection = window.location.href;
    console.log(this.currentSiteSection)
  }

}
