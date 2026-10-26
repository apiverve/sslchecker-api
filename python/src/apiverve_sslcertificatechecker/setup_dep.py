from setuptools import setup, find_packages

setup(
    name='apiverve_sslcertificatechecker',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='SSL Checker is an SSL certificate API that connects to a website and checks its live certificate in seconds. It returns the certificate details, whether the chain verifies to a trusted root and matches the hostname, the negotiated TLS version and cipher, HSTS and OCSP stapling, plus expiry signals: valid or expired, days until expiry, expiring soon and self-signed.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/sslchecker?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
