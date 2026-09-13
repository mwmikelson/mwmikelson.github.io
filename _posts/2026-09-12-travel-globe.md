---
layout: post
title: "Mapping my travel history"
date: 2026-09-12 17:41:00
description: I mapped the cities, airports and countries I have visited.
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
    max-height: 600px; /* Match this to your globe height */
    overflow-y: auto;
    padding-right: 15px; 
  }


  /* 1. Break out of the narrow post margins */
  main .container, .post {
    max-width: 1200px !important; 
  }

/* --- NEW: The missing Flexbox rules to force side-by-side --- */
  .travel-layout {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 1.5rem;
  }
  
  /* On screens larger than an iPad, put them side-by-side */
  @media (min-width: 768px) {
    .travel-layout {
      flex-direction: row;
      align-items: flex-start;
    }
    .globe-column {
      flex: 1.2; /* Gives the globe slightly more width */
    }
    .list-column {
      flex: 0.8; /* Gives the list slightly less width */
    }
  }
  /* 3. Globe iframe styling */
  .globe-iframe {
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 8px;
    background-color: transparent; /* Helps if the iframe is rendering a white box in dark mode */
  }

  .year-divider {
    border-top: 1px solid var(--global-divider-color, #444);
    margin: 1rem 0;
  }
</style>

This map shows the places I have travelled. You can toggle between the flights I have taken and countries/cities I have been to. Both are complete to the best of my ability. Flights are fully accurate from 2019 to the present but it was somewhat hard to find records of flights I took prior to 2018, especially when it got farther back. What qualified as a city I had been to differed somewhat. I do not count landing at an airport if I did not intend for the city that airport is in was not my final destination. I also did not count layovers less than 8 hours as having been to a city. If I spent more than 8 hours on a layover, I am assuming I left the airport. This may not always be the case but I did not want to sort through the hundreds of flights I have been on to figure it out.


<div class="travel-layout">
  <!-- LEFT COLUMN: The Globe HTML -->
  <div class="globe-column">
    <!-- Using site.baseurl ensures the path is absolute from the root of your site -->
    <iframe src="{{ site.baseurl }}/assets/html/travel_globe.html" class="globe-iframe" title="Interactive Travel Globe"></iframe>
  </div>

  <!-- RIGHT COLUMN: The Scrollable Data List -->
  <div class="list-column scrollable-list" id="travel-list-container">
    <!-- JavaScript will inject the JSON data here -->
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON file
    fetch("{{ site.baseurl }}/assets/json/travel_by_year.json")
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        const container = document.getElementById("travel-list-container");
        
        // Reverse the data so the most recent year is at the top
        const reversedData = data.reverse();

        // Loop through the data and build the HTML
        reversedData.forEach((item, index) => {
          const countriesText = Array.isArray(item.countries) 
            ? item.countries.join(", ") 
            : item.countries;

          let htmlBlock = `
            <div>
              <h5 class="travel-year-heading">${item.Year}</h5>
              <div class="travel-countries-list">${countriesText}</div>
            </div>
          `;

          // Add a divider line between years
          if (index < reversedData.length - 1) {
            htmlBlock += `<hr class="year-divider">`;
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