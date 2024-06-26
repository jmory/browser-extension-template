import browser from 'webextension-polyfill';

import type { ExtensionMessage } from '../shared/extension.interface';
import { ExtensionCommand } from '../shared/extension.interface';

browser.commands.onCommand.addListener(async (command: string) => {
    console.log('background script received command', command);

    const extensionCommand = command as ExtensionCommand;
    switch (extensionCommand) {
        case ExtensionCommand.TestCommand: {
            return;
        }
    }
});

browser.runtime.onMessage.addListener(async (message: ExtensionMessage) => {
    console.log('background script received message', message);
});
