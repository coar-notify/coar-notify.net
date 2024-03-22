---
title: Request Ingest
description: 'This pattern is used to request that the target system ingest a resource'
date: "2021-03-08"
type: patterns
event_notifications_pattern: []
pattern_category: requests
payload:
  id: "urn:uuid:0370c0fb-bb78-4a9b-87f5-bed307a509dd"
  type: ["Offer","coar-notify:IngestAction"]
  actor:
    lookup: "overlay-journal"
  origin:
    lookup: "overlay-journal"
  target:
    lookup: "repository"
  object:
    lookup: "preprint"

---

