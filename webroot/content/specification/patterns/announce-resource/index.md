---
title: Announce Service Result
description: 'This pattern is used to announce the existence of a "service result", referencing (in `context`) the resource to which the service result pertains'
date: "2021-03-08"
type: patterns
event_notifications_pattern: [OneWayPatternSNSN,OneWayPatternSNDN]
pattern_category: announcements
payload:
  id: "urn:uuid:94ecae35-dcfd-4182-8550-22c7164fe23f"
  type: ["Announce"]
  actor:
    lookup: "overlay-journal"
  origin:
    lookup: "overlay-journal"
  target:
    lookup: "generic-service"
  object:
    lookup: "service-result"
  context:
    lookup: "preprint"
  inReplyTo:
    lookup: "optional-inReplyTo"

---

