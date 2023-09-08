<h1 align="center">Tech for a Greener Tomorrow <br> 🍃♻️🏞️🌱 Hackathon for Sustainable Solution 🌱🏞️♻️🍃

</h1>

![Summer of Code Banner](https://res.cloudinary.com/djdefbnij/image/upload/v1693903105/Hackathons/Untitled_design_2_1_gzwakq.png)

# PowerUpPoint

## Deployment

This project was created by **GreenerToday** and is deployed and can be accessed at [PowerUpPoint](https://stef-cruz.github.io/power-up-point/index.html).

[Intro](#intro)  
[Goal](#goal)  
[User Stories](#user-stories)  
[Wireframes](#wireframes)  
[Colour Scheme](#colour-scheme)  
[Typography](#typography)  
[Technologies used](#technologies-used)  
[Credits](#credits)  

## Intro
PowerUpPoint is a site to assist Electric Vehicle users in locating a charging point, in a particular locality, which is suited to their vehicle.

## Goal
Easily locate charging stations for your electric vehicle (EV). Our intuitive search feature allows you to find nearby charging options with just a few clicks. Say goodbye to range anxiety and explore a network of charging points designed for your convenience.

- ➡️ Problem Statement
EV owners can encounter obstacles when attempting to charge their vehicle away from home, including locating an appropriate point, accessing it, bringing a connecting cable if needed, queueing, planning the charge duration, and, if at an inconvenient location, possibly needing to wait with the vehicle for the EV charge to complete.

The **GreenerToday** team started with an analysis of existing websites 
[(details here)](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/ux_competitor_sites.png).  Observations of the current User Experience are:

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


- ➡️ Objective(s)

**PowerUpPoint** site aims to make locating  appropriate charging points easier for users.

- ➡️ Target Audience

EV drivers who require a re-charge at a public charging station.  Typically, due to because of trip distance or duration, they are away from their domestic chargers.  These users may (although not always) be in a loction unfamiliar to them, and may depend on **PowerUpPoint's** data to make choices. 

- ➡️ Benefits
It promotes community involvement by encouraging users to log faulty chargers.

## User Stories


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

### Nice to haves/ Future Development:

 - RU_06 As a returning user I want to be able to save journeys and add charging stations to my favourites
- RU_07 As a returning user I would like to be able apply filters when searching, for example only seeing charge points suitable for my vehicle 
- RU_08 As a returning user I would LOVE to be able to combine journey planning with EV locations, rather than using 2 separate apps (google maps for journey planning,  and charge point maps for charging points) which I then need to manually combine
- RU_09 As a user I would LOVE to be able to estimate the charging time needed for my vehicle at a particular charging point
- SO_04 As website administrator I would like to share user feedback on individual charging point with other users (e.g. faulty stations)

## Wireframes
Landing Page / Find Your Location
Contact Us Page

## Colour Scheme

## Typography

## Design Approach

## Delivered Features

### F01 Landing Page
The landing page brings the user straight to an information map showing charging points by location.  This map is rendered using Google Maps APIs to display the background map and charging point markers,  and OpenChargeMap APIs to assemble the charge point (CP) data.   This satisfies user stories:
* FTU01 first-time user to instantly undertand purpose of website; 
* FTU01 ease of navigation, 
* FTU03 see charging points at a particular geographic location

[sceenprint landing page]()

### F02 PowerUpPoint Site Navigation
A consistent navbar is seen on all site pages.  The Navbar is respnsive and wil re-position on smaller screen sizes.  Fonts and colours are consistent throughout the site pages.
This  satisfies user stories:
* FTU02 ease of navigation,
and also satisfies one of the core requirements for this ESG project that the site be fully usable.
[screenprint navbar]()

Description of header and footer with relevant screenprints

### F03 Responsiveness
The site is fully responsive and displays well on different screen sizes.  See here various site pages on different devices.
[screenprint responsivenss](https://github.com/stef-cruz/power-up-point/blob/main/assets/readme_files/responsiveness-sp1.png)

Can also be tested at this [link](https://ui.dev/amiresponsive?url=https://stef-cruz.github.io/power-up-point/index.html)

### F04 Open-Source dataset
An open-source charging point dataset was identified by the team, this provided multi-vendor charging point data and included APIs to access (and potentially, in the future, add to) the data.  A well as providing a decent programming challenge, this satisfies user stories SO02 multi-vendor dataset, SO03 existing open-source data which is maintained and updated frequently.
[first screenprint](\assets\readme_files\issue27-so02-sp1.jpg)
[second screenprint](\assets\readme_files\issue27-so02-sp2.jpg)
[third screenprint](\assets\readme_files\issue27-so02-sp3.jpg)

### F05 Charging Point details
Once the user clicks on a given charging point on the map, an attribute card, which gives the user information to decide whether this charging point is of interest to them.  This satisfies user stories  FTU03 first-time user evaluating suitability of charing points, and RU03 ability for returning user to see more information about charging points

[screenprint]()
[additional screenprint]()

### F06 Drive to location
Within the charging point details, a link to 'navigate to point; is avilable, this uses Google APIs to open a new tab with a map routing the user from their current location (as best understood by Google) to the charging point.
This satifies user story FTU04 user wishing to get mapped directions from their location to the charging point location.

### F07 What we do
... some text here to describe the sites mission statement

### F08 Who we are
... some text from Simas here to describe why we setup this page, the details included, and some of the features within it.

### F09

### F10



## Technologies used
In the tech section, we provide information about the technology stack, dependencies, and any technical details related to the project.
Figma (for wireframes)
HTL
CSS
Javascript

## Credits
We would like to give credit to the following individuals, organizations, and resources that have contributed to the project or provided inspiration:
* The various users we interviewed to discover 'points of pain' in their EV charging experience.

### Content
https://openchargemap.org/site/ An open-source portal providing details of EV charging points, with associated API
Google Maps: Provision of map-based hosting

- 🌐 [External Resource 1]
- 🌐 [External Resource 2]
