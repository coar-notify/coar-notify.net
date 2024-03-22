---
title: Payloads
date: 2022-07-29
description: ""
draft: false
menu:
    guide_toc:
        identifier: payloads
        weight: 60
---

All *Notify* payloads define an *Activity Streams 2.0* `activity`, and include other properties from the *Notify* context. They may also, optionally, include other properties from other contexts. The following properties from _Activity Streams 2.0_ are used consistently in all the
notification patterns:

* The `activity` **must** contain the following properties:
  * `@context`: This is the JSON-LD 'context' for the activity.
  * `id`: This must be a URI, and the use of URN:UUID is recommended. An HTTP URI may be used, but in such cases the URI should resolve to a resource which represents the activity.
  * `type`: This should include one of the [Activity Stream 2.0 Activity Types](https://www.w3.org/TR/activitystreams-vocabulary/). It may (depending on the activity) also include a type from the [Notify Activity Types vocabulary](https://notify.coar-repositories.org/vocabulary/)
  * `origin`: The originator of the activity, typically the service responsible for *sending* the notification.
  * `object`: This should be the focus of the activity. Other object properties may appear in notifications, as properties of other properties.
  * `target`: The intended destination of the activity, typically the service which *consumes* the notification.
* The `activity` property **may** (and often will) contain the following properties:
  * `actor`: This identifies the party or process that initiated the activity.
  * `inReplyTo`: This property is used when the notification is a direct response to a previous notification (usually a request) and references the _Activity Streams 2.0_ `activity` _id_ of the previous notification.
  * `context`: This identifies another resource which is relevant to understanding the notification.