---
title: Discovery
description: 
date: 2022-08-02
draft: false
menu:
    guide_toc:
        identifier: discovery
        weight: 35
recommendations:
    recommendation_1: "Even if the _inbox_ URI was previously known to the _sender_, '(re)discover' the _inbox_ URI either on every operation or, at least, periodically."
    recommendation_2: "COAR Notify workflows should be registered in the COAR Notify Catalogue."
---

## Discover an LDN Inbox
The _sender_ must know the appropriate _inbox_ URI to which to send its notification. A common case will involve two systems which use the COAR Notify Protocol to interact on a regular basis. It will also be a common case that a system operates only one _receiver_, using a single _inbox_ for all of its LDN traffic. In such cases, the _sender_ may already be configured to use a particular _inbox_ URI and will not need to 'discover' it.

However, a _sender_ may wish to send a notification to a service where it does not know the appropriate _inbox_ URI. The _sender_ needs to be able to discover the _inbox_ URI. The LDN protocol provides two methods for this - both require an HTTP operation on a known resource URI (for example, this could simply be the 'home' URL of the service). The LDN discovery mechanism is described in detail - with examples - in the [LDN documentation](https://www.w3.org/TR/2017/REC-ldn-20170502/#discovery), but it is essentially these two options:

{{% blockquote "[https://www.w3.org/TR/2017/REC-ldn-20170502/#discovery](https://www.w3.org/TR/2017/REC-ldn-20170502/#discovery)" %}}
* make an HTTP `HEAD` or `GET` request on the target URL, and use the `Link` header with a `rel` value of `http://www.w3.org/ns/ldp#inbox`.
* make an HTTP `GET` request on the target URL to retrieve an RDF representation ([RDF 1.1](https://www.w3.org/TR/2017/REC-ldn-20170502/#bib-rdf11-concepts)), whose encoded RDF graph contains a relation of type `http://www.w3.org/ns/ldp#inbox`. The subject of that relation is target and the object is the Inbox.
{{% /blockquote %}}
  A _receiver_ may change its _inbox_ URI at any time - so long as it makes the correct URI discoverable. For this reason, even if the _inbox_ URI was previously known to the _sender_, it should not be assumed that this URI will remain the same.

{{< recommendation "recommendation_1" >}}

## Discover Notify services
The COAR Notify Project, funded by Arcadia, will develop a catalogue of systems and workflows which support the COAR Notify Protocol. This is intended to help foster the discovery and use of the COAR Notify Protocol in a growing web of repositories and services. This development is scheduled to happen during 2024.

{{< recommendation "recommendation_2" >}}