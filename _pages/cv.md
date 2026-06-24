---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 5
toc:
  sidebar: left
---

<style>
  /* Global Page Container Adjustments */
  .post {
    width: 100% !important;
  }

  /* Designing the Clean Curved Section Boxes */
  .cv-card {
    border: 1px solid rgba(128, 128, 128, 0.25);
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 35px;
    background-color: rgba(255, 255, 255, 0.01);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  }

  /* Styling Markdown H2 Headers to match theme while populating the TOC */
  h2.cv-section-title, .post h2 {
    font-size: 1.3rem !important;
    font-weight: 700 !important;
    color: var(--global-theme-color) !important;
    margin-top: 10px !important;
    margin-bottom: 15px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.8px !important;
    border-bottom: none !important;
  }

  .cv-item {
    margin-bottom: 20px;
    width: 100%;
  }
  .cv-item:last-child {
    margin-bottom: 0;
  }

  .cv-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  /* Academic Styles (Title Bold) */
  .cv-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--global-text-color);
    flex: 1;
  }
  .cv-sub {
    font-size: 1.05rem;
    font-style: italic;
    color: var(--global-text-color);
    margin-top: 2px;
    margin-bottom: 6px;
  }

  /* Non-Academic/Employment Styles (Employer Bold, Title Smaller/Italic) */
  .cv-employer {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--global-text-color);
    flex: 1;
  }
  .cv-job-title {
    font-size: 1rem;
    font-style: italic;
    color: var(--global-text-color);
    margin-top: 2px;
    margin-bottom: 6px;
  }

  /* The Down-Arrow Advisor Element */
  .cv-advisor {
    font-size: 1.05rem;
    color: var(--global-text-color);
    margin-top: 2px;
    margin-bottom: 8px;
    padding-left: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .cv-advisor-arrow {
    color: var(--global-theme-color);
    font-weight: 700;
  }

  /* Uniform Date Alignments */
  .cv-date {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--global-text-color);
    text-align: right;
    white-space: nowrap;
    margin-left: 20px;
  }

  /* Bullets and Work Formatting */
  .cv-item ul {
    margin-top: 4px;
    margin-bottom: 0;
    padding-left: 20px;
  }
  .cv-item li {
    font-size: 1.05rem;
    line-height: 1.5;
    color: var(--global-text-color);
    margin-bottom: 4px;
  }
  .cv-work-title {
    font-size: 1.05rem;
    color: var(--global-text-color);
    margin-top: 2px;
    padding-left: 2px;
  }

  /* Skills Specific Styles */
  .cv-skill-group {
    margin-bottom: 18px;
  }
  .cv-skill-group:last-child {
    margin-bottom: 0;
  }
  .cv-skill-header {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .cv-skill-header i {
    color: var(--global-theme-color);
    width: 18px;
    text-align: center;
  }

  /* Clean interactive links for items */
  .cv-link {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: rgba(128, 128, 128, 0.4);
  }
  .cv-link:hover {
    color: var(--global-theme-color);
    text-decoration-color: var(--global-theme-color);
  }
</style>

<!-- PDF DOWNLOAD BUTTON -->
<div style="text-align: right; margin-bottom: 25px;">
  <a href="{{ '/assets/pdf/CV.pdf' | relative_url }}" class="btn btn-sm z-depth-1" target="_blank" rel="noopener noreferrer" style="background-color: var(--global-theme-color); color: #fff; font-weight: 600; text-decoration: none; padding: 6px 12px; border-radius: 4px;">
    <i class="fa-solid fa-file-pdf" style="margin-right: 5px;"></i> Download PDF
  </a>
</div>


## Education
<div class="cv-card">
  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">University of California, Berkeley</div>
      <div class="cv-date">2025 – Present</div>
    </div>
    <div class="cv-sub">Ph.D. Student in Political Science</div>
  </div>

  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">University of Michigan – Ann Arbor</div>
      <div class="cv-date">2021 – 2025</div>
    </div>
    <div class="cv-sub">B.S. with High Honors in Political Science, minor in Data Science</div>
    <ul>
      <li>GPA: 3.64 (3.97 in Political Science)</li>
    </ul>
  </div>
</div>


## Research Experience
<div class="cv-card">
  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">Research Assistant</div>
      <div class="cv-date">May 2022 – May 2025</div>
    </div>
    <div class="cv-sub">Inter-university Consortium for Political and Social Research (ICPSR), University of Michigan</div>
    <div class="cv-advisor"><span class="cv-advisor-arrow">↳</span> Professor Christopher J. Fariss</div>
    <ul>
      <li>Developed latent variable models in R with the Stan library to calculate the likelihood of signing treaties in every year between 1966 and 2022.</li>
      <li>Coded a web scraper to analyze treaty ratification data from the UN Treaty Body database.</li>
    </ul>
  </div>

  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">Summer Research Fellow</div>
      <div class="cv-date">May – June 2024</div>
    </div>
    <div class="cv-sub">Ralph Bunche Summer Institute (RBSI), Duke University</div>
    <div class="cv-advisor"><span class="cv-advisor-arrow">↳</span> Professors Paula D. McClain and David A. Siegel</div>
    <ul>
      <li>Developed independent research project on the impact of third-party military interventions on human rights and government repression during intrastate conflict using a Heckman Probit Selection Model.</li>
      <li>Completed graduate-level courses in Race and American Politics and Probability and Regression.</li>
    </ul>
  </div>

  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">Research Fellow</div>
      <div class="cv-date">June – July 2023</div>
    </div>
    <div class="cv-sub">NSF REU Accountability, Behavior & Conflict in Democratic Politics, Vanderbilt University</div>
    <div class="cv-advisor"><span class="cv-advisor-arrow">↳</span> Professor Emily Hencken Ritter</div>
    <ul>
      <li>Developed an independent empirical project analyzing the relationship between militarization and interstate conflict that was presented in a poster session at APSA 2023, Los Angeles.</li>
      <li>Compiled historical sources into case studies examining race riots and police violence in the United States.</li>
    </ul>
  </div>
</div>


## Conference Presentations & Working Papers
<div class="cv-card">
  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">"Measuring Militarization and the Link with Interstate Conflict"</div>
      <div class="cv-date">2025</div>
    </div>
    <div class="cv-sub">Senior Honors Thesis, University of Michigan</div>
    <ul>
      <li>Poster presentation at the Midwest Political Science Association Conference, April 2025.</li>
    </ul>
  </div>

  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">"Third-Party Military Interventions, Government Repression, and Human Rights"</div>
      <div class="cv-date">2024</div>
    </div>
    <div class="cv-sub">Ralph Bunche Summer Institute Paper</div>
    <ul>
      <li>Presented as an APSA Ralph Bunche Summer Institute Scholar, June 2024.</li>
    </ul>
  </div>

  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">"Militarization and Interstate Armed Conflict"</div>
      <div class="cv-date">2023</div>
    </div>
    <div class="cv-sub">American Political Science Association Annual Meeting</div>
    <ul>
      <li>Poster presentation at the American Political Science Association Annual Meeting, September 2023.</li>
    </ul>
  </div>
</div>


## Other Employment & Extracurricular Activities
<div class="cv-card">
  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-employer">Decision Desk HQ</div>
      <div class="cv-date">2018 – Present</div>
    </div>
    <div class="cv-job-title">Data Editor & Election Night Reporter</div>
    <ul>
      <li>Decision Desk HQ reports election results from county election officials. Responsible for a team of editors checking election data results for errors, communicating, and resolving data errors.</li>
      <li>Promoted from Election Night Reporter to Data Editor after four years.</li>
    </ul>
  </div>

  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-employer">The Michigan Daily</div>
      <div class="cv-date">2022 – 2025</div>
    </div>
    <div class="cv-job-title">Data Editor & Data Journalist</div>
    <ul>
      <li>Researched, wrote, and edited data journalism stories and visuals.</li>
      <li>Led collaboration with other sections of the Daily to produce articles.</li>
      <li>Conducted data analyses and created graphics for publication.</li>
    </ul>
  </div>

  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-employer">Michigan Policy Debate Team</div>
      <div class="cv-date">2021 – 2024</div>
    </div>
    <div class="cv-job-title">Team Member</div>
    <ul>
      <li>Represented Michigan at competitions around the United States.</li>
      <li>Researched antitrust, legal personhood, and nuclear weapons policy.</li>
    </ul>
  </div>

  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-employer">Michigan Foreign Policy Council</div>
      <div class="cv-date">2021</div>
    </div>
    <div class="cv-job-title">Member</div>
    <ul>
      <li>Researched energy policy in Afghanistan after the Taliban took control.</li>
    </ul>
  </div>
</div>


## Awards & Honors
<div class="cv-card">
  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">Nominated for Sweetland Prize for Excellence in Upper-Level Writing</div>
      <div class="cv-date">2024</div>
    </div>
    <div class="cv-sub">University of Michigan</div>
    <div class="cv-work-title">Honored Work: <em>Militarization and Interstate Conflict</em></div>
  </div>

  <div class="cv-item">
    <div class="cv-row">
      <div class="cv-title">
        <a href="https://www.michigandaily.com/" target="_blank" class="cv-link">3rd Place, Best Interactive Infographic</a>
      </div>
      <div class="cv-date">2023</div>
    </div>
    <div class="cv-sub">Pinnacle College Media Awards</div>
    <div class="cv-work-title">Honored Work: <em>How Walkable Is Your Block? The Michigan Daily</em></div>
  </div>
</div>


## Skills
<div class="cv-card">
  <div class="cv-skill-group">
    <div class="cv-skill-header">
      <i class="fa-solid fa-code"></i> Programming
    </div>
    <div class="cv-sub" style="padding-left: 28px;">R, Stata, Python, C++, QGIS 3</div>
  </div>

  <div class="cv-skill-group">
    <div class="cv-skill-header">
      <i class="fa-solid fa-chart-line"></i> Quantitative Methods
    </div>
    <div class="cv-sub" style="padding-left: 28px;">OLS/Multivariate/Logit/Probit Regression Modeling, Latent variable modeling, Heckman Selection Modeling, Content analysis, Data cleaning</div>
  </div>
</div>