SSL Certificate Checker API
============

SSL Checker inspects a website's SSL certificate. It returns the certificate details plus derived signals — whether it is currently valid or expired, how many days until it expires, whether it expires soon, and whether it is self-signed.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-sslcertificatechecker.svg)](https://pypi.org/project/apiverve-sslcertificatechecker/)

This is a Python wrapper for the [SSL Certificate Checker API](https://apiverve.com/marketplace/sslchecker?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-sslcertificatechecker
```

Using `pip3`:

```bash
pip3 install apiverve-sslcertificatechecker
```

---

## Configuration

Before using the SSL Certificate Checker API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_sslcertificatechecker.apiClient import SslcheckerAPIClient

# Initialize the client with your APIVerve API key
api = SslcheckerAPIClient("[YOUR_API_KEY]")

query = { "domain": "ebay.com" }

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The SSL Certificate Checker API documentation is found here: [https://docs.apiverve.com/ref/sslchecker](https://docs.apiverve.com/ref/sslchecker?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_sslcertificatechecker.apiClient import SslcheckerAPIClient

# Initialize the client with your APIVerve API key
api = SslcheckerAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = { "domain": "ebay.com" }
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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
      "CN": "Sectigo Public Server Authentication CA OV R36"
    },
    "subjectaltname": "DNS:ebay.com, DNS:befr.ebay.be, DNS:benl.ebay.be, DNS:cafr.ebay.ca, DNS:e-bay.it, DNS:ebay.at, DNS:ebay.be, DNS:ebay.ca, DNS:ebay.ch, DNS:ebay.co.uk, DNS:ebay.com.au, DNS:ebay.com.hk, DNS:ebay.com.my, DNS:ebay.com.sg, DNS:ebay.de, DNS:ebay.es, DNS:ebay.fr, DNS:ebay.ie, DNS:ebay.in, DNS:ebay.it, DNS:ebay.nl, DNS:ebay.ph, DNS:ebay.pl, DNS:ebay.us, DNS:ebay.vn, DNS:wwww.ebay.co.uk, DNS:wwww.ebay.com, DNS:wwww.ebay.com.au, DNS:wwww.ebay.de, DNS:wwww.ebay.in, DNS:wwww.ebay.it",
    "infoAccess": {
      "CA Issuers - URI": [
        "http://crt.sectigo.com/SectigoPublicServerAuthenticationCAOVR36.crt"
      ],
      "OCSP - URI": [
        "http://ocsp.sectigo.com"
      ]
    },
    "ca": false,
    "bits": 2048,
    "valid_from": "Jul 28 00:00:00 2025 GMT",
    "valid_to": "Jul 28 23:59:59 2026 GMT",
    "serialNumber": "99F408949A6416EDC3B8F5EC77B2EBE5",
    "domain": "ebay.com",
    "isExpired": false,
    "isValid": true,
    "daysUntilExpiry": 20,
    "isExpiringSoon": true,
    "isSelfSigned": false
  }
}
```

---

## Error Handling

The API client provides comprehensive error handling through the `SslcheckerAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_sslcertificatechecker.apiClient import SslcheckerAPIClient, SslcheckerAPIClientError

api = SslcheckerAPIClient("[YOUR_API_KEY]")

query = { "domain": "ebay.com" }

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except SslcheckerAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_sslcertificatechecker.apiClient import SslcheckerAPIClient, SslcheckerAPIClientError

api = SslcheckerAPIClient("[YOUR_API_KEY]")

query = { "domain": "ebay.com" }

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except SslcheckerAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_sslcertificatechecker.apiClient import SslcheckerAPIClient, SslcheckerAPIClientError

query = { "domain": "ebay.com" }

# Using context manager ensures proper cleanup
with SslcheckerAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except SslcheckerAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_sslcertificatechecker.apiClient import SslcheckerAPIClient

# Enable debug mode
api = SslcheckerAPIClient("[YOUR_API_KEY]", debug=True)

query = { "domain": "ebay.com" }

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_sslcertificatechecker.apiClient import SslcheckerAPIClient

api = SslcheckerAPIClient("[YOUR_API_KEY]")

query = { "domain": "ebay.com" }

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
