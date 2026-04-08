---
title: COAR Notify Protocol
breadcrumb_title: COAR Notify Protocol 1.0.0
version: 1.0.0
description: |
  The _COAR Notify Protocol_ consists of documented community conventions for the use of W3C Linked Data Notifications (LDN) to integrate repository systems with relevant services in a distributed, resilient and web-native architecture.
date: 2022-08-02
draft: false
status: published
vocabulary_terms:
  - EndorsementAction
  - IngestAction
  - RelationshipAction
  - ReviewAction
  - UnprocessableNotification
required_properties: ["@context","id","type","origin","target","object"]
recommended_properties: ["actor"]
optional_properties: ["inReplyTo","context","summary"]
---

COAR Notify notifications are designed to be sent and received using the [W3C Linked Data Notifications (LDN)](https://www.w3.org/TR/2017/REC-ldn-20170502/) standard. Payloads MUST have a predictable structure, based primarily
on [Activity Streams 2.0](https://www.w3.org/TR/activitystreams-core/), with some additional vocabularies included for particular properties. COAR Notify implements the generic notifications described by the _[Event Notifications in Value-Adding Networks](https://www.eventnotifications.net)_ specification.

In the COAR Notify protocol, we call these standardised payloads ***Patterns***.

## Patterns
All COAR Notify patterns MUST define an Activity Streams 2.0 activity. The following properties and their descriptions represent a **_baseline_** set of requirements. The individual patterns MAY add additional constraints. The workflows which use the patterns MAY, in turn, add additional constraints.
