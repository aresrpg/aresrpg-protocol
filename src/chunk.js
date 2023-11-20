export const CHUNK_SIZE = 100

export function to_chunk_position(position) {
  const x = Math.floor((position.x + CHUNK_SIZE / 2) / CHUNK_SIZE)
  const z = Math.floor((position.z + CHUNK_SIZE / 2) / CHUNK_SIZE)

  return { x, z }
}