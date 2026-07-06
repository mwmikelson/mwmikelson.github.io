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

    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    const textNodesToUpdate = [];

    while ((node = walk.nextNode())) {
      gsiProfessors.forEach(prof => {
        if (node.nodeValue.includes(prof) && !node.nodeValue.includes("Graduate Student Instructor")) {
          textNodesToUpdate.push({ node: node, prof: prof });
        }
      });
    }

    textNodesToUpdate.forEach(item => {
      let text = item.node.nodeValue;

      // 1. Remove any stray "Instructor:" text FIRST so we don't delete our own words later!
      text = text.replace(/Instructor:?\s*/gi, "");

      // 2. Inject the correct title safely
      text = text.replace(item.prof, "Graduate Student Instructor for " + item.prof);
      item.node.nodeValue = text;

      let parent = item.node.parentElement;
      if (parent) {
        // Force the main container to be normal, un-bolded text
        parent.style.setProperty("font-weight", "normal", "important");

        // 3. Hunt down and destroy any bold <strong> tags sitting right next to the text
        let prevSib = item.node.previousSibling;
        if (prevSib && prevSib.nodeType === 1 && prevSib.textContent.toLowerCase().includes("instructor")) {
          prevSib.style.display = "none";
        }

        // 4. Hunt down and destroy any separate table headers (<th>) sitting right next to the text
        let prevElem = parent.previousElementSibling;
        if (prevElem && prevElem.textContent.toLowerCase().includes("instructor")) {
          prevElem.style.display = "none";
          prevElem.innerHTML = ""; // Empties the box so it doesn't leave weird bold formatting behind
        }
      }
    });
  });
</script>