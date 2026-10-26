# SSL Certificate Checker API - PHP Package

SSL Checker is an SSL certificate API that connects to a website and checks its live certificate in seconds. It returns the certificate details, whether the chain verifies to a trusted root and matches the hostname, the negotiated TLS version and cipher, HSTS and OCSP stapling, plus expiry signals: valid or expired, days until expiry, expiring soon and self-signed.

## Installation

Install via Composer:

```bash
composer require apiverve/sslchecker
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Sslchecker\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['domain' => 'ebay.com']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Sslchecker\Client;
use APIVerve\Sslchecker\Exceptions\APIException;
use APIVerve\Sslchecker\Exceptions\ValidationException;

try {
    $response = $client->execute(['domain' => 'ebay.com']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/sslchecker?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/sslchecker?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/sslchecker?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
