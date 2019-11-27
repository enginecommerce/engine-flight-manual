---
layout: default
title: Hotfixes
subhead: When in the course of human events it becomes necessary for us to deploy a hotfix for a Really Bad Problem, follow this process
parent: Engineering Guides
grand_parent: Engineering
has_children: false
permalink: /engineering/guides/hotfixes
---

{% include page_header.html %}

1. Create a branch that has the hotfix, and open a PR on that branch.
2. Link the PR to the #seniordevs channel and get at least one review on the PR.
3. Check the PR in its review app if time permits.
3. In the heroku admin, deploy the branch directly to the `engine-storefront-staging` app. This can be done from the `Deploy` tab of the app.
4. Once the branch has been deployed, promote that app to production servers as required.
The takeaway here is that you can deploy any branch to a heroku app, and that allows us to bypass some of the time-consuming parts of our normal process like waiting for CI to complete. This is a process we would not want to use unless there is no other alternative.
