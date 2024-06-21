---
title: Un-processable Notification
description: 'This pattern is used to indicate that a previously received Notify notification was un-processable for some reason. The reason is given in the `summary` property.'
date: "2021-03-08"
type: patterns
event_notifications_pattern: []
status: published
pattern_category: process
payload:
  id: "urn:uuid:49dae4d9-4a16-4dcf-8ae0-a0cef139254c"
  type: ["Flag","coar-notify:UnprocessableNotification"]
  actor: "__exclude__"
  origin:
    lookup: "generic-organisation"
  target:
    lookup: "generic-service"
  object:
    lookup: "preprint"
  inReplyTo:
    lookup: "required-inReplyTo"
  summary:
    lookup: "unprocessable_url"
---

