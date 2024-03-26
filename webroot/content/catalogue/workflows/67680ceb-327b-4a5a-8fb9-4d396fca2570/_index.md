---
title: PCI Endorsement
id: 67680ceb-327b-4a5a-8fb9-4d396fca2570
description: |
  <mark>TODO: description</mark>
left_node: "Repository"
right_node: "PCI"
date: 2021-03-08
type: workflows
use-cases: [peer-review,endorsement]
owner: pci
workflow_status: draft
---

This workflow was originally developed between PCI and HAL, but it can be used by other repositories wishing to interoperate with PCI.

```mermaid
flowchart LR
    1(["`**1** Repo: Initiate endorsement request`"])
    2["`**2** Send *Request Endorsement*`"]
    3{"`**3** PCI: process request`"}
    4["`**4** Send *Reject*`"]
    5(["`**5** Repo: accept decision`"])
    6["`**6** Send *Tentative Accept*`"]
    7["`**7** Repo: note under review`"]
    8{"`**8** PCI: conduct review`"}
    9["`**9** Send *Reject*`"]
    10(["`**10** Repo: accept decision`"])
    11["`**11** Send: *Announce Review*`"]
    12(["`**12** Repo: record review`"])
    13["`**13** Send *Announce Endorsement*`"]
    14(["`**14** Repo: record decision`"])
    
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

