# Simple VPN detector

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)


Detects difference between browser and IP timezones and make a decision based on this difference.

# Usage

1. Register on https://ipgeolocation.io/
2. Install package: `npm i simple-vpn-detector` or `yarn add simple-vpn-detector`
3. Get an answer!

# Examples

## Browser

```
/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
import { isVPNDetected } from './main'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).isVPNDetected = isVPNDetected  // instead of casting window to any, you can extend the Window interface: https://stackoverflow.com/a/43513740/5433572

console.log('Method "foo" was added to the window object. You can try it yourself by just entering "await foo()"');

(async () => {
  const vpnDetectionStatus = await isVPNDetected('')
  console.log(`VPN Detection status: ${vpnDetectionStatus}`);
})()
```

## Cli

```
#!/usr/bin/env node
import { isVPNDetected } from './main'

const apiKey: string = process.env.IP_GEOLOCATION_API_KEY || '';

isVPNDetected(apiKey)
```

# Contribution

Feel free to create pull-requests