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

export function create_client({ user, socket_write, socket_end }): create_client

interface create_client extends TypedEmitter<Packets> {
  send: <T extends keyof Packets>(type: T, payload: Packets[T]) => void
  end: (message: string) => void
  handle_error: (error: Error) => void
  handle_message: (message: ArrayBuffer) => void
}

export type Packets = {
  packet: { type: string; payload: any }
  'packet/lightAdd': { type: string; [key: string]: any }
  'packet/entityAdd': {
    id: string
    type: string
    position: [number, number, number]
    [key: string]: any
  }
  'packet/entityAttach': {
    id: string
    parent: string
    offset: [number, number, number]
  }
  'packet/entityPosition': { id: string; position: [number, number, number] }
  'packet/playerPosition': [number, number, number]
  'packet/playerSpawn': [number, number, number]
  'packet/chunkLoad': [number, number]
  'packet/connectionRequest': { name: string }
  'packet/connectionResponse': { accepted: boolean; id: string }
}

type Packet = {
  [K in keyof Packets]: { type: K; payload: Packets[K] }
}[keyof Packets]
