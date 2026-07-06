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
  /* 1. Bulletproof Outline Buttons (Light Gray) */
  .course-btn-custom {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px;
    padding: 4px 10px !important;
    margin-top: 10px !important;
    margin-right: 6px !important;
    font-size: 0.85rem !important;
    font-weight: 600 !important;
    color: #888888 !important; 
    background-color: transparent !important;
    border: 1px solid #888888 !important; 
    border-radius: 4px !important;
    text-decoration: none !important;
    transition: all 0.2s ease-in-out !important;
    z-index: 10 !important;
    position: relative !important;
    cursor: pointer !important; /* Makes it act like a real clickable link */
  }
  
  .course-btn-custom:hover {
    color: #555555 !important;
    border-color: #555555 !important;
    background-color: rgba(0,0,0,0.02) !important;
  }

  /* 2. CMD K Eraser Fallback */
  #search-toggle { font-size: 0 !important; }
  #search-toggle i, #search-toggle svg { font-size: 1.25rem !important; color: var(--global-text-color) !important; }
  kbd, .nav-search-key, .search-key { display: none !important; }
</style>

{% include courses.liquid %}

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Put the names of your GSI professors here!
    const gsiProfessors = ["Prof. Example", "David Broockman"];

    // This scans every single piece of raw text on your page
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    const textNodesToUpdate = [];

    while ((node = walk.nextNode())) {
      gsiProfessors.forEach(prof => {
        // If it finds the professor's name, queue it up for a change
        if (node.nodeValue.includes(prof) && !node.nodeValue.includes("Graduate Student Instructor")) {
          textNodesToUpdate.push({ node: node, prof: prof });
        }
      });
    }

    textNodesToUpdate.forEach(item => {
      // 1. Swap the professor's name for the full GSI title
      item.node.nodeValue = item.node.nodeValue.replace(item.prof, "Graduate Student Instructor for " + item.prof);

      // 2. If the word "Instructor:" was in the exact same text block, erase it
      item.node.nodeValue = item.node.nodeValue.replace(/Instructor:?\s*/i, "");

      let parent = item.node.parentElement;
      if (parent) {
        // 3. Force the text to be normal weight (removes the bolding)
        parent.style.setProperty("font-weight", "normal", "important");

        // 4. If the theme put an "Instructor" label in a separate box right next to the name, hide it!
        let prev = parent.previousElementSibling;
        if (prev && prev.textContent.includes("Instructor")) {
          prev.style.display = "none";
        }
      }
    });
  });
</script>