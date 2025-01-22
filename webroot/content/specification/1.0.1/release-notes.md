---
title: Release Notes
description: ''
date: "2025-01-22"
layout: release-notes
---

These are the release notes for the 1.0.1 version of the specification.

Changes since [v1.0.0](/specification/1.0.0/):

1. `context` has been made a REQUIRED property in all "announce" patterns. Since all implementations of the announce patterns to date have included this property, this change is not being considered a breaking change.
2. The `inbox` sub-property of `origin` is not RECOMMENDED instead of REQUIRED. Some workflows are very simple, involving a single notification. In such cases, it is not necessary for the `origin` to have an `inbox`.