+++
title = 'One'
date = 2023-09-13T18:48:35+00:00
menuTitle = "2023-09-13"
weight = 1
bookCollapseSection = false
bookHidden = false
draft = false
categories = ["taxonomy", "content"]
tags = "tutorial"
+++
- Robert McDonald
  - Spent a bunch of his career working on connecting facilities/research
  - "He wants a world where everything is conected."
  - This is funded under an NSF FAIR grant.

- Project is coming out of
  - FAIROS - NSF FAIR Open Science
  - Collaboration between
    - NCAR (National Center for Atmospheric Research)
    - Florida State University
    - University of Colorado: Boulder
    - Stanford (Claudius Mundoma)

- Goals of project
  - Build a Research Coordination Network (RCN) focused on the assignment of Persistent Identifiers (PIDs) to research facilities/instruments
  - This is a three year project. Exploratory phase right now.

- Important Things
  - There is a research equipment database at stanford using RRIDs. Looks pretty cool.

- Important People
  - 

- Phases
  - Year One (started october 2022)
    - Gathering input and developing recommendations
  - Year Two
    - Dissemination and adoption of recommendations
  - Year Three
    - something. Broader adoption I think.

- PIDs in use
  - UC Boulder
    - Datacite
    - Crossref


### Collaborative Notes

FAIR Facilities & Instruments - 2023 Boulder Workshop Day 1: Collaborative Notes


1:00-5:00 pm: What is the existing landscape in using persistent identifiers for instruments and facilities and what gaps exist in that landscape for producers and users? 
12:30 - 1:00 Participants arrive and check-in
1:00 - 1:15 Welcome from Robert McDonald, Dean of University Libraries, Senior Vice Provost of Online Education, and Professor of Library Administration at CU Boulder
1:15 - 1:45 Workshop introduction
1:45 - 1:50 Review pre-workshop survey results 
1:50 - 2:50 Topical Talks: Use Cases (5 x 10 minutes)
David Butcher - National MagLab
Caterina Strambio-De-Castillia -UMass Chan Medical School
Steve Kuehn - Concord University, EPMA and Tephra Lab
Kevin Knupp - University of Alabama in Huntsville
Harold Shanafield & Chirag Shah - Atmospheric Radiation Measurement Facility Data Center, ORNL
2:50 - 2:55 Summarize breakout group charges
2:55 - 3:15 Break
3:15 - 4:15 Breakout groups sessions
Group 1: Room N410
Group 2: Room N410
Group 3: Room M220
4:20 - 5:00 Breakout group reports and preview tomorrow


Collaborative Notes:

Some well known PIDs (is there an xkcd-927 issue brewing?):

DOI (datacite and crossref)
ROR
PIDs for organizations
Can be referenced in other PID systems (CrossRef, DataCite, ?)
RRID 
(used at Stanford for shared instrument facilities)
Are these appropriate for things other than BioSamples?
ARK
IGSN
Are these valuable for whole domains? Or do the mostly get traction in projects with some committed champions?
ORCID


RAiD
For “projects” which has a fairly broad definition
A “compound identifier” that can capture multiple entities and the relationships between them 
Managed by Australian Research Data Commons 


David Butcher - National MagLab
MagLab asks users to provide dataset DOIs related to their outputs.  (brings questions of practicality and functionality)
David Butcher highlights a distinction between Instrument PID and Instrument Configuration PID. (+1 for this idea - David E)
Highlighted problems of need for manual annotation to get metadata. 

