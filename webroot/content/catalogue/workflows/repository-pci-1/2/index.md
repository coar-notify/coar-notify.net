---
title: Request Endorsement
description: |
  The repository requests an endorsement from PCI.
  
  If there has been a previous round of evaluation of this repository resource, then this notification may include an `inReplyTo` property that references the Activity `ID` of the  previous `Reject` notification.
  The notification includes:
  - the DOI (URL that includes the version) of the preprint
  - the Email of the author ("mailto:" URI in the ID property of the `actor`)
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
