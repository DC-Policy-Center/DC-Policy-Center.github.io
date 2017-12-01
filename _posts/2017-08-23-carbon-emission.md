---
layout: post
title: Greenhouse gas emissions in D.C.
description: Using R and Python to map CO<sub>2</sub> in th District
author: Randy Smith
author_url: https://www.dcpolicycenter.org/people/randy-smith/
date: 2017-08-23
permalink: /posts/carbon-emission
---
**D.C.’s building energy benchmark inventory** is a comprehensive list containing CO<sub>2</sub> emissions of all private residential and commercial buildings 50,000 square feet and larger, and all public buildings 10,000 square feet and larger. While this means only a fraction of D.C.’s 161,000 buildings are being tracked, it still captures some of the largest potential emitters.
## The analysis
Analyzing the data would seem straightforward; however, the data provided by D.C. Open Data is inconsistent in its formatting at best. While I would have preferred to do much of my data cleaning within R, considerable cleaning had to be down by hand through excel. A cleaned version of the 2014 dataset is available at my github.
With a mostly cleaned dataset, I was then able to build a comprehensive list of D.C.’s top emitting buildings. All analysis utilized the tidyverse library. Despite attempts at cleaning the data at hand, there were still inconsistencies in names for the Owner of Record in the dataset. This was mostly limited to George Washington University and Georgetown University. In the code segment below you can see several variations in the names where I altered the names for consistency.
#### Setting up my working directory
~~~~
library(tidyverse)

# Set working Directory
setwd("SET TO YOUR WORKING DIRECTORY ")

# Read in Data
emissions <- read.csv('https://raw.githubusercontent.com/smitty1788/DCPolicyCenter/master/May%202017/Building_Carbon_Emissions/Analysis/Tab/emissions.csv',
                      stringsAsFactors = FALSE)

# Addressing inconsistent naming schemes
emissions$OWNEROFRECORD <- gsub("GEORGE WASHINGTON UNIVERSITY", "George Washington University", emissions$OWNEROFRECORD)
emissions$OWNEROFRECORD <- gsub("GEORGE WASHINGTON", "George Washington University", emissions$OWNEROFRECORD)
emissions$OWNEROFRECORD <- gsub("THE GEORGE WASHINGTON UNIVERSITY", "George Washington University", emissions$OWNEROFRECORD)
emissions$OWNEROFRECORD <- gsub("THE George Washington University", "George Washington University", emissions$OWNEROFRECORD)
emissions$OWNEROFRECORD <- gsub("GEORGETOWN COLLEGE LAW CENTER", "GEORGETOWN UNIVERSITY", emissions$OWNEROFRECORD)
emissions$OWNEROFRECORD <- gsub("JESUIT COMMUNITY AT GEORGETOWN UNIV INC", "GEORGETOWN UNIVERSITY", emissions$OWNEROFRECORD)
~~~~
Due to the fact that many of the universities record the CO<sub>2</sub> emissions data on a per building basis (Such as George Washington University), these records would need to be aggregated to be accurately compared to other properties throughout D.C. In the code below, a few George Washington University and Georgetown University properties required there listed building type to be changed from Residence Hall to College/University. In addition, minor formatting to Children’s National Medical Center owner of record was completed as well. Following the formatting, aggregation was completed through the summarise function, providing a ranked list of top CO<sub>2</sub> by property.
#### Identifying top emmitting properties
~~~~
# Top emitting properties
top_prop <- emissions %>%
  rename(Owner = OWNEROFRECORD,
         Type = PRIMARYPROPERTYTYPE_SELFSELECT) %>%
  mutate(Type = if_else(Owner %in% c('George Washington University', 'GEORGETOWN UNIVERSITY'), 'College/University', Type),
         Owner = if_else(PROPERTYNAME == "Children's National Medical Center", "Children's National Medical Center", Owner)) %>%
  group_by(Owner, Type) %>%
  summarise(Metric_Tons_CO2 = sum(TOTGHGEMISSIONS_METRICTONSCO2E, na.rm = TRUE),
            KGSQFT_CO2 = sum(TOTGHGEMISSINTENSITY_KGCO2EFT, na.rm = TRUE)) %>%
  arrange(desc(Metric_Tons_CO2))
~~~~
The article also focuses on a comparison of CO<sub>2</sub> emissions among Universities and College within D.C. The comparison was compiled in two ways, through CO<sub>2</sub> emission by area (kg of CO<sub>2</sub> per square foot) and by enrollment (Metric Ton of CO<sub>2</sub> per student). Enrollment figures were obtained simply through the listed student enrollment on each institution’s Wikipedia page. Both estimates were compiled into a single table.
### Looking into Colleges and Universities by area and enrollment
~~~~
# Top emmissions by College/University
colleges <- top_prop %>%
  filter(Type == 'College/University') %>%
  arrange(desc(KGSQFT_CO2))

# Enrollment Data
# Data gathered from each universities respective wikipedia page
uni_names <- sort(unique(colleges$Owner))

uni_enrollment <- tibble(
  Owner = uni_names,
  enrollment = c(13200, 2340, 27159, 17849, 10300, NA, NA, 6521, NA, NA, 2100)
)

# College emissions by enrollment
college_emissions <- colleges %>%
  merge(uni_enrollment, by = 'Owner') %>%
  mutate(CO2_Enrollment = round(Metric_Tons_CO2 / enrollment, 1)) %>%
  arrange(desc(CO2_Enrollment)) %>%
  filter(!is.na(CO2_Enrollment))
