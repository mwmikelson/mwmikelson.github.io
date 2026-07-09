---
layout: post
title: a post with image galleries
date: 2024-12-04 01:59:00
description: this is what included image galleries could look like
tags: formatting images
categories: sample-posts
thumbnail: assets/img/9.jpg
images:
  lightbox2: true
  photoswipe: true
  spotlight: true
  venobox: true
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

The images in this post are all zoomable, arranged into different mini-galleries using different libraries.

## Lightbox2

<a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg" data-lightbox="roadtrip"><img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg" /></a>
<a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg" data-lightbox="roadtrip"><img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" /></a>
<a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg" data-lightbox="roadtrip"><img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" /></a>

---

## [PhotoSwipe](https://photoswipe.com/)

<div class="pswp-gallery pswp-gallery--single-column" id="gallery--getting-started">
  <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-pswp-width="1669"
    data-pswp-height="2500"
    target="_blank">
    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" alt="" />
  </a>
  <!-- cropped thumbnail: -->
  <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg"
    data-pswp-width="1875"
    data-pswp-height="2500"
    data-cropped="true"
    target="_blank">
    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg" alt="" />
  </a>
  <!-- data-pswp-src with custom URL in href -->
  <a href="https://unsplash.com"
    data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-pswp-width="2500"
    data-pswp-height="1666"
    target="_blank">
    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" alt="" />
  </a>
  <!-- wrapped with any element: -->
  <div>
    <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg"
      data-pswp-width="2500"
      data-pswp-height="1667"
      target="_blank">
      <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg" alt="" />
    </a>
  </div>
</div>

---

## [Spotlight JS](https://nextapps-de.github.io/spotlight/)

<!-- Group 1 -->
<div class="spotlight-group">
    <a class="spotlight" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg" />
    </a>
    <a class="spotlight" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" />
    </a>
    <a class="spotlight" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" />
    </a>
</div>
<!-- Group 2 -->
<div class="spotlight-group">
    <a class="spotlight" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg" />
    </a>
    <a class="spotlight" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-200.jpg" />
    </a>
    <a class="spotlight" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg" />
    </a>
</div>

---

## [Venobox](https://veno.es/venobox/)

<a class="venobox" data-gall="myGallery" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"><img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg" /></a>
<a class="venobox" data-gall="myGallery" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"><img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" /></a>
<a class="venobox" data-gall="myGallery" href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"><img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" /></a>
