---
title: PCI Endorsement
description: |
  This is a workflow where the author of a preprint stored in a repository can request an endorsement from PCI.
left_node: "A repository"
right_node: "PCI"
date: 2021-03-08
type: workflows
use-cases: [peer-review,endorsement]
owner: pci
status: draft
aliases:
  - /catalogue/workflows/67680ceb-327b-4a5a-8fb9-4d396fca2570
version: 1.0.0
draft: true
---

This workflow was originally developed between PCI and HAL, but it can be used by other repositories wishing to interoperate with PCI.

```mermaid
flowchart LR
    1(["`**1** Initiate`"])
    2["`**2** *Request
    Endorsement*`"]
    3{"`**3** Process
    request`"}
    4["`**4** *Reject*`"]
    5(["`**5** Accept
    decision`"])
    6["`**6** *Tentative Accept*`"]
    7["`**7** Note
    under review`"]
    8{"`**8** Conduct
    review`"}
    9["`**9** *Reject*`"]
    10(["`**10** Accept
    decision`"])
    11["`**11** *Announce
    Review*`"]
    12["`**12** Record
    review`"]
    13["`**13** *Announce
    Endorsement*`"]
    14(["`**14** Record
    decision`"])
    
    1 --> 2
    2 --> 3
    3 --> 4
    4 --> 5
    3 --> 6
    6 --> 7
    7 --> 8
    8 --> 9
    9 --> 10
    8 --> 11
    11 --> 12
    12 --> 13
    13 --> 14
```
