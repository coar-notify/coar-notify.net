---
title: Release Notes
description: ''
date: "2021-03-08"
layout: release-notes
---

**Important note:**
Version control was added to the COAR Notify Protocol specification from [version 1.0.0](/specification/1.0.0/) onwards. These release notes (below) record some of the development which preceded version 1.0.0. We have given this the notional version number 0.9.0.

The following history is provided for interest only and is not necessarily comprehensive. The notes refer to "scenarios" which are broadly equivalent to the [workflows](/catalogue/workflows) in the current specification.

## Most recent changes
Removed Acknowledge and Tentatively Reject pattern.

## 2024-03-21
Previously, some uses of the `object` and `context` properties included a `url` property. We have replaced `url` with `ietf:item` to improve interoperability with related initiatives - notably signposting.org. The content of this sub-property is unchanged, so this is simply a change to the property name.

## 2023-05-02
Added three new patterns:

* Acknowledge and Tentatively Accept
* Acknowledge and Tentatively Reject
* Announce Service Result

## 2023-04-25
The `mediaType` property used in the `object` property of several patterns was incorrectly represented as 'media-type'. This has been fixed.

## 2023-02-01
Relaxed the requirement that the `id` property in the `actor` property must contain an HTTP URI. Now, the property must contain any valid URI.

HTTP URIs are generally still preferred, however there are some use-cases where other URIs - such as `mailto:` URIs for human actors - may be more pragmatic and useful.

## 2022-10-11
Changed the example patterns to be more specific. They now (mostly) mention specific types of system actor, etc. instead of being completely generic. With a few specific exceptions (listed below under *Exceptional Changes*), the properties used have not changed significantly, nor the patterns themselves. In most cases only the example entities mentioned in the properties have changed.

This means that there is no change to the relationship between the example scenarios and the patterns, or to the scenarios themselves.

