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
    margin-top: 15px !important;
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
    cursor: pointer !important; /* Ensures it feels like a button */
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
    // Find all course cards on the page
    const cards = document.querySelectorAll('.card-body');
    
    cards.forEach(card => {
      const title = card.querySelector('.card-title');
      
      // Target the PS 3 Card specifically
      if (title && title.textContent.includes('PS 3')) {
        const btnContainer = document.createElement('div');
        
        // Create Button 1 (Using SPAN to prevent breaking the clickable card)
        const btn1 = document.createElement('span');
        btn1.className = 'course-btn-custom';
        btn1.innerHTML = '<i class="fa-solid fa-file-pdf"></i> Syllabus';
        btn1.onclick = function(e) { 
          e.preventDefault(); // Stops the card from expanding
          window.open("{{ '/assets/pdf/ps-3-syllabus.pdf' | relative_url }}", '_blank'); 
        };
        
        // Create Button 2
        const btn2 = document.createElement('span');
        btn2.className = 'course-btn-custom';
        btn2.innerHTML = '<i class="fa-solid fa-file-pdf"></i> Section Syllabus';
        btn2.onclick = function(e) { 
          e.preventDefault(); // Stops the card from expanding
          window.open("{{ '/assets/pdf/ps-3-section-syllabus.pdf' | relative_url }}", '_blank'); 
        };
        
        // Attach them securely to the card
        btnContainer.appendChild(btn1);
        btnContainer.appendChild(btn2);
        card.appendChild(btnContainer);
      }
    });
  });
</script>

{% include courses.liquid %}