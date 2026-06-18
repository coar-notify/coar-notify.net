---
title: Request Endorsement
description: |
  The repository requests an endorsement from PCI.
  
  If this is a **re-submission** (i.e. there has been a previous round of evaluation of this repository resource), then this notification MUST include an `inReplyTo` property that MUST reference the activity `ID` of a  previous *TentativeReject* notification.
date: 2021-03-08
type: workflows
scope: notify
sender: left_node
pattern: request-endorsement
flowchart:
  label: |
    Request
    Endorsement
  flows_to: ["3"]
---
