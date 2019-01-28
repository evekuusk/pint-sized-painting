import { Injectable } from '@angular/core';
import { PaintToolsService } from './paint-tools.service';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// ****** CLASSES ****** //


class paintLayers {
// each item will list like so [
//   {
//      layer: 0,
//      paint: paint-name-value
//   }
// ]
  air: object[];
  base: object[];
  dry: object[];
  edge: object[];
  glaze: object[];
  layer: object[];
  shade: object[];
  shadeGloss: object[];
  spray: object[];
  technical: object[];
  texture: object[];
}

class GalleryMini {
  id: string;
  images: object[];
  title: string;
  paints: paintLayers[];
  tutorials: object[];
  description: string;
  primer: string;
  model: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryToolsService {
  // *** INIT CONSTANTS *** //
  gallery: GalleryMini[];
  paints = this.paintToolsService.allPaints;

  showPaintLayers(paints) {
      return this.paintToolsService.getPaintLayers(paints)
  }

  constructor(private paintToolsService: PaintToolsService) {
    this.gallery = [
      // GALLERY TEMPLATE

      // {
      //   id: '',
      //   title: '',
      //   description: '',
      //   model: '',
      //   primer: 'Corax White',
      //   paints:
      //     {
      //       air: [],
      //       base: [
      //         {
      //           layer: 0,
      //           paint: 'abaddon-black'
      //         }
      //       ],
      //       dry: [],
      //       edge: [],
      //       glaze: [],
      //       layer: [],
      //       shade: [],
      //       shadeGloss: [],
      //       spray: [],
      //       technical: [],
      //       texture: []
      //    }
      //   ],
      //   tutorials: [],
      //   images: [
      //     {
      //       url: 'assets/img/gallery/*/*/*/*/*.jpg',
      //       alt: ''
      //     }
      //   ]
      // },

      // END GALLERY TEMPLATE


      // *** --- *** CHAOS *** --- *** //
      // *** DAEMONS OF NURGLE *** //
      // --- blightkings --- //

      // --- plaguebearers --- //

      // --- poxbringer, herald of nurgle --- //
      {
        id: 'poxbringer1',
        title: 'I call him Harry',
        description: 'The very first Warhammer miniature I ever painted',
        model: 'Poxbringer, Herald of Nurgle',
        primer: 'Corax White',
        paints: [{
            air: [],
            base: [],
            dry: [],
            edge: [],
            glaze: [],
            layer: [],
            shade: [],
            shadeGloss: [],
            spray: [],
            technical: [],
            texture: []
          }],
        tutorials: [],
        images: [
          {
            url: 'assets/img/gallery/chaos/nurgle/poxbringer/1/placeholder.jpg',
            alt: 'placeholder alt text'
          },
          {
            url: 'assets/img/gallery/chaos/nurgle/poxbringer/1/placeholder2.jpg',
            alt: 'second placeholder alt text'
          }
        ]
      }

      // --- lord of blights --- //

      // END OF PAINTED MINIS LIST
    ]
  }
}
