export function create_client({ socket_write, socket_end }: {
    socket_write: any;
    socket_end: any;
}): {
    controller: AbortController;
    stream: PassThrough;
    send<T extends keyof import("../types.js").Packets>(type: T, payload: import("../types.js").Packets[T]): void;
    end(message: string): void;
    on_end: (handler: any) => any;
    /** @type {(message: string) => void} */
    notify_end: (message: string) => void;
    notify_message(message: ArrayBuffer): void;
};
import { PassThrough } from 'stream';
