import { Component, OnInit } from '@angular/core';
import { PaintToolsService } from '../../../services/paint-tools.service';


@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.scss'],
  providers: [ PaintToolsService ]
})
export class PaintsComponent implements OnInit {
  types: string[];
  tags: string[];
  activeFilters: string[];

  constructor(private paintToolsService: PaintToolsService) { }

  ngOnInit() {

    this.types = this.paintToolsService.allTypes;
    this.tags = this.paintToolsService.allTags;
    this.activeFilters = this.paintToolsService.filtersArr;
  }

}
