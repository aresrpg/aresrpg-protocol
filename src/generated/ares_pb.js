// @generated by protoc-gen-es v2.2.2 with parameter "target=js"
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
    'CgphcmVzLnByb3RvEgRhcmVzIowLCgZQYWNrZXQSMgoQc2lnbmF0dXJlUmVxdWVzdBgBIAEoCzIWLmFyZXMuU2lnbmF0dXJlUmVxdWVzdEgAEjQKEXNpZ25hdHVyZVJlc3BvbnNlGAMgASgLMhcuYXJlcy5TaWduYXR1cmVSZXNwb25zZUgAEjAKD2NoYXJhY3RlckFjdGlvbhgEIAEoCzIVLmFyZXMuQ2hhcmFjdGVyQWN0aW9uSAASNAoRY2hhcmFjdGVyUG9zaXRpb24YBSABKAsyFy5hcmVzLkNoYXJhY3RlclBvc2l0aW9uSAASNAoRY2hhcmFjdGVyc0Rlc3Bhd24YByABKAsyFy5hcmVzLkNoYXJhY3RlcnNEZXNwYXduSAASMAoPY2hhcmFjdGVySGVhbHRoGAogASgLMhUuYXJlcy5DaGFyYWN0ZXJIZWFsdGhIABJAChdjaGFyYWN0ZXJBdHRhY2tNb2JHcm91cBgLIAEoCzIdLmFyZXMuQ2hhcmFjdGVyQXR0YWNrTW9iR3JvdXBIABIyChBlbnRpdHlHcm91cFNwYXduGAYgASgLMhYuYXJlcy5FbnRpdHlHcm91cFNwYXduSAASOAoTZW50aXR5R3JvdXBzRGVzcGF3bhgNIAEoCzIZLmFyZXMuRW50aXR5R3JvdXBzRGVzcGF3bkgAEiYKCnNlcnZlckluZm8YCCABKAsyEC5hcmVzLlNlcnZlckluZm9IABIoCgtjaGF0TWVzc2FnZRgJIAEoCzIRLmFyZXMuQ2hhdE1lc3NhZ2VIABImCgpmaWdodFNwYXduGAwgASgLMhAuYXJlcy5GaWdodFNwYXduSAASLAoNZmlnaHRzRGVzcGF3bhgOIAEoCzITLmFyZXMuRmlnaHRzRGVzcGF3bkgAEjAKD3JlcXVlc3RSZXNwb25zZRgPIAEoCzIVLmFyZXMuUmVxdWVzdFJlc3BvbnNlSAASIgoIc3VpRXZlbnQYECABKAsyDi5hcmVzLlN1aUV2ZW50SAASOAoTbWFya2V0Q2F0ZWdvcnlJdGVtcxgRIAEoCzIZLmFyZXMuTWFya2V0Q2F0ZWdvcnlJdGVtc0gAEkYKGm1hcmtldENhdGVnb3J5SXRlbXNSZXF1ZXN0GBIgASgLMiAuYXJlcy5NYXJrZXRDYXRlZ29yeUl0ZW1zUmVxdWVzdEgAEjYKEm1hcmtldEl0ZW1MaXN0aW5ncxgTIAEoCzIYLmFyZXMuTWFya2V0SXRlbUxpc3RpbmdzSAASRAoZbWFya2V0SXRlbUxpc3RpbmdzUmVxdWVzdBgUIAEoCzIfLmFyZXMuTWFya2V0SXRlbUxpc3RpbmdzUmVxdWVzdEgAEjYKEmNvbm5lY3Rpb25BY2NlcHRlZBgVIAEoCzIYLmFyZXMuQ29ubmVjdGlvbkFjY2VwdGVkSAASNAoRdHJhbnNhY3Rpb25DcmVhdGUYFiABKAsyFy5hcmVzLlRyYW5zYWN0aW9uQ3JlYXRlSAASPgoWdHJhbnNhY3Rpb25TaWduUmVxdWVzdBgXIAEoCzIcLmFyZXMuVHJhbnNhY3Rpb25TaWduUmVxdWVzdEgAEkAKF3RyYW5zYWN0aW9uU2lnblJlc3BvbnNlGBggASgLMh0uYXJlcy5UcmFuc2FjdGlvblNpZ25SZXNwb25zZUgAEjQKEXRyYW5zYWN0aW9uUmVzdWx0GBkgASgLMhcuYXJlcy5UcmFuc2FjdGlvblJlc3VsdEgAEiAKB2ZhaWx1cmUYGiABKAsyDS5hcmVzLkZhaWx1cmVIABIcCgVjaHVuaxgbIAEoCzILLmFyZXMuQ2h1bmtIABIsCg1zZXJ2ZXJDb21tYW5kGBwgASgLMhMuYXJlcy5TZXJ2ZXJDb21tYW5kSABCBgoEdHlwZSIjChBTaWduYXR1cmVSZXF1ZXN0Eg8KB3BheWxvYWQYASABKAkiJgoFRXJyb3ISHQoEY29kZRgBIAEoDjIPLmFyZXMuRXJyb3JDb2RlImAKEEVudGl0eUdyb3VwU3Bhd24SCgoCaWQYASABKAkSIAoIcG9zaXRpb24YAiABKAsyDi5hcmVzLlBvc2l0aW9uEh4KCGVudGl0aWVzGAMgAygLMgwuYXJlcy5FbnRpdHkiIAoRQ2hhcmFjdGVyc0Rlc3Bhd24SCwoDaWRzGAEgAygJIiIKE0VudGl0eUdyb3Vwc0Rlc3Bhd24SCwoDaWRzGAEgAygJIhwKDUZpZ2h0c0Rlc3Bhd24SCwoDaWRzGAEgAygJIjcKClNlcnZlckluZm8SFAoMcGxheWVyX2NvdW50GAEgASgNEhMKC21heF9wbGF5ZXJzGAIgASgNIi0KD0NoYXJhY3RlckhlYWx0aBIKCgJpZBgBIAEoCRIOCgZoZWFsdGgYAiABKA0i0AEKCkZpZ2h0U3Bhd24SCgoCaWQYASABKAkSGwoFdGVhbTEYAiADKAsyDC5hcmVzLkVudGl0eRIbCgV0ZWFtMhgDIAMoCzIMLmFyZXMuRW50aXR5EhIKCnNwZWN0YXRvcnMYBCADKAkSIAoIcG9zaXRpb24YBSABKAsyDi5hcmVzLlBvc2l0aW9uEg8KB3N0YXJ0ZWQYBiABKAgSDgoGbG9ja2VkGAcgASgIEhEKCW5lZWRfaGVscBgIIAEoCBISCgpzdGFydF90aW1lGAkgASgEIicKCFN1aUV2ZW50Eg0KBWV2ZW50GAEgASgJEgwKBGRhdGEYAiABKAkicQoSTWFya2V0Q2F0ZWdvcnlJdGVtEhEKCWl0ZW1fdHlwZRgBIAEoCRIRCglpbWFnZV91cmwYAiABKAkSDAoEbmFtZRgDIAEoCRISCgppdGVtX2NvdW50GAQgASgNEhMKC3ByaWNlX2Zsb29yGAUgASgJIj4KE01hcmtldENhdGVnb3J5SXRlbXMSJwoFaXRlbXMYASADKAsyGC5hcmVzLk1hcmtldENhdGVnb3J5SXRlbSImChJNYXJrZXRJdGVtTGlzdGluZ3MSEAoIbGlzdGluZ3MYASADKAkiJQoSQ29ubmVjdGlvbkFjY2VwdGVkEg8KB2FkZHJlc3MYASABKAkiMwoWVHJhbnNhY3Rpb25TaWduUmVxdWVzdBIKCgJpZBgBIAEoCRINCgVieXRlcxgCIAEoCSIaCgdGYWlsdXJlEg8KB21lc3NhZ2UYASABKAkiJAoFQ2h1bmsSCwoDa2V5GAEgASgJEg4KBmNvbHVtbhgCIAEoCSI1ChFTaWduYXR1cmVSZXNwb25zZRINCgVieXRlcxgBIAEoCRIRCglzaWduYXR1cmUYAiABKAkiOwoXQ2hhcmFjdGVyQXR0YWNrTW9iR3JvdXASCgoCaWQYASABKAkSFAoMbW9iX2dyb3VwX2lkGAIgASgJIi4KGk1hcmtldENhdGVnb3J5SXRlbXNSZXF1ZXN0EhAKCGNhdGVnb3J5GAEgASgJIkwKGU1hcmtldEl0ZW1MaXN0aW5nc1JlcXVlc3QSEQoJaXRlbV90eXBlGAEgASgJEg0KBXN0YXJ0GAIgASgNEg0KBWxpbWl0GAMgASgNIjAKEVRyYW5zYWN0aW9uQ3JlYXRlEgoKAmlkGAEgASgJEg8KB21lc3NhZ2UYAiABKAkiOAoXVHJhbnNhY3Rpb25TaWduUmVzcG9uc2USCgoCaWQYASABKAkSEQoJc2lnbmF0dXJlGAIgASgJIkAKEVRyYW5zYWN0aW9uUmVzdWx0EgoKAmlkGAEgASgJEg4KBmRpZ2VzdBgCIAEoCRIPCgdzdWNjZXNzGAMgASgIIi4KDVNlcnZlckNvbW1hbmQSDwoHY29tbWFuZBgBIAEoCRIMCgRhcmdzGAIgAygJIjsKD0NoYXJhY3RlckFjdGlvbhIKCgJpZBgBIAEoCRIcCgZhY3Rpb24YAiABKA4yDC5hcmVzLkFjdGlvbiJBChFDaGFyYWN0ZXJQb3NpdGlvbhIKCgJpZBgBIAEoCRIgCghwb3NpdGlvbhgCIAEoCzIOLmFyZXMuUG9zaXRpb24iOwoLQ2hhdE1lc3NhZ2USCgoCaWQYASABKAkSDwoHbWVzc2FnZRgCIAEoCRIPCgdhZGRyZXNzGAMgASgJIi4KD1JlcXVlc3RSZXNwb25zZRIKCgJpZBgBIAEoCRIPCgdtZXNzYWdlGAIgASgJIisKD0ZpZ2h0TW92ZVRvQ2VsbBIKCgJpZBgBIAEoCRIMCgRjZWxsGAIgASgNIisKCFBvc2l0aW9uEgkKAXgYASABKAISCQoBeRgCIAEoAhIJCgF6GAMgASgCIq8CCgZFbnRpdHkSCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRIgCghwb3NpdGlvbhgDIAEoCzIOLmFyZXMuUG9zaXRpb24SDgoGaGVhbHRoGAQgASgNEhIKCm1heF9oZWFsdGgYBSABKA0SDAoEdHlwZRgGIAEoCRINCgVsZXZlbBgHIAEoDRIKCgJhcBgIIAEoDRIKCgJtcBgJIAEoDRIYChBlYXJ0aF9yZXNpc3RhbmNlGAogASgNEhcKD2ZpcmVfcmVzaXN0YW5jZRgLIAEoDRIYChB3YXRlcl9yZXNpc3RhbmNlGAwgASgNEhYKDmFpcl9yZXNpc3RhbmNlGA0gASgNEg8KB2VmZmVjdHMYDiADKAkSDAoEc2l6ZRgPIAEoAhIMCgRza2luGBAgASgJKh8KBkNsYXNzZRIKCgZTRU5TSEkQABIJCgVZQUpJThABKh8KCUVycm9yQ29kZRISCg5OT19CRVRBX0FDQ0VTUxAAKpgBCgZBY3Rpb24SCAoESURMRRAAEgcKA1JVThABEggKBEpVTVAQAhIMCghKVU1QX1JVThADEggKBEZBTEwQBBIJCgVERUFUSBAFEg4KCkFUVEFDS19DQUMQBhIOCgpTUEVMTF9CVUZGEAcSEAoMU1BFTExfVEFSR0VUEAgSCQoFREFOQ0UQCRIHCgNTSVQQChIICgRXQUxLEAtiBnByb3RvMw',
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
 * Describes the message ares.MarketCategoryItems.
 * Use `create(MarketCategoryItemsSchema)` to create a new message.
 */
