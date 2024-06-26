export enum MessageType {
    ShowWelcomeOverlay = 'show-welcome-overlay'
}

export type ExtensionMessage = {
    type: MessageType;
    data?: unknown;
};

export enum ExtensionCommand {
    TestCommand = 'test-command'
}
