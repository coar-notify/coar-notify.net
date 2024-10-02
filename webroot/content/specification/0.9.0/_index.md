---
title: COAR Notify Protocol
breadcrumb_title: COAR Notify Protocol 0.9.0
version: 0.9.0
description: |
  The _COAR Notify Protocol_ consists of documented community conventions for the use of W3C Linked Data Notifications (LDN) to integrate repository systems with relevant services in a distributed, resilient and web-native architecture.
date: 2022-08-02
draft: false
status: deprecated
vocabulary_terms:
  - EndorsementAction
  - IngestAction
  - RelationshipAction
  - ReviewAction
---

COAR Notify notifications are designed to be sent and received using the [W3C Linked Data Notifications (LDN)](https://www.w3.org/TR/2017/REC-ldn-20170502/) standard. Payloads have a predictable structure, based primarily
on [Activity Streams 2.0](https://www.w3.org/TR/activitystreams-core/), with some additional vocabularies included for particular properties. COAR Notify implements the generic notifications described by the _[Event Notifications in Value-Adding Networks](https://www.eventnotifications.net)_ specification.

In the COAR Notify protocol, we call these standardised payloads ***Patterns***.

## Patterns
All COAR Notify patterns MUST define an *Activity Streams 2.0* `activity`.

