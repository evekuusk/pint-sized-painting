import { Component, OnInit, Inject } from '@angular/core';
import { GalleryToolsService } from '../../../services/gallery-tools.service';
import { ArrayToolsService } from '../../../services/array-tools.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as $ from 'jquery';

export interface ModalData {
  id: string;
}

// *** GALLERY COMPONENT *** //
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [ GalleryToolsService, ArrayToolsService ]
})
export class GalleryComponent implements OnInit {
  minisList = this.galleryToolsService.gallery;
  workingMinisList: object[];
  miniFeaturedImages = [];
  selectedImgId: string;


  updatePaintLayers(paints) {
    let tempPaintsList = []
    for (let type in paints) {
      for (let paint in paints[type]) {
        paints[type][paint]['type'] = type
        tempPaintsList.push(paints[type][paint])
      }
    }
    return tempPaintsList
  }

  openModal(imgId): void {
    this.selectedImgId = imgId;
    let selectedImageData = this.arrayToolsService.matchArrayItemByIdValue(this.workingMinisList, imgId)
    const modalRef = this.modal.open(GalleryModal, {
      data: selectedImageData,
      width: '95vw',
      height: '90vh'
    });

    modalRef.afterClosed().subscribe(result => {});
  }

  constructor(private galleryToolsService: GalleryToolsService, private arrayToolsService: ArrayToolsService, public modal: MatDialog) {}

  ngOnInit() {
    let workingMinisList = this.minisList

    for (let i = 0; i < workingMinisList.length; i++) {
      // get featured images
      let featuredImg = this.arrayToolsService.shuffleArray(workingMinisList[i]['images'])[0];
      featuredImg['id'] = workingMinisList[i]['id']
      featuredImg['title'] = workingMinisList[i]['title']
      this.miniFeaturedImages.push(featuredImg)

      // get paint layers
      if (workingMinisList[i]['paints'].length > 0) {
        let thisMiniPaintsList = workingMinisList[i]['paints'][0]
        let simpleUsedPaintsList = this.updatePaintLayers(thisMiniPaintsList)
        let paintLayersList = this.galleryToolsService.showPaintLayers(simpleUsedPaintsList)

        workingMinisList[i]['paintLayers'] = paintLayersList;
      } else {
        workingMinisList[i]['paintLayers'] = [];
      }

      for (let j = 0; j < workingMinisList[i]['paintLayers'].length; j++) {
        workingMinisList[i]['paintLayers'][j] = workingMinisList[i]['paintLayers'][j].sort(this.arrayToolsService.dynamicSort('name'));
      }
    }
    console.log(workingMinisList)
    this.workingMinisList = workingMinisList;
  }

}


// *** GALLERY MODAL COMPONENT *** //
@Component({
  selector: 'gallery-modal',
  templateUrl: 'gallery-modal.html',
})
export class GalleryModal {
  currentImage: object;

  constructor(public modalRef: MatDialogRef<GalleryModal>, @Inject(MAT_DIALOG_DATA) public data: ModalData, private arrayToolsService: ArrayToolsService, private galleryToolsService: GalleryToolsService) {}

  onNoClick(): void {
    this.modalRef.close();
  }

  updateCurrentImage(e) {
    let source = $(e.srcElement).attr('src');
    let altText = $(e.srcElement).attr('alt');

    if (source != this.currentImage['url']) {
      this.currentImage = {}
      this.currentImage['url'] = source;
      this.currentImage['alt'] = altText;

      let container = document.getElementsByClassName("mat-dialog-content");
      $(container[0]).animate({
        scrollTop: 0
      }, 200);
    }
  }

  ngOnInit() {
    this.currentImage = this.data['images'][0];
  }
}
