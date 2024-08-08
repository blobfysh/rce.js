import { AuthOptions, RustServer, ServerOptions } from "../types";
import { RCEEvents } from "../types";
export default class RCEManager extends RCEEvents {
    private logger;
    private auth?;
    private servers;
    private socket?;
    private requests;
    private commands;
    private queue;
    private authMethod;
    private lastLogDate;
    constructor(auth: AuthOptions);
    init(timeout?: number): Promise<void>;
    private authenticate;
    private refreshToken;
    private connectWebsocket;
    private authenticateWebsocket;
    private updateLastLogDate;
    private handleWebsocketMessage;
    private resolveServerId;
    sendCommand(identifier: string, command: string, response?: boolean): Promise<string | undefined | null>;
    addServer(opts: ServerOptions): Promise<void>;
    getServer(identifier: string): RustServer;
    removeServer(identifier: string): void;
    getServers(): Map<string, RustServer>;
    private processQueue;
}
