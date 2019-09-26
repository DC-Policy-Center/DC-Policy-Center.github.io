---
title: Level the playing field for DCs at-risk students methodology
layout: auto-post
description:
author: Chelsea Coffin
author_url: https://www.dcpolicycenter.org/people/chelsea-coffin/
date: 2019-09-30
permalink: /posts/level-playing-field/
---

Access to schools that level the playing field for D.C.’s at-risk students

This is the methodology and data write up of the publication “Access to schools that level the playing field for D.C.’s at-risk students” found <a href="https://www.dcpolicycenter.org/publications/access-to-schools-that-level-the-playing-field-for-at-risk-students">here</a>.

The data can be found here <a href="https://data.dcpolicycenter.org/assets/data-resources/epi/leveler-schools-data.xlsx">[leveler-school-data.xlsx]</a>.

This report highlights commutes to schools that serve at-risk students best, and where students have fewer options within a reasonable commute with a focus on elementary and middle school students. Key research questions include:
<ul>
 	<li>Which schools have the best outcomes for at-risk students?</li>
 	<li>How many students lack access to a leveler school within a typical commute by public transit or walking?</li>
 	<li>Which parts of the city have lower access to nearby schools that are high-quality for at-risk students?</li>
 	<li>Which areas of the city are more likely to have at-risk students and do not have access to high-quality schools?</li>
</ul>
<h1>METHODOLOGY</h1>
<h2>1.   Which schools have the best outcomes for at-risk students?</h2>
To identify which schools have the best outcomes for at-risk students, we examine growth for at-risk students on the PARCC state assessment in 2017-18 and compare to the target on the state report card. Growth is measured by the Median Growth Percentile (MGP), which is determined as the typical growth for individual students compared to academically similar students in the previous year. This analysis identifies “leveler” schools if they meet the target on the state report card (set at the 90<sup>th</sup> percentile) of growth for their at-risk students in either English Language Arts (ELA) or Math. <a href= "#ftn1" name="ftnref1"><sup>1</sup></a>

First, MGP for each school is compared to the target value on the state report card separately for ELA and Math. Schools are identified as high-quality for at-risk students if their MGP is above the target in either ELA or Math.

This analysis focuses on elementary and middle schools as growth metrics are not available for high schools in D.C. (only 10<sup>th</sup> grade students participate in the state assessment at the high school level). Elementary and middle schools are considered separately to account for differences in MGP targets by grade band framework on the school report card as well as likely commute times (middle school students have a median commute of 1.6 miles compared to 1 mile for elementary school students).<a href="#ftn2" name="ftnref2"><sup>2</sup></a> Schools that serve students in both elementary and middle grade bands will be considered twice.
<h2>2.   How much of the population under 18 lacks access to a leveler school within a typical commute by public transit?</h2>
To identify what percentage of the population under 18 lacks access to a leveler school within a typical commute by public transit, we overlay commute maps with Census tracts. Commute maps are developed using Travel Time R Package based on a departure time of 8am on a school day. The child population living in any Census tract with a centroid that falls within the commute maps for public transit is considered to have a typical commute to a leveler school. We highlight Census tracts with higher than average percentages of children receiving food stamps or cash public assistance as those with higher levels of need, as these two benefits drive a lot of identification of at-risk students in D.C. (for example, in the most recent year, 86 percent of at-risk students received SNAP benefits according to a Deputy Mayor for Education (DME) analysis).<a href="#ftn3" name="ftnref3"><sup>3</sup></a>

We focus on public transit as car ownership is typically lower in D.C. among lower income households, who are more likely to have at-risk students.
<h2>3.   Which parts of the city lack access to nearby leveler schools that best serve at-risk students?</h2>
To identify the extent to which leveler schools that best serve at-risk students are geographically distributed across the city, we create commute maps around each leveler school and look for overlaps and gaps around the city. We compare commutes of different length depending on mode: walking, on public transit, and driving (see Table 1).

<table>
<tbody>
<tr>
<td colspan="4" width="624">Table 1. Mode of commute and travel time</td>
</tr>
<tr>
<td width="84"><strong>Mode</strong></td>
<td width="125"><strong>Elementary</strong></td>
<td width="107"><strong>Middle</strong></td>
<td width="308"><strong>Justification</strong></td>
</tr>
<tr>
<td width="84">Walking</td>
<td width="125">10 minutes</td>
<td width="107">20 minutes</td>
<td width="308">Average DCPS school boundary size</td>
</tr>
<tr>
<td width="84">Transit</td>
<td width="125">14 minutes</td>
<td width="107">20 minutes</td>
<td width="308">Median distance by public transit</td>
</tr>
<tr>
<td width="84">Drive</td>
<td width="125">6 minutes</td>
<td width="107">9 minutes</td>
<td width="308">Median distance by car</td>
</tr>
</tbody>
</table>


