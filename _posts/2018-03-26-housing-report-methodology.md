---
layout: auto-post
title:  Affordable housing in D.C.
description: A methodology write-up
author: Yesim Sayin-Taylor
author_url: https://www.dcpolicycenter.org/people/Yesim-sayin-taylor/
date: 2018-3-26
permalink: /posts/housing-report-methodology/
---

All of the data used in the housing report can be found in the excel sheet here:

[Excel download](https://dc-policy-center.github.io/assets/data-resources/housing-report-chart-data.xlsx)

The [executive summary](https://www.dcpolicycenter.org/publications/taking-stock/) and [full report]() can be seen [on our main website](https://www.dcpolicycenter.org). The PDF version of the report can also be downloaded [here](https://www.dcpolicycenter.org/wp-content/uploads/2018/03/DC-Policy-Center-Housing-Report.final_.March25.pdf).

# Appendix I: Methodology
The analysis presented in this study relies on estimates of housing units and housing values built from a comprehensive dataset that combines information from eight publicly available sets of data:

*	Real property tax assessment database  which provides information on the use of each property, the assessed value of each property, the type of tax classification for each property and whether the property is exempt from taxation or receives special tax treatment.

*	Computer Assisted Mass Appraisal data for residential units, which provide information on the characteristics of the residential units, including living area, characteristics of the structure, and age of the structure.

*	Computer Assisted Mass Appraisal data for condominiums, which provide similar information for individual condominium units.

*	Computer Assisted Mass Appraisal data for commercial property, which provide information on apartment buildings that are assessed as a single entity. Not all these buildings are commercial, in the sense that they have units available for rent. They also include cooperatives  where a single corporate entity owns the buildings of the cooperative and is responsible for the real property taxes.

*	Common ownership lots spatial dataset, which is a map of all lots in the District.

*	A spatial dataset called the “Condominium relate file,” which maps all condominium units that are assessed separately to a single common ownership lot on which the condominium building resides.

*	Assessment to sales price report for residential properties published by the OCFO
*	Capitalization rates used in real property assessment, published by the OCFO.

## Step 1: Determining number of buildings that hold the District’s housing stock and estimating the number of units

We used two main data sources for estimating the number of housing units. One is the tax rolls, which gave us information about how the building is used, its tax rate, and it is taxable assessments. The other are the Computer Assisted Mass Appraisal system datasets, which gave us information about the characteristics of buildings and the units they hold.

Each housing unit in the District has a unique identification number (SSL number) tied to the lot on which the unit is built. But the District does not tax or count all units the same way. The tax rolls treat each property as a separate entity so long as a distinct identity owns it. Thus, a unit in a condominium building is a single entry in the tax rolls, so is a large apartment building with 800 housing units. So, to count all housing units, one must add the units in multi-family buildings that hold rental apartments or are owned by cooperatives. And this requires some assumptions.

We began with tax data (release date, December 21, 2017) and filtered it by “use codes”—the codes that the city’s tax assessors use in describing a property to only include buildings and units used for residential purposes. Residential use broadly falls into four categories:
*	Single family units (detached or semi-detached houses or row houses),

*	Condominiums (where each unit is owned by a single owner and public spaces in the building is collectively owned by all),

*	Cooperatives (building owned by a single corporation, each member own shares that entitle them to live in a specific unit), and

*	Apartment buildings comprised of rental units.

We then matched each unit in the tax data with characteristics of the unit available in the three Computer Assisted Mass Appraisal system datasets. This allowed us to understand the gross living area for each unit (the tax data only has land area), and in the case of coops and rental apartment buildings, the number of units in each building.

The District publishes three CAMA datasets: one for residential units, one for condominiums, and one for commercial buildings. The datasets for residential units and condominiums give sufficient information on the size of each property, how many rooms or bedrooms the unit has, and other characteristics such as heating mechanisms, quality of the building, etc.
Nevertheless, the CAMA data on commercial properties are tricky for two reasons. First, the CAMA database for buildings reports a Gross Living Area, some common areas such as building lobbies, rec rooms, etc. This means, if we divide this number by the number of units in the building, we will be overestimating average unit size of each unit, by a magnitude that is uneven across different buildings. Second, for those buildings that report only living areas but not units, a single size assumption will lead to different magnitudes of error.

### Adjustments:
We made the following adjustments to the data to compensate for missing information pertaining to units or living areas:
*	We found 94 entries in the tax rolls without information on size or capacity. Of these, 50 are single family homes we included in our estimates of housing units, counting each as a single unit. The remainder are multiple unit buildings and we had no good way of including them in our unit counts.

*	There are another 92 apartment buildings where the reported living space is extremely low (under 500 square feet). We also excluded them from our estimates.

*	For buildings where living space is reported, but the number of units is not, we estimated the number of units assuming the average apartment is 950 square feet—the average size of apartments in the city. This is an important assumption as there are 10,300 income generating housing buildings (apartments, condominiums, etc..) on the District’s tax rolls, and in this group, we don’t have any information on the number of units in 1,028 of them. Using the 950 square feet per unit assumption, we added 10,146 more units.

*	We found 14 buildings with substantial living space but only a single unit reported. Further research showed that these buildings are classified as investment level condominiums but are in fact rental buildings. We estimated the number of units by dividing the total living area by 950.

*	We found 450 buildings in various stages of development. We removed them from our estimates


### Exclusions:
We removed from out dataset units that are not used as housing. We also removed units that are used as housing for institutional needs and are not likely to be open to residents.

*	Some residential properties on the tax rolls had non-residential use codes in the CAMA dataset (only in the commercial CAMA). For example, two buildings that appear as apartment buildings on the tax rolls are in fact dorms. 8 buildings classified as condominiums on the tax rolls have marked as offices on the CAMA datasets. We found 48 such properties and removed them from our analysis.

*	Some residential properties are owned by foreign governments, hospitals, universities, or the federal government. These units are not likely to be put on the market.


After these adjustments, we estimate that there are 303,900 units that are available for resident use. The table below summarizes our adjustments and exclusions

#### APPENDIX TABLE 1 – ADJUSTMENTS AND EXCLUSIONS TO THE HOUSING DATA

|Step	|Number of Buildings|	Number of units|
|-|-|-|
|Number of buildings and units after the initial match of tax and CAMA data|	169,144|	312,327|
|Estimated number after adjustments for buildings and units without size or unit information|	169,241|	320,590|
|Estimated number after exclusions based on use code|	169,193|	319,635|
|Estimated number after exclusions based on owner characteristics|	167,481	|303,910|

## Step 2: Estimating market value for the housing units
It is impossible to know the exact market value of a building unless it has been recently sold. Even then, there are unusual sales. For example, sales by distressed owners can have a sale price that is very different from market value. Therefore, we must use estimates.

Tax rolls report for each property an assessed value, but the tax assessors use different methods for arriving at this value for different types of properties. For income generating properties such as apartments, tax assessors use the potential income generating capacity of the building as the basis of the valuation. They divide the annual net operating income from the property by what is known as the “capitalization rate,” an assumed interest rate suitable to capitalize the income stream from a specific income-generating property. They adjust the capitalization rate by the location of these units, the building’s vertical size (high-rise v. low), the state of the building, and its vacancy rate. For these properties, the assessed values are sufficiently close to market values.

For non-income generating properties such as owner-occupied housing or units in non-rental buildings, the tax assessors use the CAMA data and apply to each unit values based on the unit characteristics such as size, state of the building and its infrastructure such as the type of heating or cooling units. For these homes, where the value is derived from home characteristics and not the market value of potential capacity for generating income, the Office of the Chief Financial Officer publishes an “Assessment to Market Value Report” using information from recent sales in the same tax assessment neighborhood. When estimating the value for these units, we adjusted the tax assessment by the published assessment to sales price ratio. For example, in Shepherd Park, the 2018 assessments were 97 percent of the recent sales prices among the comparable properties. In this case, we divide the assessed values by the assessment-to-market ratio reported for the neighborhood. Following the same example, for all properties in Shepherd Park, we divided the assessment by 97 percent to arrive at a market value. This adjustment increased the total assessed values of residential properties by $3.2 billion, or 2.6 percent of the total residential assessments.

### Operating expenses
In addition, for rental units we incorporated a 60-percent operating expenditure for market rate units and 70-percent for buildings owned by the District government or have subsidized units. This estimate is based on a 2016 NAA survey, which provides data on the Metropolitan Washington area. These include:

*	Residential – five or fewer flats, not eligible for homestead (12,137 units)

*	Apartments with elevators (54,599 units)

*	Residential apartments, walk up (57.887 units)

*	Other residential multifamily rental buildings (17,499 units)

*	Investment properties


#### APPENDIX TABLE 2 – ADJUSTMENTS AND EXCLUSIONS TO THE HOUSING DATA

|Operating expenditures share of rent potential|	Total|	Garden|	Mid to high rise|
|-|-|-|-|
|All market, utilities excluded|	59.54%|	59.70%|	48.75%|
|All market, utilities included|	64.75%|	63.02%|	69.33%|
|Subsidized, utilities excluded|	66.18%|	72.65%|	55.91%|
|Subsidized, utilities included|	82.44%|	82.13%|	82.76%|

Source: 2016 NAA SURVEY, Vacancy rate at 5% (source)

### Estimating cost of owning or renting a housing unit
We assumed that each property can potentially be income-generating, and the potential annual income from the property is equivalent to the cost of owning or renting this property. For each unit, we divided the estimated market value by a capitalization rate. We used the capitalization rates the OCFO publishes for income-generating properties. There are six such cap rates for three different areas (the western parts of the city, the Central City, and neighborhoods east of the Anacostia River) and two different type of buildings (high rise and low rise). For vertical condominiums, coops and conversions, and apartment buildings with elevators, we used the cap rates published for high rise buildings. For everything else, we used the cap rates for low rises.

We did not adjust for the quality of the building when estimating the value of the property. It is possible that housing units in poor shape will fetch a lower value. In fact, the OCFO’s assessment manual suggests that assessors take the state of a building into consideration to adjust the cap rate they use. While there are some data on building characteristics, we did not have a good way of incorporating this information into the capitalization rate. The assumption we made is that while higher capitalization rates for units in bad conditions will reduce the cost of buying or renting these units, we would not be accounting for the additional cost of maintaining a unit in bad repair.

For buildings with multiple units, we divided the estimated cost of owning the building with our estimated number of units. This results in estimated values that are averages for that building; the value of units of different size would however be different. We did not have a way of adjusting for this.

### From Cost to Cost Burden
Once we calculated the estimated cost of owning or renting a housing unit, we then estimated the amount of income a household must earn to be able to afford that unit. We used the standard assumption that a household can comfortably afford a housing unit that costs 30 percent or less than the household income. With this figure, we then calculated the share of Area Median Income one must earn to be able to occupy each unit. We presented this figure for single person households, two-person households, three-person households, four-person households, and five-person households.

### Capacity
Not all housing units can accommodate a family of four. To understand what housing units are affordable for households of different sizes, we needed to know how many people can comfortably fit into those housing units.

For 175,309 condominiums and single-family units, we have information on the number of bedrooms in the unit. For these units, we assumed that each bedroom can comfortably accommodate up to 1.5 persons, rounded up to the next whole. A studio can hold 1 person, a one-bedroom can hold two persons, a two-bedroom can hold 3, etc.

For 117,302 units (across 3,339 properties), almost all coops or rental apartment buildings), we did not have any information on the number of rooms or bedrooms, so we had to make estimates. Data compiled by real estate research groups show that in the District, the average size of a studio apartment is 480 square feet the average size of a one-bedroom apartment is 717 square feet and the average size of a two-bedroom apartment is 991 square feet.  Using this information, we estimated that the average space per person in multifamily rental buildings in the District is 356 square feet.  We divided the gross living area of the buildings by the number of units, and then divided this number by 356, our estimated average, to estimate the average capacity of each unit in these buildings. This method tends to underestimate the capacity of larger units, and it will overestimate the capacity of units in buildings with large shared areas. Below is the distribution of unit sizes we calculated using this method.



#### APPENDIX FIGURE 1 – ESTIMATED NUMBER OF UNITS BY THEIR CAPACITY WHEN INFORMATION ON THE NUMBER OF BEDROOMS IS NOT AVAILABLE  

<img src="../../assets/images/post_images/housing-report/units-with-capacities-estimate.png" style="width:70%;margin-left:20%">

## STEP 3: Mapping the data
To map our data, we used two sources. The “Common Lot Ownership Dataset” available at the District Government’s Open Data Portal (opendata.dc.gov) plots each land lot in the District. We matched this data to our housing data using the SSL numbers. This helped us map all units except condominiums (50,000 entries in the tax database). This is because multiple units with separate tax identification numbers are built on the same lot. The District has also made available publicly what is called the “condo relate table,” which assigns condominium units with separate tax identification numbers to a single lot on which these units were built. All of this has allowed us to map 295,000 units out of the 317,000 units we think we have in the District.

Readers interested in the raw data that shape our analyses should email the author at Yesim@dcpolicycenter.org.

# Appendix II: Assessment neighborhoods

<img src="../../assets/images/post_images/housing-report/assessment-neighborhoods.png" style="width:100%;">

# Appendix III: References

Atkinson, Rowland, Maryann Wulff, Margaret Reynolds, and Angela Spinney (2011). Gentrification and Displacement: The Household Impacts of Neighborhood Change. Australian Housing and Urban Research Institute.

Asch, Chris M., and George Derek Musgrove (2017). Chocolate City: A history of Race and Democra-cy in the Nation’s Capital. Chapel Hill: University of North Carolina Press.

Bischoff, Kendra, and Sean F. Reardon (2013). Residential Segregation by Income 1970-2009, US2010, Discover America in the New Century, available at https://s4.ad.brown.edu/Projects/Diversity/Data/Report/report10162013.pdf

Blumenthal, Pamela M., John R. McGinty, and Rolf Pendall (2016). Strategies for Increasing Housing Supply in High-Cost Cities, DC Case Study Washington DC: Urban Institute. Available at https://nvaha.org/wp-content/uploads/2016/09/2000907-Strategies-for-Increasing-Housing-Supply-in-High-Cost-Cities-DC-Case-Study.pdf

Cutler, Kim-Mai (2014). How Burrowing Owls Lead to Vomiting Anarchists (Or SF’s Housing Crisis Ex-plained), Techcrunh.com. Available at https://techcrunch.com/2014/04/14/sf-housing/

D.C. Department of Housing and Community Development (2015). FY 2015 Housing Production Trust Fund Annual Report, Washington DC: DHCD. Available at https://dhcd.dc.gov/sites/default/files/dc/sites/dhcd/publication/attachments/2015%20HPTF%20Affordable%20Housing%20Annual%20Report.pdf.

D.C. Department of Housing and Community Development (2016). Housing Preservation Strike Force: Final Report, Washington DC: DHCD. Available at https://dhcd.dc.gov/sites/default/files/dc/sites/dhcd/publication/attachments/Strike%20Force%20Report%20Final%2011-9.pdf.

D.C. Department of Housing and Community Development (2017). Inclusionary Zoning Fiscal Year 2016 Annual Report. Available at https://dhcd.dc.gov/sites/default/files/dc/sites/dhcd/publication/attachments/DHCD%20FY2016%20IZ%20Annual%20Report_0.pdf .

D.C. Office of the Chief Financial Officer (2018). Fiscal Year 2017 Comprehensive Annual Financial Report, available at https://cfo.dc.gov/sites/default/files/dc/sites/ocfo/publication/attachments/FY%202017%20DC%20CAFR_2.pdf.

D.C. Office of the Chief Financial Officer (2018). 2018 Assessment Ratio Report, Real Property Tax Administration. Available at https://otr.cfo.dc.gov/sites/default/files/dc/sites/otr/publication/attachments/FY%202018%20Assessment%20Ratio%20Report_.pdf.

D.C. Office of the Chief Financial Officer (2017). 2018 General Reassessment Program, Appraiser’s Reference Materials, Office of Tax and Revenue Real Property Tax Administration. Available at https://otr.cfo.dc.gov/sites/default/files/dc/sites/otr/publication/attachments/Reassessment%20Program%202018%20FINAL.pdf.

D.C. Office of the Chief Financial Officer (2017). Tax Year 2018 Pertinent Data Book for the District of Columbia, Office of Tax and Revenue Real Property Tax Administration. Available at https://otr.cfo.dc.gov/sites/default/files/dc/sites/otr/publication/attachments/TY%202018%20Full%20PDB%20rev1.01.pdf.

D.C. Office of the Chief Financial Officer, Office of Revenue Analysis (2018). District of Columbia Economic and Revenue Trends, January 2018. Available at https://cfo.dc.gov/sites/default/files/dc/sites/ocfo/publication/attachments/DC%20Economic%20and%20Revenue%20Trend%20Report_January%202018.pdf

Florida, Richard  (2015). “The Urban Housing Crunch Costs the U.S. Economy about $1.6 Trillion a Year,” City Lab, available at http://www.citylab.com/housing/2015/05/the-urban-housing-crunch-costs-the-us-economy-about- 16-trillion-a-year/393515/.

Fry, Richard, and Paul Taylor (2015). “The Rise of Residential Segregation by Income.” Pew Re-search Center’s Social & Demographic Trends Project. Accessed January 18. http://www.pewsocialtrends.org/2012/08/01/the-rise-of-residential-segregation-by- income/.

Ganong, Peter, and Daniel Shoag. (2013). “Why Has Regional Convergence in the U.S. Stopped?” Faculty Research Working Paper RWP12-028. Cambridge, MA: Harvard University John F. Kennedy School of Government. Available at https://scholar.harvard.edu/files/shoag/files/why_has_regional_income_convergence_in_the_us_declined_01.pdf

Glaeser, Edward L., Joseph Gyourko, and Raven Saks (2005). “Why is Manhattan so expensive? Regulation and the rise in housing prices.” The Journal of Law and Economics 48, no. 2: 331-369.

Glaeser, Edward L., and Bryce A. Ward (2009). “The causes and consequences of land use regula-tion: Evidence from Greater Boston.” Journal of Urban Economics 65, no. 3: 265-278.

Hendey, Leah, Peter A. Tatian, and  Graham MacDonald (2014). Housing Security in the Washington Region, Washington DC: Metropolitan Washington Council of Governments  and Urban Institute. Available at https://www.urban.org/sites/default/files/alfresco/publication-pdfs/413161-Housing-Security-in-the-Washington-Region.PDF

Hsieh, Chang-Tai and Enrico Moretti (2015). Local Growth and Aggregate Growth. Kreisman Working Papers Series in Housing Law and Policy No. 30. Available at SSRN: https://ssrn.com/abstract=2693282 or http://dx.doi.org/10.2139/ssrn.2693282

Jackson, Maurice (2017). An Analysis: African American Employment, Population, and Housing Trends in Washington D.C. Washington DC: Georgetown University. Available at https://www.cityfirstfoundation.org/wp-content/uploads/2015/11/DC-AAEPHT-Report-091217.pdf.

Lichter, Daniel T., Domenico Parisi, and Michael C. Taquino (2012). “The Geography of Exclusion: Race, Segregation, and Concentrated Poverty.” Social Problems 59 (3): 364–88. doi:10.1525/sp.2012.59.3.364.

McKernan, S., Ratcliffe C., Steuerle, E. and Zang S. (2013). Less Than Equal: Racial Disparities in Wealth Accumulation, Washington D.C.: Urban Institute. Available at https://www.urban.org/research/publication/less-equal-racial-disparities-wealth-accumulation/view/full_report.

Rabinowitz, Kate (2018). The knowns and unknowns of Airbnb in D.C., Washington DC: D.C. Policy Center. Available at https://www.dcpolicycenter.org/publications/the-knowns-and-unknowns-of-airbnb-in-d-c/

Roberts, David (2018). A sweeping new bill targets California’s housing crisis, Vox. Available at https://www.vox.com/cities-and-urbanism/2018/2/23/17011154/sb827-california-housing-crisis.

Roy, Simone (2017). Who has the longest commute in the D.C. Area? D.C. Policy Center, available at https://www.dcpolicycenter.org/publications/who-has-the-longest-commute-in-the-d-c-area/

Rusk, David (2017a). Thermometer of City Health: Couse Households, not Noses. Washington DC: D.C. Policy Center. Available at https://www.dcpolicycenter.org/publications/households-not-noses/

Rusk, David (2017b). Economic segregation is replacing racial segregation in large metro areas. Washington DC: D.C. Policy Center. Available at https://www.dcpolicycenter.org/publications/economic-polarization/

Schuetz, Jenny and Cecile Murray (2018). To address tight housing inventory, we need better measures of housing supply. Washington D.C.: The Brookings Institute. Available at https://www.brookings.edu/blog/the-avenue/2018/02/01/to-address-tight-housing-inventory-we-need-better-measures-of-housing-supply/

Sharkey, P. (2012). “Residential Mobility and the Reproduction of Unequal Neighborhoods.” Cityscape 14 (3): 9–31.

Strauss, Becky (2018). Making Room for Millennial Families. Report by the D.C. Policy Center. Avail-able at https://www.dcpolicycenter.org/publications/making-room-millennial-families/.

Sturtevant, Lisa, and Jeannette Chapman, (2013). “Housing the Region’s Future Workforce 2012–2032.” Arlington, VA: George Mason University School of Public Policy, Center for Regional Analysis

Sturtevant, Lisa (2015). “New Housing Construction: Where, What Types and For Whom?” Washing-ton, DC: Housing Association of Nonprofit Developers.

Sturtevant, Lisa (2017). A Guidebook for Increasing Housing Affordability in the Greater Washington Region: Local Resources and Strategies for Housing Production and Preservation.

Tatian, Peter, Josh Leopold, Elizabeth Oo, Gerry Joseph, Graham MacDonald, Gerry Joseph, Maia Woluchem, and Simone Zhang (2015). Affordable Housing Needs Assessment for the District of Co-lumbia, Phase I and II, Washington DC: Urban Institute, available at https://www.urban.org/sites/default/files/alfresco/publication-pdfs/2000214-Affordable-Housing-Needs-Assessment-for-the-District-of-Columbia.pdf

Taylor, Mac (2015). California’s Housing Costs, Causes and Consequences, Report by California Leg-islative Analysis Office. Available at http://www.lao.ca.gov/reports/2015/finance/housing-costs/housing-costs.pdf.

Taylor, Zack, with John Van Nostrand (2008). Shaping the Toronto Region, Past, Present, and Fu-ture: An Exploration of the Potential Effectiveness of Changes to Planning Policies Governing Green-field Development in the Greater Golden Horseshoe, Neptis Studies on the Toronto Metropolitan Re-gion, Toronto: Neptis Foundation. Available at http://www.neptis.org/sites/default/files/toronto_metropolitan_region_shaping_the_toronto_region/shaping_report_web_20080902_0.pdf

Urban Land Institute (2009). Priced Out: persistence of the Workforce Housing Gap in the Washing-ton D.C., Metro Area, Washington D.C. Available at https://americas.uli.org/report/priced-out-persistence-of-the-workforce-housing-gap-in-the-washington-d-c-metro-area/

Zippel, Clair (2016). Broken Foundation: Affordable Housing Crisis Threatens DC’s Lowest-Income Residents, Washington DC: DC Fiscal Policy Institute. Available at https://www.dcfpi.org/wp-content/uploads/2016/12/DCFPI-Broken-Foundation-Housing-Report-12-8-16.pdf

Zuk M, Bierbaum A., Chapple, K., Gorska, K., Loukaitou- Sideris, A., Ong, P. Thomas, T. (2015). Gentrification, Displacement, and the Role of Public Investment: A Literature Review, University of California, Berkeley. Available at http://iurd.berkeley.edu/uploads/Displacement_Lit_Review_Final.pdf

Zuk, Miriam and Karen Chapple (2016). Housing Production, Filtering and Displacement: Untangling the Relationships, Research Brief by the Institute of Governmental Studies. Available at http://www.urbandisplacement.org/sites/default/files/images/udp_research_brief_052316.pdf