export const MarketCategoryItemsSchema =
  /*@__PURE__*/
  messageDesc(file_ares, 12)

/**
 * Describes the message ares.MarketItemListings.
 * Use `create(MarketItemListingsSchema)` to create a new message.
 */
export const MarketItemListingsSchema = /*@__PURE__*/ messageDesc(file_ares, 13)

/**
 * Describes the message ares.ConnectionAccepted.
 * Use `create(ConnectionAcceptedSchema)` to create a new message.
 */
export const ConnectionAcceptedSchema = /*@__PURE__*/ messageDesc(file_ares, 14)

/**
 * Describes the message ares.TransactionSignRequest.
 * Use `create(TransactionSignRequestSchema)` to create a new message.
 */
export const TransactionSignRequestSchema =
  /*@__PURE__*/
  messageDesc(file_ares, 15)

/**
 * Describes the message ares.Failure.
 * Use `create(FailureSchema)` to create a new message.
 */
export const FailureSchema = /*@__PURE__*/ messageDesc(file_ares, 16)

/**
 * Describes the message ares.Chunk.
 * Use `create(ChunkSchema)` to create a new message.
 */
export const ChunkSchema = /*@__PURE__*/ messageDesc(file_ares, 17)

/**
 * Describes the message ares.SignatureResponse.
 * Use `create(SignatureResponseSchema)` to create a new message.
 */
