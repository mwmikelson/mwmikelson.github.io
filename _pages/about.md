---
layout: about
title: About
permalink: /
subtitle: Ph.D. Student in Political Science

# Turning these off stops the theme from injecting duplicate images or footer blocks
profile:
  enabled: false
social: false
selected_papers: false
announcements:
  enabled: false
latest_posts:
  enabled: false
---
<div class="row">
  
  <div class="col-sm-4">
    <div class="profile sticky-sidebar">
      
      <div class="text-center">
        <img src="{{ '/assets/img/profile.jpg' | relative_url }}" class="img-fluid z-depth-1 rounded mb-4" alt="Maya W. Mikelson" style="width: 100%; max-width: 240px; height: auto;">
      </div>
      
      <ul class="sidebar-meta-list" style="list-style: none; padding-left: 0; margin-top: 20px; font-size: 0.95rem; line-height: 2.2;">
        <li>
          <i class="fa-solid fa-location-dot" style="width: 25px; color: var(--global-theme-color);"></i> 
          <span>Berkeley, CA</span>
        </li>
        <li>
          <i class="fa-solid fa-graduation-cap" style="width: 25px; color: var(--global-theme-color);"></i> 
          <span>UC Berkeley</span>
        </li>
        {% if site.email %}
        <li>
          <a href="mailto:{{ site.email }}" style="color: inherit;">
            <i class="fa-solid fa-envelope" style="width: 25px; color: var(--global-theme-color);"></i> 
            <span>Email</span>
          </a>
        </li>
        {% endif %}
        <li>
          <a href="https://orcid.org/0009-0002-7945-0057" target="_blank" rel="noopener noreferrer" style="color: inherit;">
            <i class="fa-brands fa-orcid" style="width: 25px; color: var(--global-theme-color);"></i> 
            <span>ORCID</span>
          </a>
        </li>
        {% if site.linkedin_username %}
        <li>
          <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener noreferrer" style="color: inherit;">
            <i class="fa-brands fa-linkedin" style="width: 25px; color: var(--global-theme-color);"></i> 
            <span>LinkedIn</span>
          </a>
        </li>
        {% endif %}
        {% if site.github_username %}
        <li>
          <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer" style="color: inherit;">
            <i class="fa-brands fa-github" style="width: 25px; color: var(--global-theme-color);"></i> 
            <span>GitHub</span>
          </a>
        </li>
        {% endif %}
      </ul>
      
    </div>
  </div>

  <div class="col-sm-8" style="padding-top: 5px;">
    <div class="clearfix" style="font-size: 1.05rem; line-height: 1.6;">
      
      Maya Mikelson is a Ph.D. student in Political Science at the University of California, Berkeley, specializing in International Relations and Methods. Her research interests include conflict, militarization, interventions, and human rights. Before attending Berkeley, she earned a B.S. with High Honors in Political Science from the University of Michigan, Ann Arbor. Her senior thesis examined how militarization is measured and the relationship between militarization and conflict, using a latent variable model. She was an APSA Ralph Bunche Summer Institute Scholar in 2024.

    </div>
  </div>
  
</div>