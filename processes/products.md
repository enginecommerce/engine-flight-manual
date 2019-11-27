---
layout: default
title: Products
subhead: How Products are Created, from Concept to Launch
parent: Processes
has_children: false
permalink: /processes/product/
---

{% include page_header.html title="The Engine Product Process" %}

Use this Table of Contents as a reference. Read it first, and get a good idea of this entire process. Refer back to this remind you of what to do during the steps in the process.

* An unordered list to be replaced with the Table of Contents
{:.no_toc}
{:toc}

---

# Product Version Evolution

## Section Summary
{:.no_toc}

<mark>Ideas are cheap. Turning ideas into a meaningful, profitable business is hard.</mark>

Always think of Engine products as versions along a timeline of the product's evolution – some features are appropriate for the current version, and some are appropriate for a later version. The process of evolution is largely the same, but in any case you must assign responsibility to a Product Steering Team to get started.

---

## Assemble a Product Steering Team

With each evolution of the product, a Product Steering Team should be assembled in order to steer the scope and effort of development. These members should remain steering members throughout the duration of the product version.

* **An Appointed Decider For the Product**

  The Decider owns the success or failure of the product launch. <mark>The Decider is the ultimate holder and arbiter of features and deadlines.</mark> They say things like, "The problem we need to solve is {this}," "That's a feature for the next version," or "Cut {feature} in order to ship by {date}."

* **A Project Manager**

  The PM is not the Decider. The PM takes feedback from different directions in order to analyze and communicate progress toward deadlines to the Decider and the team. The PM is responsible for monitoring and clearly communicating progress to the Decider.

* **A Design and Prototyping Team**

  The design and prototyping team are busiest before software is written. They must be available to design fully-clickable product prototypes that demonstrate every feature of product evolution, and they must remain available to review feedback and rework steps for Decider approval.

* **A Senior Development Team**

  The senior development team should consist of a UX developer, a systems architect, and a senior developer. In order to advise on services and timelines needed to support the solution, the team should be familiar with the product problem, the proposed solution, and our technology stack.

* **A Senior Sales/Marketing Team**

  The senior sales/marketing team should understand the product problem, the proposed solution, and should perform market research to inform: market size, market receptibility, and ROI of our project. They will develop a go-to-market plan with the Decider and will develop marketing materials while software development takes place.

---

# Production Phases

## Section Summary
{:.no_toc}

Production happens in Phases. The Phases begin with Discovery, then they create user-tested prototypes before any software is written, they develop a product to specifications, they launch a product into the hands of an intentional number of users, and they end with user tests and feedback to inform and plan the future evolution of the Product.

Note on "Later:" "We'll figure that out later" is a bad smell. It means this step is not complete. Grab a marker and paper and figure it out. It is much easier to grab a marker and solve the problem now than it is to do it in hours of work, millions of pixels, and thousands of lines of layout code later while using prototyping tools.

### Contents
{:.no_toc}

* Phase 1: Discovery
* Phase 2: Prototype
* Phase 3: Development
* Phase 4: Launch

---

## Phase 1: Discovery

Discovery is broken into Research and Design. Use this phase to erase preconceptions about implementations and gather real data to support or change decisions. Do research to confirm hunches and assumptions.

### Research

#### Perform the following exercises
{:.no_toc}

* Gather support data from interviews, surveys, or historical data
* Perform secondary (already available data) research
* Compare features with competitors, create a differentiator, avoid copycat syndrome

#### Answer the following questions
{:.no_toc}

* About the Problem
  * What problem are we solving?
  * Which personas are we solving this problem for?
  * Is this problem shared by a significant number of [ customers / people in the world ]?
  * What technology/devices does our audience currently use most to address this problem?
  * How will solving this problem make the [money / difference] our business needs?
  * How would we solve this problem without writing any code?
* About the Solution
  * What goods and services does our solution have to displace for success?
  * Does this already exist? Did this exist? Why doesn't this exist today?
  * Does anybody want this solution, how many people want this solution, how much will they pay
  * Is it easy for a customer to understand the ROI of this product?
  * What does it cost us to acquire a customer?
  * What technology/devices would our audience use most to address this problem?
* About the Implementation
  * **What is the 20% implementation of this idea that can produce 80% of what we want?**
* About Measuring Success
  * Define metrics that would indicate the success of this project
  * Define how these metrics will be measured and recorded
  * Set goals within these metrics to define how successful the feature/product is

#### Create a 60-Second Pitch for the Product Version
{:.no_toc}

Together with the product owners, write a 60 second pitch to be shared with the team.

Always keep this pitch top-of-mind, in order to guide the project. If the verbiage of the pitch begins to stray, or if the software doesn't fulfill the promises of the pitch, then something has been mis-communicated or the goal posts have moved over time.

Investigate, communicate, and set realistic expectations around what has been adjusted.

#### Completion
{:.no_toc}

Research is complete when the Decider determines that a 20%-effort solution can be made to meet 80% of the researched problem.

### Story Creation

In plain English, explain how this evolution of our product will solve problems. These phrases should address how we solve the business problem; they should not describe button behaviors, etc. They will help us avoid "seeing a roach and grabbing a sledge hammer."

