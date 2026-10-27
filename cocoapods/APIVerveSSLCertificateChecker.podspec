Pod::Spec.new do |s|
  s.name             = 'APIVerveSSLCertificateChecker'
  s.version          = '1.2.3'
  s.summary          = 'SSL Checker is an SSL certificate API that connects to a website and checks its live certificate in seconds.'
  s.description      = <<-'DESC'
SSL Checker is an SSL certificate API that connects to a website and checks its live certificate in seconds. It returns the certificate details, whether the chain verifies to a trusted root and matches the hostname, the negotiated TLS version and cipher, HSTS and OCSP stapling, plus expiry signals: valid or expired, days until expiry, expiring soon and self-signed.

This iOS/macOS SDK provides a convenient way to access the SSL Certificate Checker from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/sslchecker?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/sslchecker-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveSSLCertificateChecker/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
