---
layout: post
title: a post with typograms
date: 2024-04-29 23:36:10
description: this is what included typograms code could look like
tags: formatting diagrams
categories: sample-posts
typograms: true
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

This is an example post with some [typograms](https://github.com/google/typograms/) code.

````markdown
```typograms
+----+
|    |---> My first diagram!
+----+
```
````

Which generates:

```typograms
+----+
|    |---> My first diagram!
+----+
```

Another example:

````markdown
```typograms
.------------------------.
|.----------------------.|
||"https://example.com" ||
|'----------------------'|
| ______________________ |
||                      ||
||   Welcome!           ||
||                      ||
||                      ||
||  .----------------.  ||
||  | username       |  ||
||  '----------------'  ||
||  .----------------.  ||
||  |"*******"       |  ||
||  '----------------'  ||
||                      ||
||  .----------------.  ||
||  |   "Sign-up"    |  ||
||  '----------------'  ||
||                      ||
|+----------------------+|
.------------------------.
```
````

which generates:

```typograms
.------------------------.
|.----------------------.|
||"https://example.com" ||
|'----------------------'|
| ______________________ |
||                      ||
||   Welcome!           ||
||                      ||
||                      ||
||  .----------------.  ||
||  | username       |  ||
||  '----------------'  ||
||  .----------------.  ||
||  |"*******"       |  ||
||  '----------------'  ||
||                      ||
||  .----------------.  ||
||  |   "Sign-up"    |  ||
||  '----------------'  ||
||                      ||
|+----------------------+|
.------------------------.
```

For more examples, check out the [typograms documentation](https://google.github.io/typograms/#examples).
