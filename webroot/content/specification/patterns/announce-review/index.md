---
title: Announce Review
description: 'This pattern is used to announce the existence of a review, referencing (in `context`) the resource that has been reviewed'
date: "2021-03-08"
type: patterns
event_notifications_pattern: [OneWayPatternSNSN,OneWayPatternSNDN]
status: published
pattern_category: announcements
payload:
  id: "urn:uuid:94ecae35-dcfd-4182-8550-22c7164fe23f"
  type: ["Announce","coar-notify:ReviewAction"]
  actor:
    lookup: "review-service"
  origin:
    lookup: "review-service"
  target:
    lookup: "generic-service"
  object:
    lookup: "review"
  context:
    lookup: "preprint"
  inReplyTo:
    lookup: "optional-inReplyTo"
---

