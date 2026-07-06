---
layout: course
title: "PS 3: Introduction to Empirical Analysis and Quantitative Methods"
description: >
  This course covers analytical and methodological problems of political inquiry, with an emphasis on quantification and measurement.<br><br>
  <span onclick='window.location.href=`/assets/pdf/ps-3-syllabus.pdf`; event.preventDefault(); event.stopPropagation();' class='course-btn-custom preview-only-btn'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-file-text-icon lucide-file-text'><path d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'/><path d='M14 2v5a1 1 0 0 0 1 1h5'/><path d='M10 9H8'/><path d='M16 13H8'/><path d='M16 17H8'/></svg> Syllabus</span>
  <span onclick='window.location.href=`/assets/pdf/ps-3-section-syllabus.pdf`; event.preventDefault(); event.stopPropagation();' class='course-btn-custom preview-only-btn'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-file-chart-column-icon lucide-file-chart-column'><path d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'/><path d='M14 2v5a1 1 0 0 0 1 1h5'/><path d='M8 18v-1'/><path d='M12 18v-6'/><path d='M16 18v-3'/></svg> Section Syllabus</span>
instructor: David Broockman
year: 2026
term: Fall
#location: Main Campus, Room 301
#time: Tuesdays and Thursdays, 10:00-11:30 AM
course_id: ps-3
# schedule:
#  - week: 1
#    date: Feb 5
#    topic: Introduction to Data Science
#    description: Overview of the data science workflow and key concepts.
#    materials:
#      - name: Syllabus
#        url: /assets/pdf/example_pdf.pdf
#      - name: Slides
#        url: /assets/pdf/example_pdf.pdf
---

<style>
  /* 1. Shrinks the description text to match the term/location/time text */
  .post-description {
    font-size: 1rem !important; 
    margin-bottom: 10px !important; /* Pulls the content below it up closer */
  }

  /* 2. Button styling (with the gap reduced) */
  .course-btn-custom {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px;
    padding: 4px 10px !important;
    margin-bottom: 10px !important; /* REDUCED this gap from 25px to 10px */
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
    cursor: pointer !important;
  }
  
  .course-btn-custom:hover {
    color: #555555 !important;
    border-color: #555555 !important;
    background-color: rgba(0,0,0,0.02) !important;
  }

  /* 3. Hides the duplicate preview buttons */
  span.course-btn-custom.preview-only-btn {
    display: none !important;
  }

  /* 4. Search fallback */
  #search-toggle { font-size: 0 !important; }
  #search-toggle i, #search-toggle svg { font-size: 1.25rem !important; color: var(--global-text-color) !important; }
  kbd, .nav-search-key, .search-key { display: none !important; }
</style>

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

<a href="{{ '/assets/pdf/ps-3-syllabus.pdf' | relative_url }}" class="course-btn-custom"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Syllabus</a>
<a href="{{ '/assets/pdf/ps-3-section-syllabus.pdf' | relative_url }}" class="course-btn-custom"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-chart-column-icon lucide-file-chart-column"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 18v-1"/><path d="M12 18v-6"/><path d="M16 18v-3"/></svg> Section Syllabus</a>


{% comment %}


## Course Overview

This course provides a comprehensive introduction to data science principles and practices. Students will:

- Learn the end-to-end data science workflow
- Gain practical experience with data manipulation tools
- Develop skills in data visualization and communication
- Apply statistical methods to derive insights from data

## Prerequisites

- Basic programming knowledge (preferably in Python)
- Introductory statistics
- Comfort with basic algebra

## Textbooks

- "Python for Data Analysis" by Wes McKinney
- "Data Science from Scratch" by Joel Grus

## Grading

- Assignments: 50%
- Project: 40%
- Participation: 10%

{% endcomment %}
