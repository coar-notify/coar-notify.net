---
title: COAR Notify Protocol Specification
description: |
  The _COAR Notify Protocol_ consists of documented community conventions for the use of W3C Linked Data Notifications (LDN) to integrate repository systems with relevant services in a distributed, resilient and web-native architecture.
date: 2022-08-02
draft: false
menus:
  main:
    weight: 20
    name: "Specification"
---
The _COAR Notify Protocol_ consists of documented community conventions for the use of W3C [Linked Data Notifications](https://www.w3.org/TR/2017/REC-ldn-20170502/) (LDN) to integrate repository systems with relevant services in a distributed, resilient and web-native architecture.

Notify notification patterns are more specific implementations of the generic patterns described by _[Event Notifications in Value-Adding Networks](https://www.eventnotifications.net)_.

The _COAR Notify Protocol_ specifies:

* [Notification Patterns](/specification/patterns/) (templates) which describe the payload for re-usable notifications. These notifications describe the individual linked data notifications sent between repositories and services, one or more of which may be used in a *workflow*.
* [A vocabulary](/specification/vocabulary/) which is used to provide values for certain properties in the notification payloads.


## Design Principles
The design and implementation of the COAR Notify Initiative is informed by the following design principles:

### Decentralisation
COAR Notify is designed to take advantage of the distributed nature of repositories. It is not a centralised service, but rather a protocol (built on open standards) that can be implemented by any repository or system. This means that the system is more resilient and scalable, and that it can be adapted to the specific needs of different communities and regions.

### Passing by Reference
COAR Notify makes the best possible use of the scholarly resources to be found in repositories around the world. The protocol is designed to allow these resources to be used _in situ_, rather than being copied and moved to other systems.

In software programming the term "pass-by-reference" refers to the passing of an parameter to a function by reference. This means that the function being called is given the memory address of the argument, rather than a copy of the parameter's value. In the context of the Web, the "memory address" of any resource is a URI. COAR Notify, therefore, is **primarily concerned with passing URIs from one "function" (or system) to another**. This is in direct contrast to older approaches to information exchange in the scholarly communication ecosystem which have tended to rely on passing copies of metadata from one system to another.

### Low Resource Requirement
COAR Notify is designed to be as lightweight as possible, both in terms of the resources required to implement it and the impact on the systems that use it. Once the main LDN components have been developed for a platform or a system, the cost of adding new notifications is greatly reduced.
