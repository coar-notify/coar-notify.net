---
title: Tentatively Accept
description: 'This pattern is used to acknowledge and tentatively accept a request (`Offer`). This should be interpreted to mean that the `target` currently intends to act on the request in some way, but that this might change. It does not imply any kind of outcome beyond this.'
date: "2021-03-08"
type: patterns
event_notifications_pattern: []
status: published
pattern_category: acknowledgements
payload:
  id: "urn:uuid:4fb3af44-d4f8-4226-9475-2d09c2d8d9e0"
  type: "TentativeAccept"
#  actor:
#    lookup: "generic-service"
  origin:
    lookup: "generic-service"
  target:
    lookup: "generic-organisation"
#  object:
#    lookup: "offer"
#  context:
#    lookup: "offer-for-context"
  inReplyTo:
    lookup: "required-inReplyTo"
---

