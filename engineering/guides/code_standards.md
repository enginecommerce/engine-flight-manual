---
layout: default
title: Code Standards
parent: Engineering
subhead: Questions to ask about code
has_children: false
permalink: /engineering/code-standards
---

{% include page_header.html %}

This list exists because we haven't been faithful to [Uncle Bob's Thoughts on Code Standards](http://wiki.c2.com/?UncleBobOnCodingStandards), so we chose to lean on this crutch until such a point that our code speaks for itself.

This is a list of opinions that should help you make decisions while writing, or reviewing code.

1. Don't use class_eval in Ruby, use prepend or composition instead.
2. Don't write jQuery, use vanilla JS instead.
3. Use destructuring in JS.
4. Don’t use `where(...).first` when `find_by` or `where(...).take` will work.
5. Write single-responsibility methods.
6. Use descriptive, meaningful names.
7. Write loosely coupled tests.
8. Make small commits with useful messages.
9. Avoid indexed loops, iterate over data.
10. Use I18n or constants for copy strings and values.

These standards are guidelines. Sometimes guidelines should be broken, but only when a sufficient reason can be articulated to the satisfaction of the team.

No one individual holds the rule of law on code quality. Code standards are a codification of how a team thinks; therefore, the code standards grow and flex with the team. As we increase neurological diversity on the team, these standards are expected to shift. 

Because this is a reflection of the team, and no one individual is above the team, no one is above the code review process.
