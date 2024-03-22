---
title: Request Endorsement
description: 'This pattern is used to request endorsement of a resource owned by the `origin` system.'
example_description: 'In this example, the request for an endorsement is initated by an author, Josiah Carberry (identified in the payload as the `actor`)'
date: "2021-03-08"
type: patterns
event_notifications_pattern: []
pattern_category: requests
payload:
  id: "urn:uuid:0370c0fb-bb78-4a9b-87f5-bed307a509dd"
  type: ["Offer","coar-notify:EndorsementAction"]
  actor:
    lookup: "author"
  origin:
    lookup: "repository"
  target:
    lookup: "overlay-journal"
  object:
    lookup: "preprint"
---

