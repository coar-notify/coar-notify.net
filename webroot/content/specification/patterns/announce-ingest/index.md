---
title: Announce Ingest
description: 'This pattern is used to announce a resource has been ingested'
date: "2021-03-08"
type: patterns
event_notifications_pattern: []
pattern_category: announcements
payload:
  id: "urn:uuid:94ecae35-dcfd-4182-8550-22c7164fe23f"
  type: ["Announce","coar-notify:IngestAction"]
  actor:
    lookup: "research-organisation"
  origin:
    lookup: "repository"
  target:
    lookup: "overlay-journal"
  object:
    lookup: "preprint"
  inReplyTo:
    lookup: "optional-inReplyTo"
  context:
    lookup: "preprint"
---

