const BLOCKS = {
  AIR: 0,
  STONE: 1,
  GRASS: 2,
}

export const BLOCKS_BY_NAME = BLOCKS
export const BLOCKS_BY_ID = Object.keys(BLOCKS).map(key => BLOCKS[key])
