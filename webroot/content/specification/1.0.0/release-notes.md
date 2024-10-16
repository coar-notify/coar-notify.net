---
title: Release Notes
description: ''
date: "2021-03-08"
layout: release-notes
---

These are the release notes for the 1.0.0 version of the specification.

1. Re-introduced the IETF's [RFC2119](https://www.ietf.org/rfc/rfc2119.txt) language for requirements
2. Changed the main URL for the protocol from _https://notify.coar-repositories.org_ to _https://coar-notify.net_
3. Deprecated the use of PURLs for the `@context` and for the vocabulary terms in favour of the namesspace _https://coar-notify.net_
4. Added the [_TentativeReject_ Pattern](/specification/1.0.0/tentative-reject)
5. Added `object` property to the "acknowledgement" and Undo patterns: [_Accept_](/specification/1.0.0/accept), [_Reject_](/specification/1.0.0/reject), [_TentativeAccept_](/specification/1.0.0/tentative-accept), [_TentativeReject_](/specification/1.0.0/tentative-reject) & [_Undo_](http://localhost:1313/specification/1.0.0/undo-offer)
6. Added `inReplyTo` to [_Undo_](http://localhost:1313/specification/1.0.0/undo-offer) pattern.
7. Changed all example `origin` and `target` types to _Service_
8. Made requirement for an `id` in `object` explicit
9. Added optional `subject` to [_Reject_](http://localhost:1313/specification/1.0.0/reject), [_TentativeAccept_](http://localhost:1313/specification/1.0.0/tentative-accept), [_TentativeReject_](http://localhost:1313/specification/1.0.0/tentative-reject) and [_Undo_](http://localhost:1313/specification/1.0.0/undo-offer) patterns
10. Removed unused *Request Ingest* and *Announce Ingest* patterns
11. Clarified recommendation for the use of `actor` property in all notifications
12. Added recommendation to use values from schema.org for `type` in `object` when the `object` is a web resource.
13. Relaxed the requirement in the "Announce" patterns to for the `type` in `object` - it is now recommended to use a value from schema.org, but not required.