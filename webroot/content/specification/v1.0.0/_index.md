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
---

COAR Notify notifications are designed to be sent and received using the [W3C Linked Data Notifications (LDN)](https://www.w3.org/TR/2017/REC-ldn-20170502/) standard. Payloads have a predictable structure, based primarily
on [Activity Streams 2.0](https://www.w3.org/TR/activitystreams-core/), with some additional vocabularies included for particular properties. COAR Notify implements the generic notifications described by the _[Event Notifications in Value-Adding Networks](https://www.eventnotifications.net)_ specification.

In the COAR Notify protocol, we call these standardised payloads ***Pattern***.

All COAR Notify payloads MUST define an *Activity Streams 2.0* `activity`, and MAY include other properties from the COAR Notify context. They MAY also include other properties from other contexts. The following properties from _Activity Streams 2.0_ are used consistently in all the patterns:

* The `activity` MUST contain the following properties:
  * `@context`: This is the JSON-LD 'context' for the activity.
  * `id`: This MUST be a URI, and the use of URN:UUID is RECOMMENDED. An HTTP URI MAY be used, but in such cases the URI SHOULD resolve to a resource which represents the activity.
  * `type`: This MUST include one of the [Activity Stream 2.0 Activity Types](https://www.w3.org/TR/activitystreams-vocabulary/). It MAY (depending on the activity) also include a type from the [Notify Activity Types vocabulary](/specification/vocabulary/)
  * `origin`: The originator of the activity, typically the service responsible for *sending* the notification.
  * `object`: This MUST be the focus of the activity. Other `object` properties MAY appear in notifications, as sub-properties of other properties.
  * `target`: The intended destination of the activity, typically the service which *consumes* the notification.
* The `activity` property MAY contain the following properties:
  * `actor`: This identifies the party or process that initiated the activity.
  * `inReplyTo`: This property is used when the notification is a direct response to a previous notification (usually a request). When present, it MUST reference the _Activity Streams 2.0_ activity `id` of the previous notification.
  * `context`: This identifies another resource which is relevant to understanding the notification.
  * `summary`: This is used rarely, but when present it MUST provide a brief textual summary of the notification (for example in the case of an error)

