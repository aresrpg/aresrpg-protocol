import { PassThrough } from 'stream'

import * as Packets from '../generated/ares_pb.js'

export * from './chunk.js'

/** @type {typeof import("./types").create_client} */
export function create_client({ socket_write, socket_end }) {
  const controller = new AbortController()
  const stream = new PassThrough({
    objectMode: true,
    signal: controller.signal,
  })

  let end_handler = _ => {}

  return {
    controller,
    stream,
    send(raw_type, data) {
      const type = raw_type.slice(7)
      try {
        const buffer = Packets.Packet.fromJson({ [type]: data }).toBinary()
        socket_write(buffer)
      } catch (error) {
        console.dir({ type, data }, { depth: Infinity })
        console.error(error)
      }
    },
    end(message) {
      socket_end(message)
    },
    on_end: handler => (end_handler = handler),
    notify_end: message => {
      end_handler(message)
      controller.abort()
    },
    notify_message(message) {
      try {
        const raw_packet = Packets.Packet.fromBinary(
          new Uint8Array(message),
        ).toJson({
          emitDefaultValues: true,
        })
        const [[type, value]] = Object.entries(raw_packet)

        if (!type) throw new Error('Invalid packet')

        stream.write({ type: `packet/${type}`, payload: value })
      } catch (error) {
        console.error(error)
        socket_end('Invalid packet')
      }
    },
  }
}
