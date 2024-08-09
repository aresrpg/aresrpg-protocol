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

type Client = import('./index').Client

type Position = {
  x: number
  y: number
  z: number
}

type Entity = {
  id: string
  name: string
  type: string
  skin: string
  level: number
  size: number
  position: Position
  health: number
  max_health: number
  ap: number
  mp: number
  earth_resistance: number
  fire_resistance: number
  water_resistance: number
  air_resistance: number
  effects: string[]
}

type EntityGroup = {
  id: string
  position: Position
  entities: Entity[]
}

type Fight = {
  id: string
  team1: Entity[]
  team2: Entity[]
  team1_positions: Position[]
  team2_positions: Position[]
  spectators: string[]
  top_left: Position
  bottom_right: Position
  started: boolean
  locked: boolean
  need_help: boolean
  start_time: number
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
  'packet/entityGroupsDespawn': { ids: string[] } // server -> client
  'packet/charactersDespawn': { ids: string[] } // server -> client
  'packet/characterAction': { id: string; action: string } // both ways
  'packet/characterPosition': { id: string; position: Position } // both ways
  'packet/serverInfo': {
    player_count: number
    max_players: number
  } // server -> client
  'packet/chatMessage': { id: string; message: string; address: string } // both ways
  'packet/characterHealth': { id: string; health: number } // server -> client
  'packet/characterAttackMobGroup': { id: string; mob_group_id: string } // client -> server
  'packet/fightSpawn': Fight // server -> client
  'packet/fightsDespawn': { ids: string[] } // server -> client
  'packet/requestResponse': { id: string; message: string } // server <-> client
}

type Packet = {
  [K in keyof Packets]: { type: K; payload: Packets[K] }
}[keyof Packets]

export type send = <T extends keyof Packets>(
  type: T,
  payload: Packets[T],
) => void
