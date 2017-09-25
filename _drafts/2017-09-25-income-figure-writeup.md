---
layout: auto-post
title: Income Figure Writeup
description: Visualizing the proposed legislation to now
author: Michael Watson
date: 2017-08-30
permalink: /posts/income-figure-writeup/
---

The data used in this analysis started in its semi-raw format from the Census Beauru's
FTP website and then files were organized and headers were added using our internal
template combining technique


When looking at the newly released census data, the one year estimates for 2016,
one needs to keep in mind error analysis.  The one year estimates often have higher
margins of error (MoE) due to surveying techniques, sample sizes, and other contributing factors.
The Census Beauru has some excelent reading material for both how they calculate their error as
well as how the data user should handle error. A problem, however, is even though it is provided
and well documented, often the error analysis is thrown by the wayside.  This becomes even more
problematic when the analysis is quoted, requoted, and misquoted.  

When creating the figure for income levels of home owners

<iframe src="../../assets/images/post_images/HOLD-homeowner-by-income.png" width="100%" height="520" overflow="hidden" frameborder="0" allowfullscreen="allowfullscreen"></iframe>



$$Standard Error = \sqrt{\sum{ \Biggl[\frac{values}{1.45}\Biggr]^2}}$$
