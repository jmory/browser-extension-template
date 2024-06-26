# Browser Extension Template

A template project for writing a browser extension.

## Development

1. `npm run dev`
2. Open Chrome
3. Go to `chrome://extensions`
4. Click "Load unpacked"
5. Select directory `distribution`

## Releasing a new version to the Chrome Web Store

### Setup

The `release` GitHub workflow requires following secrets to be set:

* `CHROME_EXTENSION_ID` ([EXTENSION_ID](https://github.com/fregante/chrome-webstore-upload-cli?tab=readme-ov-file#usage))
* `CHROME_WEBSTORE_API_CLIENT_ID` ([CLIENT_ID](https://github.com/fregante/chrome-webstore-upload-cli?tab=readme-ov-file#usage))
* `CHROME_WEBSTORE_API_CLIENT_SECRET` ([CLIENT_SECRET](https://github.com/fregante/chrome-webstore-upload-cli?tab=readme-ov-file#usage))
* `CHROME_WEBSTORE_API_REFRESH_TOKEN` ([REFRESH_TOKEN](https://github.com/fregante/chrome-webstore-upload-cli?tab=readme-ov-file#usage))

See https://github.com/fregante/chrome-webstore-upload-keys on how to obtain the necessary values.

### Triggering a new release

1. `npm version patch|minor|major`
2. `git push --tags origin main`

## Useful Links

* [Curated list of browser extension related resources](https://github.com/fregante/Awesome-WebExtensions)
* [Parcel Web Extension Config](https://parceljs.org/recipes/web-extension/)


