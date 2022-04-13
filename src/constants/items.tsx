interface Item {
  [itemIndex: string]: ItemProps;
}

interface ItemProps {
  name: string;
  image: string;
  minAmount: number;
  maxAmount: number;
  dropChance: number;
}

export const ITEMS: Item = {
  AHRIMAN_WING: {
    name: 'Ahriman Wing',
    image: 'src/assets/images/items/ahriman_wing.png',
    minAmount: 1,
    maxAmount: 2,
    dropChance: 10,
  },
  ALDGOAT_CHUCK: {
    name: 'Aldgoat Chuck',
    image: 'src/assets/images/items/aldgoat_chuck.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 30,
  },
  ALDGOAT_HORN: {
    name: 'Aldgoat Horn',
    image: 'src/assets/images/items/aldgoat_horn.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 30,
  },
  ANIMAL_HIDE: {
    name: 'Animal Hide',
    image: 'src/assets/images/items/animal_hide.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 25,
  },
  ANIMAL_SKIN: {
    name: 'Animal Skin',
    image: 'src/assets/images/items/animal_skin.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 15,
  },
  BAT_FANG: {
    name: 'Bat Fang',
    image: 'src/assets/images/items/bat_fang.png',
    minAmount: 1,
    maxAmount: 2,
    dropChance: 25,
  },
  BEAST_SINEW: {
    name: 'Beast Sinew',
    image: 'src/assets/images/items/beast_sinew.png',
    minAmount: 1,
    maxAmount: 3,
    dropChance: 20,
  },
  BLUE_LANDTRAP_LEAF: {
    name: 'Blue Landtrap Leaf',
    image: '',
    minAmount: 1,
    maxAmount: 4,
    dropChance: 20,
  },
  BONE_CHIP: {
    name: 'Bone Chip',
    image: 'src/assets/images/items/bone_chip.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 10,
  },
  COEURL_SKIN: {
    name: 'Coeurl Skin',
    image: 'src/assets/images/items/coeurl_skin.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 50,
  },
  DODO_EGG: {
    name: 'Animal Egg',
    image: 'src/assets/images/items/dodo_egg.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 10,
  },
  DODO_FEATHER: {
    name: 'Animal Feather',
    image: 'src/assets/images/items/dodo_feather.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 20,
  },
  DODO_TENDERLOIN: {
    name: 'Dodo Tenderloin',
    image: 'src/assets/images/items/dodo_tenderloin.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 20,
  },
  DRAGON_BLOOD: {
    name: 'Dragon Blood',
    image: 'src/assets/images/items/dragon_blood.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 50,
  },
  DRAGON_FANG: {
    name: 'Dragon Fang',
    image: 'src/assets/images/items/dragon_fang.png',
    minAmount: 1,
    maxAmount: 2,
    dropChance: 30,
  },
  EARTH_CRYSTAL: {
    name: 'Earth Crystal',
    image: 'src/assets/images/items/earth_crystal.png',
    minAmount: 2,
    maxAmount: 5,
    dropChance: 33,
  },
  FIRE_SHARD: {
    name: 'Fire Shard',
    image: 'src/assets/images/items/fire_shard.png',
    minAmount: 2,
    maxAmount: 5,
    dropChance: 33,
  },
  FRESH_MILKROOT: {
    name: 'Fresh Milkroot',
    image: '',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 35,
  },
  HONEY: {
    name: 'Honey',
    image: 'src/assets/images/items/honey.png',
    minAmount: 1,
    maxAmount: 2,
    dropChance: 20,
  },
  ICETRAP_LEAF: {
    name: 'Icetrap Leaf',
    image: '',
    minAmount: 1,
    maxAmount: 3,
    dropChance: 15,
  },
  JACKAL_FANG: {
    name: 'Jackal Fang',
    image: 'src/assets/images/items/jackal_fang.png',
    minAmount: 1,
    maxAmount: 2,
    dropChance: 35,
  },
  JELLYFISH_CNIDA: {
    name: 'Jellyfish Cnida',
    image: 'src/asses/images/items/jellyfish_cnida.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 10,
  },
  JELLYFISH_UMBRELLA: {
    name: 'Jellyfish Umbrella',
    image: 'src/assets/images/items/jellyfish_umbrella.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 25,
  },
  LADYBUG_ELYTRON: {
    name: 'Ladybug Elytron',
    image: 'src/assets/images/items/ladybug_elytron.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 50,
  },
  LIGHTNING_CRYSTAL: {
    name: 'Lightning Crystal',
    image: 'src/assets/images/items/lightning_crystal.png',
    minAmount: 2,
    maxAmount: 5,
    dropChance: 33,
  },
  LUMINOUS_CRYSTAL: {
    name: 'Luminous Crystal',
    image: 'src/assets/images/items/luminous_crystal.png',
    minAmount: 2,
    maxAmount: 5,
    dropChance: 33,
  },
  MARMOT_BLOOD: {
    name: 'Marmot Blood',
    image: 'src/assets/images/items/marmot_blood.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 50,
  },
  MARMOT_PELT: {
    name: 'Marmot Pelt',
    image: 'src/assets/images/items/marmot_pelt.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 25,
  },
  PUK_EGG: {
    name: 'Puk Egg',
    image: 'src/assets/images/items/puk_egg.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 10,
  },
  PUK_WING: {
    name: 'Puk Wing',
    image: 'src/assets/images/items/puk_wing.png',
    minAmount: 1,
    maxAmount: 1,
    dropChance: 10,
  },
  RED_LANDLTRAP_LEAF: {
    name: 'Red Landtrap Leaf',
    image: 'src/assets/images/items/red_landtrap_leaf.png',
    minAmount: 1,
    maxAmount: 4,
    dropChance: 20,
  },
  WIND_CRYSTAL: {
    name: 'Wind Crystal',
    image: 'src/assets/images/items/wind_crystal.png',
    minAmount: 2,
    maxAmount: 5,
    dropChance: 33,
  },
};