~~~~
## Mapping the data
The building energy benchmark inventory does provide the data as a shapefile, however, it is only provided as simple point data. While I could have easily just kept the data in this point form, I wanted to visualize the building data using full building footprints. To accomplish this, I was able to perform a spatial join. Attributing data from the point data to the building footprints if they overlapped spatially.
This method is not perfect by any means, the latitude and longitude data provided is sometimes simplified, especially in cases such as Georgetown University where the majority of building are represented by one point. This single point was not going to perfectly line up with any building footprint on the campus. To adjust for this, I performed two spatial joins (seen in python code below). The first was with the point data and common owner lots. Common owner lots encompass the majority of buildings on a university campus. From this, I performed a spatial join between the common owner lots and building footprints. This data was then able to be exported as a shapefile and used to create a map of CO<sub>2</sub> emissions by building using Carto. All spatial data is available here.
#### Using arcpy to map
~~~~
import arcpy     # Import arcpy module

# Local variables:
Building_Footprints = "~\Carbon Emmisions\Data\Spatial\Building_Footprints\Building_Footprints.shp"
Common_Ownership_Lots = "~\Carbon Emmisions\Data\Spatial\Common_Ownership_Lots\Common_Ownership_Lots.shp"
emissions_point_data = "~\Carbon Emmisions\Data\Spatial\Carbon.gdb\emissions"
common_plot = "~\Carbon Emmisions\Data\Spatial\Carbon.gdb\common_plot"
building_co2 = "~\Carbon Emmisions\Data\Spatial\Carbon.gdb\building_co2"
CO2_Emit_Buildings_shp = "~\Carbon Emmisions\Data\Spatial\Web\Buildings\CO2_Emit_Buildings.shp"
~~~~
#### Spatial Joins Building points to common plots
~~~~
# Building points to common plots
arcpy.SpatialJoin_analysis(Common_Ownership_Lots, emissions_point_data, common_plot,
"JOIN_ONE_TO_ONE", "KEEP_ALL", "OBJECTID \"OBJECTID\" true true false 10 Long 0 10 ,First,#,
Common_Ownership_Lots,OBJECTID,-1,-1;PROPERTYNAME \"PROPERTYNAME\" true true false 8000 Text 0 0 ,First,#,emissions,PROPERTYNAME,
-1,-1;OWNEROFRECORD \"OWNEROFRECORD\" true true false 8000 Text 0 0 ,First,#,emissions,OWNEROFRECORD,-1,
-1;YEARBUILT \"YEARBUILT\" true true false 8000 Text 0 0 ,First,#,emissions,YEARBUILT,-1,-1;ENERGYSTARSCORE \"ENERGYSTARSCORE\" true true false 8000 Text 0 0 ,First,#,emissions,ENERGYSTARSCORE,-1,
-1;Metrictons \"Metrictons\" true true false 8 Double 0 0 ,Sum,#,emissions,Metrictons,-1,
-1;KGsqft \"KGsqft\" true true false 8 Double 0 0 ,Sum,#,emissions,KGsqft,-1,-1", "INTERSECT", "", "")

# Common plots to building footprints
arcpy.SpatialJoin_analysis(Building_Footprints, common_plot, building_co2,
"JOIN_ONE_TO_ONE", "KEEP_ALL", "OBJECTID \"OBJECTID\" true true false 10 Long 0 10 ,First
,#,Building_Footprints,OBJECTID,-1,-1;PROPERTYNAME \"PROPERTYNAME\" true true false 8000 Text 0 0 ,First,#,
~\Carbon Emmisions\Data\Spatial\Carbon.gdb\common_plot,PROPERTYNAME,-1,-1;OWNEROFRECORD \"OWNEROFRECORD\" true true false 8000 Text 0 0 ,
First,#,~Carbon Emmisions\Data\Spatial\Carbon.gdb\common_plot,OWNEROFRECORD,-1,-1;YEARBUILT \"YEARBUILT\" true true false 8000 Text 0 0 ,
First,#,~Carbon Emmisions\Data\Spatial\Carbon.gdb\common_plot,YEARBUILT,-1,-1;ENERGYSTARSCORE \"ENERGYSTARSCORE\" true true false 8000 Text 0 0 ,First,#,
~\Carbon Emmisions\Data\Spatial\Carbon.gdb\common_plot,ENERGYSTARSCORE,-1,-1;Metrictons \"Metrictons\" true true false 8 Double 0 0 ,First,#,
~\Carbon Emmisions\Data\Spatial\Carbon.gdb\common_plot,Metrictons,-1,-1;KGsqft \"KGsqft\" true true false 8 Double 0 0 ,First,#,
~\Carbon Emmisions\Data\Spatial\Carbon.gdb\common_plot,KGsqft,-1,-1", "INTERSECT", "", "")
~~~~
#### Finally filtering and exporting
~~~~
# Filter only buildings with emissions data
arcpy.SelectLayerByAttribute_management(building_co2, "NEW_SELECTION", "Metrictons IS NOT NULL")

# Export shapefile for webmap
arcpy.CopyFeatures_management(building_co2, CO2_Emit_Buildings_shp, "", "0", "0", "0")
~~~~
## Final product
After all of this cleaning, processing, and analyzing we can finally produce the map from the [main piece](https://www.dcpolicycenter.org/publications/building-greenhouse-carbon-emissions/?utm_source=carbon-emmision-data-blog&utm_medium=data-blog).
<iframe src="https://jennyminich.carto.com/builder/3d6c722e-b073-403a-9013-fa07eb592ce2/embed" width="100%" height="520" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

You can find complete code for the analysis and visuals on my [github page](https://github.com/smitty1788/DCPolicyCenter/tree/master/May%202017/Building_Carbon_Emissions).
