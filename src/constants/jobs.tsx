import { JobInterface } from '../types/job';

export const JOBS: JobInterface = {
  /**
   * Tanks
   */
  GLA: {
    name: 'Gladiator',
    type: 'Tank',
    level: 1,
    exp: 0,
    iconName: 'icon-job-gla',
    className: 'job-type-tank',
    unlocked: true,
    active: false,
  },
  PLD: {
    name: 'Paladin',
    type: 'Tank',
    level: 30,
    exp: 0,
    iconName: 'icon-job-pld',
    className: 'job-type-tank',
    unlocked: false,
    active: false,
  },
  MRD: {
    name: 'Marauder',
    type: 'Tank',
    level: 1,
    exp: 0,
    iconName: 'icon-job-mrd',
    className: 'job-type-tank',
    unlocked: true,
    active: false,
  },
  WAR: {
    name: 'Warrior',
    type: 'Tank',
    level: 30,
    exp: 0,
    iconName: 'icon-job-war',
    className: 'job-type-tank',
    unlocked: false,
    active: false,
  },
  DRK: {
    name: 'Dark Knight',
    type: 'Tank',
    level: 50,
    exp: 0,
    iconName: 'icon-job-drk',
    className: 'job-type-tank',
    unlocked: false,
    active: false,
  },
  GNB: {
    name: 'Gunbreaker',
    type: 'Tank',
    level: 60,
    exp: 0,
    iconName: 'icon-job-gnb',
    className: 'job-type-tank',
    unlocked: false,
    active: false,
  },

  /**
   * Healers
   */
  CNJ: {
    name: 'Conjurer',
    type: 'Healer',
    level: 1,
    exp: 0,
    iconName: 'icon-job-cnj',
    className: 'job-type-healer',
    unlocked: true,
    active: false,
  },
  WHM: {
    name: 'White Mage',
    type: 'Healer',
    level: 30,
    exp: 0,
    iconName: 'icon-job-whm',
    className: 'job-type-healer',
    unlocked: false,
    active: false,
  },
  SCH: {
    name: 'Scholar',
    type: 'Healer',
    level: 1,
    exp: 0,
    iconName: 'icon-job-sch',
    className: 'job-type-healer',
    unlocked: true,
    active: false,
  },
  AST: {
    name: 'Astrologian',
    type: 'Healer',
    level: 30,
    exp: 0,
    iconName: 'icon-job-ast',
    className: 'job-type-healer',
    unlocked: false,
    active: false,
  },
  SGE: {
    name: 'Sage',
    type: 'Healer',
    level: 70,
    exp: 0,
    iconName: 'icon-job-sge',
    className: 'job-type-healer',
    unlocked: false,
    active: false,
  },

  /**
   * DPS
   */
  PGL: {
    name: 'Pugilist',
    type: 'DPS',
    level: 1,
    exp: 0,
    iconName: 'icon-job-pgl',
    className: 'job-type-dps',
    unlocked: true,
    active: false,
  },
  MNK: {
    name: 'Monk',
    type: 'DPS',
    level: 30,
    exp: 0,
    iconName: 'icon-job-mnk',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  LNC: {
    name: 'Lancer',
    type: 'DPS',
    level: 1,
    exp: 0,
    iconName: 'icon-job-lnc',
    className: 'job-type-dps',
    unlocked: true,
    active: false,
  },
  DRG: {
    name: 'Dragoon',
    type: 'DPS',
    level: 30,
    exp: 0,
    iconName: 'icon-job-drg',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  ROG: {
    name: 'Rogue',
    type: 'DPS',
    level: 1,
    exp: 0,
    iconName: 'icon-job-rog',
    className: 'job-type-dps',
    unlocked: true,
    active: false,
  },
  NIN: {
    name: 'Ninja',
    type: 'DPS',
    level: 30,
    exp: 0,
    iconName: 'icon-job-nin',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  ARC: {
    name: 'Archer',
    type: 'DPS',
    level: 1,
    exp: 0,
    iconName: 'icon-job-arc',
    className: 'job-type-dps',
    unlocked: true,
    active: false,
  },
  BRD: {
    name: 'Bard',
    type: 'DPS',
    level: 30,
    exp: 0,
    iconName: 'icon-job-brd',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  THM: {
    name: 'Thaumaturge',
    type: 'DPS',
    level: 1,
    exp: 0,
    iconName: 'icon-job-thm',
    className: 'job-type-dps',
    unlocked: true,
    active: false,
  },
  BLM: {
    name: 'Black Mage',
    type: 'DPS',
    level: 30,
    exp: 0,
    iconName: 'icon-job-blm',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  ACN: {
    name: 'Arcanist',
    type: 'DPS',
    level: 1,
    exp: 0,
    iconName: 'icon-job-acn',
    className: 'job-type-dps',
    unlocked: true,
    active: false,
  },
  SMN: {
    name: 'Summoner',
    type: 'DPS',
    level: 30,
    exp: 0,
    iconName: 'icon-job-smn',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  SAM: {
    name: 'Samurai',
    type: 'DPS',
    level: 50,
    exp: 0,
    iconName: 'icon-job-sam',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  MCH: {
    name: 'Machinist',
    type: 'DPS',
    level: 50,
    exp: 0,
    iconName: 'icon-job-mch',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  DNC: {
    name: 'Dancer',
    type: 'DPS',
    level: 60,
    exp: 0,
    iconName: 'icon-job-dnc',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  RPR: {
    name: 'Reaper',
    type: 'DPS',
    level: 70,
    exp: 0,
    iconName: 'icon-job-rpr',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },
  BLU: {
    name: 'Blue Mage',
    type: 'DPS',
    level: 1,
    exp: 0,
    iconName: 'icon-job-blu',
    className: 'job-type-dps',
    unlocked: false,
    active: false,
  },

  /**
   * Crafters
   */
  CRP: {
    name: 'Carpenter',
    type: 'Crafter',
    level: 1,
    exp: 0,
    iconName: 'icon-job-crp',
    className: 'job-type-crafter',
    unlocked: true,
    active: false,
  },
  BSM: {
    name: 'Blacksmith',
    type: 'Crafter',
    level: 1,
    exp: 0,
    iconName: 'icon-job-bsm',
    className: 'job-type-crafter',
    unlocked: true,
    active: false,
  },
  ARM: {
    name: 'Armorer',
    type: 'Crafter',
    level: 1,
    exp: 0,
    iconName: 'icon-job-arm',
    className: 'job-type-crafter',
    unlocked: true,
    active: false,
  },
  GSM: {
    name: 'Goldsmith',
    type: 'Crafter',
    level: 1,
    exp: 0,
    iconName: 'icon-job-gsm',
    className: 'job-type-crafter',
    unlocked: true,
    active: false,
  },
  LTW: {
    name: 'Leatherworker',
    type: 'Crafter',
    level: 1,
    exp: 0,
    iconName: 'icon-job-ltw',
    className: 'job-type-crafter',
    unlocked: true,
    active: false,
  },
  WVR: {
    name: 'Weaver',
    type: 'Crafter',
    level: 1,
    exp: 0,
    iconName: 'icon-job-wvr',
    className: 'job-type-crafter',
    unlocked: true,
    active: false,
  },
  ALC: {
    name: 'Alchemist',
    type: 'Crafter',
    level: 1,
    exp: 0,
    iconName: 'icon-job-alc',
    className: 'job-type-crafter',
    unlocked: true,
    active: false,
  },
  CUL: {
    name: 'Culinarian',
    type: 'Crafter',
    level: 1,
    exp: 0,
    iconName: 'icon-job-cul',
    className: 'job-type-crafter',
    unlocked: true,
    active: false,
  },

  /**
   * Gatherers
   */
  BTN: {
    name: 'Botanist',
    type: 'Gatherer',
    level: 1,
    exp: 0,
    iconName: 'icon-job-btn',
    className: 'job-type-gatherer',
    unlocked: true,
    active: false,
  },
  MIN: {
    name: 'Miner',
    type: 'Gatherer',
    level: 1,
    exp: 0,
    iconName: 'icon-job-min',
    className: 'job-type-gatherer',
    unlocked: true,
    active: false,
  },
  FSH: {
    name: 'Fisher',
    type: 'Gatherer',
    level: 1,
    exp: 0,
    iconName: 'icon-job-fsh',
    className: 'job-type-gatherer',
    unlocked: true,
    active: false,
  },
};
