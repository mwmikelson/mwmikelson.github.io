---
layout: post
title: "How reliable are the AC Transit bus routes?"
date: 2026-07-08 11:41:00
description: Analysis and mapping of delays and cancellation in AC Transit routes over the course of 2024.
tags: transit mapping leaflet
categories: data-visualization
chart:
  plotly: false
---

I was catsitting for a friend recently which meant taking bus routes I typically would not take. Typically, I can take either the 51B, 27 or 52 to work which means there is usually a bus coming in the next 5 minutes on a weekday. In this case there were several different routes I could take. The 12 was the most convenient but seemed to come only every 20 minutes, 30 minutes on Sundays and holidays and 35 minutes on Saturdays (do not ask me why Sundays are better than Saturdays/holidays). My other options were the 6 which comes every 12 minutes during the week or 15 minutes on the weekend; or the 18 which is every 15 minutes during the week or every 20 minutes on the weekend. Despite my preference for the 12, it felt like it was always getting cancelled when I needed it. That was just anecdotal so I wanted to investigate if it was actually as unreliable of a route as it felt. Turns out it is not less reliable than the busses I frequently take and I was just unlucky, at least according to the last year of complete data from 2024. Feel free to explore below.

<iframe 
  src="/assets/html/transit_map.html" 
  width="100%" 
  height="550px" 
  style="border: 1px solid #e0e0e0; border-radius: 6px;"
  loading="lazy">
</iframe>

The data comes from the <a href="https://opendata.actransit.org/organization/ac-transit" target="_blank" class="cv-link">AC Transit Open Data Portal</a>. The data for delayed busses extends from 2021 to the first half of 2025 and the data on cancelled busses extends from 2022 to the first half of 2025. It comes in both annual and monthly data, however, I used annual.