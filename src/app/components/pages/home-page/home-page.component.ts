import { Component, OnInit } from '@angular/core';
import { ArrayToolsService } from '../../../services/array-tools.service';

let homepageLinks = ['about', 'gallery', 'services', 'tutorials', 'tools']




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [ ArrayToolsService ]
})
export class HomePageComponent implements OnInit {
  homepageGridOrder: string[];

  constructor(private arrayToolsService: ArrayToolsService) { }

  ngOnInit() {
    this.homepageGridOrder = this.arrayToolsService.shuffleArray(homepageLinks);
  }

}