Caterina Strambio-De-Castillia -UMass Chan Medical School (microscope configurations):
Differences in imaging instruments is critical and documentation is essential
Imaging methods are vastly underreported in biomedical research
Calibration and recalibration changes over time and must be tracked for comparability of outputs
QUAREP-LiMi need details on this community (https://quarep.org/?)
Quarep is working with manufacturers to standardize metadata for cameras (very impressive group and a report in Nature Methods)
Focusing on 1) hardware configuration (changes rarely) 2)
(David E: this work may be relevant to add to the motivation: https://www.mdpi.com/2072-6694/15/12/3109)

PID to PHD (P..(?) Hardware Description) for versioning calibration

Q: Have the manufacturers grappled with these problems? Are they tracking part numbers? 
A: If they have them, we don’t have access to them. They might give PDFs with some info.

Q: Part numbers that go into microscopes. Parts come from different suppliers/manufacturers. So different part numbers.
A: Infinite combinations.


Steve Kuehn - Concord University, EPMA and Tephra Lab

Depends a lot on manual user input (in this case in spreadsheet forms)
One sample can be an agglomeration of many grains that might be their own samples in some sense (granularity possibilities are virtually infinite and generally not planned in advance; how does one handle that in a general but still useful way?)
Desire for complete chain of data links from data all the way back to sample info and all that has happened for that sample. 
Desire for interoperable data ecosystem to connect distributed information about samples and related entities Instrument-Facility PIDs would be part of this ecosystem
Active research databases - provide more structure than "files". this makes collected data more useful, but requires standards to be developed.
Not using IGSNs all the time yet.  Working on getting more people to use them.


Kevin Knupp - University of Alabama in Huntsville
MAPNet and FARE (NSF funded)
Centralized Facility and Instrumentation Request Process is entry point for users
Currently not using DOIs or PIDs.
Goal is to make data available for science and/or education projects 



Harold Shanafield & Chirag Shah - Atmospheric Radiation Measurement Facility Data Center, ORNL
ARM Ground based atmospheric observing facility
~5 PB data available to researchers for climate studies
Data flow from sites to ORNL data center. Ingest, reprocessing, metadata creation, quality evaluation, track downloads and use, 
Related code repositories: https://github.com/ARM-DOE
Asset IDs tag all their equipment.  Tie those assets together to create instruments. 
Datastream ID is a collection of files coming off an instrument over time
Lots of interest in the details of the Datastream but some confusion. 
Some doc for datastreams: https://www.arm.gov/working-with-arm/acknowledging-arm/doi-guidance-for-datastreams





QUESTIONS:
David E: NCAR experience:  many PIDs. Example: airplanes.  Sometimes they are cited a lot but some are never cited. (Is this a problem or something we should accept and even expect?)

David E: Which of the existing PID systems can be used as a service to mint PIDs for an interested project?  Are there costs? Are there problems with using international services?

David E: MagLab has a great list of desired or ideal infrastructure and workflows. How can that be triaged or implemented in small steps to get past the “stuck” or overwhelmed stage?  It seems to me that many of us hear from our funders that they want all these things and we sometimes get stuck trying to attend to all of that instead of making small, positive steps and celebrating those.

David E: Do we have freely available PID as a Service options?  Shouldn’t someone support that if we don’t? (DOE now has a DOI service for research they fund)

David E: Is the microscope data in medical imaging digital or mostly digital these days? Do the files contain metadata in the file header? (we use header info in materials science data from many instruments including electron microscopes; there is a good project working on a unifying API for automated metadata extractors here: https://github.com/marda-alliance/metadata_extractors)

David E: Can’t the EPMA method info be taken from the file headers?  So much is usually there.  Just need to connect the files to the rest of the data record.

David E: For complex sample issues like Steve Kuehn reports it might be sensible to use more general text entry fields to augment very simple structure schema data and then move to letting LLM tools parse the text fields to query and identify groups of samples of interest for a given question.

Don B: Metadata standards can make data more useful, and are needed to to build cyberinfrastructure to make it easier to collect and propagate data & metadata and to ease manual data entry. But the standards are needed to do this, and this seems to be why a lot of cyberinfrastructure is developed to be "file based". This seems to be a circular issue. Are there ways to use newer metadata standards with existing cyberinfrastructure? A way to sidecar more structure on structureless systems.


Thoughts
Jason G: Gotta run, but I was at the ESS DMSC Summer School last week, and was talking to them about PIDs. Here’s a link to the poster I was talking to, as well as a link to what the ESS will be doing for scientific meta data. It’s likely that LANSCE will be pursuing the Universal Proposal System, as well as SciCat. PIDs still up for debate.
https://jrgochan.github.io/travel/2023/ess_dmsc/posters/Los_Alamos_Neutron_Science_Center.pdf
https://ess-dmsc-dram.github.io/dmsc-school/6-scicat/3-fair_data.html

David E: “Metadata input forms are where science goes to die” (maybe attributable to Kyle Chard at UChicago?)



Breakout group reports and preview tomorrow
UN sustainability goals. Three levels, societal,economical, and environmental
How do these work with facilities?
Connecting this to scientists’ daily lives
DOI
ORCID
Concentrate on one/two simple things that will make some element of the research process easier
Reproducibility is a real problem. How can PIDs help with reproducibility?
Data provenance 
Letting people know these things exist and can take advantage of using them
Make instruments more usable, broadening potential user pool
Arks and Handles(?) Each has benefits/drawbacks

MoreBrains Reports on PID cost benefits: https://www.morebrains.coop/repository/
Specifically: https://zenodo.org/record/7356219 and https://zenodo.org/record/7100578

