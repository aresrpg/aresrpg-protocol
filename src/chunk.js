import spiral from 'spiralloop'

export const CHUNK_SIZE = 32
export const WORLD_HEIGHT = 256

export function to_chunk_position(position) {
  const x = Math.floor(position.x / CHUNK_SIZE)
  const z = Math.floor(position.z / CHUNK_SIZE)

  return { x, z }
}

export function spiral_array(center, max_distance) {
  let positions = []

  // Determine the size of the spiral needed based on maxDistance
  const size = max_distance * 2 + 1

  spiral([size, size], function (x, z) {
    // Adjust x and y to be relative to the center
    const adjusted_x = x - max_distance + center.x
    const adjusted_z = z - max_distance + center.z

    // Calculate Manhattan distance from the center
    const distance = Math.abs(center.x - adjusted_x) + Math.abs(center.z - adjusted_z)

    if (distance <= max_distance) positions.push({ x: adjusted_x, z: adjusted_z })
  })

  return positions
}
