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
    // 1. Put the names of the professors you GSI'd for in these quotes!
    // If you add more classes later, just add them to the list separated by commas.
    const gsiProfessors = ["Prof. Example", "David Broockman"]; 
    
    // Find all bold/header tags on the page
    const labels = document.querySelectorAll("strong, b, th, span");
    
    labels.forEach(label => {
      // Find the labels that say Instructor
      if (label.textContent.includes("Instructor")) {
        
        // Look at the text right next to it to see who the professor is
        const containerText = label.parentElement.textContent;
        
        // Check if the professor is on your GSI list
        const isGSICourse = gsiProfessors.some(prof => containerText.includes(prof));
        
        if (isGSICourse) {
          // 1. Change the text and remove the bolding
          label.innerHTML = "Graduate Student Instructor for";
          label.style.fontWeight = "normal";
          
          // 2. Catch and delete the colon, even if it's hiding outside the bold tag!
          let nextNode = label.nextSibling;
          if (nextNode && nextNode.nodeType === Node.TEXT_NODE) {
            nextNode.nodeValue = nextNode.nodeValue.replace(/^:\s*/, " ");
          } else if (label.innerHTML.includes(":")) {
            label.innerHTML = label.innerHTML.replace(":", "");
          }
        }
      }
    });
  });
</script>