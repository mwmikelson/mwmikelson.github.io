---
layout: course
title: "PS 3: Introduction to Empirical Analysis and Quantitative Methods"
# We inject the spans here for the preview card, but add "preview-only-btn" so we can hide them on this page!
description: >
  This course covers analytical and methodological problems of political inquiry, with an emphasis on quantification and measurement.<br><br>
  <span onclick="window.location.href='/assets/pdf/ps-3-syllabus.pdf'; event.preventDefault(); event.stopPropagation();" class="course-btn-custom preview-only-btn"><i class="fa-regular fa-file-lines"></i> Syllabus</span>
  <span onclick="window.location.href='/assets/pdf/ps-3-section-syllabus.pdf'; event.preventDefault(); event.stopPropagation();" class="course-btn-custom preview-only-btn"><i class="fa-regular fa-file-lines"></i> Section Syllabus</span>
instructor: "Graduate Student Instructor for David Broockman"
role: Graduate Student Instructor
year: 2026
term: Fall
# location: Science Building, Room 202
# time: Mondays and Wednesdays, 2:00-3:30 PM
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
  /* 1. This hides the buttons from the description so they don't duplicate on this page! */
  .preview-only-btn {
    display: none !important;
  }

  /* 2. Button styling for the ones we actually want to show on this page */
  .course-btn-custom {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px;
    padding: 4px 10px !important;
    margin-bottom: 25px !important; /* Adds space below the buttons */
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

  /* CMD K Eraser Fallback for this page too */
  #search-toggle { font-size: 0 !important; }
  #search-toggle i, #search-toggle svg { font-size: 1.25rem !important; color: var(--global-text-color) !important; }
  kbd, .nav-search-key, .search-key { display: none !important; }
</style>

<a href="{{ '/assets/pdf/ps-3-syllabus.pdf' | relative_url }}" class="course-btn-custom">
  <i class="fa-regular fa-file-lines"></i> Syllabus
</a>
<a href="{{ '/assets/pdf/ps-3-section-syllabus.pdf' | relative_url }}" class="course-btn-custom">
  <i class="fa-regular fa-file-contract"></i> Section Syllabus
</a>

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
