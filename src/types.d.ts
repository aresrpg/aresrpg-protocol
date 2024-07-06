type EventMap = Record<string, any>
type Await<T> = T extends Promise<infer U> ? U : T
type EventName<T extends EventMap> = string & keyof T
type EventListener<T> = (arg: T) => void

export interface TypedEmitter<T extends EventMap> {
  on<K extends EventName<T>>(eventName: K, listener: EventListener<T[K]>): this
  on(eventName: string | symbol, listener: (arg: any) => void): this

  once<K extends EventName<T>>(
    eventName: K,
    listener: EventListener<T[K]>,
  ): this
  once(eventName: string | symbol, listener: (arg: any) => void): this

  off<K extends EventName<T>>(eventName: K, listener: EventListener<T[K]>): this
  off(eventName: string | symbol, listener: (arg: any) => void): this

  removeListener<K extends EventName<T>>(
    eventName: K,
    listener: EventListener<T[K]>,
  ): this
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
    options?: StaticEventEmitterOptions,
  ): AsyncIterableIterator<any>
  function on<T, K extends EventName<T>>(
    emitter: TypedEmitter<T> | EventTarget,
    eventName: K,
    options?: StaticEventEmitterOptions,
  ): AsyncIterableIterator<[T[K]]>
  function on<T>(
    emitter: TypedEmitter<T> | EventTarget,
    eventName: string,
    options?: StaticEventEmitterOptions,
  ): AsyncIterableIterator<any>

  class EventEmitter {
    static on(
      emitter: NodeJS.EventEmitter,
      eventName: string,
      options?: StaticEventEmitterOptions,
    ): AsyncIterableIterator<any>

    static on<T, K extends EventName<T>>(
      emitter: TypedEmitter<T>,
      eventName: K,
      options?: StaticEventEmitterOptions,
    ): AsyncIterableIterator<[T[K]]>

    static on<T>(
      emitter: TypedEmitter<T>,
      eventName: string,
      options?: StaticEventEmitterOptions,
    ): AsyncIterableIterator<any>
  }
}

type Position = {
  x: number
  y: number
  z: number
}

type SiblingEntity = {
  name: string
  level: number
  type: string
  size: number
}

type Entity = {
  id: string
  name: string
  type: string
  level: number
  size: number
}

type Packets = {
  packet: { type: string; payload: any }
  'packet/signatureRequest': { payload: string } // server -> client
  'packet/signatureResponse': { bytes: string; signature: string; zk: boolean } // client -> server
  'packet/error': { code: string } // server -> client
  'packet/entityGroupSpawn': {
    id: string
    position: Position
    entities: Entity[]
  } // server -> client
  'packet/entityDespawn': { ids: string[] } // server -> client
  'packet/characterAction': { id: string; action: string } // both ways
  'packet/characterPosition': { id: string; position: Position } // both ways
  'packet/serverInfo': {
    player_count: number
    max_players: number
  } // server -> client
  'packet/chatMessage': { id: string; message: string; address: string } // both ways
  'packet/characterHealth': { id: string; health: number } // server -> client
}

type Packet = {
  [K in keyof Packets]: { type: K; payload: Packets[K] }
}[keyof Packets]

export type send = <T extends keyof Packets>(
  type: T,
  payload: Packets[T],
) => void
