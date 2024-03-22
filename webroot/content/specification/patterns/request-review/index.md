---
title: Request Review
description: 'This pattern is used to request a review of a resource owned by the `origin` system.'
date: "2021-03-08"
type: patterns
event_notifications_pattern: []
pattern_category: requests
payload:
  id: "urn:uuid:0370c0fb-bb78-4a9b-87f5-bed307a509dd"
  type: ["Offer","coar-notify:ReviewAction"]
  actor:
    lookup: "author"
  origin:
    lookup: "repository"
  target:
    lookup: "review-service"
  object:
    lookup: "preprint"
---

