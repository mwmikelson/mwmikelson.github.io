---
layout: post
title: "Why does BART prioritize the Yellow Line despite higher demand for the Red Line?"
date: 2026-07-15 17:32:00
description: Analysis and mapping of BART ridership over 2024 and 2025 using hourly ridership data to evaluate BART's late-night train schedules.
tags: transit mapping leaflet bart
categories: data-visualization
related_posts: false
chart:
  plotly: false
authors:
  - name: Maya Mikelson
---

<script src="/assets/js/graph-fallback.js"></script>

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

  /* === NEW EMBED FIXES === */

  /* 1. The Breakout Layout: Pulls the maps and charts wider than the text */
  .embed-breakout {
    width: 108%;
    max-width: 950px;
    margin-left: -4%; /* Centered alignment: pulls 4% into the left margin */
    margin-right: -4%; /* Centered alignment: pulls 4% into the right margin */
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    box-sizing: border-box;
  }

  /* Responsive safeguard: keeps it at 100% width on mobile screens */
  @media (max-width: 768px) {
    .embed-breakout {
      width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  /* 2. Standardized layout styles for both frames */
  .clean-iframe {
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    display: block;
    overflow: hidden; /* Force-disables internal iframe scrolling */
  }
</style>

<div class="embed-breakout" style="background: transparent !important; padding: 0 !important; border: none !important; box-shadow: none !important; max-width: 100% !important; overflow: visible !important;">
  <iframe 
    src="/assets/html2/bart_interactive_ridership2.html"
    onload="checkGraphLoad(this)"
    style="width: 100% !important; aspect-ratio: 16 / 9; border: none !important; display: block !important; background: transparent !important; overflow: visible !important; border-radius: 0 !important;"
    scrolling="no"
    loading="lazy">
  </iframe>
</div>

I recently went to visit my grandma in Iowa City. I intentionally book flights so that I can take BART unless there are extraordinary circumstances (such as a flight when BART is not running is sufficiently cheaper to justify an Uber). After this trip, I took BART back from SFO to Berkeley. I also took BART to SFO on the way there.

On the way there, I had a red-eye booked, which meant going to the airport after the Red Line stopped running. I was distracted, but managed to look up just in time to realize we had been sitting at MacArthur, the southbound transfer station. I immediately exited and had to wait 15 minutes in the cold for the Yellow Line to arrive, which I was supposed to transfer to. It is possible I missed the transfer while I was distracted, and the Yellow Line had already left. However, I used the BART app to look at stations further ahead, and it didn't seem like a Yellow Line was close enough for that to be the case.

On the way home, I also arrived after the Red Line stopped running, so I was forced to take the Yellow Line and transfer to the Orange. This time, I paid attention. Once again, we arrived, and the signs said an Orange Line train was not arriving for 17 minutes. At first, I was in disbelief because this should not be possible, given that the trains run every 20 minutes and it is supposed to be a timed transfer. If we really were only 3 minutes behind, the Orange Line should have waited for us. Nonetheless, another Yellow Line train bound in the same direction dropped off more passengers in that 17-minute wait, and was not lined up with the Orange Line as it should be. Finally, the Orange Line showed up, and it is overcrowded because it had 2 trains of passengers from the Yellow Line waiting for it. This was after 10pm on a Wednesday evening; it had no reason to be that crowded. There were no Valkyries or Giants fans on board, meaning the end of a game could not explain the crowd. A lot of people had gotten on at Civic Center, somewhat unusually for that time of day and day of the week, but not substantially more.

Maybe I just had bad luck recently with the timed transfers and maybe I am biased because I live on the Red Line, but my perception of the Yellow Line is that it largely goes through the suburbs with people who use BART to commute, whereas the north parts of the Orange/Red Line go through Berkeley and areas with more young people who use BART not during commuting hours.

The ridership data supports my initution. Total ridership for 2024 and 2025 for the stations north of MacArthur (served by the Red or Orange Lines) with traffic originating or terminating in San Francisco is 9,572,195 passengers, whereas the ridership for stations east of MacArthur (served by the Yellow Line) totalled 9,247,894 passengers. Demand between stops served only by the Red Line outpaced demand for stops served only by the Yellow Line by 324,301 trips.

Here is a graph showing hourly BART ridership for passengers who start or end in San Francisco and start or end along the Red or Yellow Lines beyond the MacArthur station. The brackets denote times when the demand for the Yellow Line outpaces demand for the Red Line. 

<div class="embed-breakout" style="position: relative; width: 100%; height: 0; padding-bottom: 55.5556%; overflow: hidden; margin: 2rem 0;">
 <iframe
   src="/assets/html/bart_interactive_ridership2.html"
   onload="checkGraphLoad(this)"
   style="opacity:0; transition:opacity 0.15s ease-in; width: 100% !important; aspect-ratio: 16 / 9; border: none !important; display: block !important; background: transparent !important; overflow: visible !important; border-radius: 0 !important;"
   scrolling="no"
   loading="lazy">
 </iframe>
</div>

When looking at ridership in both directions, the only time the Yellow Line outpaces the Red Line is during rush hour in the morning, between 5am and 9am. When examining outbound and inbound ridership separately, the Yellow Line only outpaces the Red Line during rush hour in each direction.

Even when the Red Line stops running after 9pm, in both directions, ridership to and from SF to the stations where a transfer is required is higher than ridership to and from stations where the Yellow Line can be taken the entire way. The evening rush hour, when the Yellow Line is more in demand than the Red Line, ends at 7pm. Then the Red Line stops running at 9pm, despite carrying more riders than the Yellow Line after the evening rush hour. Why is it that after 9pm, BART requires most riders to transfer?

For individuals traveling to Millbrae, the last station on the Red Line and only served by the Red Line prior to 9pm, requires a transfer at SFO from the Yellow Line to a shuttle train specifically for Millbrae. Riders traveling to Millbrae from stations north of MacArthur after 9pm currently have to transfer twice, once from the Orange Line to the Yellow Line and then again from the Yellow Line to the shuttle. Prioritizing the Red Line would also fix this unusual quirk of the system and limit transfers for riders going to Millbrae.

A slightly less compelling but more interesting graphic to make this argument is the map of BART ridership below. Thicker lines represent segments with higher ridership, and bigger circles represent stations that have more exiting passengers. Hovering over a specific segment of track shows what percentage of riders boarded in different regions of the Bay Area.  

<div class="embed-breakout">
 <iframe
   src="/assets/html/bart_track_flow_map_avg_hourly.html"
   onload="checkGraphLoad(this)"
   style="opacity:0; transition:opacity 0.15s ease-in; width: 100% !important; aspect-ratio: 16 / 9; border: none !important; display: block !important; background: transparent !important; overflow: visible !important; border-radius: 0 !important;"
   class="clean-iframe"
   height="550px"
   scrolling="no"
   loading="lazy">
 </iframe>
</div>

Because the BART data does not indicate which line passengers took and only includes information on entry and exit stations, it is unclear which BART lines were used to get between destinations. For the first graph comparing demand between segments of the East Bay, this is not a huge hindrance because we can infer what lines people would be willing to take based on whichever of their origins or destinations are in the East Bay. More information about which lines were taken would be useful for evaluating if individuals have a strong preference for direct trains over transfers, which would tell us more precisely how many riders would benefit from the Red Line operating over the Yellow Line after 9pm. However, when evaluating traffic patterns on BART more broadly, many times there are several lines or a combination of lines that could be used by a particular rider to get between two stations.

BART is currently drowning in debt. Data on per-train operating costs is limited, so I can not evaluate the fiscal consequences of my proposal. With that said, my recommendations are made to avoid duplicative lines being run unnecessarily. Obviously, any line I propose cutting could be added back if BART had the money. Based on these ridership patterns, I propose:

- Run the Red Line the entire time BART is operating.
- After 9pm, cut the Yellow Line such that it starts/ends at MacArthur and is timed with the Red Line, and Antioch is the other start/end point.
- There are three potential changes to the Orange Line that would be satisfactory:
  - Cut it entirely after 9pm, put a timed transfer from Red to Green at West Oakland (this is the only station in the East Bay where they overlap). A potential downside of this is ensuring the timed transfer works in both directions because the station is not built for 2 timed transfers.
  - Have the Orange Line run from Berryessa to either 19th Street/Oakland or 12th Street/Oakland City Center and be timed with the Red Line after 9pm (I think 19th Street likely has better infrastructure for this already built, but it is unnecessarily adding a stop to the Orange Line).
  - Keep the entire Orange route running. This limits complexity but may make it more expensive.

Some will argue that these changes are much more confusing and less intuitive than the current system, where lines that are entirely duplicative are not run after 9pm. It is true that these changes would make the system more confusing; however, everyone navigates on their phones anyway, so they would be able to direct people. With the current system, no mapping application besides Apple Maps that I have tried (Google Maps, Transit) understands the timed transfer anyway and always says it will take an extra 20 minutes to get somewhere than it actually will. And Apple Maps always assumes there will be a timed transfer even if the trains are off-schedule that night and are not making timed transfers. How could this new system be any worse than that?

BART also likely prefers the current system because it is more operationally simple on their end. While I do not know how BART schedules trains or employees, it may mostly be one-time overhead to fix this system that could potentially increase ridership after 9pm, as it would make taking BART simpler, potentially incentivizing public transit over private transportation.

The ridership data came from BART's <a href="https://afcweb.BART.gov/ridership/origin-destination/" target="_blank"class="link">Hourly Ridership by Origin-Destination Pairs datasets</a> from 2024 and 2025. When I tried to download 2026 data, the file was empty at the time of writing. BART's <a href="https://www.BART.gov/schedules/developers/geo" target="_blank"class="link">Geospatial Data</a> was used for mapping where each train platform is to create the map.