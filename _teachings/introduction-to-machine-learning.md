---
layout: course
title: Introduction to Machine Learning
description: >
  This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.<br><br>
  <span onclick="window.location.href='/assets/pdf/ml-syllabus.pdf'; event.preventDefault(); event.stopPropagation();" class="course-btn-custom preview-only-btn"><i class="fa-regular fa-file-lines"></i> Syllabus</span>
  <span onclick="window.location.href='/assets/pdf/ml-section-syllabus.pdf'; event.preventDefault(); event.stopPropagation();" class="course-btn-custom preview-only-btn"><i class="fa-regular fa-file-lines"></i> Section Syllabus</span>
instructor: Prof. Example
year: 2026
term: Spring
location: Main Campus, Room 301
time: Tuesdays and Thursdays, 10:00-11:30 AM
course_id: intro-machine-learning
schedule:
  - week: 1
    date: Sept 5
    topic: Course Introduction
    description: Overview of machine learning, course structure, and expectations.
    materials:
      - name: Syllabus
        url: /assets/pdf/example_pdf.pdf
      - name: Slides
        url: /assets/pdf/example_pdf.pdf

  - week: 2
    date: Sept 12
    topic: Linear Regression
    description: Introduction to linear regression, gradient descent, and model evaluation.
    materials:
      - name: Lecture Notes
        url: /assets/pdf/example_pdf.pdf
      - name: Assignment 1
        url: /assets/pdf/example_pdf.pdf

  - week: 3
    date: Sept 19
    topic: Classification
    description: Logistic regression, decision boundaries, and multi-class classification.
    materials:
      - name: Lecture Notes
        url: /assets/pdf/example_pdf.pdf
      - name: Coding Lab
        url: https://github.com/

  - week: 4
    date: Sept 26
    topic: Decision Trees and Random Forests
    description: Tree-based methods, ensemble learning, and feature importance.
    materials:
      - name: Lecture Notes
        url: /assets/pdf/example_pdf.pdf
      - name: Assignment 2
        url: /assets/pdf/example_pdf.pdf

  - week: 5
    date: Oct 3
    topic: Support Vector Machines
    description: Margin maximization, kernel methods, and support vectors.
    materials:
      - name: Lecture Notes
        url: /assets/pdf/example_pdf.pdf
      - name: Review Materials
        url: /assets/pdf/example_pdf.pdf

  - week: 6
    date: Oct 10
    topic: Midterm Exam
    description: Covers weeks 1-5.

  - week: 7
    date: Oct 17
    topic: Neural Networks Fundamentals
    description: Perceptrons, multilayer networks, and backpropagation.
    materials:
      - name: Lecture Notes
        url: /assets/pdf/example_pdf.pdf
      - name: Assignment 3
        url: /assets/pdf/example_pdf.pdf

  - week: 8
    date: Oct 24
    topic: Deep Learning
    description: Convolutional neural networks, recurrent neural networks, and applications.
    materials:
      - name: Lecture Notes
        url: /assets/pdf/example_pdf.pdf
      - name: Coding Lab
        url: https://github.com/
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

<a href="{{ '/assets/pdf/ml-syllabus.pdf' | relative_url }}" class="course-btn-custom">
  <i class="fa-regular fa-file-lines"></i> Syllabus
</a>
<a href="{{ '/assets/pdf/ml-section-syllabus.pdf' | relative_url }}" class="course-btn-custom">
  <i class="fa-regular fa-file-lines"></i> Section Syllabus
</a>


## Course Overview

This introductory course on machine learning covers fundamental concepts and algorithms in the field. By the end of this course, students will be able to:

- Understand key machine learning paradigms and concepts
- Implement basic machine learning algorithms
- Evaluate and compare model performance
- Apply machine learning techniques to real-world problems

## Prerequisites

- Basic knowledge of linear algebra and calculus
- Programming experience in Python
- Probability and statistics fundamentals

## Textbooks

- Primary: "Machine Learning: A Probabilistic Perspective" by Kevin Murphy
- Reference: "Pattern Recognition and Machine Learning" by Christopher Bishop

## Grading

- Assignments: 40%
- Midterm Exam: 20%
- Final Project: 30%
- Participation: 10%