export const SignatureResponseSchema = /*@__PURE__*/ messageDesc(file_ares, 18)

/**
 * Describes the message ares.CharacterAttackMobGroup.
 * Use `create(CharacterAttackMobGroupSchema)` to create a new message.
 */
export const CharacterAttackMobGroupSchema =
  /*@__PURE__*/
  messageDesc(file_ares, 19)

/**
 * Describes the message ares.MarketCategoryItemsRequest.
 * Use `create(MarketCategoryItemsRequestSchema)` to create a new message.
 */
export const MarketCategoryItemsRequestSchema =
  /*@__PURE__*/
  messageDesc(file_ares, 20)

/**
 * Describes the message ares.MarketItemListingsRequest.
 * Use `create(MarketItemListingsRequestSchema)` to create a new message.
 */
export const MarketItemListingsRequestSchema =
  /*@__PURE__*/
  messageDesc(file_ares, 21)

/**
 * Describes the message ares.TransactionCreate.
 * Use `create(TransactionCreateSchema)` to create a new message.
 */
export const TransactionCreateSchema = /*@__PURE__*/ messageDesc(file_ares, 22)

/**
 * Describes the message ares.TransactionSignResponse.
 * Use `create(TransactionSignResponseSchema)` to create a new message.
 */
export const TransactionSignResponseSchema =
  /*@__PURE__*/
  messageDesc(file_ares, 23)

