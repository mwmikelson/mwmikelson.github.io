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

  /* Break out of the narrow post margins for a wider view */
  main .container, .post {
    max-width: 1200px !important; 
  }

  /* The scrolling list container */
  .scrollable-list {
    max-height: 600px; 
    overflow-y: auto;
    padding-right: 20px; 
  }

  /* Typography for the list */
  .travel-year-heading {
    font-weight: 700;
    margin-bottom: 0.25rem;
    font-size: 1.5rem;
    color: var(--global-text-color);
  }
  .travel-countries-list {
    font-size: 1rem;
    color: var(--global-text-color-light);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  .year-divider {
    border-top: 1px solid var(--global-divider-color, #444);
    margin: 1rem 0;
  }
</style>

<!-- WARNING: Do not add blank lines between these div tags, or Jekyll will break the grid -->
<div class="row align-items-center mt-4">
  <div class="col-md-7">
    <iframe src="{{ site.baseurl }}/assets/html/travel_globe.html" style="width: 100%; height: 600px; border: none; background-color: transparent;" title="Interactive Travel Globe"></iframe>
  </div>
  <div class="col-md-5 scrollable-list" id="travel-list-container"></div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    fetch("{{ site.baseurl }}/assets/json/travel_by_year.json")
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        const container = document.getElementById("travel-list-container");
        const reversedData = data.reverse();

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

          if (index < reversedData.length - 1) {
            htmlBlock += `<hr class="year-divider">`;
          }

          container.innerHTML += htmlBlock;
        });
      })
      .catch(error => {
        console.error("Error loading travel data:", error);
        document.getElementById("travel-list-container").innerHTML = "<p>Unable to load travel data.</p>";
      });
  });
</script>