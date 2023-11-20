// @generated by protoc-gen-es v1.4.2 with parameter "target=js"
// @generated from file ares.proto (package ares, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message ares.Packet
 */
export const Packet = proto3.makeMessageType(
  "ares.Packet",
  () => [
    { no: 1, name: "chunkLoad", kind: "message", T: ChunkLoad, oneof: "type" },
    { no: 2, name: "playerSpawn", kind: "message", T: PlayerSpawn, oneof: "type" },
    { no: 3, name: "connectionRequest", kind: "message", T: ConnectionRequest, oneof: "type" },
    { no: 4, name: "connectionResponse", kind: "message", T: ConnectionResponse, oneof: "type" },
  ],
);

/**
 * request to load chunk
 *
 * @generated from message ares.ChunkLoad
 */
export const ChunkLoad = proto3.makeMessageType(
  "ares.ChunkLoad",
  () => [
    { no: 1, name: "x", kind: "scalar", T: 17 /* ScalarType.SINT32 */ },
    { no: 2, name: "z", kind: "scalar", T: 17 /* ScalarType.SINT32 */ },
  ],
);

/**
 * spawn the player
 *
 * @generated from message ares.PlayerSpawn
 */
export const PlayerSpawn = proto3.makeMessageType(
  "ares.PlayerSpawn",
  () => [
    { no: 1, name: "x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "z", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 * accept the connection
 *
 * @generated from message ares.ConnectionResponse
 */
export const ConnectionResponse = proto3.makeMessageType(
  "ares.ConnectionResponse",
  () => [
    { no: 1, name: "accepted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to connect
 *
 * @generated from message ares.ConnectionRequest
 */
export const ConnectionRequest = proto3.makeMessageType(
  "ares.ConnectionRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

