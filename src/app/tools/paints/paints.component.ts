import { Component, OnInit } from '@angular/core';

// ****** PAINT CLASS ****** //
class Paint {
  // id: number;
  hex: string;
  name: string;
  className: string;
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
    className: "abaddon"
  },
  {
    hex: "#a9aba6",
    name: "Administratum Grey",
    className: "administratum"
  },
  {
    hex: "#605a42",
    name: "Agrax Earthshade",
    className: "agrax"
  },
  {
    hex: "#9f8e7e",
    name: "Agrellan Earth",
    className: "agrellan"
  },
  {
    hex: "#228d9d",
    name: "Ahriman Blue",
    className: "ahriman"
  },
  {
    hex: "#4b6c97",
    name: "Alaitoc Blue",
    className: "alaitoc"
  },
  {
    hex: "#d8b227",
    name: "Armageddon Dunes",
    className: "armageddon"
  },
  {
    hex: "#b8473f",
    name: "Astorath Red",
    className: "astorath"
  },
  {
    hex: "#87888a",
    name: "Astrogranite Debris",
    className: "astrogranite"
  },
  {
    hex: "#718b32",
    name: "Athonian Camoshade",
    className: "athonian"
  },
  {
    hex: "#e3af27",
    name: "Auric Armour Gold",
    className: "auric"
  },
  {
    hex: "#fac322",
    name: "Averland Sunset",
    className: "averland"
  },
  {
    hex: "#78c7d3",
    name: "Baharroth Blue",
    className: "baharroth"
  },
  {
    hex: "#a17326",
    name: "Balor Brown",
    className: "balor"
  },
  {
    hex: "#8b5728",
    name: "Balthasar Gold",
    className: "balthasar"
  },
  {
    hex: "#a6917e",
    name: "Baneblade Brown",
    className: "baneblade"
  },
  {
    hex: "#da9b66",
    name: "Bestigor Flesh",
    className: "bestigor"
  },
  {
    hex: "#20965a",
    name: "Biel-Tan Green",
    className: "biel-tan"
  },
  {
    hex: "#b76c32",
    name: "Blackfire Earth",
    className: "blackfire"
  },
  {
    hex: "#782d2d",
    name: "Blood for the Blood God",
    className: "blood"
  },
  {
    hex: "#e62633",
    name: "Bloodletter",
    className: "bloodletter"
  },
  {
    hex: "#b9cadc",
    name: "Blue Horror",
    className: "blue-horror"
  },
  {
    hex: "#9e6629",
    name: "Brass Scorpion",
    className: "scorpion"
  },
  {
    hex: "#9b675c",
    name: "Bugman's Glow",
    className: "bugmans"
  },
  {
    hex: "#527ba7",
    name: "Caledor Sky",
    className: "caledor"
  },
  {
    hex: "#5d81bf",
    name: "Calgar Blue",
    className: "calgar"
  },
  {
    hex: "#22533a",
    name: "Caliban Green",
    className: "caliban"
  },
  {
    hex: "#b12975",
    name: "Carroburg Crimson",
    className: "carroburg"
  },
  {
    hex: "#fdcd21",
    name: "Casandora Yellow",
    className: "casandora"
  },
  {
    hex: "#53633e",
    name: "Castellan Green",
    className: "castellan"
  },
  {
    hex: "#a8b8b8",
    name: "Celestra Grey",
    className: "celestra"
  },
  {
    hex: "#ffffff",
    name: "Ceramic White",
    className: "ceramic"
  },
  {
    hex: "#212121",
    name: "Chaos Black",
    className: "chaos"
  },
  {
    hex: "#6ca6d8",
    name: "Chronus Blue",
    className: "chronus"
  },
  {
    hex: "#218078",
    name: "Coelia Greenshade",
    className: "coelia"
  },
  {
    hex: "#85819a",
    name: "Daemonette Hide",
    className: "daemonette"
  },
  {
    hex: "#5b6b6a",
    name: "Dark Reaper",
    className: "reaper"
  },
  {
    hex: "#8b8e87",
    name: "Dawnstone",
    className: "dawnstone"
  },
  {
    hex: "#858b67",
    name: "Death Guard Green",
    className: "death-guard"
  },
  {
    hex: "#c17d68",
    name: "Deathclaw Brown",
    className: "deathclaw"
  },
  {
    hex: "#7b8048",
    name: "Death World Forest",
    className: "death-world"
  },
  {
    hex: "#c8b2d6",
    name: "Dechala Lilac",
    className: "dechala"
  },
  {
    hex: "#e2e2d8",
    name: "Deepkin Flesh",
    className: "deepkin"
  },
  {
    hex: "#722b29",
    name: "Doombull Brown",
    className: "doombull"
  },
  {
    hex: "#fff16a",
    name: "Dorn Yellow",
    className: "dorn"
  },
  {
    hex: "#2769a3",
    name: "Drakenhof Nightshade",
    className: "drakenhof"
  },
  {
    hex: "#7c3d84",
    name: "Druchii Violet",
    className: "druchii"
  },
  {
    hex: "#544e48",
    name: "Dryad Bark",
    className: "dryad"
  },
  {
    hex: "#efcc94",
    name: "Eldar Flesh",
    className: "eldar"
  },
  {
    hex: "#91a149",
    name: "Elysian Green",
    className: "elysian"
  },
  {
    hex: "#c45985",
    name: "Emperor's Children",
    className: "emperors"
  },
  {
    hex: "#6b6c6e",
    name: "Eshin Grey",
    className: "eshin"
  },
  {
    hex: "#bac9dc",
    name: "Etherium Blue",
    className: "etherium"
  },
  {
    hex: "#c63031",
    name: "Evil Sunz Scarlet",
    className: "evil-sunz"
  },
  {
    hex: "#89a9c2",
    name: "Fenrisian Grey",
    className: "fenrisian"
  },
  {
    hex: "#f29461",
    name: "Fire Dragon Bright",
    className: "fire-dragon"
  },
  {
    hex: "#ffef20",
    name: "Flash Gitz Yellow",
    className: "flash-gitz"
  },
  {
    hex: "#ecc896",
    name: "Flayed One Flesh",
    className: "flayed"
  },
  {
    hex: "#bf7337",
    name: "Fuegan Orange",
    className: "fuegan"
  },
  {
    hex: "#f6c0d8",
    name: "Fulgrim Pink",
    className: "fulgrim"
  },
  {
    hex: "#e5b376",
    name: "Fulgurite Copper",
    className: "fulgurite"
  },
  {
    hex: "#9ecbb6",
    name: "Gauss Blaster Green",
    className: "gauss-blaster"
  },
  {
    hex: "#c8822a",
    name: "Gehenna's Gold",
    className: "gehennas"
  },
  {
    hex: "#8d70b0",
    name: "Genestealer Purple",
    className: "genestealer"
  },
  {
    hex: "#a66a48",
    name: "Golgfag Brown",
    className: "golgfag"
  },
  {
    hex: "#81665d",
    name: "Gorthor Brown",
    className: "gorthor"
  },
  {
    hex: "#228bcc",
    name: "Guilliman Blue",
    className: "guilliman"
  },
  {
    hex: "#b0682e",
    name: "Hashut Copper",
    className: "hashut"
  },
  {
    hex: "#9ecbb6",
    name: "Hellion Green",
    className: "hellion"
  },
  {
    hex: "#fff16a",
    name: "Hexos Palesun",
    className: "hexos"
  },
  {
    hex: "#569659",
    name: "Hexwraith Flame",
    className: "hexwraith"
  },
  {
    hex: "#668fbc",
    name: "Hoethe Blue",
    className: "hoethe"
  },
  {
    hex: "#269cca",
    name: "Imrik Blue",
    className: "imrik"
  },
  {
    hex: "#2c5c5c",
    name: "Incubi Darkness",
    className: "incubi"
  },
  {
    hex: "#e2d2c2",
    name: "Ionrach Skin",
    className: "ionrach"
  },
  {
    hex: "#8d9295",
    name: "Ironbreaker",
    className: "ironbreaker"
  },
  {
    hex: "#e84832",
    name: "Jokaero Orange",
    className: "jokaero"
  },
  {
    hex: "#229574",
    name: "Kabalite Green",
    className: "kabalite"
  },
  {
    hex: "#2b4064",
    name: "Kantor Blue",
    className: "kantor"
  },
  {
    hex: "#c8ac7c",
    name: "Karak Stone",
    className: "karak"
  },
  {
    hex: "#7d2d22",
    name: "Khorne Red",
    className: "khorne"
  },
  {
    hex: "#f5ad9a",
    name: "Kindleflame",
    className: "kindleflame"
  },
  {
    hex: "#cfac84",
    name: "Kislev Flesh",
    className: "kislev"
  },
  {
    hex: "#cfc98f",
    name: "Krieg Khaki",
    className: "krieg"
  },
  {
    hex: "#ffef20",
    name: "Lamenters Yellow",
    className: "lamenters"
  },
  {
    hex: "#5d6768",
    name: "Leadbelcher",
    className: "leadbelcher"
  },
  {
    hex: "#c29c53",
    name: "Liberator Gold",
    className: "liberator"
  },
  {
    hex: "#e9e6d5",
    name: "Longbeard Grey",
    className: "longbeard"
  },
  {
    hex: "#718643",
    name: "Loren Forest",
    className: "loren"
  },
  {
    hex: "#54add7",
    name: "Lothern Blue",
    className: "lothern"
  },
  {
    hex: "#c8b2d6",
    name: "Lucius Lilac",
    className: "lucius"
  },
  {
    hex: "#f5ad97",
    name: "Lugganath Orange",
    className: "lugganath"
  },
  {
    hex: "#616f24",
    name: "Lustrian Undergrowth",
    className: "lustrian"
  },
  {
    hex: "#38538a",
    name: "Macragge Blue",
    className: "macragge"
  },
  {
    hex: "#ab675a",
    name: "Martian Ironcrust",
    className: "martian"
  },
  {
    hex: "#5c6667",
    name: "Mechanicus Standard Grey",
    className: "mechanicus"
  },
  {
    hex: "#a8312b",
    name: "Mephiston Red",
    className: "mephiston"
  },
  {
    hex: "#6cb549",
    name: "Moot Green",
    className: "moot"
  },
  {
    hex: "#7b3229",
    name: "Mournfang Brown",
    className: "mournfang"
  },
  {
    hex: "#5d506a",
    name: "Naggaroth Night",
    className: "naggaroth"
  },
  {
    hex: "#8d9295",
    name: "Necron Compound",
    className: "necron"
  },
  {
    hex: "#649b43",
    name: "Niblet Green",
    className: "niblet"
  },
  {
    hex: "#5f7d88",
    name: "Nighthaunt Gloom",
    className: "nighthaunt"
  },
  {
    hex: "#80bfaa",
    name: "Nihilakh Oxide",
    className: "nihilakh"
  },
  {
    hex: "#212121",
    name: "Nuln Oil",
    className: "nuln"
  },
  {
    hex: "#b09b3e",
    name: "Nurgles Rot",
    className: "nurgles"
  },
  {
    hex: "#9ead74",
    name: "Nurgling Green",
    className: "nurgling"
  },
  {
    hex: "#b4b859",
    name: "Ogryn Camo",
    className: "ogryn"
  },
  {
    hex: "#dcdacb",
    name: "Pallid Wych Flesh",
    className: "pallid"
  },
  {
    hex: "#a24c71",
    name: "Pink Horror",
    className: "pink-horror"
  },
  {
    hex: "#b7afa2",
    name: "Rakarth Flesh",
    className: "rakarth"
  },
  {
    hex: "#bd8061",
    name: "Ratskin Flesh",
    className: "ratskin"
  },
  {
    hex: "#b94129",
    name: "Reikland Fleshshade",
    className: "reikland"
  },
  {
    hex: "#d1a13d",
    name: "Retributor Armour",
    className: "retributor"
  },
  {
    hex: "#664e4e",
    name: "Rhinox Hide",
    className: "rhinox"
  },
  {
    hex: "#b3bcc1",
    name: "Runefang Steel",
    className: "runefang"
  },
  {
    hex: "#bfb3a7",
    name: "Runelord Brass",
    className: "runelord"
  },
  {
    hex: "#6a8799",
    name: "Russ Grey",
    className: "russ"
  },
  {
    hex: "#ec783b",
    name: "Ryza Rust",
    className: "ryza"
  },
  {
    hex: "#92385b",
    name: "Screamer Pink",
    className: "screamer"
  },
  {
    hex: "#b75b2a",
    name: "Screaming Bell",
    className: "bell"
  },
  {
    hex: "#e0ddb2",
    name: "Screaming Skull",
    className: "skull"
  },
  {
    hex: "#d47d3a",
    name: "Seraphim Sepia",
    className: "seraphim"
  },
  {
    hex: "#dcb66f",
    name: "Sigmarite",
    className: "sigmarite"
  },
  {
    hex: "#749d7b",
    name: "Skarsnik Green",
    className: "skarsnik"
  },
  {
    hex: "#665f59",
    name: "Skavenblight Dinge",
    className: "skavenblight"
  },
  {
    hex: "#78c7d4",
    name: "Skink Blue",
    className: "skink"
  },
  {
    hex: "#a26127",
    name: "Skrag Brown",
    className: "skrag"
  },
  {
    hex: "#ecb362",
    name: "Skullcrusher Brass",
    className: "skullcrusher"
  },
  {
    hex: "#a39da7",
    name: "Slaanesh Grey",
    className: "slaanesh"
  },
  {
    hex: "#2d7b87",
    name: "Sotek Green",
    className: "sotek"
  },
  {
    hex: "#2163f8",
    name: "Soulstone Blue",
    className: "soulstone"
  },
  {
    hex: "#ff6648",
    name: "Spiritstone Red",
    className: "spiritstone"
  },
  {
    hex: "#ba6457",
    name: "Squig Orange",
    className: "squig"
  },
  {
    hex: "#7c6d4e",
    name: "Steel Legion Drab",
    className: "drab"
  },
  {
    hex: "#225c74",
    name: "Stegadon Scale Green",
    className: "stegadon"
  },
  {
    hex: "#624b21",
    name: "Stirland Mud",
    className: "stirland"
  },
  {
    hex: "#7a99b8",
    name: "Stormfang",
    className: "stormfang"
  },
  {
    hex: "#b7c2c6",
    name: "Stormhost Silver",
    className: "stormhost"
  },
  {
    hex: "#8d847b",
    name: "Stormvermin Fur",
    className: "stormvermin"
  },
  {
    hex: "#819532",
    name: "Straken Green",
    className: "straken"
  },
  {
    hex: "#53ab78",
    name: "Sybarite Green",
    className: "sybarite"
  },
  {
    hex: "#baa384",
    name: "Sycorax Bronze",
    className: "sycorax"
  },
  {
    hex: "#726656",
    name: "Sylvaneth Bark",
    className: "sylvaneth"
  },
  {
    hex: "#b48e21",
    name: "Tallarn Sand",
    className: "tallarn"
  },
  {
    hex: "#c88129",
    name: "Tau Light Ochre",
    className: "tau"
  },
  {
    hex: "#548cc7",
    name: "Teclis Blue",
    className: "teclis"
  },
  {
    hex: "#53a69c",
    name: "Temple Guard Blue",
    className: "temple-guard"
  },
  {
    hex: "#d9c592",
    name: "Terminatus Stone",
    className: "terminatus"
  },
  {
    hex: "#617b8c",
    name: "The Fang",
    className: "fang"
  },
  {
    hex: "#236b84",
    name: "Thousand Sons Blue",
    className: "thousand"
  },
  {
    hex: "#5e858a",
    name: "Thunderhawk Blue",
    className: "thunderhawk"
  },
  {
    hex: "#ec783b",
    name: "Troll Slayer Orange",
    className: "troll-slayer"
  },
  {
    hex: "#9c514c",
    name: "Tuskgor Fur",
    className: "tuskgor"
  },
  {
    hex: "#5d5646",
    name: "Typhus Corrosion",
    className: "typhus"
  },
  {
    hex: "#dad294",
    name: "Tyrant Skull",
    className: "tyrant"
  },
  {
    hex: "#d7e6e1",
    name: "Ulthuan Grey",
    className: "ulthuan"
  },
  {
    hex: "#cfc98f",
    name: "Underhive Ash",
    className: "underhive"
  },
  {
    hex: "#dfb877",
    name: "Ungor Flesh",
    className: "ungor"
  },
  {
    hex: "#cbc990",
    name: "Ushabti Bone",
    className: "ushabti"
  },
  {
    hex: "#96534d",
    name: "Verminlord Hide",
    className: "verminlord"
  },
  {
    hex: "#466c45",
    name: "Waaagh! Flesh",
    className: "waaagh"
  },
  {
    hex: "#558d6a",
    name: "Warboss Green",
    className: "warboss"
  },
  {
    hex: "#86838a",
    name: "Warpfiend Grey",
    className: "warpfiend"
  },
  {
    hex: "#6d5354",
    name: "Warplock Bronze",
    className: "warplock"
  },
  {
    hex: "#438442",
    name: "Warpstone Glow",
    className: "warpstone"
  },
  {
    hex: "#20c721",
    name: "Waystone Green",
    className: "waystone"
  },
  {
    hex: "#59b64e",
    name: "Waywatcher Green",
    className: "waywatcher"
  },
  {
    hex: "#9c3127",
    name: "Wazdakka Red",
    className: "wazdakka"
  },
  {
    hex: "#e63f36",
    name: "Wild Rider Red",
    className: "wild-rider"
  },
  {
    hex: "#e1e0de",
    name: "Wrack White",
    className: "wrack"
  },
  {
    hex: "#633e71",
    name: "Xereus Purple",
    className: "xereus"
  },
  {
    hex: "#8b6439",
    name: "XV-88",
    className: "xv-88"
  },
  {
    hex: "#ffde21",
    name: "Yriel Yellow",
    className: "yriel"
  },
  {
    hex: "#e4b028",
    name: "Zamesi Desert",
    className: "zamesi"
  },
  {
    hex: "#b3a46d",
    name: "Zandri Dust",
    className: "zandri"
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
