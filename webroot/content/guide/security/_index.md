---
title: Security
date: 2022-07-29
description: "security aspect..."
draft: false
menu:
    guide_toc:
        identifier: guide_security
        weight: 40
recommendations:
  recommendation_1: "Early adopters should consider protecting the inbox by white-listing IP addresses of trusted systems. This is a temporary recommendation while good practice for more sophisticated forms of protections is worked out."
---

Security is, obviously, important to implementations of the COAR Notify Protocol. While security is outside of the scope of the protocol itself, and has many aspects in the context of web systems generally, we intend to gather and share knowledge and good practice here.


## Limiting access
One clear aspect of concern for implementing COAR Notify is to mitigate or prevent "spam" notifications arriving in inboxes, by limiting access from remote systems. The W3C LDN specification suggests some approached to this:

> Receivers should verify the sender of the notification. For example:
> * by having a whitelist of senders with write access to the Inbox 
> * requiring authentication to enforce receiver’s knowledge of every sender 
> * retrieving a copy of the notification from the sender’s domain to verify its origin 
> * checking a digital signature which accompanies the notification
> <div class="quote-reference"><a href="https://www.w3.org/TR/2017/REC-ldn-20170502/#sender-verification">https://www.w3.org/TR/2017/REC-ldn-20170502/#sender-verification</a></div>

In these early stages of COAR Notify implementation, we have not yet established good practice with regard to securing inboxes. Therefore, as a simple, temporary measure, the use of IP address "white lists" is recommended.


{{< recommendation "recommendation_1" >}}