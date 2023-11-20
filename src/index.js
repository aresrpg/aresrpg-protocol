import { EventEmitter } from 'events-polyfill'

import * as Packets from '../generated/ares_pb.js'

export function create_client({ user, socket_write, socket_end }) {
  const emitter = new EventEmitter()

  emitter.user = user

  emitter.send = (raw_type, data) => {
    try {
      const buffer = Packets.Packet.fromJson({ [raw_type.slice(7)]: data }).toBinary()
      socket_write(buffer)
    } catch (error) {
      console.error(`'${type}' is not a valid packet !`, error)
    }
  }
  emitter.end = message => {
    emitter.emit('close', message)
    socket_end(message)
  }
  emitter.handle_error = error => emitter.end(error.message)
  emitter.handle_message = message => {
    try {
      const {
        type: { value, case: type },
      } = Packets.Packet.fromBinary(new Uint8Array(message))

      if (!type) throw new Error('Invalid packet')

      emitter.emit('packet', { type, value })
      emitter.emit(type, value)
    } catch (error) {
      console.error(error)
      emitter.end('Invalid packet')
    }
  }

  return emitter
}
