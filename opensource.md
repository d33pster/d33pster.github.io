---
layout: default
title: Open Source Contributions
description: "My Contribution to Open Source community."
nav_order: 2
permalink: /osc
---

# Open Source Contributions
{: .no_toc }

These are my contribution to the Open Source Community.
{: .fs-6 .fw-300 }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## PYPI

### dsfx

dsfx is a python module to create installer packages. The idea was to fix [pymakeself](https://github.com/gammazero/pymakeself) by [Andrew Gillis](https://github.com/gammazero), but dsfx turned out to be better than [pymakeself](https://github.com/gammazero/pymakeself) in many ways, such as:

- support for python 3.1+
- create executable or .py as per your choice [pymakeself only allowed creation of .py files]
- removed encryption feature (for now, as it was messing with other features), it will be added back soon.

{: .highlight }
dsfx latest release: _v0.2.3_

Check it Out Here

[GitHub][dsfx_github]{: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2}
[Documentation][dsfx_doc]{: .btn .fs-5 .mb-4 .mb-md-0 }

### Optioner

Optioner is a argument parsing and management module for python. It is lightweight and yet can perform complicated tasks like making compulsory and mutually exclusive arguments and even have options for arguments that can be whitelisted and will be eligible for compulsion overide.

{: .highlight }
optioner latest release: _v1.4.2_

Check it Out Here.

[GitHub][optioner_github]{: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2}
[Documentation][optioner_doc]{: .btn .fs-5 .mb-4 .mb-md-0 }

### Serversock

With serversock, creating multi-client servers for your projects will be easier. Serversock uses socket library and multithreading to create a server that can handle multiple client connections.

{: .highlight }
serversock latest release: _v0.1_

Check it Out Here.

[GitHub][serversock_github]{: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2}
[Documentation][serversock_doc]{: .btn .fs-5 .mb-4 .mb-md-0 }

### S3ssion

Making sessions for login/Register in your project/scripts and managing them can be done using s3ssion module. s3ssion can keep password encrypted with either default config or user defined password and salt. It has error handling for situations such as 'user already exists', 'username not found' and many more.

{: .highlight }
s3ssion lastest release: _v1.0.2_

Check it Out Here

[GitHub][s3ssion_github]{: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2}
<!-- [Documentation][s3ssion_doc]{: .btn .fs-5 .mb-4 .mb-md-0 } -->

### dynalistTk

dynalistTk is a basic module to create dynamic lists (Treeview) in using tkinter module for python GUI. With dynalistTk, you can create dynamic features such as sorting of list members when you click the column name. Just create a data and call the class, it will be automatically adjusted according to the value sizes of each column.

{: .highlight }
dynalistTk latest release: _v1.2.1_

[GitHub][dynalistTk_github]{: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2}
<!-- [Documentation][dynalistTk_doc]{: .btn .fs-5 .mb-4 .mb-md-0 } -->

<!-- ## Other Contibutions

###  -->

<p align='center'>END OF OPEN SOURCE CONTRIBUTIONS</p>

<!-- Links -->
[dsfx_github]: https://github.com/d33pster/dsfx
[dsfx_doc]: https://d33pster.github.io/dsfx/
[optioner_github]: https://github.com/d33pster/optioner
[optioner_doc]: https://d33pster.github.io/optioner/
[serversock_github]: https://github.com/d33pster/serversock
[serversock_doc]: https://d33pster.github.io/serversock/
[s3ssion_github]: https://github.com/d33pster/s3ssion
<!-- [s3ssion_doc]: https:/d33pster.github.io/s3ssion/ -->
[dynalistTk_github]: https://github.com/d33pster/dynalistTk
<!-- [dynalistTk_doc]: https://d33pster.github.io/dynalistTk/ -->