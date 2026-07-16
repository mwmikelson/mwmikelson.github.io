---
layout: post
title: "Why does BART make the majority of riders transfer?"
date: 2026-07-15 17:32:00
description: Analysis and mapping of BART ridership data over 2024 and 2025.
tags: transit mapping leaflet bart
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

I recently went to visit my grandma in Iowa City. I intentionally book flights such that I can take BART unless there are extraordinary circumstances (such as when a flight when BART is not running is sufficently cheaper to justify an Uber). After this trip, I took BART back from SFO to Berkeley. I had also taken BART to SFO on the way there. On the way there, I had a redeye booked which meant going to the airport after the Red line stopped running. I had gotten distracted, but managed to look up just in time to realize we had been sitting at MacArthur, the southbound transfer station. I immediately exited and had to wait 15 minutes in the cold for the Yellow line to arrive that I was supposed to transfer to. It is possible I missed the transfer in my distracted state and the Yellow line had already left. However, I used the BART app to look at stations further ahead and it didn't seem like a yellow line was close enough for that to be the case. On the way home, I also arrived after the Red line stopped running so I was forced to take the Yellow line and transfer to the Orange. This time, I paid attention. Once again, we arrived and the signs said an Orange line train is not arriving for 17 minutes. At first I am in disbelief because this should not be possible given the trains run every 20 minutes and it is supposed to be a timed transfer. If we really were only 3 minutes behind, the Orange line should have waited for us. Nonetheless, another Yellow line train bound in the same direction drops off more passengers in that 17 minute wait, and not lined up with the Orange line as it should be. Finally, the Orange line shows up and it is overcrowded because it had 2 trains of passengers from the Yellow line waiting for it. This was after 10pm on a Wednesday evening; it had no reason to be that crowded. There were no Valkyries or Giants fans onboard meaning the end of a game could not expalin the crowd. A lot of people had gotten on at Civic Center, somewhat unusually for that time of day and day of the week, but not substantially more.

Maybe I just had bad luck recently with the timed transfers and maybe this hypothesis is biased in my favor, but my perception of the Yellow line is that it largely goes through the suburbs with people who use BART to commute, whereas the north parts of the Orange/Red line go through Berkeley and areas with more young people who use BART not during commuting hours.

Here is a graph showing BART ridership for passengers who start or end in San Francisco and start or end along the red or yellow lines beyond the MacArthur station. The brackets denote times when the demand for the Yellow line outpaces demand for the Red line.

<div class="embed-breakout">
  <iframe 
    src="/assets/html/bart_interactive_ridership.html"
    class="clean-iframe"
    height="420px" 
    scrolling="no"
    loading="lazy">
  </iframe>
</div>

filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. 
filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. filler text. 


<div class="embed-breakout">
  <iframe 
    src="/assets/html/bart_interactive_ridership2.html"
    class="clean-iframe"
    style="width: 100%; aspect-ratio: 13 / 8; border: none; display: block; background: transparent;"
    scrolling="no"
    loading="lazy">
  </iframe>
</div>

When looking at ridership in both directions, the only time the Yellow Line outpaces the Red Line is during rush hour in the morning, between 5am and 9am. Filtering to look at outbound and inbound ridership separately, the yellow line only outpaces the red line during rush hour in each direction.

Even when the red line stops running after 9pm, in both directions, ridership to and from SF to the stations where a transfer is required is higher than ridership to and from stations where the Yellow line can be taken the entire way. The evening rush hour where the Yellow line is more in demand than the Red line ends at 7pm. Then the Red line stops running at 9pm, only providing the more in demand service for 2 hours. Why is it that when the Red line is more in demand, they make the majority transfer?

A slightly less compelling but more interesting graphic to make this argument is the map of BART ridership below. Thicker lines represent segments with higher ridership and bigger circles represent stations that have more exiting passengers. Hovering over a specific segment of track shows what percentage of riders boarded in different regions of the Bay Area.  

<div class="embed-breakout">
  <iframe 
    src="/assets/html/bart_track_flow_map_avg_hourly.html"
    class="clean-iframe"
    height="550px" 
    scrolling="no"
    loading="lazy">
  </iframe>
</div>

Because the BART data does not indicate which line passengers took and only includes information on entry and exit station, it is unclear which BART lines were used to get between destinations. For the first graph comparing demand between segments of the East Bay, this is not a huge hindrance because we can infer what lines people would be willing to take based on whichever of their origin or destinations are in the East Bay. More information about which lines were taken would be useful for evaluating if individuals have a strong preference for direct trains over transfers, which would tell us more precisely how many riders would benefit from the Red line operating over the Yellow line after 9pm. However, when evaluating traffic patterns on BART more broadly, many times there are several lines or combination of lines that could be used by a particular rider to get between two stations. 

BART is currently drowning in debt. Data on per train operating costs is limited so I can not evaluate the fiscal consequences of my proposal. With that said, my recommendations are made trying to avoid duplicative lines being run unnecessarily. Obviously, any line I propose cutting could be added back if BART had the money. With that said, my proposals:
- Run the Red line the entire time BART is operating.
- After 9pm, cut the Yellow line such that it starts/ends at MacArthur and is timed with the Red line and Antioch is the other start/end point.
- There are three potential changes to the Orange line that would be satisfactory:
  - Cut it entirely after 9pm, put a timed transfer from Red to Green at West Oakland (this is the only station in the East Bay where they overlap). A potential downside of this is ensuring the timed transfer works in both directions because the station is not built for 2 timed transfers.
  - Have the Orange line run from Berryessa to either 19th Street/Oakland or 12th Street/Oakland City Center and be timed with the Red line after 9pm (I think 19th Street likely has better infrastructure for this already built but it is unnecessarily adding a stop to Orange line).
  - Keep the entire Orange route running. This limits complexity but may make it more expensive.

Some will argue that these changes are much more confusing and less intuitive than the current system where lines that are entirely duplicative are not run after 9pm. It is true that these changes would make the system more confusing, however, everyone navigates on their phones anyways so they would be able to direct people. With the current system no mapping application besides Apple Maps that I have tried (Google Maps, Transit) understands the timed transfer anyways and always says it will take an extra 20 minutes to get somewhere than it actually will. And Apple Maps always assumes there will be a timed transfer even if the trains are off-schedule that night and are not making timed transfers. How could this new system be any worse than that?

The ridership data came from BART's <a href="https://afcweb.BART.gov/ridership/origin-destination/" target="_blank" class="link">Hourly Ridership by Origin-Destination Pairs datasets</a> from 2024 and 2025. When I tried to download 2026 data, the file was empty. BART's <a href="https://www.BART.gov/schedules/developers/geo" target="_blank" class="link">Geospatial Data</a> was used for mapping where each train platform is to create the map.
