// @generated by protoc-gen-es v2.0.0 with parameter "target=js"
// @generated from file ares.proto (package ares, syntax proto3)
/* eslint-disable */

import {
  enumDesc,
  fileDesc,
  messageDesc,
  tsEnum,
} from '@bufbuild/protobuf/codegenv1'

/**
 * Describes the file ares.proto.
 */
export const file_ares =
  /*@__PURE__*/
  fileDesc(
    'CgphcmVzLnByb3RvEgRhcmVzIvYHCgZQYWNrZXQSMgoQc2lnbmF0dXJlUmVxdWVzdBgBIAEoCzIWLmFyZXMuU2lnbmF0dXJlUmVxdWVzdEgAEjQKEXNpZ25hdHVyZVJlc3BvbnNlGAMgASgLMhcuYXJlcy5TaWduYXR1cmVSZXNwb25zZUgAEjAKD2NoYXJhY3RlckFjdGlvbhgEIAEoCzIVLmFyZXMuQ2hhcmFjdGVyQWN0aW9uSAASNAoRY2hhcmFjdGVyUG9zaXRpb24YBSABKAsyFy5hcmVzLkNoYXJhY3RlclBvc2l0aW9uSAASNAoRY2hhcmFjdGVyc0Rlc3Bhd24YByABKAsyFy5hcmVzLkNoYXJhY3RlcnNEZXNwYXduSAASMAoPY2hhcmFjdGVySGVhbHRoGAogASgLMhUuYXJlcy5DaGFyYWN0ZXJIZWFsdGhIABJAChdjaGFyYWN0ZXJBdHRhY2tNb2JHcm91cBgLIAEoCzIdLmFyZXMuQ2hhcmFjdGVyQXR0YWNrTW9iR3JvdXBIABIyChBlbnRpdHlHcm91cFNwYXduGAYgASgLMhYuYXJlcy5FbnRpdHlHcm91cFNwYXduSAASOAoTZW50aXR5R3JvdXBzRGVzcGF3bhgNIAEoCzIZLmFyZXMuRW50aXR5R3JvdXBzRGVzcGF3bkgAEiYKCnNlcnZlckluZm8YCCABKAsyEC5hcmVzLlNlcnZlckluZm9IABIoCgtjaGF0TWVzc2FnZRgJIAEoCzIRLmFyZXMuQ2hhdE1lc3NhZ2VIABImCgpmaWdodFNwYXduGAwgASgLMhAuYXJlcy5GaWdodFNwYXduSAASLAoNZmlnaHRzRGVzcGF3bhgOIAEoCzITLmFyZXMuRmlnaHRzRGVzcGF3bkgAEjAKD3JlcXVlc3RSZXNwb25zZRgPIAEoCzIVLmFyZXMuUmVxdWVzdFJlc3BvbnNlSAASIgoIc3VpRXZlbnQYECABKAsyDi5hcmVzLlN1aUV2ZW50SAASNgoSbWFya2V0Q2F0ZWdvcnlJdGVtGBEgASgLMhguYXJlcy5NYXJrZXRDYXRlZ29yeUl0ZW1IABJGChptYXJrZXRDYXRlZ29yeUl0ZW1zUmVxdWVzdBgSIAEoCzIgLmFyZXMuTWFya2V0Q2F0ZWdvcnlJdGVtc1JlcXVlc3RIABI2ChJtYXJrZXRJdGVtTGlzdGluZ3MYEyABKAsyGC5hcmVzLk1hcmtldEl0ZW1MaXN0aW5nc0gAEkQKGW1hcmtldEl0ZW1MaXN0aW5nc1JlcXVlc3QYFCABKAsyHy5hcmVzLk1hcmtldEl0ZW1MaXN0aW5nc1JlcXVlc3RIAEIGCgR0eXBlIiMKEFNpZ25hdHVyZVJlcXVlc3QSDwoHcGF5bG9hZBgBIAEoCSImCgVFcnJvchIdCgRjb2RlGAEgASgOMg8uYXJlcy5FcnJvckNvZGUiYAoQRW50aXR5R3JvdXBTcGF3bhIKCgJpZBgBIAEoCRIgCghwb3NpdGlvbhgCIAEoCzIOLmFyZXMuUG9zaXRpb24SHgoIZW50aXRpZXMYAyADKAsyDC5hcmVzLkVudGl0eSIgChFDaGFyYWN0ZXJzRGVzcGF3bhILCgNpZHMYASADKAkiIgoTRW50aXR5R3JvdXBzRGVzcGF3bhILCgNpZHMYASADKAkiHAoNRmlnaHRzRGVzcGF3bhILCgNpZHMYASADKAkiNwoKU2VydmVySW5mbxIUCgxwbGF5ZXJfY291bnQYASABKA0SEwoLbWF4X3BsYXllcnMYAiABKA0iLQoPQ2hhcmFjdGVySGVhbHRoEgoKAmlkGAEgASgJEg4KBmhlYWx0aBgCIAEoDSLIAgoKRmlnaHRTcGF3bhIKCgJpZBgBIAEoCRIbCgV0ZWFtMRgCIAMoCzIMLmFyZXMuRW50aXR5EhsKBXRlYW0yGAMgAygLMgwuYXJlcy5FbnRpdHkSEgoKc3BlY3RhdG9ycxgEIAMoCRIgCgh0b3BfbGVmdBgFIAEoCzIOLmFyZXMuUG9zaXRpb24SJAoMYm90dG9tX3JpZ2h0GAYgASgLMg4uYXJlcy5Qb3NpdGlvbhIPCgdzdGFydGVkGAcgASgIEg4KBmxvY2tlZBgIIAEoCBIRCgluZWVkX2hlbHAYCSABKAgSJwoPdGVhbTFfcG9zaXRpb25zGAogAygLMg4uYXJlcy5Qb3NpdGlvbhInCg90ZWFtMl9wb3NpdGlvbnMYCyADKAsyDi5hcmVzLlBvc2l0aW9uEhIKCnN0YXJ0X3RpbWUYDCABKAQiJwoIU3VpRXZlbnQSDQoFZXZlbnQYASABKAkSDAoEZGF0YRgCIAEoCSJxChJNYXJrZXRDYXRlZ29yeUl0ZW0SEQoJaXRlbV90eXBlGAEgASgJEhEKCWltYWdlX3VybBgCIAEoCRIMCgRuYW1lGAMgASgJEhIKCml0ZW1fY291bnQYBCABKA0SEwoLcHJpY2VfZmxvb3IYBSABKAkiJgoSTWFya2V0SXRlbUxpc3RpbmdzEhAKCGxpc3RpbmdzGAEgAygJIkEKEVNpZ25hdHVyZVJlc3BvbnNlEg0KBWJ5dGVzGAEgASgJEhEKCXNpZ25hdHVyZRgCIAEoCRIKCgJ6axgDIAEoCCI7ChdDaGFyYWN0ZXJBdHRhY2tNb2JHcm91cBIKCgJpZBgBIAEoCRIUCgxtb2JfZ3JvdXBfaWQYAiABKAkiLgoaTWFya2V0Q2F0ZWdvcnlJdGVtc1JlcXVlc3QSEAoIY2F0ZWdvcnkYASABKAkiTAoZTWFya2V0SXRlbUxpc3RpbmdzUmVxdWVzdBIRCglpdGVtX3R5cGUYASABKAkSDQoFc3RhcnQYAiABKA0SDQoFbGltaXQYAyABKA0iOwoPQ2hhcmFjdGVyQWN0aW9uEgoKAmlkGAEgASgJEhwKBmFjdGlvbhgCIAEoDjIMLmFyZXMuQWN0aW9uIkEKEUNoYXJhY3RlclBvc2l0aW9uEgoKAmlkGAEgASgJEiAKCHBvc2l0aW9uGAIgASgLMg4uYXJlcy5Qb3NpdGlvbiI7CgtDaGF0TWVzc2FnZRIKCgJpZBgBIAEoCRIPCgdtZXNzYWdlGAIgASgJEg8KB2FkZHJlc3MYAyABKAkiLgoPUmVxdWVzdFJlc3BvbnNlEgoKAmlkGAEgASgJEg8KB21lc3NhZ2UYAiABKAkiKwoIUG9zaXRpb24SCQoBeBgBIAEoAhIJCgF5GAIgASgCEgkKAXoYAyABKAIirwIKBkVudGl0eRIKCgJpZBgBIAEoCRIMCgRuYW1lGAIgASgJEiAKCHBvc2l0aW9uGAMgASgLMg4uYXJlcy5Qb3NpdGlvbhIOCgZoZWFsdGgYBCABKA0SEgoKbWF4X2hlYWx0aBgFIAEoDRIMCgR0eXBlGAYgASgJEg0KBWxldmVsGAcgASgNEgoKAmFwGAggASgNEgoKAm1wGAkgASgNEhgKEGVhcnRoX3Jlc2lzdGFuY2UYCiABKA0SFwoPZmlyZV9yZXNpc3RhbmNlGAsgASgNEhgKEHdhdGVyX3Jlc2lzdGFuY2UYDCABKA0SFgoOYWlyX3Jlc2lzdGFuY2UYDSABKA0SDwoHZWZmZWN0cxgOIAMoCRIMCgRzaXplGA8gASgCEgwKBHNraW4YECABKAkqHwoGQ2xhc3NlEgoKBlNFTlNISRAAEgkKBVlBSklOEAEqHwoJRXJyb3JDb2RlEhIKDk5PX0JFVEFfQUNDRVNTEAAqmAEKBkFjdGlvbhIICgRJRExFEAASBwoDUlVOEAESCAoESlVNUBACEgwKCEpVTVBfUlVOEAMSCAoERkFMTBAEEgkKBURFQVRIEAUSDgoKQVRUQUNLX0NBQxAGEg4KClNQRUxMX0JVRkYQBxIQCgxTUEVMTF9UQVJHRVQQCBIJCgVEQU5DRRAJEgcKA1NJVBAKEggKBFdBTEsQC2IGcHJvdG8z',
  )

