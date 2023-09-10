<h1 align="center">Tech for a Greener Tomorrow <br> 🍃♻️🏞️🌱 Hackathon for Sustainable Solution 🌱🏞️♻️🍃

</h1>

![Summer of Code Banner](https://res.cloudinary.com/djdefbnij/image/upload/v1693903105/Hackathons/Untitled_design_2_1_gzwakq.png)

# PowerUpPoint
(Developer: **GreenerToday** hackathon team, Sept 2023)


# Table of Contents:
1. [About](#about)
2. [Project Goals: ](#project-goals)
    1. [UX Design - Strategy ](#ux-design-strategy) 
    2. [UX Design - Strategy - Competitor Portals](#ux-design-strategy-analysis-of-competitor-offerings)
    3. [UX Design - Strategy - Target Audience](#ux-design-strategy-target-audience)
3. [UX Design - Scope](#ux-design-scope)
    1. [UX Design - Scope - User Requirements and Expectations]
4. [User goals/ user stories: ](#user-goals-user-stories)
    1. [First-time User Goals](#first-time-user-goals)
    2. [Returning User Goals](#returning-user-goals)
    3. [Site Owner Goals](#site-owner-goals)
5. [Further UX Design: ](#ux-design-decisions)
    1. [Skeleton - Wireframes; ](#wireframes)
    2. [Surface - Colours](#colour-scheme)
    3. [Surface - Fonts; ](#typography)
    4. [Surface - Imagery](#design-images)
6. [Features](#features)
    1. [Included](#features-in-scope)
    2. [Future Development](#features-left-to-implement)
7. [Technology](#technologies)
    1. [Languages](#langugages)
    2. [Frameworks and Tools](#frameworks--tools)
8. [Validation](#validation)
    1. [Testing user stories](#testing-user-stories)
    2. [Unfixed Bugs](#unfixed-bugs)
9. [Credits](#credits)
    

## About
--------
This project was created by **GreenerToday** and is deployed and can be accessed at [PowerUpPoint](https://stef-cruz.github.io/power-up-point/index.html).

## Intro
PowerUpPoint is a site to assist Electric Vehicle users in locating a charging point, in a particular locality, which is suited to their vehicle.

### Responsive Mockup
[Static image with variety of opened pages](responsiveness-sp1.png)

[Dynamic responsiveness view](https://ui.dev/amiresponsive?url=https://stef-cruz.github.io/power-up-point/index.html)

### Live webpage link
[PowerUpPoint](https://stef-cruz.github.io/power-up-point/index.html).

## PowerUpPoint Goals
1. Easily locate charging stations for your electric vehicle (EV), particularly in geographic areas the user is unfamilar with.
2. Using a mobile-friendly development approach
3. Using a comprehensive, up-to-date dataset
4. With minimal overhead in getting to the required information.

**Benefits**:  PowerUpPoint promotes community involvement by encouraging users to log faulty chargers.

### UX Design Strategy
Existing websites offering charging location info were evaluated, and user interviews taken to determine pain points.  Particular attention was paid to existing datasets and their limitations.

PowerUpPoint version 1 is designed as a scalable solution which can be incrementally developed to add new functionality.

### UX Design Strategy - Problem Statement

**Problem Statement**
<br>
EV owners can encounter obstacles when attempting to charge their vehicle away from home, including finding a portal which shows sufficient data, locating an appropriate point, accessing it, bringing a connecting cable if needed, queueing, planning the charge duration, and, if at an inconvenient location, possibly needing to wait with the vehicle for the EV charge to complete.

### UX Design strategy - analysis of competitor offerings

The **GreenerToday** team started with an analysis of existing websites 
[(details here)](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/analysis-ev-cp-websites.png).  
<br>
**Observations:**
<br>
* Many of the websites are proprietary, and show incomplete information (e.g. don't show competing providers chargers).
* Map-based searching often shows summary information when the user zooms out (e.g. 5 charges in Arklow), however, if the user is attempting to plan a trip, they then need to zoom in and out to get the required detail
* Only one of the 5 websites audited shows available/in use status, and none show 'out of order' status

**User interviews** with EV users were also conducted and they reported pain points when locating/accessing a charging location for their EV as follows:
* CP not working/ broken
* CP occupied on arrival
* CP inaccessible on arrival - e.g. non- electric car parked; CP venue closes overnight 
* Queue for CP
* Time needed to perform charge - must be factored into longer journeys
* Charger may be at an inconvenient location, e.g. dark street at night


**PowerUpPoint** site aims to make locating  appropriate charging points easier for users.

### UX Design Strategy Target Audience

EV drivers who require a re-charge at a public charging station.  Typically, due to because of trip distance or duration, they are away from their domestic chargers.  These users may (although not always) be in a loction unfamiliar to them, and may depend on **PowerUpPoint's** data to make choices. 


## UX Design Scope
----------------

### UX Design Scope - Data
Data scope:  Data from multipe EV charger suppliers
Geographic scope: Island of Ireland (initially focussed on Dublin)

### UX Design Scope User Stories

### First-time user Goals
- FTU01 As a first-time user I want to able to understand the purpose of the website instantly, so that I can quickly gain benefit from using it
- FTU02 As a first-time user I want to easily navigate the website, in a logical and intuitive  way, so that I can quickly gain benefit from using it 
- FTU03  As a first-time user and prospective EV purchaser, I want to be able to see the location and suitability of charging stations in particular geographic locations, so that I can evaluate availability of stations near my home/work/frequently travelled routes
- FTU04 As a first time/ returning user I would like to receive mapped directions to get from my location to the charging location.


### Returning user Goals
- RU01 As a first time/returning user I want to be able to search for charging stations within a given locality
- RU02 As a returning user I would like the initial displayed map to be relevant (ie to default to my approximate location)
- RU03 As a first time/returning user I want to be able to see more information about the charging point, so that I can determine if it is appropriate for my needs
- RU04 As a returning user I want to be able to contact the website provider  (to inform them of new charging locations not shown on map, problems with existing charging locations, new ideas for the website..)
- RU05 As a returning user I want to be able to provide feedback about the charging points, so that I can report charging points out of order, or with restricted access

### Site owner Goals
- SO_01 As an administrator I want to be able to include details of privately-operated as well as publicly-offered (e.g. ESB) charging points, so the site users are offered the most complete data
- SO_02 As website administrator I would like to re-use an open-source/non proprietary EV charging dataset as the primary data source, to avoid the overhead of core data capture/maintenance
- SO_03 As website administrator I would like to show 'rich' data on each EV charging point, e.g. charging type, any restrictions on opening hours, amenities available while waiting, unit charges/price band,  ...to make the website more useful and relevant to users   
- SO_04 As website administrator I would like to share user feedback on individual charging point with other users (e.g. faulty stations)

### Nice to haves/ Future Development:

 - RU_06 As a returning user I want to be able to save journeys and add charging stations to my favourites
- RU_07 As a returning user I would like to be able apply filters when searching, for example only seeing charge points suitable for my vehicle 
- RU_08 As a returning user I would LOVE to be able to combine journey planning with EV locations, rather than using 2 separate apps (google maps for journey planning,  and charge point maps for charging points) which I then need to manually combine
- RU_09 As a user I would LOVE to be able to estimate the charging time needed for my vehicle at a particular charging point

## UX Design Decisions
----------------

### Wireframes
<details><summary>Landing Page</summary>
<img src="https://stef-cruz.github.io/power-up-point/assets/readme_files/wf-landing-page.png">
</details>

<details><summary>Find-your-location Page</summary>
<img src="https://stef-cruz.github.io/power-up-point/assets/readme_files/wf-find-your-location-page.png">
</details>

<details><summary>Contact us Page</summary>
<img src="https://stef-cruz.github.io/power-up-point/assets/readme_files/wf-contact-us-page.png">
</details>

## Design Approach

## Features

### F01 Landing Page
The landing page brings the user straight to an information map showing charging points by location.  
<br>
On the Landing Page, OpenChargeMaps APIs are used to fetch extensive data on the charging points within the area.  Google maps APIs are used to display background map and charging point markers. 
<br>
This satisfies user stories:
* FTU01 first-time user to instantly undertand purpose of website; 
* FTU01 ease of navigation, 
* FTU03 see charging points at a particular geographic location

<details><summary>Landing Page</summary>
<img src="https://stef-cruz.github.io/power-up-point/assets/readme_files/sp-landing-page.png">
</details>

### F02 PowerUpPoint Site Navigation
A consistent navbar is seen on all site pages.  The Navbar is respnsive and wil re-position on smaller screen sizes.  Fonts and colours are consistent throughout the site pages.
This satisfies user stories:
* FTU02 ease of navigation,
and also satisfies the core requirements for this ESG project that the site be fully usable.

<details><summary>Navbar</summary>
<img src="https://stef-cruz.github.io/power-up-point/assets/readme_files/sp-navbar1.png">
</details>
<details><summary>Showing hamburger menu at smaller screen sizes</summary>
<img src="https://stef-cruz.github.io/power-up-point/assets/readme_files/sp-navbar2.png">
</details>
<details><summary>Which shows the options by clicking on it</summary>
<img src="https://stef-cruz.github.io/power-up-point/assets/readme_files/sp-navbar3.png">
</details>

### F03 Consistent Imagery
Icon and favicon
The PowerUpPoint icon is used consistently throughout the site and a complementary favicon relects this.
[Icon and favicon](!https://stef-cruz.github.io/power-up-point/assets/readme_files/sp-icon-and-favicon.png)

### F04 Responsiveness
The site is fully responsive and displays well on different screen sizes.  

This can be dynamically tested at this [link](https://ui.dev/amiresponsive?url=https://stef-cruz.github.io/power-up-point/index.html)

### F05 Charging Point details
Once the user clicks on a given charging point on the map, an attribute card, which gives the user information to decide whether this charging point is of interest to them.  
This satisfies the following user stories:
* FTU03 first-time user evaluating suitability of charing points, 
* RU03 ability for returning user to see more information about charging points
* SO03 system owner wish to show 'rich' data per charging point 

![chargepoint details1](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-cp-details1.png)
![chargepoint details2](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-cp-details2.png)

### F06 Status Display
User comments, e.g. charging point status, are visible as an additional panel when the user clicks on a particular charging point.  This satisfies user story S04, the ability to share user feedback (e.g. faulty stations) with other users.  

### F07 User feedback
When a charging point is selected, a context-specific panel is displayed below the map.  This allows capture of charging point status.
![enter charging point status](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-cp-status.png)

### F08 Drive to location
Within the charging point details, a link to 'navigate to point; is avilable, this uses Google APIs to open a new tab with a map routing the user from their current location (as best understood by Google) to the charging point.
This satifies user story FTU04 user wishing to get mapped directions from their location to the charging point location.
![Select navigate to charging point](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-navigate1.png)

![](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-navigate2.png)

### F09 What we do
This is the mission statement for the site, and is located on the main landing page.  This contributes to user stories FTU01, FTU02 clarity of purpose and navigation.
![mission statement](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-what-we-do.png)

### F10 Charging times
A reference table of estimated charging times for particular vehicles/ plug type combinations is given on the landing page.
![mission statement](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-charging-times.png)

### F11 Who we are
This is a 'team profile' page with details of each team member and links to their git hub and linkedin
![about us](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/about-us.png)

### F12 Contact Us page
This page satisfies user requirements RU04, the ability for returning users to provide general website feedback
![contact us](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-contact-us.png)

### F11 Open-Source dataset
An open-source charging point dataset was identified by the team, this provided multi-vendor charging point data and included APIs to access (and potentially, in the future, add to) the data.  A well as providing a decent programming challenge, this satisfies user stories SO02 multi-vendor dataset, SO03 existing open-source data which is maintained and updated frequently.
<br>
[Dataset provider details](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-opendata1.jpg)

<br>
[Evidence of data currency - regular updates](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-opendata2.png)
<br>
[with open access via API](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/sp-opendata3.png)



## Technologies used
Figma (for wireframes)
HTML
CSS
Javascript

## Credits
We would like to give credit to the following individuals, organizations, and resources that have contributed to the project or provided inspiration:
* The various users we interviewed to discover 'points of pain' in their EV charging experience.
* OpenChargeMap organisation for provision of collated charging point information and API in an open and accessible format
* Google Maps for provision of mapping data and capabilities and associated APIs  

### Content
https://openchargemap.org/site/ An open-source portal providing details of EV charging points, with associated API
Google Maps: Provision of map-based hosting

