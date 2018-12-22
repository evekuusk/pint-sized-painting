import { Injectable } from '@angular/core';
import { ArrayToolsService } from './array-tools.service';


// ****** CLASS ****** //
class Paint {
  // id: number;
  hex: string;
  name: string;
  className: string;
  brand: string;
  types: string[];
  warm: boolean;
  cool: boolean;
  temperatureRatio: number[];
  tags: string[];
  colourFamilies: string[];
  metallic: boolean;
  texture: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class PaintToolsService {
  // *** INIT CONSTANTS *** //
  allBrands: string[];
  allTypes: string[];
  allTags: string[];
  allColourFamilies: string[];
  allPaints: Paint[];

  // *** FILTER VARIABLES *** //
  allTypesFilterSelections: object[];
  allTagsFilterSelections: object[];
  allColourFamiliesFilterSelections: object[];
  filtersObj: object;
  filtersArr: string[];

  // *** CONTROLS WHICH PAINTS ARE VIEWED IN COMPONENT *** //
  filteredPaintsResult: Paint[];

  // *** PAINT MAPS *** //
  paintTypesMap = {};
  paintTagsMap = {};
  paintColourFamiliesMap = {};

  buildTypesMap() {
    for (let i = 0; i < this.allTypes.length; i++) {
      let keyName = this.allTypes[i]
      this.paintTypesMap[keyName] = [];
    }
  }

  buildTagsMap() {
    for (let i = 0; i < this.allTags.length; i++) {
      let keyName = this.allTags[i]
      this.paintTagsMap[keyName] = [];
    }
  }

  buildColourFamiliesMap() {
    for (let i = 0; i < this.allColourFamilies.length; i++) {
      let keyName = this.allColourFamilies[i]
      this.paintColourFamiliesMap[keyName] = [];
    }
  }

  fillSelectionMaps() {
    for (let i = 0; i < this.allPaints.length; i++) {
      let thisPaint = this.allPaints[i]
      for (let j = 0; j < thisPaint.colourFamilies.length; j++) {
        this.paintColourFamiliesMap[thisPaint.colourFamilies[j]].push(thisPaint)
      }
      for (let k = 0; k < thisPaint.types.length; k++) {
        this.paintTypesMap[thisPaint.types[k]].push(thisPaint)
      }
      for (let l = 0; l < thisPaint.tags.length; l++) {
        this.paintTagsMap[thisPaint.tags[l]].push(thisPaint)
      }
    }
    console.log(this.paintTypesMap, this.paintTagsMap, this.paintColourFamiliesMap)
  }

  // *** STATUS FUNCTIONS *** //
  updateFilteredPaints(filters) {
    this.filtersObj = filters;
    this.updateFilteredPaintsArr()
    this.comparePaints()
  }

  showAllPaints() {
    this.filteredPaintsResult = this.allPaints;
  }

  removeValueFromArray(a, v) {
    return this.arrayToolsService.removeValueFromArray(a, v)
  }

  updateFilteredPaintsArr() {
    this.filtersArr = this.arrayToolsService.generateArrayFromObject(this.filtersObj)
  }

  sortPaintsAlphabetically(property) {
    return this.arrayToolsService.dynamicSort(property)

  }

  comparePaints() {
    let filteredTypes = this.filtersObj['filteredTypes'];
    let filteredTags = this.filtersObj['filteredTags'];
    let filteredColourFamilies = this.filtersObj['filteredColourFamilies'];
    let filteredResultBucket = [];

    for (let i = 0; i < filteredTypes.length; i++) {
      let thisTypeValue = filteredTypes[i]
      let thisTypePaintList = this.paintTypesMap[thisTypeValue]
      for (let j = 0; j < thisTypePaintList.length; j++) {
        filteredResultBucket.push(thisTypePaintList[j])
      }
    }

    for (let i = 0; i < filteredTags.length; i++) {
      let thisTagValue = filteredTags[i]
      let thisTagPaintList = this.paintTagsMap[thisTagValue]
      for (let j = 0; j < thisTagPaintList.length; j++) {
        filteredResultBucket.push(thisTagPaintList[j])
      }
    }

    for (let i = 0; i < filteredColourFamilies.length; i++) {
      let thisColourFamilyValue = filteredColourFamilies[i]
      let thisColourFamilyPaintList = this.paintColourFamiliesMap[thisColourFamilyValue]
      for (let j = 0; j < thisColourFamilyPaintList.length; j++) {
        filteredResultBucket.push(thisColourFamilyPaintList[j])
      }
    }
    filteredResultBucket = this.arrayToolsService.removeDuplicates(filteredResultBucket)
    this.filteredPaintsResult = filteredResultBucket.sort(this.arrayToolsService.dynamicSort('name'));
  }


  constructor(private arrayToolsService: ArrayToolsService) {
    // *** ALL PAINTS *** //
    this.allPaints = [
      {
        hex: "#202020",
        name: "Abaddon Black",
        className: "abaddon-black",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['dark', 'neutral'],
        colourFamilies: ['black'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#a9aba6",
        name: "Administratum Grey",
        className: "administratum-grey",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['neutral', 'medium', 'dark'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#605a42",
        name: "Agrax Earthshade",
        className: "agrax-earthshade",
        brand: "citadel",
        types: ['shade', 'shade gloss'],
        tags: ['earthy', 'muddy'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#9f8e7e",
        name: "Agrellan Badland",
        className: "agrellan-badland",
        brand: "citadel",
        types: ['texture'],
        tags: ['brown', 'neutral'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#9f8e7e",
        name: "Agrellan Earth",
        className: "agrellan-earth",
        brand: "citadel",
        types: ['texture'],
        tags: ['brown', 'neutral'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#228d9d",
        name: "Ahriman Blue",
        className: "ahriman-blue",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright'],
        colourFamilies: ['blue', 'turquoise'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#4b6c97",
        name: "Alaitoc Blue",
        className: "alaitoc-blue",
        brand: "citadel",
        types: ['layer'],
        tags: ['dark'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#4663a9",
        name: "Altdorf Guard Blue",
        className: "altdorf-guard-blue",
        brand: "citadel",
        types: ['layer'],
        tags: ['dark'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#d8b227",
        name: "Armageddon Dunes",
        className: "armageddon-dunes",
        brand: "citadel",
        types: ['texture'],
        tags: ['sand'],
        colourFamilies: ['yellow', 'brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#d8b227",
        name: "Armageddon Dust",
        className: "armageddon-dust",
        brand: "citadel",
        types: ['texture'],
        tags: ['sand'],
        colourFamilies: ['yellow', 'brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#b8473f",
        name: "Astorath Red",
        className: "astorath-red",
        brand: "citadel",
        types: ['dry'],
        tags: ['bright', 'intense'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#87888a",
        name: "Astrogranite",
        className: "astrogranite",
        brand: "citadel",
        types: ['texture'],
        tags: ['stone'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#87888a",
        name: "Astrogranite Debris",
        className: "astrogranite-debris",
        brand: "citadel",
        types: ['texture'],
        tags: ['stone'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#718b32",
        name: "Athonian Camoshade",
        className: "athonian-camoshade",
        brand: "citadel",
        types: ['shade'],
        tags: ['moss', 'dark', 'sickly'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#e3af27",
        name: "Auric Armour Gold",
        className: "auric-armour-gold",
        brand: "citadel",
        types: ['layer'],
        tags: ['gold', 'bright'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#fac322",
        name: "Averland Sunset",
        className: "averland-sunset",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['bright', 'medium'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#78c7d3",
        name: "Baharroth Blue",
        className: "baharroth-blue",
        brand: "citadel",
        types: ['edge'],
        tags: ['intense', 'bright'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#a17326",
        name: "Balor Brown",
        className: "balor-brown",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['muddy', 'leather'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#8b5728",
        name: "Balthasar Gold",
        className: "balthasar-gold",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['dark', 'gold', 'metallic'],
        colourFamilies: ['brown', 'yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#a6917e",
        name: "Baneblade Brown",
        className: "baneblade-brown",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['leather', 'muddy', 'light'],
        colourFamilies: ['brown', 'beige'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#da9b66",
        name: "Bestigor Flesh",
        className: "bestigor-flesh",
        brand: "citadel",
        types: ['layer'],
        tags: ['skin'],
        colourFamilies: ['orange', 'yellow', 'beige'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#20965a",
        name: "Biel-Tan Green",
        className: "biel-tan-green",
        brand: "citadel",
        types: ['shade'],
        tags: ['dark', 'bright'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b76c32",
        name: "Blackfire Earth",
        className: "blackfire-earth",
        brand: "citadel",
        types: ['texture'],
        tags: ['muddy'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#782d2d",
        name: "Blood for the Blood God",
        className: "blood-for-the-blood-god",
        brand: "citadel",
        types: ['technical'],
        tags: ['blood', 'dark', 'intense', 'glossy'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#e62633",
        name: "Bloodletter",
        className: "bloodletter",
        brand: "citadel",
        types: ['glaze'],
        tags: ['intense', 'bright'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b9cadc",
        name: "Blue Horror",
        className: "blue-horror",
        brand: "citadel",
        types: ['edge'],
        tags: ['light', 'pale'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#9e6629",
        name: "Brass Scorpion",
        className: "brass-scorpion",
        brand: "citadel",
        types: ['layer'],
        tags: ['metallic', 'brass', 'medium'],
        colourFamilies: ['orange', 'brown', 'yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#9b675c",
        name: "Bugman's Glow",
        className: "bugmans-glow",
        brand: "citadel",
        types: ['base'],
        tags: ['skin'],
        colourFamilies: ['brown', 'red', 'pink', 'orange', 'beige'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#d28969",
        name: "Cadian Fleshtone",
        className: "cadian-fleshtone",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'light'],
        colourFamilies: ['orange', 'brown', 'beige'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#527ba7",
        name: "Caledor Sky",
        className: "caledor-sky",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['intense', 'bright'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#5d81bf",
        name: "Calgar Blue",
        className: "calgar-blue",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['light'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#22533a",
        name: "Caliban Green",
        className: "caliban-green",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['dark', 'leaves'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b12975",
        name: "Carroburg Crimson",
        className: "carroburg-crimson",
        brand: "citadel",
        types: ['shade'],
        tags: ['intense', 'bright'],
        colourFamilies: ['red', 'pink'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#fdcd21",
        name: "Casandora Yellow",
        className: "casandora-yellow",
        brand: "citadel",
        types: ['shade'],
        tags: ['bright', 'intense'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#53633e",
        name: "Castellan Green",
        className: "castellan-green",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['neutral', 'dark', 'moss', 'leaves'],
        colourFamilies: ['green', 'brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#a8b8b8",
        name: "Celestra Grey",
        className: "celestra-grey",
        brand: "citadel",
        types: ['base'],
        tags: ['light', 'pale', 'stone'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ffffff",
        name: "Ceramite White",
        className: "ceramite-white",
        brand: "citadel",
        types: ['base'],
        tags: ['bright', 'light', 'pale'],
        colourFamilies: ['white'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#f6c0d8",
        name: "Changeling Pink",
        className: "changeling-piink",
        brand: "citadel",
        types: ['dry'],
        tags: ['light', 'pale', 'bright'],
        colourFamilies: ['pink'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#212121",
        name: "Chaos Black",
        className: "chaos-black",
        brand: "citadel",
        types: ['spray'],
        tags: ['primer', 'dark'],
        colourFamilies: ['black'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#6ca6d8",
        name: "Chronus Blue",
        className: "chronus-blue",
        brand: "citadel",
        types: ['dry'],
        tags: ['light', 'pale'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#218078",
        name: "Coelia Greenshade",
        className: "coelia-greenshade",
        brand: "citadel",
        types: ['shade'],
        tags: ['bright'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ffffff",
        name: "Corax White",
        className: "corax-white",
        brand: "citadel",
        types: ['spray'],
        tags: ['white', 'light', 'pale', 'primer'],
        colourFamilies: ['white'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#85819a",
        name: "Daemonette Hide",
        className: "daemonette-hide",
        brand: "citadel",
        types: ['base'],
        tags: ['neutral', 'medium'],
        colourFamilies: ['purple', 'grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#5b6b6a",
        name: "Dark Reaper",
        className: "dark-reaper",
        brand: "citadel",
        types: ['layer'],
        tags: ['dark', 'neutral'],
        colourFamilies: ['grey', 'blue', 'green', 'turquoise'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#8b8e87",
        name: "Dawnstone",
        className: "dawnstone",
        brand: "citadel",
        types: ['layer', 'dry', 'air'],
        tags: ['stone', 'neutral', 'medium'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#858b67",
        name: "Death Guard Green",
        className: "death-guard-green",
        brand: "citadel",
        types: ['base'],
        tags: ['light', 'bright'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#c17d68",
        name: "Deathclaw Brown",
        className: "deathclaw-brown",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['peach', 'skin', 'medium'],
        colourFamilies: ['brown', 'pink', 'peach'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#7b8048",
        name: "DeathWorld Forest",
        className: "deathworld-forest",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['muddy'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#c8b2d6",
        name: "Dechala Lilac",
        className: "dechala-lilac",
        brand: "citadel",
        types: ['edge'],
        tags: ['light', 'bright', 'pale'],
        colourFamilies: ['purple'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#e2e2d8",
        name: "Deepkin Flesh",
        className: "deepkin-flesh",
        brand: "citadel",
        types: ['layer'],
        tags: ['light', 'bright', 'pale', 'bone', 'stone', 'skin'],
        colourFamilies: ['white', 'beige', 'grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#722b29",
        name: "Doombull Brown",
        className: "doombull-brown",
        brand: "citadel",
        types: ['layer'],
        tags: ['leather', 'muddy'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#fff16a",
        name: "Dorn Yellow",
        className: "dorn-yellow",
        brand: "citadel",
        types: ['edge'],
        tags: ['bright', 'light'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#2769a3",
        name: "Drakenhof Nightshade",
        className: "drakenhof-nightshade",
        brand: "citadel",
        types: ['shade'],
        tags: ['bright'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#7c3d84",
        name: "Druchii Violet",
        className: "druchii-violet",
        brand: "citadel",
        types: ['shade'],
        tags: ['intense', 'bright'],
        colourFamilies: ['purple'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#544e48",
        name: "Dryad Bark",
        className: "dryad-bark",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['wood', 'leather'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#efcc94",
        name: "Eldar Flesh",
        className: "eldar-flesh",
        brand: "citadel",
        types: ['dry'],
        tags: ['skin', 'light', 'pale'],
        colourFamilies: ['orange', 'yellow', 'beige'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#91a149",
        name: "Elysian Green",
        className: "elysian-green",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['sickly', 'leaves'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#c45985",
        name: "Emperor's Children",
        className: "emperors-children",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright'],
        colourFamilies: ['pink'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#6b6c6e",
        name: "Eshin Grey",
        className: "eshin-grey",
        brand: "citadel",
        types: ['layer'],
        tags: ['neutral', 'stone', 'dark'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#bac9dc",
        name: "Etherium Blue",
        className: "etherium-blue",
        brand: "citadel",
        types: ['dry'],
        tags: ['light', 'pale'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#c63031",
        name: "Evil Sunz Scarlet",
        className: "evil-sunz-scarlet",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright', 'intense'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#89a9c2",
        name: "Fenrisian Grey",
        className: "fenrisian-grey",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['neutral', 'light', 'medium'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#f29461",
        name: "Fire Dragon Bright",
        className: "fire-dragon-bright",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'light'],
        colourFamilies: ['orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ffef20",
        name: "Flash Gitz Yellow",
        className: "flash-gitz-yellow",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright', 'intense'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ecc896",
        name: "Flayed One Flesh",
        className: "flayed-one-flesh",
        brand: "citadel",
        types: ['layer'],
        tags: ['skin', 'bone', 'pale', 'light'],
        colourFamilies: ['yellow', 'beige'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#bf7337",
        name: "Fuegan Orange",
        className: "fuegan-orange",
        brand: "citadel",
        types: ['shade'],
        tags: ['bright'],
        colourFamilies: ['orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#f6c0d8",
        name: "Fulgrim Pink",
        className: "fulgrim-pink",
        brand: "citadel",
        types: ['edge'],
        tags: ['pale', 'light'],
        colourFamilies: ['pink'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#e5b376",
        name: "Fulgurite Copper",
        className: "fulgurite-copper",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'light', 'metallic', 'copper'],
        colourFamilies: ['yellow', 'orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#9ecbb6",
        name: "Gauss Blaster Green",
        className: "gauss-blaster-green",
        brand: "citadel",
        types: ['edge'],
        tags: ['bright', 'light'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#c8822a",
        name: "Gehenna's Gold",
        className: "gehennas-gold",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'metallic', 'gold', 'medium'],
        colourFamilies: ['yellow', 'orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#8d70b0",
        name: "Genestealer Purple",
        className: "genestealer-purple",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['light'],
        colourFamilies: ['purple'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b79d60",
        name: "Golden Griffon",
        className: "golden-griffon",
        brand: "citadel",
        types: ['dry'],
        tags: ['bright', 'light', 'metallic', 'gold'],
        colourFamilies: ['brown', 'yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#a66a48",
        name: "Golgfag Brown",
        className: "golgfag-brown",
        brand: "citadel",
        types: ['dry'],
        tags: ['bright'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#81665d",
        name: "Gorthor Brown",
        className: "gorthor-brown",
        brand: "citadel",
        types: ['layer'],
        tags: ['neutral', 'light', 'leather', 'wood'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#228bcc",
        name: "Guilliman Blue",
        className: "guilliman-blue",
        brand: "citadel",
        types: ['glaze'],
        tags: ['intense', 'bright'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b0682e",
        name: "Hashut Copper",
        className: "hashut-copper",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'medium', 'metallic', 'copper'],
        colourFamilies: ['red', 'brown', 'orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#9ecbb6",
        name: "Hellion Green",
        className: "hellion-green",
        brand: "citadel",
        types: ['dry'],
        tags: ['bright', 'light'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#fff16a",
        name: "Hexos Palesun",
        className: "hexos-palesun",
        brand: "citadel",
        types: ['dry'],
        tags: ['pale', 'light', 'bright'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#569659",
        name: "Hexwraith Flame",
        className: "hexwraith-flame",
        brand: "citadel",
        types: ['technical'],
        tags: ['bright', 'intense'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#668fbc",
        name: "Hoethe Blue",
        className: "hoethe-blue",
        brand: "citadel",
        types: ['dry'],
        tags: ['light'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#269cca",
        name: "Imrik Blue",
        className: "imrik-blue",
        brand: "citadel",
        types: ['dry'],
        tags: ['bright', 'intense'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#2c5c5c",
        name: "Incubi Darkness",
        className: "incubi-darkness",
        brand: "citadel",
        types: ['base'],
        tags: ['dark'],
        colourFamilies: ['blue', 'green', 'turquoise'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#e2d2c2",
        name: "Ionrach Skin",
        className: "ionrach-skin",
        brand: "citadel",
        types: ['base'],
        tags: ['skin', 'light', 'pale', 'bone', 'stone'],
        colourFamilies: ['beige', 'pink', 'brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#8d9295",
        name: "Ironbreaker",
        className: "ironbreaker",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['metallic', 'iron', 'silver', 'medium'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#e84832",
        name: "Jokaero Orange",
        className: "jokaero-orange",
        brand: "citadel",
        types: ['base'],
        tags: ['bright', 'intense'],
        colourFamilies: ['orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#229574",
        name: "Kabalite Green",
        className: "kabalite-green",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'dark', 'intense'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#2b4064",
        name: "Kantor Blue",
        className: "kantor-blue",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['dark'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#c8ac7c",
        name: "Karak Stone",
        className: "karak-stone",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['light', 'stone', 'neutral'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#7d2d22",
        name: "Khorne Red",
        className: "khorne-red",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['blood', 'intense'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#f5ad9a",
        name: "Kindleflame",
        className: "kindleflame",
        brand: "citadel",
        types: ['dry'],
        tags: ['bright'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#cfac84",
        name: "Kislev Flesh",
        className: "kislev-flesh",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['skin'],
        colourFamilies: ['brown', 'orange', 'beige', 'yellow', 'peach'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#cfc98f",
        name: "Krieg Khaki",
        className: "krieg-khaki",
        brand: "citadel",
        types: ['edge'],
        tags: ['bright', 'light'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ffef20",
        name: "Lamenters Yellow",
        className: "lamenters-yellow",
        brand: "citadel",
        types: ['glaze'],
        tags: ['bright'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#5d6768",
        name: "Leadbelcher",
        className: "leadbelcher",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['iron', 'metallic', 'silver', 'dark', 'medium'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#c29c53",
        name: "Liberator Gold",
        className: "liberator-gold",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'light', 'metallic', 'gold'],
        colourFamilies: ['brown', 'yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#e9e6d5",
        name: "Longbeard Grey",
        className: "longbeard-grey",
        brand: "citadel",
        types: ['dry'],
        tags: ['neutral', 'light', 'pale', 'stone'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#718643",
        name: "Loren Forest",
        className: "loren-forest",
        brand: "citadel",
        types: ['layer'],
        tags: ['neutral', 'dark'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#54add7",
        name: "Lothern Blue",
        className: "lothern-blue",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#c8b2d6",
        name: "Lucius Lilac",
        className: "lucius-lilac",
        brand: "citadel",
        types: ['dry'],
        tags: ['light', 'pale'],
        colourFamilies: ['purple'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#f5ad97",
        name: "Lugganath Orange",
        className: "lugganath-orange",
        brand: "citadel",
        types: ['edge'],
        tags: ['light', 'pale'],
        colourFamilies: ['orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#616f24",
        name: "Lustrian Undergrowth",
        className: "lustrian-undergrowth",
        brand: "citadel",
        types: ['texture'],
        tags: ['leaves', 'dark', 'muddy'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#38538a",
        name: "Macragge Blue",
        className: "macragge-blue",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['dark'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ab675a",
        name: "Martian Ironcrust",
        className: "martian-ironcrust",
        brand: "citadel",
        types: ['texture'],
        tags: ['earth', 'muddy'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#ab675a",
        name: "Martian Ironearth",
        className: "martian-ironearth",
        brand: "citadel",
        types: ['texture'],
        tags: ['earth', 'muddy'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#5c6667",
        name: "Mechanicus Standard Grey",
        className: "mechanicus-standard-grey",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['neutral', 'dark', 'medium', 'stone'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#a8312b",
        name: "Mephiston Red",
        className: "mephiston-red",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['intense', 'bright'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#6cb549",
        name: "Moot Green",
        className: "moot-green",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright', 'intense'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#7b3229",
        name: "Mournfang Brown",
        className: "mournfang-brown",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['leather'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#5d506a",
        name: "Naggaroth Night",
        className: "naggaroth-night",
        brand: "citadel",
        types: ['base'],
        tags: ['dark'],
        colourFamilies: ['purple'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#8d9295",
        name: "Necron Compound",
        className: "necron-compound",
        brand: "citadel",
        types: ['dry'],
        tags: ['metallic', 'bright', 'light', 'silver'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#649b43",
        name: "Niblet Green",
        className: "niblet-green",
        brand: "citadel",
        types: ['dry'],
        tags: ['intense', 'bright'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#5f7d88",
        name: "Nighthaunt Gloom",
        className: "nighthaunt-gloom",
        brand: "citadel",
        types: ['technical'],
        tags: ['neutral', 'dark', 'medium'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#80bfaa",
        name: "Nihilakh Oxide",
        className: "nihilakh-oxide",
        brand: "citadel",
        types: ['technical'],
        tags: ['bright', 'light', 'oxidation', 'copper'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#212121",
        name: "Nuln Oil",
        className: "nuln-oil",
        brand: "citadel",
        types: ['shade', 'shade gloss'],
        tags: ['shadow', 'dark'],
        colourFamilies: ['black'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b09b3e",
        name: "Nurgles Rot",
        className: "nurgles-rot",
        brand: "citadel",
        types: ['technical'],
        tags: ['sickly', 'intense', 'light'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#9ead74",
        name: "Nurgling Green",
        className: "nurgling-green",
        brand: "citadel",
        types: ['layer', 'dry'],
        tags: ['light', 'neutral'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b4b859",
        name: "Ogryn Camo",
        className: "ogryn-camo",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['sickly', 'bright', 'light', 'neutral'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#dcdacb",
        name: "Pallid Wych Flesh",
        className: "pallid-wych-flesh",
        brand: "citadel",
        types: ['layer'],
        tags: ['skin', 'bone', 'stone'],
        colourFamilies: ['beige', 'yellow', 'grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#a24c71",
        name: "Pink Horror",
        className: "pink-horror",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'medium'],
        colourFamilies: ['pink'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ffffff",
        name: "Praxeti White",
        className: "praxeti-white",
        brand: "citadel",
        types: ['dry'],
        tags: ['bright', 'light', 'pale'],
        colourFamilies: ['white'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b7afa2",
        name: "Rakarth Flesh",
        className: "rakarth-flesh",
        brand: "citadel",
        types: ['base'],
        tags: ['skin', 'stone', 'neutral'],
        colourFamilies: ['beige', 'grey', 'brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#bd8061",
        name: "Ratskin Flesh",
        className: "ratskin-flesh",
        brand: "citadel",
        types: ['base'],
        tags: ['skin', 'dark'],
        colourFamilies: ['beige', 'peach', 'pink', 'orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b94129",
        name: "Reikland Fleshshade",
        className: "reikland-fleshshade",
        brand: "citadel",
        types: ['shade', 'shade gloss'],
        tags: ['bright'],
        colourFamilies: ['orange', 'red', 'pink'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#c4aa79",
        name: "Relictor Gold",
        className: "relictor-gold",
        brand: "citadel",
        types: ['air'],
        tags: ['bright', 'light', 'metallic', 'gold'],
        colourFamilies: ['yellow', 'brown', 'orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#d1a13d",
        name: "Retributor Armour",
        className: "retributor-armour",
        brand: "citadel",
        types: ['base'],
        tags: ['bright', 'intense', 'gold', 'metallic'],
        colourFamilies: ['yellow', 'orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#664e4e",
        name: "Rhinox Hide",
        className: "rhinox-hide",
        brand: "citadel",
        types: ['base'],
        tags: ['wood', 'leather'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b3bcc1",
        name: "Runefang Steel",
        className: "runefang-steel",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['silver', 'metallic', 'bright', 'light'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#bfb3a7",
        name: "Runelord Brass",
        className: "runelord-brass",
        brand: "citadel",
        types: ['layer'],
        tags: ['metallic', 'brass', 'neutral', 'light'],
        colourFamilies: ['beige', 'brown', 'grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#6a8799",
        name: "Russ Grey",
        className: "russ-grey",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['neutral', 'medium'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ec783b",
        name: "Ryza Rust",
        className: "ryza-rust",
        brand: "citadel",
        types: ['dry'],
        tags: ['intense', 'bright', 'rust'],
        colourFamilies: ['orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#92385b",
        name: "Screamer Pink",
        className: "screamer-pink",
        brand: "citadel",
        types: ['base'],
        tags: ['medium', 'bright', 'dark', 'intense'],
        colourFamilies: ['pink'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b75b2a",
        name: "Screaming Bell",
        className: "screaming-bell",
        brand: "citadel",
        types: ['base'],
        tags: ['metallic', 'bright', 'intense', 'copper', 'bronze'],
        colourFamilies: ['orange', 'red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#e0ddb2",
        name: "Screaming Skull",
        className: "screaming-skull",
        brand: "citadel",
        types: ['layer'],
        tags: ['bone', 'light', 'pale'],
        colourFamilies: ['white', 'yellow', 'beige'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#d47d3a",
        name: "Seraphim Sepia",
        className: "seraphim-sepia",
        brand: "citadel",
        types: ['shade'],
        tags: ['bright'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#dcb66f",
        name: "Sigmarite",
        className: "sigmarite",
        brand: "citadel",
        types: ['dry'],
        tags: ['light', 'stone', 'gold'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#749d7b",
        name: "Skarsnik Green",
        className: "skarsnik-green",
        brand: "citadel",
        types: ['layer'],
        tags: ['intense', 'bright'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#665f59",
        name: "Skavenblight Dinge",
        className: "skavenblight-dinge",
        brand: "citadel",
        types: ['layer'],
        tags: ['neutral', 'dark', 'stone'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#78c7d4",
        name: "Skink Blue",
        className: "skink-blue",
        brand: "citadel",
        types: ['dry'],
        tags: ['intense', 'bright'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#a26127",
        name: "Skrag Brown",
        className: "skrag-brown",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'leather'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ecb362",
        name: "Skullcrusher Brass",
        className: "skullcrusher-brass",
        brand: "citadel",
        types: ['layer'],
        tags: ['metallic', 'gold', 'brass', 'bright', 'light'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#a39da7",
        name: "Slaanesh Grey",
        className: "slaanesh-grey",
        brand: "citadel",
        types: ['layer', 'dry'],
        tags: ['medium', 'light'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#2d7b87",
        name: "Sotek Green",
        className: "sotek-green",
        brand: "citadel",
        types: ['layer'],
        tags: ['intense', 'bright', 'dark'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#2163f8",
        name: "Soulstone Blue",
        className: "soulstone-blue",
        brand: "citadel",
        types: ['technical'],
        tags: ['bright', 'intense'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ff6648",
        name: "Spiritstone Red",
        className: "spiritstone-red",
        brand: "citadel",
        types: ['technical'],
        tags: ['bright', 'intense'],
        colourFamilies: ['red', 'orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ba6457",
        name: "Squig Orange",
        className: "squig-orange",
        brand: "citadel",
        types: ['layer'],
        tags: ['medium'],
        colourFamilies: ['orange', 'red', 'pink'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#7c6d4e",
        name: "Steel Legion Drab",
        className: "steel-legion-drab",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['neutral'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#225c74",
        name: "Stegadon Scale Green",
        className: "stegadon-scale-green",
        brand: "citadel",
        types: ['base'],
        tags: ['intense', 'dark'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#624b21",
        name: "Stirland Battlemire",
        className: "stirland-battlemire",
        brand: "citadel",
        types: ['texture'],
        tags: ['muddy'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#624b21",
        name: "Stirland Mud",
        className: "stirland-mud",
        brand: "citadel",
        types: ['texture'],
        tags: ['muddy'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#7a99b8",
        name: "Stormfang",
        className: "stormfang",
        brand: "citadel",
        types: ['dry'],
        tags: ['light', 'pale'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b7c2c6",
        name: "Stormhost Silver",
        className: "stormhost-silver",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'light', 'silver', 'metallic'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#8d847b",
        name: "Stormvermin Fur",
        className: "stormvermin-fur",
        brand: "citadel",
        types: ['layer'],
        tags: ['neutral'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#819532",
        name: "Straken Green",
        className: "straken-green",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['neutral', 'muddy'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#53ab78",
        name: "Sybarite Green",
        className: "sybarite-green",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright', 'intense'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#baa384",
        name: "Sycorax Bronze",
        className: "sycorax-bronze",
        brand: "citadel",
        types: ['layer'],
        tags: ['metallic', 'light', 'bronze'],
        colourFamilies: ['beige', 'brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#726656",
        name: "Sylvaneth Bark",
        className: "sylvaneth-bark",
        brand: "citadel",
        types: ['dry'],
        tags: ['bright', 'light', 'wood'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b48e21",
        name: "Tallarn Sand",
        className: "tallarn-sand",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['sand', 'light', 'bright'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#c88129",
        name: "Tau Light Ochre",
        className: "tau-light-ochre",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#548cc7",
        name: "Teclis Blue",
        className: "teclis-blue",
        brand: "citadel",
        types: ['layer'],
        tags: ['intense', 'bright'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#53a69c",
        name: "Temple Guard Blue",
        className: "temple-guard-blue",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#d9c592",
        name: "Terminatus Stone",
        className: "terminatus-stone",
        brand: "citadel",
        types: ['air', 'dry'],
        tags: ['medium', 'stone', 'bone'],
        colourFamilies: ['grey', 'brown', 'beige'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#617b8c",
        name: "The Fang",
        className: "the-fang",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['dark', 'medium'],
        colourFamilies: ['grey', 'blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#236b84",
        name: "Thousand Sons Blue",
        className: "thousand-sons-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false, metallic: false, texture: false
      },
      {
        hex: "#5e858a",
        name: "Thunderhawk Blue",
        className: "thunderhawk-blue",
        brand: "citadel",
        types: ['layer', 'dry'],
        tags: ['neutral', 'medium'],
        colourFamilies: ['blue'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ec783b",
        name: "Troll Slayer Orange",
        className: "troll-slayer-orange",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright', 'light'],
        colourFamilies: ['orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#9c514c",
        name: "Tuskgor Fur",
        className: "tuskgor-fur",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#5d5646",
        name: "Typhus Corrosion",
        className: "typhus-corrosion",
        brand: "citadel",
        types: ['technical'],
        tags: ['neutral', 'dark'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#dad294",
        name: "Tyrant Skull",
        className: "tyrant-skull",
        brand: "citadel",
        types: ['dry'],
        tags: ['medium', 'light', 'bone'],
        colourFamilies: ['beige', 'yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#d7e6e1",
        name: "Ulthuan Grey",
        className: "ulthuan-grey",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['light', 'pale', 'stone', 'bone'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#cfc98f",
        name: "Underhive Ash",
        className: "underhive-ash",
        brand: "citadel",
        types: ['dry'],
        tags: ['light'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#dfb877",
        name: "Ungor Flesh",
        className: "ungor-flesh",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'medium'],
        colourFamilies: ['yellow', 'orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#cbc990",
        name: "Ushabti Bone",
        className: "ushabti-bone",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright', 'light', 'bone', 'stone'],
        colourFamilies: ['brown', 'beige', 'yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ffffff",
        name: "Valhallan Blizzard",
        className: "valhallan-blizzard",
        brand: "citadel",
        types: ['texture'],
        tags: ['snow', 'bright', 'light', 'pale'],
        colourFamilies: ['white'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: true
      },
      {
        hex: "#96534d",
        name: "Verminlord Hide",
        className: "verminlord-hide",
        brand: "citadel",
        types: ['dry'],
        tags: ['rust', 'bright'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#466c45",
        name: "Waaagh! Flesh",
        className: "waaagh-flesh",
        brand: "citadel",
        types: ['base'],
        tags: ['neutral', 'dark'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#558d6a",
        name: "Warboss Green",
        className: "warboss-green",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['intense', 'leaves'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#86838a",
        name: "Warpfiend Grey",
        className: "warpfiend-grey",
        brand: "citadel",
        types: ['layer'],
        tags: ['neutral', 'stone'],
        colourFamilies: ['grey'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#6d5354",
        name: "Warplock Bronze",
        className: "warplock-bronze",
        brand: "citadel",
        types: ['base'],
        tags: ['metallic', 'dark', 'bronze'],
        colourFamilies: ['purple', 'brown', 'beige'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: true, texture: false
      },
      {
        hex: "#438442",
        name: "Warpstone Glow",
        className: "warpstone-glow",
        brand: "citadel",
        types: ['layer'],
        tags: ['intense', 'dark'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#20c721",
        name: "Waystone Green",
        className: "waystone-green",
        brand: "citadel",
        types: ['technical'],
        tags: ['intense', 'bright'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#59b64e",
        name: "Waywatcher Green",
        className: "waywatcher-green",
        brand: "citadel",
        types: ['glaze'],
        tags: ['bright'],
        colourFamilies: ['green'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#9c3127",
        name: "Wazdakka Red",
        className: "wazdakka-red",
        brand: "citadel",
        types: ['layer'],
        tags: ['blood', 'bright'],
        colourFamilies: ['red'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ffffff",
        name: "White Scar",
        className: "white-scar",
        brand: "citadel",
        types: ['layer', 'air'],
        tags: ['bright', 'light', 'pale'],
        colourFamilies: ['white'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#e63f36",
        name: "Wild Rider Red",
        className: "wild-rider-red",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'intense'],
        colourFamilies: ['red', 'orange'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#e1e0de",
        name: "Wrack White",
        className: "wrack-white",
        brand: "citadel",
        types: ['dry'],
        tags: ['light', 'pale', 'bone'],
        colourFamilies: ['white'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#633e71",
        name: "Xereus Purple",
        className: "xereus-purple",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright', 'intense', 'medium', 'dark'],
        colourFamilies: ['purple'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#8b6439",
        name: "XV-88",
        className: "xv-88",
        brand: "citadel",
        types: ['base', 'air'],
        tags: [],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#ffde21",
        name: "Yriel Yellow",
        className: "yriel-yellow",
        brand: "citadel",
        types: ['layer'],
        tags: ['bright'],
        colourFamilies: ['yellow'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#e4b028",
        name: "Zamesi Desert",
        className: "zamesi-desert",
        brand: "citadel",
        types: ['layer'],
        tags: ['sand', 'dirt', 'earthy'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      },
      {
        hex: "#b3a46d",
        name: "Zandri Dust",
        className: "zandri-dust",
        brand: "citadel",
        types: ['base', 'air'],
        tags: ['dust', 'sand', 'earthy', 'light', 'neutral'],
        colourFamilies: ['brown'],
        temperatureRatio: [0,0],
        warm: false,
        cool: false, metallic: false, texture: false
      }
    ];

    // *** DYNAMICALLY CREATE LISTS OF UNIQUE TYPES, TAGS, AND COLOUR FAMILIES *** //
    this.allBrands = arrayToolsService.removeNullItems(arrayToolsService.removeDuplicates(arrayToolsService.getKeyValues(this.allPaints, 'brand')));
    this.allBrands = this.allBrands.sort();

    this.allTypes = arrayToolsService.removeNullItems(arrayToolsService.removeDuplicates(arrayToolsService.getNestedValues(arrayToolsService.getKeyValues(this.allPaints, 'types'))));
    this.allTypes = this.allTypes.sort()

    this.allTags = arrayToolsService.removeNullItems(arrayToolsService.removeDuplicates(arrayToolsService.getNestedValues(arrayToolsService.getKeyValues(this.allPaints, 'tags'))));
    this.allTags = this.allTags.sort()

    this.allColourFamilies = arrayToolsService.removeNullItems(arrayToolsService.removeDuplicates(arrayToolsService.getNestedValues(arrayToolsService.getKeyValues(this.allPaints, 'colourFamilies'))));
    this.allColourFamilies = this.allColourFamilies.sort()

    // *** FILTER SELECTION OBJECTS TO DYNAMICALLY GENERATE CHECKBOXES IN VIEW *** //
    this.allTypesFilterSelections = [];
    for (let i = 0; i < this.allTypes.length; i++) {
      this.allTypesFilterSelections.push({
        id: i,
        name: this.allTypes[i]
      })
    }

    this.allTagsFilterSelections = [];
    for (let i = 0; i < this.allTags.length; i++) {
      this.allTagsFilterSelections.push({
        id: i,
        name: this.allTags[i]
      })
    }

    this.allColourFamiliesFilterSelections = [];
    for (let i = 0; i < this.allColourFamilies.length; i++) {
      this.allColourFamiliesFilterSelections.push({
        id: i,
        name: this.allColourFamilies[i]
      })
    }

    // *** CREATE INITIAL FILTERS ARRAY, MAPS, AND FILTERED PAINTS RESULT *** //
    this.filtersObj = {
      filteredTypes: this.allTypes,
      filteredTags: this.allTags,
      filteredColourFamilies: this.allColourFamilies
    }

    this.updateFilteredPaintsArr()
    this.filteredPaintsResult = this.allPaints;

    this.buildTypesMap()
    this.buildTagsMap()
    this.buildColourFamiliesMap()
    this.fillSelectionMaps()

  }
}
