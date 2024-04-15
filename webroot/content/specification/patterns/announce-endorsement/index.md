---
title: Announce Endorsement
description: 'This pattern is used to announce the existence of an endorsement, referencing (in `context`) the resource that has been endorsed'
date: "2021-03-08"
type: patterns
event_notifications_pattern: [OneWayPatternSNSN,OneWayPatternSNDN]
status: published
pattern_category: announcements
payload:
  id: "urn:uuid:94ecae35-dcfd-4182-8550-22c7164fe23f"
  type: ["Announce","coar-notify:EndorsementAction"]
  actor:
    lookup: "overlay-journal"
  origin:
    lookup: "overlay-journal"
  target:
    lookup: "repository"
  object:
    lookup: "endorsement"
  context:
    lookup: "preprint"
  inReplyTo:
    lookup: "optional-inReplyTo"
---