/**
 * Describes the message ares.Packet.
 * Use `create(PacketSchema)` to create a new message.
 */
export const PacketSchema = /*@__PURE__*/ messageDesc(file_ares, 0)

/**
 * Describes the message ares.SignatureRequest.
 * Use `create(SignatureRequestSchema)` to create a new message.
 */
export const SignatureRequestSchema = /*@__PURE__*/ messageDesc(file_ares, 1)

/**
 * Describes the message ares.Error.
 * Use `create(ErrorSchema)` to create a new message.
 */
export const ErrorSchema = /*@__PURE__*/ messageDesc(file_ares, 2)

/**
 * Describes the message ares.EntityGroupSpawn.
 * Use `create(EntityGroupSpawnSchema)` to create a new message.
 */
export const EntityGroupSpawnSchema = /*@__PURE__*/ messageDesc(file_ares, 3)

/**
 * Describes the message ares.CharactersDespawn.
 * Use `create(CharactersDespawnSchema)` to create a new message.
 */
export const CharactersDespawnSchema = /*@__PURE__*/ messageDesc(file_ares, 4)

/**
 * Describes the message ares.EntityGroupsDespawn.
 * Use `create(EntityGroupsDespawnSchema)` to create a new message.
 */
export const EntityGroupsDespawnSchema = /*@__PURE__*/ messageDesc(file_ares, 5)

