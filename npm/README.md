# SSL Certificate Checker API

SSL Checker is an SSL certificate API that connects to a website and checks its live certificate in seconds. It returns the certificate details, whether the chain verifies to a trusted root and matches the hostname, the negotiated TLS version and cipher, HSTS and OCSP stapling, plus expiry signals: valid or expired, days until expiry, expiring soon and self-signed.

[![npm version](https://img.shields.io/npm/v/@apiverve/sslchecker.svg)](https://www.npmjs.com/package/@apiverve/sslchecker)

This is a JavaScript wrapper for the [SSL Certificate Checker API](https://apiverve.com/marketplace/sslchecker?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/sslchecker
```

Using yarn:
```shell
yarn add @apiverve/sslchecker
```

---

## Configuration

Before using the SSL Certificate Checker API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The SSL Certificate Checker API documentation is found here: [https://docs.apiverve.com/ref/sslchecker](https://docs.apiverve.com/ref/sslchecker?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const sslcheckerAPI = require('@apiverve/sslchecker');
const api = new sslcheckerAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  domain: "ebay.com"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  domain: "ebay.com"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  domain: "ebay.com"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "subject": {
      "C": "US",
      "ST": "California",
      "O": "eBay, Inc.",
      "CN": "ebay.com"
    },
    "issuer": {
      "C": "GB",
      "O": "Sectigo Limited",
      "CN": "Sectigo Public Server Authentication CA OV R40"
    },
    "subjectaltname": "DNS:ebay.com, DNS:befr.ebay.be, DNS:benl.ebay.be, DNS:cafr.ebay.ca, DNS:e-bay.com, DNS:e-bay.it, DNS:ebay.at, DNS:ebay.be, DNS:ebay.ca, DNS:ebay.ch, DNS:ebay.co.nz, DNS:ebay.co.uk, DNS:ebay.com.au, DNS:ebay.com.cn, DNS:ebay.com.hk, DNS:ebay.com.my, DNS:ebay.com.ph, DNS:ebay.com.sg, DNS:ebay.de, DNS:ebay.es, DNS:ebay.fr, DNS:ebay.ie, DNS:ebay.in, DNS:ebay.io, DNS:ebay.it, DNS:ebay.nl, DNS:ebay.ph, DNS:ebay.pl, DNS:ebay.us, DNS:ebay.vn, DNS:shorturiweb.ebay.com, DNS:wwww.ebay.co.uk, DNS:wwww.ebay.com, DNS:wwww.ebay.com.au, DNS:wwww.ebay.de, DNS:wwww.ebay.in, DNS:wwww.ebay.it",
    "infoAccess": {
      "CA Issuers - URI": [
        "http://crt.sectigo.com/SectigoPublicServerAuthenticationCAOVR40.crt"
      ],
      "OCSP - URI": [
        "http://ocsp.sectigo.com"
      ]
    },
    "ca": false,
    "bits": 2048,
    "valid_from": "Oct  6 00:00:00 2026 GMT",
    "valid_to": "Apr 22 23:59:59 2027 GMT",
    "serialNumber": "19FD41E42C169CF248511D2BEE660A83",
    "domain": "ebay.com",
    "isExpired": false,
    "isValid": true,
    "daysUntilExpiry": 182,
    "isExpiringSoon": false,
    "isSelfSigned": false,
    "protocol": "TLSv1.3",
    "cipher": "TLS_AES_128_GCM_SHA256",
    "isTrusted": true,
    "trustError": null,
    "hostnameMatches": true,
    "chain": [
      {
        "subject": "ebay.com",
        "issuer": "Sectigo Public Server Authentication CA OV R40",
        "validTo": "Apr 22 23:59:59 2027 GMT",
        "isCA": false
      },
      {
        "subject": "Sectigo Public Server Authentication CA OV R40",
        "issuer": "Sectigo Public Server Authentication Root R46",
        "validTo": "May 13 23:59:59 2040 GMT",
        "isCA": true
      },
      {
        "subject": "Sectigo Public Server Authentication Root R46",
        "issuer": "USERTrust RSA Certification Authority",
        "validTo": "Jan 18 23:59:59 2038 GMT",
        "isCA": true
      },
      {
        "subject": "USERTrust RSA Certification Authority",
        "issuer": "USERTrust RSA Certification Authority",
        "validTo": "Jan 18 23:59:59 2038 GMT",
        "isCA": true
      }
    ],
    "keyType": "RSA",
    "signatureAlgorithm": "sha256WithRSAEncryption",
    "hasEmbeddedSCTs": true,
    "ocspStapled": true,
    "hsts": {
      "present": true,
      "maxAge": 31536000,
      "includeSubDomains": false,
      "preload": false
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
