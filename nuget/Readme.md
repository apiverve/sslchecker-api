SSL Certificate Checker API
============

SSL Checker is an SSL certificate API that connects to a website and checks its live certificate in seconds. It returns the certificate details, whether the chain verifies to a trusted root and matches the hostname, the negotiated TLS version and cipher, HSTS and OCSP stapling, plus expiry signals: valid or expired, days until expiry, expiring soon and self-signed.


[![NuGet version](https://img.shields.io/nuget/v/APIVerve.API.SSLCertificateChecker.svg)](https://www.nuget.org/packages/APIVerve.API.SSLCertificateChecker)

This is a .NET wrapper for the [SSL Certificate Checker API](https://apiverve.com/marketplace/sslchecker?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.SSLCertificateChecker
```

Using the Package Manager:
```
nuget install APIVerve.API.SSLCertificateChecker
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.SSLCertificateChecker
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.SSLCertificateChecker"
5. Click on the APIVerve.API.SSLCertificateChecker package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the SSL Certificate Checker API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.SSLCertificateChecker;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SSLCertificateCheckerQueryOptions {
            Domain = "ebay.com"
        };

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The SSL Certificate Checker API documentation is found here: [https://docs.apiverve.com/ref/sslchecker](https://docs.apiverve.com/ref/sslchecker?utm_source=nuget&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
SSL Certificate Checker API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.SSLCertificateChecker;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SSLCertificateCheckerQueryOptions {
            Domain = "ebay.com"
        };

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.SSLCertificateChecker;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SSLCertificateCheckerQueryOptions {
            Domain = "ebay.com"
        };

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.SSLCertificateChecker;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]");

        var queryOptions = new SSLCertificateCheckerQueryOptions {
            Domain = "ebay.com"
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.SSLCertificateChecker;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new SSLCertificateCheckerQueryOptions {
            Domain = "ebay.com"
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new SSLCertificateCheckerQueryOptions {
    Domain = "ebay.com"
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new SSLCertificateCheckerQueryOptions {
    Domain = "ebay.com"
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new SSLCertificateCheckerQueryOptions {
    Domain = "ebay.com"
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new SSLCertificateCheckerQueryOptions {
    Domain = "ebay.com"
};

using (var apiClient = new SSLCertificateCheckerAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