/**
 * Describes the message ares.FightsDespawn.
 * Use `create(FightsDespawnSchema)` to create a new message.
 */
export const FightsDespawnSchema = /*@__PURE__*/ messageDesc(file_ares, 6)

/**
 * Describes the message ares.ServerInfo.
 * Use `create(ServerInfoSchema)` to create a new message.
 */
export const ServerInfoSchema = /*@__PURE__*/ messageDesc(file_ares, 7)

/**
 * Describes the message ares.CharacterHealth.
 * Use `create(CharacterHealthSchema)` to create a new message.
 */
export const CharacterHealthSchema = /*@__PURE__*/ messageDesc(file_ares, 8)

/**
 * Describes the message ares.FightSpawn.
 * Use `create(FightSpawnSchema)` to create a new message.
 */
export const FightSpawnSchema = /*@__PURE__*/ messageDesc(file_ares, 9)

/**
 * Describes the message ares.SuiEvent.
 * Use `create(SuiEventSchema)` to create a new message.
 */
export const SuiEventSchema = /*@__PURE__*/ messageDesc(file_ares, 10)

/**
 * Describes the message ares.MarketCategoryItem.
 * Use `create(MarketCategoryItemSchema)` to create a new message.
 */
export const MarketCategoryItemSchema = /*@__PURE__*/ messageDesc(file_ares, 11)

