import { Component, OnInit } from '@angular/core';
import { ArrayToolsService } from '../../../services/array-tools.service';

let homepageLinks = [['about', 'About the artist and contact info'], ['gallery', 'Portfolio of painted miniatures'], ['services', 'Available painting services'], ['tutorials', 'How-to guides from start to finish'], ['tools', 'Handy web tools for mini painting']]

// max characters per line for description: 0000000000000000 0000000000000000 0000000000000000



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
