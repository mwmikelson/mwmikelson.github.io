---
layout: post
title: "How reliable are the AC Transit bus routes?"
date: 2026-07-08 14:41:00
description: Analysis and mapping of delays and cancellation in AC Transit routes over the course of 2024.
tags: transit mapping leaflet bus
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
    font-size: 0 !important; /* Shrinks the text exactly to 0 pixels */
    color: transparent !important; /* Makes it completely invisible */
    display: inline-flex !important; 
    align-items: center !important; /* Forces perfect vertical alignment */
  }
  
  #search-toggle i, 
  #search-toggle svg {
    font-size: 1.25rem !important; /* Blows the magnifying glass back up to normal size */
    color: var(--global-text-color) !important; /* Restores its proper color */
    margin-top: 2px !important; /* Tiny tweak to level it perfectly with the moon/sun icon */
  }
</style>

I was cat-sitting for a friend recently, which meant taking bus routes I do not normally use. Typically, I can take either the 51B, 27, or 52 to work, which means there is usually a bus arriving within five minutes on a weekday. In this case, there were several different routes I could take. The 12 was the most convenient, but seemed to come only every 20 minutes, 30 minutes on Sundays and holidays, but 35 minutes on Saturdays (Do not ask me why Sundays are better than Saturdays). My other options were the 6, which comes every 12 minutes during the week or 15 minutes on weekends, or the 18, which comes every 15 minutes during the week and every 20 minutes on weekends. Despite my preference for the 12, it felt like it kept getting cancelled when I needed it. That was just an anecdotal impression, so I wanted to investigate if it was actually as unreliable as it felt. It turns out it is not any less reliable than the buses I frequently take and I was just unlucky, at least according to the last year of complete data from 2024. 

The map below lets you explore the cancellation and delay rates of each route by hovering over a route or searching for it.

<div class="embed-breakout" style="width: 100%; margin: 2rem 0;">
  <iframe 
    src="/assets/html/transit_map.html" 
    onload="checkGraphLoad(this)"
    style="opacity:0; transition:opacity 0.15s ease-in; width: 100%; height: 550px; border: none; display: block; background: transparent; overflow: visible;"
    scrolling="no"
    loading="lazy">
  </iframe>
</div>

The data comes from the <a href="https://opendata.actransit.org/organization/ac-transit" target="_blank" class="link">AC Transit Open Data Portal</a>. The data for delayed buses extends from 2021 to the first half of 2025 and the data on cancelled buses extends from 2022 to the first half of 2025. Although newer data exists, 2024 is the last available complete calendar year. The dataset included both annual and monthly levels of aggregation; I used the annual data.

It appears the 27 route was introduced after the 2024 data used in this analysis. Looking at the Wayback Machine archive from <a href="https://web.archive.org/web/20250627065344/https://www.actransit.org/maps-schedules" target="_blank" class="link">June 27, 2025</a> and <a href="https://web.archive.org/web/20250701174355/https://www.actransit.org/maps-schedules" target="_blank" class="link">July 1, 2025</a>, the 27 bus is not listed as one of the routes operated. The archived page from <a href="https://web.archive.org/web/20250801115451/https://www.actransit.org/maps-schedules" target="_blank" class="link">August 1, 2025</a> does include the 27 route.