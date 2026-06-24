---
layout: about
title: About
permalink: /
subtitle: Ph.D. Student in Political Science

# Disabling all theme defaults to prevent interference
profile:
  enabled: false
social: false
selected_papers: false
announcements:
  enabled: false
latest_posts:
  enabled: false
---

<style>
  /* 1. Force the layout to be side-by-side with exact measurements */
  .my-custom-layout {
    display: flex;
    flex-wrap: nowrap;
    gap: 40px;
    align-items: flex-start;
    margin-top: 25px;
    width: 100%;
  }

  /* 2. The Sidebar: Hardcoded to 320px wide so your photo stays BIG */
  .my-sidebar {
    flex: 0 0 320px !important; 
    max-width: 320px !important;
  }

  .my-sidebar img {
    width: 100% !important;
    height: auto !important;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  /* 3. The Icons: Perfect vertical alignment using fixed-width */
  .my-icons {
    font-size: 1.05rem;
    line-height: 2.2;
  }
  .my-icons div {
    display: flex;
    align-items: center;
  }
  .my-icons a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .my-icons i {
    color: var(--global-theme-color);
    width: 30px; /* Forces all icons to take up the exact same horizontal space */
    text-align: left;
  }

  /* 4. The Bio Text */
  .my-content {
    flex: 1;
    font-size: 1.1rem;
    line-height: 1.65;
    color: var(--global-text-color);
  }

  /* 5. The CSS attempt to kill CMD K */
  #search-toggle kbd, 
  #search-toggle .nav-search-key {
    display: none !important;
    opacity: 0 !important;
    width: 0 !important;
  }
</style>

<div class="my-custom-layout">
  
  <div class="my-sidebar">
    <img src="{{ '/assets/img/profile.jpg' | relative_url }}" class="z-depth-1" alt="Maya W. Mikelson">
    
    <div class="my-icons">
      <div><i class="fa-solid fa-location-dot"></i> <span>Berkeley, CA</span></div>
      <div><i class="fa-solid fa-graduation-cap"></i> <span>UC Berkeley</span></div>
      <div><a href="mailto:mikelson@berkeley.edu"><i class="fa-solid fa-envelope"></i> <span>Email</span></a></div>
      <div><a href="https://orcid.org/0009-0002-7945-0057"><i class="fa-brands fa-orcid"></i> <span>ORCID</span></a></div>
      <div><a href="https://www.linkedin.com/in/mayamikelson"><i class="fa-brands fa-linkedin"></i> <span>LinkedIn</span></a></div>
      <div><a href="https://github.com/mwmikelson"><i class="fa-brands fa-github"></i> <span>GitHub</span></a></div>
    </div>
  </div>

  <div class="my-content">
    <p style="margin: 0;">I am a Ph.D. student in Political Science at the University of California, Berkeley, specializing in International Relations, Quantitative Methodology, and Comparative Politics. My research interests include political violence, conflict, militarization, interventions, and public opinion. Before attending Berkeley, I earned a B.S. with High Honors in Political Science from the University of Michigan, Ann Arbor. My senior thesis examined measurement of militarization and the relationship between militarization and conflict, using a latent variable model. I was an APSA Ralph Bunche Summer Institute Scholar in 2024.</p>
  </div>
  
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Find any keyboard shortcut tags inside the search button and hide them
    var cmdK = document.querySelectorAll('#search-toggle kbd, #search-toggle .nav-search-key');
    cmdK.forEach(function(element) {
      element.style.display = 'none';
    });
  });
</script>
