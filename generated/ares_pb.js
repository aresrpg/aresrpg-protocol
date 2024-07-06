// @generated by protoc-gen-es v1.10.0 with parameter "target=js"
// @generated from file ares.proto (package ares, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from '@bufbuild/protobuf'

/**
 * @generated from enum ares.Classe
 */
export const Classe = /*@__PURE__*/ proto3.makeEnum('ares.Classe', [
  { no: 0, name: 'IOP' },
  { no: 1, name: 'SRAM' },
])

/**
 * @generated from enum ares.ErrorCode
 */
export const ErrorCode = /*@__PURE__*/ proto3.makeEnum('ares.ErrorCode', [
  { no: 0, name: 'NO_BETA_ACCESS' },
])

/**
 * @generated from enum ares.Action
 */
export const Action = /*@__PURE__*/ proto3.makeEnum('ares.Action', [
  { no: 0, name: 'IDLE' },
  { no: 1, name: 'RUN' },
  { no: 2, name: 'JUMP' },
  { no: 3, name: 'JUMP_RUN' },
  { no: 4, name: 'FALL' },
  { no: 5, name: 'DEATH' },
  { no: 6, name: 'ATTACK_CAC' },
  { no: 7, name: 'SPELL_BUFF' },
  { no: 8, name: 'SPELL_TARGET' },
  { no: 9, name: 'DANCE' },
  { no: 10, name: 'SIT' },
  { no: 11, name: 'WALK' },
])

/**
 * @generated from message ares.Packet
 */
export const Packet = /*@__PURE__*/ proto3.makeMessageType(
  'ares.Packet',
  () => [
    {
      no: 1,
      name: 'signatureRequest',
      kind: 'message',
      T: SignatureRequest,
      oneof: 'type',
    },
    { no: 2, name: 'error', kind: 'message', T: Error, oneof: 'type' },
    {
      no: 3,
      name: 'signatureResponse',
      kind: 'message',
      T: SignatureResponse,
      oneof: 'type',
    },
    {
      no: 4,
      name: 'characterAction',
      kind: 'message',
      T: CharacterAction,
      oneof: 'type',
    },
    {
      no: 5,
      name: 'characterPosition',
      kind: 'message',
      T: CharacterPosition,
      oneof: 'type',
    },
    {
      no: 6,
      name: 'entityGroupSpawn',
      kind: 'message',
      T: EntityGroupSpawn,
      oneof: 'type',
    },
    {
      no: 7,
      name: 'entityDespawn',
      kind: 'message',
      T: EntityDespawn,
      oneof: 'type',
    },
    {
      no: 8,
      name: 'serverInfo',
      kind: 'message',
      T: ServerInfo,
      oneof: 'type',
    },
    {
      no: 9,
      name: 'chatMessage',
      kind: 'message',
      T: ChatMessage,
      oneof: 'type',
    },
    {
      no: 10,
      name: 'characterHealth',
      kind: 'message',
      T: CharacterHealth,
      oneof: 'type',
    },
  ],
)

/**
 * @generated from message ares.SignatureRequest
 */
export const SignatureRequest = /*@__PURE__*/ proto3.makeMessageType(
  'ares.SignatureRequest',
  () => [
    { no: 1, name: 'payload', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ],
)

/**
 * @generated from message ares.Error
 */
export const Error = /*@__PURE__*/ proto3.makeMessageType('ares.Error', () => [
  { no: 1, name: 'code', kind: 'enum', T: proto3.getEnumType(ErrorCode) },
])

/**
 * @generated from message ares.EntityGroupSpawn
 */
export const EntityGroupSpawn = /*@__PURE__*/ proto3.makeMessageType(
  'ares.EntityGroupSpawn',
  () => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'position', kind: 'message', T: Position },
    { no: 3, name: 'entities', kind: 'message', T: Entity, repeated: true },
  ],
)

/**
 * @generated from message ares.EntityDespawn
 */
export const EntityDespawn = /*@__PURE__*/ proto3.makeMessageType(
  'ares.EntityDespawn',
  () => [
    {
      no: 1,
      name: 'ids',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
  ],
)

/**
 * @generated from message ares.ServerInfo
 */
export const ServerInfo = /*@__PURE__*/ proto3.makeMessageType(
  'ares.ServerInfo',
  () => [
    {
      no: 1,
      name: 'player_count',
      kind: 'scalar',
      T: 13 /* ScalarType.UINT32 */,
    },
    {
      no: 2,
      name: 'max_players',
      kind: 'scalar',
      T: 13 /* ScalarType.UINT32 */,
    },
  ],
)

/**
 * @generated from message ares.CharacterHealth
 */
export const CharacterHealth = /*@__PURE__*/ proto3.makeMessageType(
  'ares.CharacterHealth',
  () => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'health', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
  ],
)

/**
 * @generated from message ares.SignatureResponse
 */
export const SignatureResponse = /*@__PURE__*/ proto3.makeMessageType(
  'ares.SignatureResponse',
  () => [
    { no: 1, name: 'bytes', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'signature', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'zk', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ],
)

/**
 * @generated from message ares.CharacterAction
 */
export const CharacterAction = /*@__PURE__*/ proto3.makeMessageType(
  'ares.CharacterAction',
  () => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'action', kind: 'enum', T: proto3.getEnumType(Action) },
  ],
)

/**
 * @generated from message ares.CharacterPosition
 */
export const CharacterPosition = /*@__PURE__*/ proto3.makeMessageType(
  'ares.CharacterPosition',
  () => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'position', kind: 'message', T: Position },
  ],
)

/**
 * @generated from message ares.ChatMessage
 */
export const ChatMessage = /*@__PURE__*/ proto3.makeMessageType(
  'ares.ChatMessage',
  () => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'message', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ],
)

/**
 * @generated from message ares.Position
 */
export const Position = /*@__PURE__*/ proto3.makeMessageType(
  'ares.Position',
  () => [
    { no: 1, name: 'x', kind: 'scalar', T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: 'y', kind: 'scalar', T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: 'z', kind: 'scalar', T: 2 /* ScalarType.FLOAT */ },
  ],
)

/**
 * @generated from message ares.Entity
 */
export const Entity = /*@__PURE__*/ proto3.makeMessageType(
  'ares.Entity',
  () => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'type', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 5, name: 'level', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: 'size', kind: 'scalar', T: 2 /* ScalarType.FLOAT */ },
  ],
)
