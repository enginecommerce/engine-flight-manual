---
layout: default
title: Holiday Coverage
subhead: This plan ensures the profitable operation of our ecommerce client sites during Engine office closure; we aim to provide exceptional coverage and problem mitigation while avoiding disruptions of planned time off for Engineering team members

parent: Processes
has_children: false
permalink: /engineering/processes/holiday-coverage
---

{% include page_header.html %}

Use this Table of Contents as a reference. Read it first, and get a good idea of this entire process. Refer back to this table as a reminder of what to do during the steps in the process.

* An unordered list to be replaced with the Table of Contents
{:.no_toc}
{:toc}

---

## Assigned Engineers

### Assignment

Management will make available an internally-accessible list of assigned engineers for each holiday period.

### Auditing

As part of this assignment, the assigned Engineers are immediately entrusted with the responsibility and authority to audit their assigned client site for holiday performance readiness.

### Authority

The Engineer on watch has the authority to solicit help from any Engine team member they decide necessary at any time to address problems, including Engine executives.

When team members are not responsive to Slack notifications, use the phone. It may be helpful to consult the Engine Vacations Calendar for notes left regarding Internet/mobile coverage.

### Pre-Holiday Code Freeze Period

No fewer than two days before Engine offices close for each holiday, merges to master and deploys will be halted at the discretion of the scheduled engineer on call.

If changes need to be deployed during the code freeze period, the approval of the scheduled engineer on call is required.

### Getting Alerts

Slack channels for each client will be monitored for all activity by the Engineer on watch. These channels will receive updates from server log monitors as well as client representatives.

Anyone else is welcome to monitor alert channels, provided they defer to the Engineer on watch’s decisions and coordination of effort.

## Plan Ahead

### Debug Client Promotional Plans Before They Launch

An Engine client representative will contact clients at least one week prior to the planned holiday to learn of expected marketing campaigns and/or changes to the site. If significant plans are expected, a dry-run of those campaign changes will be performed early in production or in staging.

#### Actual Example #1: How to Have a Bad Black Friday

* Client wants to offer 50% off of all products on Black Friday, so they create a Promotion code with the option “site exclusive” set to “true”
* Client sends lots and lots of emails early Black Friday morning with the new Promotion code
* Client finds out the hard way that their existing “Free Shipping on All Orders over $85” promotion is also a Promotion, which pre-applies to all carts, preventing any “site exclusive: true” promotion from being used
* Client and Engine Engineer panic ensues on a Black Friday, while multiple customers complain of their experiences on the live production site

## When a Problem Occurs

Issues will be reported by server log alerts or by client reps to subscribable Slack channels. Because these channels alert personal phones at all hours, they will be reserved for critical service alert messages only.

### Tell the Channel You’re “On It”

When a problem alert is posted to Slack, the engineer on watch will immediately start a thread on the alert to coordinate effort in resolving the problem.

Use English; “On it,” is sufficient to indicate actions are being taken. Clever emojis and “...” are not sufficient.

If the alert does not affect revenue or site function, no further debugging action is required. Respond to the Slack thread to indicate the status. If the issue requires more effort, create a Clubhouse card and link it in the Slack thread.

### Journal the Problem

If the alert affects revenue or site function. Take a moment to create a Clubhouse card and link it in the Slack thread. Try to continue giving updates via Clubhouse, instead of Slack.

### Escalation Communication Plan

#### If an issue does not appear to affect client revenue

1. Journal an issue summary on the card
2. Seek to find a workaround for the issue and journal the workaround on the card
3. After 30min from issue report, if a workout-around cannot be determined, contact the Technical Lead in charge of the area of product experience or the VP of Engineering; the Technical Lead or the VP of Engineering will determine the next steps

The client rep will communicate any workaround or resolution status to the client. The card will be prioritized for work when office hours resume.

#### If the issue impacts client revenue

1. Journal an issue summary on the card
2. Seek to find a workaround for the issue and journal the workaround on the card
3. After 30min from issue report, if a workaround is not apparent, contact the Technical Lead in charge of the area of product experience or the VP of Engineering
4. After 2hrs from issue report, if a work-around does not exist, contact the CTO
5. After 3hrs from issue report, if a work-around does not exist, the CTO will contact the CEO; the CEO will determine the next steps.

The client rep will communicate any workaround or resolution status to the client.

### Always Journal the Resolution

After the problem is resolved or a resolution path is discovered, journal the decided course of action on the Clubhouse card.

#### Good examples

* “Known bug, card #987”
* “Problem was a _flux capacitor_ stack overflow. Restarted Unicorn process, and all metrics appear fine. We should prioritize investigation and a fix in the next Sprint (issue assigned to Project Manager and Technical Lead).”

#### Bad examples

* “Well, that sucked.”
* “...”

### When You Need to Phone a Friend

Engineering team members will make themselves available at an internally-accessible directory of phone numbers. The Slack app is installed on all personal phones, and notifications are enabled for channel-mentions and PMs.
