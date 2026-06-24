---
layout: about
title: About
permalink: /
subtitle: Ph.D. Student in Political Science

profile:
  align: left
  image: profile.jpg
  image_circular: false # crops the image to make it circular


selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="row">
  
  <!-- LEFT SIDEBAR: Photo and Socials -->
  <div class="col-sm-4">
    <div class="profile sticky-sidebar">
      {% if page.profile.image %}
        {% assign profile_image_path = page.profile.image | prepend: 'assets/img/' %}
        <!-- This class keeps the image square but rounds the corners beautifully -->
        {% assign profile_image_class = 'img-fluid z-depth-1 rounded' %}
        {% capture sizes %}(min-width: {{site.max_width}}) {{ site.max_width | minus: 30 | times: 0.3}}px, (min-width: 576px) 30vw, 95vw"{% endcapture %}
        {% include figure.liquid loading="eager" path=profile_image_path class=profile_image_class sizes=sizes alt=page.profile.image %}
      {% endif %}
      
      <!-- Social Icons directly under the photo -->
      <div class="social mt-4 text-center">
        <div class="contact-icons custom-small-icons">
          
          <!-- Hardcoded icons to bypass the broken theme file -->
          {% if site.email %}
            <a href="mailto:{{ site.email }}" title="Email"><i class="fa-solid fa-envelope"></i></a>
          {% endif %}
          {% if site.linkedin_username %}
            <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          {% endif %}
          {% if site.x_username %}
            <a href="https://twitter.com/{{ site.x_username }}" title="X"><i class="fa-brands fa-x-twitter"></i></a>
          {% endif %}
          {% if site.github_username %}
            <a href="https://github.com/{{ site.github_username }}" title="GitHub"><i class="fa-brands fa-github"></i></a>
          {% endif %}

        </div>
        <div class="contact-note mt-2" style="font-size: 0.8rem;">
          {{ site.contact_note }}
        </div>
      </div>
    </div>
  </div>

  <!-- RIGHT CONTENT: Your text -->
  <div class="col-sm-8">
    <div class="clearfix">
      
    Maya Mikelson is a Ph.D. student in Political Science at the University of California, Berkeley, specializing in International Relations and Methods. Her research interests include conflict, militarization, interventions, and human rights. Before attending Berkeley, she earned a B.S. with High Honors in Political Science from the University of Michigan, Ann Arbor. Her senior thesis examined how militarization is measured and the relationship between militarization and conflict, using a latent variable model. She was an APSA Ralph Bunche Summer Institute Scholar in 2024.


    </div>
  </div>
  
</div>
