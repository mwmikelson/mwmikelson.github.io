---
layout: post
title: "Mapping My Travel History"
date: 2026-09-12 17:41:00
description: Places visited.
tags: travel flights mapping
categories: data-visualization
related_posts: false
chart:
  plotly: false
authors:
  - name: Maya Mikelson
---


<style>
  /* 5. The INSTANT CMD K Killer and Alignment Fix */
  #search-toggle {
    font-size: 0 !important;
    color: transparent !important;
    display: inline-flex !important; 
    align-items: center !important;
  }
  
  #search-toggle i, 
  #search-toggle svg {
    font-size: 1.25rem !important;
    color: var(--global-text-color) !important;
    margin-top: 2px !important;
  }

  /* Custom styling for the travel list */
  .travel-year-heading {
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  .travel-countries-list {
    font-size: 0.9em;
    color: var(--global-text-color-light);
    line-height: 1.6;
  }
  
  /* The scrolling container */
  .scrollable-list {
    max-height: 500px; /* Match this to your globe height */
    overflow-y: auto;
    padding-right: 15px; 
  }

  /* Globe iframe styling */
  .globe-iframe {
    width: 100%;
    height: 500px;
    border: none;
    border-radius: 8px; /* Optional: rounds the corners slightly */
  }
</style>

<div class="row">
  <!-- LEFT COLUMN: The Globe HTML -->
  <div class="col-sm-6">
    <iframe src="{{ '/assets/html/travel_globe.html' | relative_url }}" class="globe-iframe" title="Interactive Travel Globe"></iframe>
  </div>

  <!-- RIGHT COLUMN: The Scrollable Data List -->
  <div class="col-sm-6 scrollable-list" id="travel-list-container">
    <!-- JavaScript will inject the JSON data here -->
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // 1. Fetch the JSON file from the assets folder
    fetch("{{ '/assets/json/travel_by_year.json' | relative_url }}")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const container = document.getElementById("travel-list-container");
        
        // 2. Reverse the data so the most recent year (2026) is at the top
        const reversedData = data.reverse();

        // 3. Loop through the data and build the HTML
        reversedData.forEach((item, index) => {
          // Check if countries is an array or a single string, and format accordingly
          const countriesText = Array.isArray(item.countries) 
            ? item.countries.join(", ") 
            : item.countries;

          // Create the HTML structure for each year
          let htmlBlock = `
            <div class="mb-4">
              <h5 class="travel-year-heading">${item.Year}</h5>
              <div class="travel-countries-list">${countriesText}</div>
            </div>
          `;

          // Add a divider line between years, except for the very last one
          if (index < reversedData.length - 1) {
            htmlBlock += `<hr>`;
          }

          // Inject into the page
          container.innerHTML += htmlBlock;
        });
      })
      .catch(error => {
        console.error("Error loading travel data:", error);
        document.getElementById("travel-list-container").innerHTML = "<p>Unable to load travel data.</p>";
      });
  });
</script>