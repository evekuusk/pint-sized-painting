import { Component, OnInit } from '@angular/core';

let homepageGridNums = [0, 1, 2, 3, 4]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  homepageGridOrder = shuffleArray(homepageGridNums);
  constructor() { }

  ngOnInit() {
  }

}