For walking commutes, we draw a polygon map of 10 minutes’ travel time on foot around each leveler elementary school, and we draw a polygon map of 20 minutes’ travel time on foot around each leveler middle school. These distances represent the average District of Columbia Public Schools’ boundary sizes at each level (half mile radius for elementary and mile radius for middle) and an average walking speed of three miles per hour.

For public transit and driving commutes, we draw a polygon map of median travel times based on actual distance to school as reported in an Urban Institute report, “The Road to School: How Far Students Travel to School in the Choice-Rich Cities of Denver, Detroit, New Orleans, New York City, and Washington, DC”.<a href="#ftn4" name="ftnref4"><sup>4</sup></a> The analysis finds that the median elementary school student lives a six-minute drive from school or a 14 minute trip using public transit (irrespective of the actual mode of transportation chosen). By comparison, middle school students tend to live a median distance of nine minutes from school by car or 20 minutes on public transit.

Next, each leveler school commute map will be layered on a map (separately for elementary and middle schools) to visually identify areas of the city that are farther than the typical commute from leveler schools.
<h2>4.   Which areas of the city have more at-risk students and do not have access to leveler schools?</h2>
To identify areas of the city with many at-risk students that do not have easy access to leveler schools, we first identify D.C.’s neighborhood clusters with higher than average shares of at-risk students. Then, we identify neighborhood clusters with many students who lack access to leveler schools on public transit if the centroid for the cluster falls outside public transit commute polygons. A neighborhood cluster will be identified as located in a quality school desert is its centroid is within an area without easy access to high-quality schools.

See Table 2 below for data sources.
<table>
<tbody>
<tr>
<td colspan="2" width="623">Table 2. Data sources</td>
</tr>
<tr>
<td width="312"><strong>Source</strong></td>
<td width="312"><strong>Data</strong></td>
</tr>
<tr>
<td width="312">D.C. School Report Card, 2017-18</td>
<td width="312">-        MGP for ELA and Math

-        Target MGP

-        School addresses</td>
</tr>
<tr>
<td width="312">Travel time package in R</td>
<td width="312">-        Create travel time maps around schools</td>
</tr>
<tr>
<td width="312">American Community Survey</td>
<td width="312">-        Percent of children receiving SNAP, cash public assistance, and SSI benefits by Census tract</td>
</tr>
<tr>
<td width="312">U.S. Census Bureau</td>
<td width="312">-      Census tract shapefile</td>
</tr>
<tr>
<td width="312">DME EdScape Beta</td>
<td width="312">-      At-risk students by neighborhood cluster</td>
</tr>
</tbody>
</table>

<a href="#ftnref1" name="ftn1"><sup>1</sup></a> Office of the State Superintendent for Education (OSSE). 2018. <em>DC School Report Card and STAR Framework Technical Guide. </em><a href="https://osse.dc.gov/page/2018-19-dc-school-report-card-and-star-framework-data">https://osse.dc.gov/page/2018-19-dc-school-report-card-and-star-framework-data</a>

<a href="#ftnref2" name="ftn2"><sup>2</sup></a> Deputy Mayor for Education (DME). 2018. EdScape Beta: Trends in Distance to School by Grade Band. <a href="https://edscape.dc.gov/">edscape.dc.gov/</a>

<a href="#ftnref3" name="ftn3"><sup>3</sup></a> In 2017-18, out of the 39,954 student eligible for at-risk funding, 86 percent received SNAP benefits and 44 percent received TANF (Deputy Mayor for Education. 2018. <em>Presentation to 2018-19 UPSFF Working Group, November 29.</em> <a href="https://osse.dc.gov/page/2018-19-uniform-student-funding-formula-upsff-working-group">https://osse.dc.gov/page/2018-19-uniform-student-funding-formula-upsff-working-group</a>

<a href="#ftnref4" name="ftn4"><sup>4</sup></a> Urban Institute Student Transportation Working Group. (2018). The Road to School: How Far Students Travel to School in the Choice-Rich Cities of Denver, Detroit, New Orleans, New York City, and Washington, DC. Washington, DC: Urban Institute.
