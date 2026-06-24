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
  /* 1. Bulletproof Outline Buttons (Neutral Color, NOT Blue) */
  .course-btn-custom {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px;
    padding: 4px 10px !important;
    margin-top: 10px !important;
    margin-right: 6px !important;
    font-size: 0.85rem !important;
    font-weight: 600 !important;
    color: var(--global-text-color) !important; /* Forces it to use standard text color (grey/black/white) */
    background-color: transparent !important;
    border: 1px solid var(--global-text-color) !important; /* Creates the clean outline */
    border-radius: 4px !important;
    text-decoration: none !important;
    transition: opacity 0.2s ease-in-out !important;
    z-index: 10 !important;
    position: relative !important;
  }
  
  .course-btn-custom:hover {
    opacity: 0.6 !important;
  }

  /* 2. CMD K Eraser Fallback */
  #search-toggle { font-size: 0 !important; }
  #search-toggle i, #search-toggle svg { font-size: 1.25rem !important; color: var(--global-text-color) !important; }
  kbd, .nav-search-key, .search-key { display: none !important; }
</style>

{% include courses.liquid %}