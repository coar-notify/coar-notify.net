---
title: Undo Offer
description: 'This pattern is used to `Undo` (retract) an `Offer` previously made.'
date: "2021-03-08"
type: patterns
event_notifications_pattern: []
pattern_category: undo
payload:
  id: "urn:uuid:46956915-e3fe-4528-8789-1d325a356e4f"
  type: "Undo"
  actor:
    lookup: "generic-organisation"
  origin:
    lookup: "generic-organisation"
  target:
    lookup: "generic-service"
  object:
    lookup: "offer"
---

