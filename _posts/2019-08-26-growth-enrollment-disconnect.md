---
layout: auto-post
title:  D.C.'s Disconnect Between Citywide Enrollment Growth and Neighborhood Change Methodology
description:
author: Chelsea Coffin
author_url: https://www.dcpolicycenter.org/people/chelsea-coffin/
date: 2019-08-26
permalink: /posts/growth-enrollment-disconnect/
---

This is the methodology and data write up of the publication “D.C.’s Disconnect Between Citywide Enrollment Growth and Neighborhood Change” found <a href="https://www.dcpolicycenter.org/publications/districts-disconnect-between-citywide-enrollment-growth-and-neighborhood-change">
<strong>here</strong></a>.

The data can be found here:
<a href="https://DC-Policy-Center.github.io/assets/data-resources/enrollment-neigbhorhood-change-data.xlsx"><strong>[enrollment-neighborhood-change-data.xlsx]</strong></a>.


## Methodology
This report examines D.C.’s citywide trends of growth in public school enrollment, housing values, and school-age population at a neighborhood level to see whether there is a strong link between changes in enrollment and neighborhood changes. We look at changes in these three factors from school year 2010-11 (the year after the Great Recession ended and public school enrollment started to turn around) to 2017-18 (the most recent year of available data at the time of the analysis) to answer three questions:

1.	How is enrollment growing or declining across the city?
2.	How are other neighborhood characteristics of housing values and population are changing?
3.	Which neighborhood clusters mirror citywide trends?

We analyze changes and their correlations at the neighborhood cluster. The District has 46 neighborhood clusters for planning purposes, and of these 41 has at least one public school. These were chosen as the unit of analysis because these are commonly understood subdivisions of D.C.

### Measuring how enrollment is growing or declining across the city

To measure how enrollment is changing across the city, we begin with the Office of the State Superintendent (OSSE)’s enrollment audit files for school years 2010-11 and 2017-18. We merge all schools serving students in pre-kindergarten to grade 12 to their addresses. Addresses for school year 2017-18 were found in the D.C. School Report Card and STAR Framework data. Addresses for 2010-11 were found in the National Center for Education Statistics’ Common Core of Data, and reconciled against the DC Public Charter School Board’s annual report and District of Columbia Public Schools (DCPS) addresses in other years. Next, addresses were geocoded to identify the neighborhood cluster of each school using D.C.’s Office of the Chief Technology Officer’s MAR Geocoder. Pre-kindergarten to grade 12 enrollment and the number of schools were then summed by neighborhood cluster in 2010-11 and 2017-18.

### Measuring how housing values and population are changing

Next, we look at housing characteristics and school-age population change by neighborhood cluster to identify patterns and trends over time. To approximate housing prices, we use assessment values, or the market value of a property estimated by the Office of Tax and Revenue, because they allow for the most comprehensive analysis. Data are available for every property, and assessments may be updated for property tax purposes annually. We look at 2010 and 2018 due to data availability.

Many families will rent instead of buy, but this analysis focuses on single-family homes because of available data on capacity and assessments. D.C.’s housing stock is comprised of apartments (40 percent of units in 2017), single-family homes (31 percent of units), condominiums (21 percent of units), and co-operative housing (8 percent of units).<sup><a href="#1">1</a></sup>  Comparing data from Zillow on median two-bedroom rents with costs associated with home ownership from the D.C. Policy Center’s Taking Stock database <sup><a href="#2">2</a></sup>  suggests that rental prices are likely to be similar to housing costs in neighborhoods where a two-bedroom single-family home costs less than \$3,400 per month.<sup><a href="#3">3</a></sup>  However, it is not possible to ascertain apartment capacity per unit with the data currently available,<sup><a href="#4">4</a></sup>  limiting a full analysis of the rental market. Condominiums, another category of housing, are unlikely to have child residents and therefore less relevant to a study related to public school enrollment. An analysis of the Public Use Microdata Sample for the 2013-2017 American Community Survey 5-Year Estimates shows that 97 percent of households who pay condo fees in D.C. do not have children as residents. This is confirmed by the Deputy Mayor for Education’s EdScape tool, which estimates a yield of 7 public school students for every 100 condominiums, compared to 40 for single-family homes and 32 for apartments.

To analyze changes in the school-age population, we used United States Census Bureau and American Community Survey 5-Year Estimates for 2010 and 2017 by block group. Using a methodology developed for <a href="https://www.dcpolicycenter.org/publications/schools-in-the-neighborhood/"><strong>Schools in the Neighborhood</strong></a>, we assign block groups to neighborhood clusters based on their centroid. Then, we sum population aged 5 to 17 by neighborhood cluster.

### Identifying the extent to which neighborhood clusters mirror citywide trends

We then check for correlations between the change in public school enrollment, and change in school-age population or housing values. We then identify high-growth neighborhoods in each factor as those with growth at the 75th percentile or above, and check to see if high-growth enrollment neighborhoods match high-growth neighborhoods in terms of school-age population or housing values.




See Table 1 below for data sources.


<img src="https://dc-policy-center.github.io/assets/images/post_images/growth-enrollment-disconnect/table-1.png" style="width:100%;">

-----
<div id = "1">
<sup>1</sup> Sayin Taylor, Yesim. 2018. Taking Stock of the District’s Housing Stock. D.C. Policy Center. Available at: <a href="https://www.dcpolicycenter.org/publications/taking-stock/"> <strong>https://www.dcpolicycenter.org/publications/taking-stock/</strong></a>
</div>

<div id = "2">
<sup>2</sup> Sayin Taylor, Yesim. 2018. Taking Stock of the District’s Housing Stock. D.C. Policy Center. Available at: <a href="https://www.dcpolicycenter.org/publications/taking-stock/"> <strong>https://www.dcpolicycenter.org/publications/taking-stock/</strong></a>
</div>

<div id = "3">
<sup>3</sup> Coffin, C. 2018. Will Children of Current Millennials Become Future Public School Students? D.C. Policy Center. Available at: <a href="https://www.dcpolicycenter.org/publications/future-public-school-students-report/"><strong>https://www.dcpolicycenter.org/publications/future-public-school-students-report/</strong></a>
</div>


<div id = "4">
<sup>4</sup>
Data on the number of units are missing for about 25 percent of commercial apartment buildings in the Computer Assisted Mass Appraisal Dataset and assessment values are missing for about 27 percent of apartment buildings in the Integrated Tax System Public Extract.
</div>
