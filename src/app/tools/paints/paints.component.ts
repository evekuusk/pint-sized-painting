import { Component, OnInit } from '@angular/core';

class Paint {
  id: number;
  name: string;
  hex: string;
  brand: string;
  type: string;
  tags: string[];
  families: string[];

}

// VARIABLES
const brands = ['citadel']
const types = ['base', 'layer', 'shade', 'metallic', 'glaze', 'technical', 'dry', 'texture']
const tags = ['skin', 'metal', 'wood']
const colourFamilies = ['red', 'pink', 'orange', 'gold', 'copper', 'yellow', 'green', 'turquoise', 'blue', 'purple', 'violet', 'white', 'grey', 'black']

const PAINTS: Paint[] = [
  {
    id: 1,
    name: 'first paint',
    hex: '#fff',
    brand: 'citadel',
    type: 'layer',
    tags: ['skin', 'wood'],
    families: ['red', 'pink']
  }
];

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.scss']
})
export class PaintsComponent implements OnInit {
  paints = PAINTS;

  constructor() { }

  ngOnInit() {
  }

}
