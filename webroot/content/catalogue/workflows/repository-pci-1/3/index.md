---
title: PCI processes the offer
description: |
  PCI processes the offer. This offer is **either** an initial submission or a resubmission. The process is **different depending** on the case.
  ### Initial submission
  This is indicated by the absence of a `inReplyTo` property. The process is as follows:
    1. PCI gets the metadata from signposting and creates a pre-submission page
    2. PCI sends an email to the authors containing the URL that would send the author directly to the prefilled submission/resubmission page of PCI X after registering if needed and after login in PCI X website.
    3. The authors check the pre-filled information, complete the metadata (e.g. links to data, scripts, codes, PCI thematic fields) and complete the submission.
    4. If no validation by the Managing board or no handling by a recommender (negative outcome) then an email is sent to the authors and the process stops. PCI sends a `Reject` notification.
    5. If validation by the managing board and handling by a recommender (positive outcome) then an email is sent to the authors and the review process begins. PCI sends a `TentativeAccept` notification.
  
  
  ### Re-submission
  This is indicated by the presence of a `inReplyTo` property referencing the Activity `ID` of the  previous `Reject` notification. The process is as follows:
    1. PCI sends an Email to the author containing the link to the resubmission form
    2. PCI digests the new URL with the new version and prefill the resubmission form with signposting (optional), and keep other old data (eg opposed reviewers)
    3. The author completes the resubmission form and replies to reviewers
    4. If no validation by the Managing board or no handling by a recommender (negative outcome) then an email is sent to the authors and the process stops. PCI sends a `Reject` notification.
    5. If validation by the managing board and handling by a recommender (positive outcome) then an email is sent to the authors and the review process begins. PCI sends a `TentativeAccept` notification.
date: 2021-03-08
type: workflows
scope: right_node
flowchart:
  label: |
    Process
    Request
  flows_to: ["4","6"]
---


