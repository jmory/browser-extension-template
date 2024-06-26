import type { Tabs } from 'webextension-polyfill';
import browser from 'webextension-polyfill';

export async function getActiveTab(): Promise<Tabs.Tab | undefined> {
    const tabs = await browser.tabs.query({ active: true, lastFocusedWindow: true });
    return tabs[0];
}
