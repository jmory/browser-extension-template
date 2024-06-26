import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';

import { ExtensionMessage, MessageType } from '../shared/extension.interface';
import { ExtensionOverlay } from './components/extension-overlay';

browser.runtime.onMessage.addListener((message: ExtensionMessage) => {
    console.log('content script received message', message);

    switch (message.type) {
        case MessageType.ShowWelcomeOverlay: {
            const el = document.createElement('div');
            document.body.appendChild(el);
            const root = createRoot(el);
            root.render(
                <ExtensionOverlay
                    onClose={() => {
                        root.unmount();
                        document.body.removeChild(el);
                    }}
                />
            );
        }
    }
});
