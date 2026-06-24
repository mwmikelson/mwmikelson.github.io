---
layout: page
permalink: /teaching/
title: Teaching
description: Course materials, schedules, and resources for classes taught.
nav: true
nav_order: 6
calendar: false
---

<style>
  /* Remove the 'cmd K' shortcut display on this page */
  #search-toggle .nav-search-key,
  #search-toggle span,
  #search-toggle kbd,
  .nav-search-key,
  kbd {
    display: none !important;
  }
</style>

{% include calendar.liquid calendar_id='test@gmail.com' timezone='Asia/Shanghai' %}

{% include courses.liquid %}
