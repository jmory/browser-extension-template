import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';

import { getActiveTab } from '../shared/browser-utils/browser-utils';
import { ExtensionMessage, MessageType } from '../shared/extension.interface';
import { Popup } from './components/popup';
import { PopupButton } from './components/popup-button';

window.addEventListener('load', async () => {
    const rootEl = document.querySelector('main')!;
    const root = createRoot(rootEl);
    root.render(
        <Popup title='Browser Extension'>
            <PopupButton
                label='Show Overlay'
                onClick={ async () => {
                    const activeTab = await getActiveTab();
                    if (!activeTab) {
                        return;
                    }
                    browser.tabs.sendMessage(activeTab.id!, { type: MessageType.ShowWelcomeOverlay } satisfies ExtensionMessage);
                }}
            />
        </Popup>
    );
});