/**
 * Describes the message ares.MarketItemListings.
 * Use `create(MarketItemListingsSchema)` to create a new message.
 */
export const MarketItemListingsSchema = /*@__PURE__*/ messageDesc(file_ares, 12)

/**
 * Describes the message ares.SignatureResponse.
 * Use `create(SignatureResponseSchema)` to create a new message.
 */
export const SignatureResponseSchema = /*@__PURE__*/ messageDesc(file_ares, 13)

/**
 * Describes the message ares.CharacterAttackMobGroup.
 * Use `create(CharacterAttackMobGroupSchema)` to create a new message.
 */
export const CharacterAttackMobGroupSchema =
  /*@__PURE__*/
  messageDesc(file_ares, 14)

/**
 * Describes the message ares.MarketCategoryItemsRequest.
 * Use `create(MarketCategoryItemsRequestSchema)` to create a new message.
 */
export const MarketCategoryItemsRequestSchema =
  /*@__PURE__*/
  messageDesc(file_ares, 15)

/**
 * Describes the message ares.MarketItemListingsRequest.
 * Use `create(MarketItemListingsRequestSchema)` to create a new message.
 */
export const MarketItemListingsRequestSchema =
  /*@__PURE__*/
  messageDesc(file_ares, 16)

/**
 * Describes the message ares.CharacterAction.
 * Use `create(CharacterActionSchema)` to create a new message.
 */
export const CharacterActionSchema = /*@__PURE__*/ messageDesc(file_ares, 17)

/**
 * Describes the message ares.CharacterPosition.
 * Use `create(CharacterPositionSchema)` to create a new message.
 */
export const CharacterPositionSchema = /*@__PURE__*/ messageDesc(file_ares, 18)

/**
 * Describes the message ares.ChatMessage.
 * Use `create(ChatMessageSchema)` to create a new message.
 */
export const ChatMessageSchema = /*@__PURE__*/ messageDesc(file_ares, 19)

/**
 * Describes the message ares.RequestResponse.
 * Use `create(RequestResponseSchema)` to create a new message.
 */
export const RequestResponseSchema = /*@__PURE__*/ messageDesc(file_ares, 20)

/**
 * Describes the message ares.Position.
 * Use `create(PositionSchema)` to create a new message.
 */
export const PositionSchema = /*@__PURE__*/ messageDesc(file_ares, 21)

/**
 * Describes the message ares.Entity.
 * Use `create(EntitySchema)` to create a new message.
 */
export const EntitySchema = /*@__PURE__*/ messageDesc(file_ares, 22)

/**
 * Describes the enum ares.Classe.
 */
export const ClasseSchema = /*@__PURE__*/ enumDesc(file_ares, 0)

/**
 * @generated from enum ares.Classe
 */
export const Classe = /*@__PURE__*/ tsEnum(ClasseSchema)

/**
 * Describes the enum ares.ErrorCode.
 */
export const ErrorCodeSchema = /*@__PURE__*/ enumDesc(file_ares, 1)

/**
 * @generated from enum ares.ErrorCode
 */
export const ErrorCode = /*@__PURE__*/ tsEnum(ErrorCodeSchema)

/**
 * Describes the enum ares.Action.
 */
export const ActionSchema = /*@__PURE__*/ enumDesc(file_ares, 2)

/**
 * @generated from enum ares.Action
 */
export const Action = /*@__PURE__*/ tsEnum(ActionSchema)