Part of the reasoning for this is to build a relationship between the (slightly more specific) _Notify_ patterns, and the (more generic) patterns specified in _[Event Notifications in Value-Adding Networks](https://www.eventnotifications.net)_.

#### Exceptional Changes to Patterns
* The _Undo Offer_ pattern has had the `context` property removed
* A `context` property has been added to the _Announce Ingest_ pattern.

#### Other Changes
* The PURL used for the _COAR Notify Vocabulary_ - `https://purl.org/coar/notify_vocabulary/` - now uses HTTPS instead of HTTP. However the HTTP form will continue to resolve correctly.

## 2021-09-29
Changed the URL for the COAR namespace used in the JSON-LD `@context` to use the HTTPS protocol (previously HTTP). This is a non-breaking change since the original HTTP version will still resolve, but we will standardise on HTTPS from now on.

## 2021-09-17
This is a significant revision.

#### General changes:
These general changes have been made across all patterns and scenarios.
1. All notifications now contain an `object` (as required by Activity Streams 2.0). If the notification is for an activity which has caused a resource to be created or updated, then that resource will normally be referenced (with an HTTP URI) in the `object`. If the notification has not caused a resource to be created or updated, then the object will normally contain just a local ID (e.g. a UUID URI) and possibly some simple metadata.
2. All notifications now contain an `actor`. In some cases this is a person - e.g. a reviewer, however in most cases this is an organisation or a service.
3. The nested `inbox` property has been removed from all instances of the `actor` property
4. `inReplyTo`, when used, no longer contains any references to resources - it just references the `id` of the `activity` which it is "replying" to.
5. Notifications of activities which pertain to a existing resource may reference that existing resource in a `context` property. For example, a notification of a new review of a preprint would reference the review in the `object` property and the preprint in a `context` property.
6. The vocabulary and related COAR @context for Notify has been significantly simplified.
7. Syntax has generally been simplified. Previously we were suggesting using arrays anytime there might be more than one value for a property. Now we use the simpler scalar form of property values where there is a single value in the example. This applies to the activity's `type`, `inReplyTo`, and the `type` in `origin`, `object`, `target` and `actor`.

#### Changes to patterns

##### Offer pattern
`actor` added

##### Acknowledgement patterns
* `inReplyTo` changed to just contain URI to *Offer* activity
* `context` added
* `actor` added

##### Retraction pattern
* `context` added
* `actor` added

##### Announcement pattern
* `context` added

##### Announcement in reply to pattern
* `inReplyTo` changed to just contain URI to *Offer* activity
* `context` added
* `actor` added

#### Changes to the vocabularies
The following terms from the COAR Notify vocabulary have changed:
* `coar-notify:ReviewSuccess` has become `coar-notify:ReviewAction`
* `coar-notify:EndorsementSuccess` has become `coar-notify:EndorsementAction`
* `coar-notify:IngestSuccess` has become `coar-notify:IngestAction`

The following terms from the COAR Notify vocabulary have been removed:
* `ReviewRequest`
* `ReviewFailure`
* `EndorsementRequest`
* `EndorsementFailure`
* `IngestRequest`
* `reviews`
* `endorses`

#### Changes to scenarios

##### Scenario 1
* `object` in steps 3 and 5 no longer references the resource that was reviewed
* `context` added in steps 3 and 5
* `actor` added

##### Scenario 2
* `inReplyTo` changed to just contain URI to *Offer* activity in steps 4 and 6
* `object` in steps 4 and 6 no longer references the resource that was reviewed
* `context` added in steps 4 and 6
* `actor` added

##### Scenario 3
* `object` in steps 2 and 4 no longer references the resource that was reviewed
* `context` added in steps 2 and 4
* `actor` added

##### Scenario 4
* `object` in step 3 no longer references the resource that was reviewed
* `context` added in step 3
* `actor` added

##### Scenario 5
* `inReplyTo` changed to just contain URI to *Offer* activity in steps 3 and 5
* `object` added in step 3
* `object` in step 5 no longer references the resource that was reviewed
* `context` added in steps 3 and 5
* `actor` added

##### Scenario 6
* `inReplyTo` changed to just contain URI to *Offer* activity in step 4
* `object` in steps 7 and 9 no longer references the resource that was reviewed
* `context` added in steps 4, 7 and 9
* `actor` added

##### Scenario 7
* `object` in step 2 no longer references the resource that was reviewed
* `context` added in step 2
* `actor` added

##### Scenario 8
* `object` in step 2 no longer references the resource that was reviewed
* `context` added in step 2
* `actor` added

##### Scenario 9
* `inReplyTo` changed to just contain URI to *Offer* activity in steps 5 and 9
* `object` in steps 5 and 9 no longer references the resource that was reviewed
* `context` added in steps 5 and 9
* `actor` added

## 2021-07-13
Removed the `ldp:` prefix from the `inbox` property as it is already defined in Activity Streams 2

## 2021-07-07
Removed the nested `object` (causing an unnecessary 'blank node') from the `coar-notify:reviews` and `coar-notify:endorses` patterns.

So, what was expressed, for example, as:
```json
"object": {
    "coar-notify:reviews": {
      "object": {
        "id": "https://repository.org/preprint/201203/421/",
        "ietf:cite-as": "https://doi.org/10.5555/12345680"
      }
    },
```

is now expressed as:
```json
"object": {
    "coar-notify:reviews": {
        "id": "https://repository.org/preprint/201203/421/",
        "ietf:cite-as": "https://doi.org/10.5555/12345680"
    },
```

## 2021-07-01
Fixed typo in scenarios, replacing incorrect `nat:` namespace with `coar-notify:`.

Renamed the terms in the `coar-notify` vocabulary to use camelCase. So, for example:

`endorsement-success` has become `EndorsementSuccess`.

Removed some unused terms from the vocabulary.

## 2021-06-23
Fixed typo in scenarios, replacing incorrect `nrr:` namespace with `coar-notify:`.

## 2021-06-01
We have made some changes to the Notify documentation. The changes are to improve the notification payloads in terms of linked data (ensuring that they can be expressed as RDF) and so the changes should **not** have any breaking impact on current software development.

##### 1. Context
The structure of the notification payloads is essentially unchanged, except that we have created a first draft Notify JSON-LD context ([http://purl.org/coar/notify](http://purl.org/coar/notify)), and changed the example JSON-LD in the patterns and scenarios to reflect this. All patterns now have this as the context property:

```json
{
  "@context": [
    "https://www.w3.org/ns/activitystreams",
    "http://purl.org/coar/notify"
  ]
}
```

##### 2. Strictness of the descriptions
The descriptions of the payloads were previously described in strict, 'IETF' language (e.g. MUST, SHOULD etc.). This language implied a strict 'schema' which is not really the case here, since we are working in a linked-data paradigm. It became clear that the imposition of a pseudo schema could have unforeseeable consequences in later re-use of the patterns. We expect these patterns to evolve with use, as the community becomes more skilled and ambitions in their application.

As such, these patterns are best thought of as *conventions*, rather than *standards*, relying on the underlying standards of W3C LDN, W3C Activity Streams 2.0 et. al.

For this reason, we have relaxed the language used to describe the patterns. However, the structures and patterns described have not changed (with the exception of the `@context` property as described above.

## 2021-05-14
Changed incorrect value 'System' to 'Service' in all examples of `origin` and `target` properties used in patterns and scenarios.

## 2021-05-13
Changed URI used in `@context` property for Activity Streams 2.0 from 'https://www.w3.org/ns/activitystreams#' to 'https://www.w3.org/ns/activitystreams' (i.e. removed the '#' suffix)

## 2021-05-07
Changed docs to indicate that an array SHOULD be used for the `type` property.

Updated all examples to use array values for the `type` property.