Write Product Goals as stories using the following format:

`"{Type of Customer} can {do this thing}"`

Journal and categorize stories as

* Current Feature
* Future Feature

#### Good Examples
{:.no_toc}

* From Engine Mail
  * A Shopify Customer can be reminded via responsive email of a product they have recently viewed
  * A Shopify Admin can customize responsive emails sent to customers
  * A Shopify Admin can track and evaluate the effectiveness of responsive emails sent to customers
* From Engine Subscription Management
  * An Engine Customer can switch subscription product sizes (and other variants)
  * An Engine Customer can skip the next subscription delivery
  * An Engine Customer can change the subscription item quantity
  * An Engine Customer can update their shipping/billing information
  * An Engine Customer can cancel a subscription
  * Future Feature: An Engine Customer can manage subscriptions via a native phone app

#### Poor Examples
{:.no_toc}

Basically build {competitor 1}, {competitor 2}, or {competitor 3}
Just add a button here, and then we'll see how it works
Execute what our designers come up with

#### Completion
{:.no_toc}

Story creation is complete when the Decider determines the stories, as-written, sufficiently address the problem with a realistic solution.

## Phase 2: Prototype

### Development

#### Make & Iterate Pen-and-Paper Wireframes
{:.no_toc}

* Assemble the team and review great solutions from other companies
* Each person takes notes on their own and takes a little time to capture what they like in quick drawings
* Collect sketches. Each person on the team puts 1-3 colored dot stickers beside each idea they like, like a heat map
* The Decider decides what ideas make it to the next step
* Conclude when enough user interactions have been created to make a complete UX wireframe.

_**Note for remote teams:** use pen-and-paper, just like everybody else, then take photos of the wireframe drawings, collect them using Invisionapp.com, and share them with the Decider for review._

#### Make & Iterate a Single, Complete Software Wireframe
{:.no_toc}

* The UX Developer and Designer create low-fidelity wireframes of all views, forms, buttons, etc. that will be used.
* Spend no time at all making these wireframes look pretty. The wireframes should only inform needed elements and potential layout. Create wireframes for mobile (when needed) and desktop.
* Iterate with the Decider and consult senior development until the business problem is fully addressed by a realistically-buildable wireframe solution

#### Make & Iterate Mocks
{:.no_toc}

* The Designer creates a very small handful of key mocks to illustrate general appearance, button styles, information displays, modal styles, etc.
* Iterate mocks for look and feel until the Decider is appeased; these look-and-feel mocks will influence every page of the UX prototype

#### Make & Iterate a Single, Complete, Clickable Prototype
{:.no_toc}

* Create a clickable Prototype sufficient for an anonymous user to walk through, critique, and approve during anonymous testing via maze.design, usertesting.com, or similar
* Iterate the prototype until the Product Steering Team is satisfied and tests produce the results desired; then it's time to write some code

#### Completion
{:.no_toc}

Completion is achieved when all Product Steering Team divisions of responsibility are satisfied by a clickable prototype, which may be referenced by the development phase.

## Phase 3: Development

### Software

#### Plan the Software (and Spike When Necessary)
{:.no_toc}

* The Decider, PM, and senior development team will plan and journal the use of technology on-hand, technology to-be-built, and the time required to execute.
* Assemble an appropriately-sized engineering team to execute the stories

_**Note on "Spikes:"** It may be necessary to prove a new software concept in an untested "Spike" or a proof-of-concept. These software Spikes are never to be intended for production use, but they may be necessary to gauge realistic development timelines._

#### Execute the Software
{:.no_toc}

* The PM, Decider, and Project Senior Engineers will meet weekly to review progress and velocity toward meeting deadlines
* The PM and engineering team will meet daily in standups
* The PM, Decider, and engineering team will meet weekly to demo progress
* Software tests should be written to cover consistent software performance, consistent integration between moving parts, and business-critical user-facing features

_**Note on deadlines:** in the case of looming deadlines, when software feature completion is in doubt, feature triage should be performed at the direction of the Decider. It is the PM's job to accurately inform the Decider of velocity and progress. It is the Decider's responsibility to balance our ability against our business priorities._

#### Quality Assurance
{:.no_toc}

* Features must be tested in as close to a production environment as possible for their intended effect
* A feature cannot be considered complete until the Decider and designated Senior Engineer have approved of the quality of operation

#### Completion
{:.no_toc}

Development is concluded when stories that describe our 20/80-solution are complete as-described, tested, and work in production to the satisfaction of the Decider.

### Go-to-Market

#### Plan the Go-to-Market
{:.no_toc}

* The Decider and senior sales/marketing team will develop a go-to-market plan

#### Develop Go-to-Market Materials
{:.no_toc}

* The sales/marketing team will develop sales/marketing materials while software development is underway

## Phase 4: Launch

### Measurement

We are ready to launch a product when we are ready to measure its success or failure.

* Gather the criteria for success
* Execute the go-to-market plan
* Measure and examine real-world usage against our product assumptions

### Evolution Planning

Congratulations! You have launched a product evolution. Now it's time to take a breath and take your measurements into the next evolution.

Next, see [Product Version Evolution](#step1) above.
