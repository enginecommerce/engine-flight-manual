---
layout: default
title: Style Guide
subhead: The Engine style guide for software development
parent: Engineering Guides
grand_parent: Engineering
has_children: false
permalink: /engineering/guides/style
---

[Ruby Composition Article URL]: https://thoughtbot.com/blog/proc-composition-in-ruby
[Ruby Prepend Article URL]: https://chunksofco.de/rubys-prepend-how-is-it-useful-d3bba8d11a95?gi=43b88377c442
[JS Destructuring Article URL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Description
[DRY Article URL]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[YAGNI Article URL]: https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it#cite_note-XPe-2
[Better Commit Messages Article URL]: https://thoughtbot.com/blog/5-useful-tips-for-a-better-commit-message
[Single Responsibility Article URL]: https://8thlight.com/blog/elizabeth-engelman/2015/01/22/single-responsibility-principle-why-does-it-matter.html

{% include page_header.html %}

## WIP

We view our business and our software as a continual work in progress. We have made a lot of mistakes to get here, and we will make more as we progress. Simply observe these standards as you go, improve continually, and always leave your projects a little cleaner than how you found them.

Eventually, we hope that this section of our Flight Manual will grow to be its own valuable, linkable resource. In order to make that happen, please make issues and PRs against this guide to improve it.

## General Guidlines

Simply put: do not merge a pull request if you notice the code breaks any of these guidelines. These code standards are not always correct, but they are *frequently* correct. Keep them in mind as you work and review the work of others, because thinking about them will make us all write better code.

1. In Ruby, don’t use `class_eval`, use [`prepend`][Ruby Prepend Article URL] or [composition][Ruby Composition Article URL] instead
2. In Ruby, don’t use `where(...).first` in cases where `find_by` or `where(...).take` will work
3. In JS, don’t write jQuery; write vanilla JS instead
4. In JS, use [destructuring][JS Destructuring Article URL] in transpiled/webpacked JS
5. Write [single-responsibility methods][Single Responsibility Article URL]
6. Use descriptive, meaningful names
7. Write loosely coupled tests
8. Write [DRY][DRY Article URL] code, with [YAGNI][YAGNI Article URL] in mind
9. Avoid indexed loops, iterate over data
10. Write [descriptive commit messages][Better Commit Messages Article URL].

