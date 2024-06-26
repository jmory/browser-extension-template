import fs from 'node:fs';

import { type Manifest } from 'webextension-polyfill';

import { ExtensionCommand } from './src/shared/extension.interface.js';

const packageJsonString = fs.readFileSync('./package.json', 'utf-8');
const packageJson = JSON.parse(packageJsonString);

// https://developer.chrome.com/docs/extensions/reference/manifest
const manifestV3 = {
    manifest_version: 3,
    name: 'browser-extension-template',
    version: packageJson.version,
    description: 'Browser Extension Template',
    icons: {
        128: './assets/images/extension-logo.png'
    },
    action: {
        default_popup: './popup/popup.html',
        default_icon: {
            38: './assets/images/extension-logo.png'
        }
    },
    background: {
        service_worker: './background-script/background-script.ts',
        type: 'module'
    },
    content_scripts: [
        {
            matches: [
                '<all_urls>' // inject the content script into all pages
            ],
            js: ['./content-script/content-script.tsx'],
            run_at: 'document_end',
            all_frames: false // do not inject content script into iframes
        }
    ],
    options_ui: {
        page: './options/options.html'
    },
    commands: {
        [ExtensionCommand.TestCommand]: {
            description: 'Test Command'
        }
    },
    host_permissions: [
        '<all_urls>' // https://developer.chrome.com/docs/extensions/develop/concepts/match-patterns#special
    ],
    // https://developer.chrome.com/docs/extensions/reference/permissions-list
    permissions: [
        'activeTab'
    ],
    content_security_policy: {
        extension_pages: [
            'script-src \'self\'',
            'object-src \'self\'',
            'img-src *'
        ].join('; ')
    }
} satisfies Manifest.WebExtensionManifest;

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
const firefoxManifestV3Overrides: Manifest.WebExtensionManifest = {
    ...manifestV3,
    background: {
        scripts: [manifestV3.background.service_worker] // https://bugzilla.mozilla.org/show_bug.cgi?id=1573659
    }
};

function getManifestJSON(platform: 'chrome' | 'firefox'): string {
    switch (platform) {
        case 'chrome': {
            return JSON.stringify(manifestV3, null, 2);
        }
        case 'firefox': {
            return JSON.stringify(firefoxManifestV3Overrides, null, 2);
        }
    }
}

const args = process.argv.slice(2);
const platform = args[0];
if (platform !== 'chrome' && platform !== 'firefox') {
    throw Error('unsupported browser, only chrome and firefox are supported');
}

const manifestJSON = getManifestJSON(platform);
fs.writeFileSync('./src/manifest.json', manifestJSON, { encoding: 'utf-8' });
