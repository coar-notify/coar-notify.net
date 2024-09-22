---
tags: []
title: "Asynchronously reporting 'un-processable' notifications"
date: 2024-04-15
draft: false
author: Paul Walk
---

In the [Madrid meeting](https://notify.coar-repositories.org/2024/notify-developers-meeting-2024/) we discussed how to notify a system that it has sent an "un-processable" notification. This was also discussed in the GitHub repository [discussion forum](https://github.com/coar-notify/notify.coar-repositories.org/discussions/2).
<!--more-->

The use case is that a system receives a notification which is "well-formed", and so the receiver sends a `202 Accepted` response, queuing the notification for asynchronous processing. However, when the system attempts to process the notification, it discovers that it is "un-processable" for some reason. For example, a URL referenced in the notification might not be resolvable.

In this kind of use-case, HTTP error handling is not applicable, so the system needs a way to report the problem to the sender. The obvious approach is to send a notification explaining that a previously received notification is un-processable.

We have now published a [new draft pattern](/specification/patterns/unprocessable/) for expressing this.

If you have comments or questions about this, please post them on [this discussion forum thread](https://github.com/coar-notify/notify.coar-repositories.org/discussions/2).