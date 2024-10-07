---
title: Request Endorsement
description: |
  The repository requests an endorsement from PCI.
  
  If there has been a previous round of evaluation of this repository resource, then this notification MAY include an `inReplyTo` property that references the activity `ID` of the  previous *TentativeReject* notification.
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
