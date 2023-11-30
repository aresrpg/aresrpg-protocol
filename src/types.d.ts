import { protocol_emitter } from '.'

type EventMap = Record<string, any>
type Await<T> = T extends Promise<infer U> ? U : T
type EventName<T extends EventMap> = string & keyof T
type EventListener<T> = (arg: T) => void

export interface TypedEmitter<T extends EventMap> {
  on<K extends EventName<T>>(eventName: K, listener: EventListener<T[K]>): this
  on(eventName: string | symbol, listener: (arg: any) => void): this

  once<K extends EventName<T>>(eventName: K, listener: EventListener<T[K]>): this
  once(eventName: string | symbol, listener: (arg: any) => void): this

  off<K extends EventName<T>>(eventName: K, listener: EventListener<T[K]>): this
  off(eventName: string | symbol, listener: (arg: any) => void): this

  removeListener<K extends EventName<T>>(eventName: K, listener: EventListener<T[K]>): this
  removeListener(eventName: string | symbol, listener: (arg: any) => void): this

  emit<K extends EventName<T>>(eventName: K, arg: T[K]): boolean
  emit(eventName: string | symbol, arg: any): boolean

  setMaxListeners(number): this
  removeAllListeners(): this
}

export module 'events' {
  interface StaticEventEmitterOptions {
    signal?: AbortSignal | undefined
  }

  function on(
    emitter: NodeJS.EventEmitter | EventTarget,
    eventName: string,
    options?: StaticEventEmitterOptions
  ): AsyncIterableIterator<any>
  function on<T, K extends EventName<T>>(
    emitter: TypedEmitter<T> | EventTarget,
    eventName: K,
    options?: StaticEventEmitterOptions
  ): AsyncIterableIterator<[T[K]]>
  function on<T>(
    emitter: TypedEmitter<T> | EventTarget,
    eventName: string,
    options?: StaticEventEmitterOptions
  ): AsyncIterableIterator<any>

  class EventEmitter {
    static on(
      emitter: NodeJS.EventEmitter,
      eventName: string,
      options?: StaticEventEmitterOptions
    ): AsyncIterableIterator<any>

    static on<T, K extends EventName<T>>(
      emitter: TypedEmitter<T>,
      eventName: K,
      options?: StaticEventEmitterOptions
    ): AsyncIterableIterator<[T[K]]>

    static on<T>(
      emitter: TypedEmitter<T>,
      eventName: string,
      options?: StaticEventEmitterOptions
    ): AsyncIterableIterator<any>
  }
}

export function create_client({ socket_write, socket_end }): create_client

interface create_client {
  controller: AbortController
  stream: NodeJS.ReadWriteStream
  send: <T extends keyof Packets>(type: T, payload: Packets[T]) => void
  end: (message: string) => void
  on_end: (cb) => void
  notify_message: (message: ArrayBuffer) => void
}

type Position = {
  x: number
  y: number
  z: number
}

type ChunkPosition = {
  x: number
  z: number
}

export type Character = {
  id: string
  name: string
  position: Position
  level: number
  head: number
  cape: number
}

export type Packets = {
  packet: { type: string; payload: any }
  'packet/chunkLoad': { position: { x; z } }
  'packet/listCharacters': object
  'packet/createCharacter': { name: string }
  'packet/selectCharacter': { id: string }
  'packet/listCharactersResponse': { characters: Character[]; limit: number }
  'packet/error': { code: string }
  'packet/connectionSuccess': object
  'packet/playerPosition': { position: Position }
  'packet/leaveGame': object
  'packet/joinGame': object
  'packet/joinGameReady': object
  'packet/entitySpawn': { id: string; type: string; position: Position }
  'packet/entityMove': { id: string; type: string; position: Position }
  'packet/entityDespawn': { id: string }
}

type Packet = {
  [K in keyof Packets]: { type: K; payload: Packets[K] }
}[keyof Packets]
