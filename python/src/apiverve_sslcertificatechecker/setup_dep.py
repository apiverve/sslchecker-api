from setuptools import setup, find_packages

setup(
    name='apiverve_sslcertificatechecker',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='SSL Checker inspects a website's SSL certificate. It returns the certificate details plus derived signals — whether it is currently valid or expired, how many days until it expires, whether it expires soon, and whether it is self-signed.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/sslchecker?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
