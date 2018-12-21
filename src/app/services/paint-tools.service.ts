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
}


@Injectable({
  providedIn: 'root'
})
export class PaintToolsService {
  // init
  allBrands: string[];
  allTypes: string[];
  allTags: string[];
  allColourFamilies: string[];
  allPaints: Paint[];

  // object arrays for filtering
  allTypesFilterSelections: object[];
  allTagsFilterSelections: object[];
  allColourFamiliesFilterSelections: object[];

  // filters
  filtersObj: object;
  filtersArr: string[];

  // controls which paints are displayed in component
  filteredPaintsResult: Paint[];

  updateFilteredPaints(filters) {
    this.filtersObj = filters;
    this.updateFilteredPaintsArr()
    this.comparePaints()
  }

  updateFilteredPaintsArr() {
    this.filtersArr = this.arrayToolsService.generateArrayFromObject(this.filtersObj)
  }

  comparePaints() { // UNFINISHED
    let filteredTypes = this.filtersObj['filteredTypesResult'];
    let filteredTags = this.filtersObj['filteredTagsResult'];
    let filteredColourFamilies = this.filtersObj['filteredColourFamiliesResult'];

    for (let i = 0; i < this.allPaints.length; i++) {
      let thisPaintTypes = this.allPaints[i].types;
      let thisPaintTags = this.allPaints[i].tags;
      let thisPaintColourFamilies = this.allPaints[i].colourFamilies;

      let matchingTypes = this.arrayToolsService.compareArraysOverlap(filteredTypes, thisPaintTypes)
      console.log(matchingTypes)
    }
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
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#a9aba6",
        name: "Administratum Grey",
        className: "administratum-grey",
        brand: "citadel",
        types: [],
        tags: ['neutral', 'medium', 'dark'],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#605a42",
        name: "Agrax Earthshade",
        className: "agrax-earthshade",
        brand: "citadel",
        types: [],
        tags: ['earthy'],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#9f8e7e",
        name: "Agrellan Earth",
        className: "agrellan-earth",
        brand: "citadel",
        types: [],
        tags: [],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#228d9d",
        name: "Ahriman Blue",
        className: "ahriman-blue",
        brand: "citadel",
        types: [],
        tags: [],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#4b6c97",
        name: "Alaitoc Blue",
        className: "alaitoc-blue",
        brand: "citadel",
        types: [],
        tags: [],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#d8b227",
        name: "Armageddon Dunes",
        className: "armageddon-dunes",
        brand: "citadel",
        types: [],
        tags: [],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#b8473f",
        name: "Astorath Red",
        className: "astorath-red",
        brand: "citadel",
        types: [],
        tags: [],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#87888a",
        name: "Astrogranite Debris",
        className: "astrogranite-debris",
        brand: "citadel",
        types: [],
        tags: [],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#718b32",
        name: "Athonian Camoshade",
        className: "athonian-camoshade",
        brand: "citadel",
        types: [],
        tags: [],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#e3af27",
        name: "Auric Armour Gold",
        className: "auric-armour-gold",
        brand: "citadel",
        types: [],
        tags: [],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#fac322",
        name: "Averland Sunset",
        className: "averland-sunset",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#78c7d3",
        name: "Baharroth Blue",
        className: "baharroth-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#a17326",
        name: "Balor Brown",
        className: "balor-brown",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#8b5728",
        name: "Balthasar Gold",
        className: "balthasar-gold",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#a6917e",
        name: "Baneblade Brown",
        className: "baneblade-brown",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#da9b66",
        name: "Bestigor Flesh",
        className: "bestigor-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#20965a",
        name: "Biel-Tan Green",
        className: "biel-tan-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b76c32",
        name: "Blackfire Earth",
        className: "blackfire-earth",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#782d2d",
        name: "Blood for the Blood God",
        className: "blood-for-the-blood-god",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#e62633",
        name: "Bloodletter",
        className: "bloodletter",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b9cadc",
        name: "Blue Horror",
        className: "blue-horror",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#9e6629",
        name: "Brass Scorpion",
        className: "brass-scorpion",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#9b675c",
        name: "Bugman's Glow",
        className: "bugmans-glow",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#527ba7",
        name: "Caledor Sky",
        className: "caledor-sky",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#5d81bf",
        name: "Calgar Blue",
        className: "calgar-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#22533a",
        name: "Caliban Green",
        className: "caliban-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b12975",
        name: "Carroburg Crimson",
        className: "carroburg-crimson",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#fdcd21",
        name: "Casandora Yellow",
        className: "casandora-yellow",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#53633e",
        name: "Castellan Green",
        className: "castellan-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#a8b8b8",
        name: "Celestra Grey",
        className: "celestra-grey",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ffffff",
        name: "Ceramic White",
        className: "ceramic-white",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#212121",
        name: "Chaos Black",
        className: "chaos-black",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#6ca6d8",
        name: "Chronus Blue",
        className: "chronus-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#218078",
        name: "Coelia Greenshade",
        className: "coelia-greenshade",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#85819a",
        name: "Daemonette Hide",
        className: "daemonette-hide",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#5b6b6a",
        name: "Dark Reaper",
        className: "dark-reaper",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#8b8e87",
        name: "Dawnstone",
        className: "dawnstone",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#858b67",
        name: "Death Guard Green",
        className: "death-guard-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#c17d68",
        name: "Deathclaw Brown",
        className: "deathclaw-brown",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#7b8048",
        name: "Death World Forest",
        className: "death-world-forest",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#c8b2d6",
        name: "Dechala Lilac",
        className: "dechala-lilac",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#e2e2d8",
        name: "Deepkin Flesh",
        className: "deepkin-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#722b29",
        name: "Doombull Brown",
        className: "doombull-brown",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#fff16a",
        name: "Dorn Yellow",
        className: "dorn-yellow",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#2769a3",
        name: "Drakenhof Nightshade",
        className: "drakenhof-nightshade",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#7c3d84",
        name: "Druchii Violet",
        className: "druchii-violet",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#544e48",
        name: "Dryad Bark",
        className: "dryad-bark",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#efcc94",
        name: "Eldar Flesh",
        className: "eldar-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#91a149",
        name: "Elysian Green",
        className: "elysian-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#c45985",
        name: "Emperor's Children",
        className: "emperors-children",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#6b6c6e",
        name: "Eshin Grey",
        className: "eshin-grey",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#bac9dc",
        name: "Etherium Blue",
        className: "etherium-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#c63031",
        name: "Evil Sunz Scarlet",
        className: "evil-sunz-scarlet",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#89a9c2",
        name: "Fenrisian Grey",
        className: "fenrisian-grey",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#f29461",
        name: "Fire Dragon Bright",
        className: "fire-dragon-bright",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ffef20",
        name: "Flash Gitz Yellow",
        className: "flash-gitz-yellow",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ecc896",
        name: "Flayed One Flesh",
        className: "flayed-one-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#bf7337",
        name: "Fuegan Orange",
        className: "fuegan-orange",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#f6c0d8",
        name: "Fulgrim Pink",
        className: "fulgrim-pink",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#e5b376",
        name: "Fulgurite Copper",
        className: "fulgurite-copper",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#9ecbb6",
        name: "Gauss Blaster Green",
        className: "gauss-blaster-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#c8822a",
        name: "Gehenna's Gold",
        className: "gehennas-gold",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#8d70b0",
        name: "Genestealer Purple",
        className: "genestealer-purple",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#a66a48",
        name: "Golgfag Brown",
        className: "golgfag-brown",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#81665d",
        name: "Gorthor Brown",
        className: "gorthor-brown",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#228bcc",
        name: "Guilliman Blue",
        className: "guilliman-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b0682e",
        name: "Hashut Copper",
        className: "hashut-copper",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#9ecbb6",
        name: "Hellion Green",
        className: "hellion-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#fff16a",
        name: "Hexos Palesun",
        className: "hexos-palesun",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#569659",
        name: "Hexwraith Flame",
        className: "hexwraith-flame",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#668fbc",
        name: "Hoethe Blue",
        className: "hoethe-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#269cca",
        name: "Imrik Blue",
        className: "imrik-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#2c5c5c",
        name: "Incubi Darkness",
        className: "incubi-darkness",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#e2d2c2",
        name: "Ionrach Skin",
        className: "ionrach-skin",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#8d9295",
        name: "Ironbreaker",
        className: "ironbreaker",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#e84832",
        name: "Jokaero Orange",
        className: "jokaero-orange",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#229574",
        name: "Kabalite Green",
        className: "kabalite-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#2b4064",
        name: "Kantor Blue",
        className: "kantor-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#c8ac7c",
        name: "Karak Stone",
        className: "karak-stone",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#7d2d22",
        name: "Khorne Red",
        className: "khorne-red",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#f5ad9a",
        name: "Kindleflame",
        className: "kindleflame",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#cfac84",
        name: "Kislev Flesh",
        className: "kislev-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#cfc98f",
        name: "Krieg Khaki",
        className: "krieg-khaki",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ffef20",
        name: "Lamenters Yellow",
        className: "lamenters-yellow",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#5d6768",
        name: "Leadbelcher",
        className: "leadbelcher",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#c29c53",
        name: "Liberator Gold",
        className: "liberator-gold",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#e9e6d5",
        name: "Longbeard Grey",
        className: "longbeard-grey",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#718643",
        name: "Loren Forest",
        className: "loren-forest",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#54add7",
        name: "Lothern Blue",
        className: "lothern-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#c8b2d6",
        name: "Lucius Lilac",
        className: "lucius-lilac",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#f5ad97",
        name: "Lugganath Orange",
        className: "lugganath-orange",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#616f24",
        name: "Lustrian Undergrowth",
        className: "lustrian-undergrowth",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#38538a",
        name: "Macragge Blue",
        className: "macragge-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ab675a",
        name: "Martian Ironcrust",
        className: "martian-ironcrust",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#5c6667",
        name: "Mechanicus Standard Grey",
        className: "mechanicus-standard-grey",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#a8312b",
        name: "Mephiston Red",
        className: "mephiston-red",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#6cb549",
        name: "Moot Green",
        className: "moot-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#7b3229",
        name: "Mournfang Brown",
        className: "mournfang-brown",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#5d506a",
        name: "Naggaroth Night",
        className: "naggaroth-night",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#8d9295",
        name: "Necron Compound",
        className: "necron-compound",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#649b43",
        name: "Niblet Green",
        className: "niblet-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#5f7d88",
        name: "Nighthaunt Gloom",
        className: "nighthaunt-gloom",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#80bfaa",
        name: "Nihilakh Oxide",
        className: "nihilakh-oxide",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#212121",
        name: "Nuln Oil",
        className: "nuln-oil",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b09b3e",
        name: "Nurgles Rot",
        className: "nurgles-rot",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#9ead74",
        name: "Nurgling Green",
        className: "nurgling-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b4b859",
        name: "Ogryn Camo",
        className: "ogryn-camo",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#dcdacb",
        name: "Pallid Wych Flesh",
        className: "pallid-wych-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#a24c71",
        name: "Pink Horror",
        className: "pink-horror",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b7afa2",
        name: "Rakarth Flesh",
        className: "rakarth-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#bd8061",
        name: "Ratskin Flesh",
        className: "ratskin-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b94129",
        name: "Reikland Fleshshade",
        className: "reikland-fleshshade",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#d1a13d",
        name: "Retributor Armour",
        className: "retributor-armour",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#664e4e",
        name: "Rhinox Hide",
        className: "rhinox-hide",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b3bcc1",
        name: "Runefang Steel",
        className: "runefang-steel",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#bfb3a7",
        name: "Runelord Brass",
        className: "runelord-brass",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#6a8799",
        name: "Russ Grey",
        className: "russ-grey",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ec783b",
        name: "Ryza Rust",
        className: "ryza-rust",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#92385b",
        name: "Screamer Pink",
        className: "screamer-pink",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b75b2a",
        name: "Screaming Bell",
        className: "screaming-bell",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#e0ddb2",
        name: "Screaming Skull",
        className: "screaming-skull",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#d47d3a",
        name: "Seraphim Sepia",
        className: "seraphim-sepia",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#dcb66f",
        name: "Sigmarite",
        className: "sigmarite",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#749d7b",
        name: "Skarsnik Green",
        className: "skarsnik-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#665f59",
        name: "Skavenblight Dinge",
        className: "skavenblight-dinge",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#78c7d4",
        name: "Skink Blue",
        className: "skink-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#a26127",
        name: "Skrag Brown",
        className: "skrag-brown",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ecb362",
        name: "Skullcrusher Brass",
        className: "skullcrusher-brass",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#a39da7",
        name: "Slaanesh Grey",
        className: "slaanesh-grey",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#2d7b87",
        name: "Sotek Green",
        className: "sotek-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#2163f8",
        name: "Soulstone Blue",
        className: "soulstone-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ff6648",
        name: "Spiritstone Red",
        className: "spiritstone-red",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ba6457",
        name: "Squig Orange",
        className: "squig-orange",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#7c6d4e",
        name: "Steel Legion Drab",
        className: "steel-legion-drab",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#225c74",
        name: "Stegadon Scale Green",
        className: "stegadon-scale-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#624b21",
        name: "Stirland Mud",
        className: "stirland-mud",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#7a99b8",
        name: "Stormfang",
        className: "stormfang",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b7c2c6",
        name: "Stormhost Silver",
        className: "stormhost-silver",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#8d847b",
        name: "Stormvermin Fur",
        className: "stormvermin-fur",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#819532",
        name: "Straken Green",
        className: "straken-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#53ab78",
        name: "Sybarite Green",
        className: "sybarite-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#baa384",
        name: "Sycorax Bronze",
        className: "sycorax-bronze",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#726656",
        name: "Sylvaneth Bark",
        className: "sylvaneth-bark",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b48e21",
        name: "Tallarn Sand",
        className: "tallarn-sand",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#c88129",
        name: "Tau Light Ochre",
        className: "tau-light-ochre",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#548cc7",
        name: "Teclis Blue",
        className: "teclis-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#53a69c",
        name: "Temple Guard Blue",
        className: "temple-guard-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#d9c592",
        name: "Terminatus Stone",
        className: "terminatus-stone",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#617b8c",
        name: "The Fang",
        className: "the-fang",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#236b84",
        name: "Thousand Sons Blue",
        className: "thousand-sons-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#5e858a",
        name: "Thunderhawk Blue",
        className: "thunderhawk-blue",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ec783b",
        name: "Troll Slayer Orange",
        className: "troll-slayer-orange",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#9c514c",
        name: "Tuskgor Fur",
        className: "tuskgor-fur",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#5d5646",
        name: "Typhus Corrosion",
        className: "typhus-corrosion",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#dad294",
        name: "Tyrant Skull",
        className: "tyrant-skull",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#d7e6e1",
        name: "Ulthuan Grey",
        className: "ulthuan-grey",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#cfc98f",
        name: "Underhive Ash",
        className: "underhive-ash",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#dfb877",
        name: "Ungor Flesh",
        className: "ungor-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#cbc990",
        name: "Ushabti Bone",
        className: "ushabti-bone",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#96534d",
        name: "Verminlord Hide",
        className: "verminlord-hide",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#466c45",
        name: "Waaagh! Flesh",
        className: "waaagh-flesh",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#558d6a",
        name: "Warboss Green",
        className: "warboss-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#86838a",
        name: "Warpfiend Grey",
        className: "warpfiend-grey",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#6d5354",
        name: "Warplock Bronze",
        className: "warplock-bronze",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#438442",
        name: "Warpstone Glow",
        className: "warpstone-glow",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#20c721",
        name: "Waystone Green",
        className: "waystone-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#59b64e",
        name: "Waywatcher Green",
        className: "waywatcher-green",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#9c3127",
        name: "Wazdakka Red",
        className: "wazdakka-red",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#e63f36",
        name: "Wild Rider Red",
        className: "wild-rider-red",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#e1e0de",
        name: "Wrack White",
        className: "wrack-white",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#633e71",
        name: "Xereus Purple",
        className: "xereus-purple",
        brand: "citadel", types: [], tags: [], colourFamilies: ['purple'], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#8b6439",
        name: "XV-88",
        className: "xv-88",
        brand: "citadel", types: [], tags: [], colourFamilies: [], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#ffde21",
        name: "Yriel Yellow",
        className: "yriel-yellow",
        brand: "citadel",
        types: [],
        tags: ['bright'],
        colourFamilies: [],
        temperatureRatio: [0,0],
        warm: false,
        cool: false
      },
      {
        hex: "#e4b028",
        name: "Zamesi Desert",
        className: "zamesi-desert",
        brand: "citadel", types: [], tags: [], colourFamilies: ['yellow'], temperatureRatio: [0,0], warm: false, cool: false
      },
      {
        hex: "#b3a46d",
        name: "Zandri Dust",
        className: "zandri-dust",
        brand: "citadel", types: ['layer'], tags: [], colourFamilies: ['yellow'], temperatureRatio: [0,0], warm: false, cool: false
      },
    ];

    // *** create master lists of unique brands, types, tags, and colour families *** //
    this.allBrands = arrayToolsService.removeNullItems(arrayToolsService.removeDuplicates(arrayToolsService.getKeyValues(this.allPaints, 'brand')));
    this.allTypes = arrayToolsService.removeNullItems(arrayToolsService.removeDuplicates(arrayToolsService.getNestedValues(arrayToolsService.getKeyValues(this.allPaints, 'types'))));
    this.allTags = arrayToolsService.removeNullItems(arrayToolsService.removeDuplicates(arrayToolsService.getNestedValues(arrayToolsService.getKeyValues(this.allPaints, 'tags'))));
    this.allColourFamilies = arrayToolsService.removeNullItems(arrayToolsService.removeDuplicates(arrayToolsService.getNestedValues(arrayToolsService.getKeyValues(this.allPaints, 'colourFamilies'))));

    // *** create filter selections objects array for brands, types, tags, and colour families to dynamically generate checkboxes in view *** //
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


    // *** create filters object, array, and filtered paints result *** //
    this.filtersObj = {
      filteredTypesResult: this.allTypes,
      filteredTagsResult: this.allTags,
      filteredColourFamiliesResult: this.allColourFamilies

    }

    this.updateFilteredPaintsArr()

    this.filteredPaintsResult = this.allPaints;


  }
}
