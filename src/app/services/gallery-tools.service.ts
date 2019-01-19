import { Injectable } from '@angular/core';

// ****** CLASS ****** //
class GalleryImage {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryToolsService {
  // *** INIT CONSTANTS *** //
  gallery: GalleryImage[];

  buildGallery() {
    console.log('building gallery')

    

  }

  constructor() {
    this.gallery = [
      {
        id: '1'
      }
    ]
  }
}
