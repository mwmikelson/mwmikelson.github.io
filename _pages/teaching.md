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
  /* 5. The INSTANT CMD K Killer and Alignment Fix */
  #search-toggle {
    font-size: 0 !important; /* Shrinks the text exactly to 0 pixels */
    color: transparent !important; /* Makes it completely invisible */
    display: inline-flex !important; 
    align-items: center !important; /* Forces perfect vertical alignment */
  }
  
  #search-toggle i, 
  #search-toggle svg {
    font-size: 1.25rem !important; /* Blows the magnifying glass back up to normal size */
    color: var(--global-text-color) !important; /* Restores its proper color */
    margin-top: 2px !important; /* Tiny tweak to level it perfectly with the moon/sun icon */
  }
</style>

{% include calendar.liquid calendar_id='test@gmail.com' timezone='Asia/Shanghai' %}

{% include courses.liquid %}