/**
 * Describes the message ares.TransactionResult.
 * Use `create(TransactionResultSchema)` to create a new message.
 */
export const TransactionResultSchema = /*@__PURE__*/ messageDesc(file_ares, 24)

/**
 * Describes the message ares.ServerCommand.
 * Use `create(ServerCommandSchema)` to create a new message.
 */
export const ServerCommandSchema = /*@__PURE__*/ messageDesc(file_ares, 25)

/**
 * Describes the message ares.CharacterAction.
 * Use `create(CharacterActionSchema)` to create a new message.
 */
export const CharacterActionSchema = /*@__PURE__*/ messageDesc(file_ares, 26)

/**
 * Describes the message ares.CharacterPosition.
 * Use `create(CharacterPositionSchema)` to create a new message.
 */
export const CharacterPositionSchema = /*@__PURE__*/ messageDesc(file_ares, 27)

/**
 * Describes the message ares.ChatMessage.
 * Use `create(ChatMessageSchema)` to create a new message.
 */
export const ChatMessageSchema = /*@__PURE__*/ messageDesc(file_ares, 28)

/**
 * Describes the message ares.RequestResponse.
 * Use `create(RequestResponseSchema)` to create a new message.
 */
export const RequestResponseSchema = /*@__PURE__*/ messageDesc(file_ares, 29)

/**
 * Describes the message ares.FightMoveToCell.
 * Use `create(FightMoveToCellSchema)` to create a new message.
 */
export const FightMoveToCellSchema = /*@__PURE__*/ messageDesc(file_ares, 30)

/**
 * Describes the message ares.Position.
 * Use `create(PositionSchema)` to create a new message.
 */
export const PositionSchema = /*@__PURE__*/ messageDesc(file_ares, 31)

/**
 * Describes the message ares.Entity.
 * Use `create(EntitySchema)` to create a new message.
 */
export const EntitySchema = /*@__PURE__*/ messageDesc(file_ares, 32)

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
