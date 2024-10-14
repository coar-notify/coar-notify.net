---
title: Release Notes
description: ''
date: "2021-03-08"
layout: release-notes
---

These are the release notes for the 1.0.0 version of the specification.

1. Re-introduced the IETF's [RFC2119](https://www.ietf.org/rfc/rfc2119.txt) language for requirements
1. Added the [_TentativeReject_ Pattern](/specification/1.0.0/tentative-reject)
2. Added `object` property to the "acknowledgement" and Undo patterns: [_Accept_](/specification/1.0.0/accept), [_Reject_](/specification/1.0.0/reject), [_TentativeAccept_](/specification/1.0.0/tentative-accept), [_TentativeReject_](/specification/1.0.0/tentative-reject) & [_Undo_](http://localhost:1313/specification/1.0.0/undo-offer)
3. Added `inReplyTo` to [_Undo_](http://localhost:1313/specification/1.0.0/undo-offer) pattern.
3. Changed all example `origin` and `target` types to _Service_
4. Made requirement for an `id` in `object` explicit
5. Added optional `subject` to [_Reject_](http://localhost:1313/specification/1.0.0/reject), [_TentativeAccept_](http://localhost:1313/specification/1.0.0/tentative-accept), [_TentativeReject_](http://localhost:1313/specification/1.0.0/tentative-reject) and [_Undo_](http://localhost:1313/specification/1.0.0/undo-offer) patterns
5. Removed unused *Request Ingest* and *Announce Ingest* patterns
7. Clarified recommendation for the use of `actor` property in all notifications
8. Added recommendation to use values from schema.org for `type` in `object` when the `object` is a web resource.
9. Relaxed the requirement in the "Announce" patterns to for the `type` in `object` - it is now recommended to use a value from schema.org, but not required.