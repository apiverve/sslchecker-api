# [SSL Certificate Checker API](https://apiverve.com/marketplace/sslchecker?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

SSL Checker is an SSL certificate API that connects to a website and checks its live certificate in seconds. It returns the certificate details, whether the chain verifies to a trusted root and matches the hostname, the negotiated TLS version and cipher, HSTS and OCSP stapling, plus expiry signals: valid or expired, days until expiry, expiring soon and self-signed.

The SSL Certificate Checker API provides a simple, reliable way to integrate ssl certificate checker functionality into your applications. Built for developers who need production-ready ssl certificate checker capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/sslchecker?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/sslchecker?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/sslchecker)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.SSLCertificateChecker)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-sslchecker/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_sslchecker)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/sslchecker)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_sslchecker)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callSSLCertificateCheckerAPI() {
    try {
        const params = new URLSearchParams({
            domain: 'ebay.com'
        });

        const response = await fetch(`https://api.apiverve.com/v1/sslchecker?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callSSLCertificateCheckerAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/sslchecker?domain=ebay.com" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/sslchecker
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/sslchecker) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.SSLCertificateChecker
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.SSLCertificateChecker) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-sslchecker
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-sslchecker/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_sslchecker
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_sslchecker) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/sslchecker
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/sslchecker) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_sslchecker
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_sslchecker) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:sslchecker-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/sslchecker-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [SSL Certificate Checker API](https://apiverve.com/marketplace/sslchecker?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/sslchecker](https://docs.apiverve.com/ref/sslchecker)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The SSL Certificate Checker API is commonly used for:

- **Web Applications** - Add ssl certificate checker features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with ssl certificate checker capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the SSL Certificate Checker API:

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

## Support & Community

- 🏠 **API Home**: [SSL Certificate Checker API](https://apiverve.com/marketplace/sslchecker?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
