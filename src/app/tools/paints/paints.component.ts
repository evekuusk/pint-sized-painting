import { Component, OnInit } from '@angular/core';

// ****** CLASS ****** //
class Paint {
  // id: number;
  hex: string;
  name: string;
  className: string;
  allBrands: string[];
  allTypes: string[];
  allTags: string[];
  allColourFamilies: string[];
  // brand: string;
  // type: string;
  // tags: string[];
  // families: string[];

}


// ****** VARIABLES ****** //
const brands = ['citadel']
const types = ['base', 'layer', 'shade', 'metallic', 'glaze', 'technical', 'dry', 'texture']
const tags = ['skin', 'metal', 'wood']
const colourFamilies = ['red', 'pink', 'orange', 'gold', 'copper', 'yellow', 'green', 'turquoise', 'blue', 'purple', 'violet', 'white', 'grey', 'black']

const PAINTS: Paint[] = [
  {
    hex: "#202020",
    name: "Abaddon Black",
    className: "abaddon",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#a9aba6",
    name: "Administratum Grey",
    className: "administratum",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#605a42",
    name: "Agrax Earthshade",
    className: "agrax",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#9f8e7e",
    name: "Agrellan Earth",
    className: "agrellan",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#228d9d",
    name: "Ahriman Blue",
    className: "ahriman",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#4b6c97",
    name: "Alaitoc Blue",
    className: "alaitoc",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#d8b227",
    name: "Armageddon Dunes",
    className: "armageddon",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b8473f",
    name: "Astorath Red",
    className: "astorath",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#87888a",
    name: "Astrogranite Debris",
    className: "astrogranite",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#718b32",
    name: "Athonian Camoshade",
    className: "athonian",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e3af27",
    name: "Auric Armour Gold",
    className: "auric",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#fac322",
    name: "Averland Sunset",
    className: "averland",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#78c7d3",
    name: "Baharroth Blue",
    className: "baharroth",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#a17326",
    name: "Balor Brown",
    className: "balor",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#8b5728",
    name: "Balthasar Gold",
    className: "balthasar",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#a6917e",
    name: "Baneblade Brown",
    className: "baneblade",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#da9b66",
    name: "Bestigor Flesh",
    className: "bestigor",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#20965a",
    name: "Biel-Tan Green",
    className: "biel-tan",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b76c32",
    name: "Blackfire Earth",
    className: "blackfire",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#782d2d",
    name: "Blood for the Blood God",
    className: "blood",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e62633",
    name: "Bloodletter",
    className: "bloodletter",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b9cadc",
    name: "Blue Horror",
    className: "blue-horror",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#9e6629",
    name: "Brass Scorpion",
    className: "brass-scorpion",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#9b675c",
    name: "Bugman's Glow",
    className: "bugman",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#527ba7",
    name: "Caledor Sky",
    className: "caledor",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#5d81bf",
    name: "Calgar Blue",
    className: "calgar",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#22533a",
    name: "Caliban Green",
    className: "caliban",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b12975",
    name: "Carroburg Crimson",
    className: "carroburg",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#fdcd21",
    name: "Casandora Yellow",
    className: "casandora",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#53633e",
    name: "Castellan Green",
    className: "castellan",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#a8b8b8",
    name: "Celestra Grey",
    className: "celestra",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ffffff",
    name: "Ceramic White",
    className: "ceramic",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#212121",
    name: "Chaos Black",
    className: "chaos",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#6ca6d8",
    name: "Chronus Blue",
    className: "chronus",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#218078",
    name: "Coelia Greenshade",
    className: "coelia",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#85819a",
    name: "Daemonette Hide",
    className: "daemonette",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#5b6b6a",
    name: "Dark Reaper",
    className: "dark-reaper",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#8b8e87",
    name: "Dawnstone",
    className: "dawnstone",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#858b67",
    name: "Death Guard Green",
    className: "death-guard",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#c17d68",
    name: "Deathclaw Brown",
    className: "deathclaw",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#7b8048",
    name: "Death World Forest",
    className: "death-world",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#c8b2d6",
    name: "Dechala Lilac",
    className: "dechala",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e2e2d8",
    name: "Deepkin Flesh",
    className: "deepkin",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#722b29",
    name: "Doombull Brown",
    className: "doombull",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#fff16a",
    name: "Dorn Yellow",
    className: "dorn",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#2769a3",
    name: "Drakenhof Nightshade",
    className: "drakenhof",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#7c3d84",
    name: "Druchii Violet",
    className: "druchii",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#544e48",
    name: "Dryad Bark",
    className: "dryad",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#efcc94",
    name: "Eldar Flesh",
    className: "eldar",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#91a149",
    name: "Elysian Green",
    className: "elysian",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#c45985",
    name: "Emperor's Children",
    className: "emperor",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#6b6c6e",
    name: "Eshin Grey",
    className: "eshin",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#bac9dc",
    name: "Etherium Blue",
    className: "etherium",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#c63031",
    name: "Evil Sunz Scarlet",
    className: "evil-sunz",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#89a9c2",
    name: "Fenrisian Grey",
    className: "fenrisian",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#f29461",
    name: "Fire Dragon Bright",
    className: "fire-dragon",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ffef20",
    name: "Flash Gitz Yellow",
    className: "flash-gitz",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ecc896",
    name: "Flayed One Flesh",
    className: "flayed",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#bf7337",
    name: "Fuegan Orange",
    className: "fuegan",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#f6c0d8",
    name: "Fulgrim Pink",
    className: "fulgrim",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e5b376",
    name: "Fulgurite Copper",
    className: "fulgurite",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#9ecbb6",
    name: "Gauss Blaster Green",
    className: "gauss-blaster",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#c8822a",
    name: "Gehenna's Gold",
    className: "gehenna",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#8d70b0",
    name: "Genestealer Purple",
    className: "genestealer",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#a66a48",
    name: "Golgfag Brown",
    className: "golgfag",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#81665d",
    name: "Gorthor Brown",
    className: "gorthor",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#228bcc",
    name: "Guilliman Blue",
    className: "guilliman",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b0682e",
    name: "Hashut Copper",
    className: "hashut",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#9ecbb6",
    name: "Hellion Green",
    className: "hellion",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#fff16a",
    name: "Hexos Palesun",
    className: "hexos",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#569659",
    name: "Hexwraith Flame",
    className: "hexwraith",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#668fbc",
    name: "Hoethe Blue",
    className: "hoethe",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#269cca",
    name: "Imrik Blue",
    className: "imrik",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#2c5c5c",
    name: "Incubi Darkness",
    className: "incubi",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e2d2c2",
    name: "Ionrach Skin",
    className: "ionrach",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#8d9295",
    name: "Ironbreaker",
    className: "ironbreaker",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e84832",
    name: "Jokaero Orange",
    className: "jokaero",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#229574",
    name: "Kabalite Green",
    className: "kabalite",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#2b4064",
    name: "Kantor Blue",
    className: "kantor",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#c8ac7c",
    name: "Karak Stone",
    className: "karak",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#7d2d22",
    name: "Khorne Red",
    className: "khorne",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#f5ad9a",
    name: "Kindleflame",
    className: "kindleflame",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#cfac84",
    name: "Kislev Flesh",
    className: "kislev",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#cfc98f",
    name: "Krieg Khaki",
    className: "krieg",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ffef20",
    name: "Lamenters Yellow",
    className: "lamenters",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#5d6768",
    name: "Leadbelcher",
    className: "leadbelcher",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#c29c53",
    name: "Liberator Gold",
    className: "liberator",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e9e6d5",
    name: "Longbeard Grey",
    className: "longbeard",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#718643",
    name: "Loren Forest",
    className: "loren",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#54add7",
    name: "Lothern Blue",
    className: "lothern",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#c8b2d6",
    name: "Lucius Lilac",
    className: "lucius",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#f5ad97",
    name: "Lugganath Orange",
    className: "lugganath",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#616f24",
    name: "Lustrian Undergrowth",
    className: "lustrian",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#38538a",
    name: "Macragge Blue",
    className: "macragge",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ab675a",
    name: "Martian Ironcrust",
    className: "martian",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#5c6667",
    name: "Mechanicus Standard Grey",
    className: "mechanicus",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#a8312b",
    name: "Mephiston Red",
    className: "mephiston",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#6cb549",
    name: "Moot Green",
    className: "moot",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#7b3229",
    name: "Mournfang Brown",
    className: "mournfang",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#5d506a",
    name: "Naggaroth Night",
    className: "naggaroth",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#8d9295",
    name: "Necron Compound",
    className: "necron",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#649b43",
    name: "Niblet Green",
    className: "niblet",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#5f7d88",
    name: "Nighthaunt Gloom",
    className: "nighthaunt",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#80bfaa",
    name: "Nihilakh Oxide",
    className: "nihilakh",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#212121",
    name: "Nuln Oil",
    className: "nuln",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b09b3e",
    name: "Nurgles Rot",
    className: "nurgles",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#9ead74",
    name: "Nurgling Green",
    className: "nurgling",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b4b859",
    name: "Ogryn Camo",
    className: "ogryn",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#dcdacb",
    name: "Pallid Wych Flesh",
    className: "pallid",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#a24c71",
    name: "Pink Horror",
    className: "pink-horror",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b7afa2",
    name: "Rakarth Flesh",
    className: "rakarth",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#bd8061",
    name: "Ratskin Flesh",
    className: "ratskin",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b94129",
    name: "Reikland Fleshshade",
    className: "reikland",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#d1a13d",
    name: "Retributor Armour",
    className: "retributor",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#664e4e",
    name: "Rhinox Hide",
    className: "rhinox",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b3bcc1",
    name: "Runefang Steel",
    className: "runefang",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#bfb3a7",
    name: "Runelord Brass",
    className: "runelord",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#6a8799",
    name: "Russ Grey",
    className: "russ",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ec783b",
    name: "Ryza Rust",
    className: "ryza",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#92385b",
    name: "Screamer Pink",
    className: "screamer",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b75b2a",
    name: "Screaming Bell",
    className: "screaming-bell",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e0ddb2",
    name: "Screaming Skull",
    className: "sceaming-skull",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#d47d3a",
    name: "Seraphim Sepia",
    className: "seraphim",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#dcb66f",
    name: "Sigmarite",
    className: "sigmarite",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#749d7b",
    name: "Skarsnik Green",
    className: "skarsnik",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#665f59",
    name: "Skavenblight Dinge",
    className: "skavenblight",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#78c7d4",
    name: "Skink Blue",
    className: "skink",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#a26127",
    name: "Skrag Brown",
    className: "skrag",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ecb362",
    name: "Skullcrusher Brass",
    className: "skullcrusher",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#a39da7",
    name: "Slaanesh Grey",
    className: "slaanesh",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#2d7b87",
    name: "Sotek Green",
    className: "sotek",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#2163f8",
    name: "Soulstone Blue",
    className: "soulstone",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ff6648",
    name: "Spiritstone Red",
    className: "spiritstone",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ba6457",
    name: "Squig Orange",
    className: "squig",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#7c6d4e",
    name: "Steel Legion Drab",
    className: "steel-legion-drab",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#225c74",
    name: "Stegadon Scale Green",
    className: "stegadon-scale",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#624b21",
    name: "Stirland Mud",
    className: "stirland",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#7a99b8",
    name: "Stormfang",
    className: "stormfang",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b7c2c6",
    name: "Stormhost Silver",
    className: "stormhost",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#8d847b",
    name: "Stormvermin Fur",
    className: "stormvermin",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#819532",
    name: "Straken Green",
    className: "straken",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#53ab78",
    name: "Sybarite Green",
    className: "sybarite",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#baa384",
    name: "Sycorax Bronze",
    className: "sycorax",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#726656",
    name: "Sylvaneth Bark",
    className: "sylvaneth",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b48e21",
    name: "Tallarn Sand",
    className: "tallarn",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#c88129",
    name: "Tau Light Ochre",
    className: "tau-light",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#548cc7",
    name: "Teclis Blue",
    className: "teclis",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#53a69c",
    name: "Temple Guard Blue",
    className: "temple-guard",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#d9c592",
    name: "Terminatus Stone",
    className: "terminatus",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#617b8c",
    name: "The Fang",
    className: "the-fang",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#236b84",
    name: "Thousand Sons Blue",
    className: "thousand-sons",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#5e858a",
    name: "Thunderhawk Blue",
    className: "thunderhawk",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ec783b",
    name: "Troll Slayer Orange",
    className: "troll-slayer",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#9c514c",
    name: "Tuskgor Fur",
    className: "tuskgor-fur",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#5d5646",
    name: "Typhus Corrosion",
    className: "typhus",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#dad294",
    name: "Tyrant Skull",
    className: "tyrant-skull",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#d7e6e1",
    name: "Ulthuan Grey",
    className: "ulthuan",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#cfc98f",
    name: "Underhive Ash",
    className: "underhive-ash",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#dfb877",
    name: "Ungor Flesh",
    className: "ungor-flesh",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#cbc990",
    name: "Ushabti Bone",
    className: "ushabti-bone",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#96534d",
    name: "Verminlord Hide",
    className: "verminlord-hide",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#466c45",
    name: "Waaagh! Flesh",
    className: "waaagh-flesh",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#558d6a",
    name: "Warboss Green",
    className: "warboss",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#86838a",
    name: "Warpfiend Grey",
    className: "warpfiend",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#6d5354",
    name: "Warplock Bronze",
    className: "warplock",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#438442",
    name: "Warpstone Glow",
    className: "warpstone",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#20c721",
    name: "Waystone Green",
    className: "waystone",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#59b64e",
    name: "Waywatcher Green",
    className: "waywatcher",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#9c3127",
    name: "Wazdakka Red",
    className: "wazdakka",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e63f36",
    name: "Wild Rider Red",
    className: "wild-rider",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e1e0de",
    name: "Wrack White",
    className: "wrack",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#633e71",
    name: "Xereus Purple",
    className: "xereus",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#8b6439",
    name: "XV-88",
    className: "xv-88",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#ffde21",
    name: "Yriel Yellow",
    className: "yriel",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#e4b028",
    name: "Zamesi Desert",
    className: "zamesi-desert",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
  {
    hex: "#b3a46d",
    name: "Zandri Dust",
    className: "zandri-dust",
    allBrands: brands,
    allTypes: types,
    allTags: tags,
    allColourFamilies: colourFamilies
  },
];

// ****** COMPONENT ****** //
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
