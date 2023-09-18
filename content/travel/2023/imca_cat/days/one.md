+++
title = 'One'
date = 2023-09-18T18:06:56+00:00
menuTitle = "2023-09-18"
weight = 1
bookCollapseSection = false
bookHidden = false
draft = false
categories = ["taxonomy", "content"]
tags = "tutorial"
+++

### James Hall

Laboratory Information Management System Team lead at Diamond Light Source
Scientific Information Systems (Ask James Hall about who this is, and if they have info about the grand tour of facilities that they did.)

### ISPyB: Information Management System for Synchrotron Macromolecular Crystallography

- Legend has it that the name came about at a pub by ESRF.
- Originally a RDMS with about 20 tables.
  - Now has about 200 tables
  - 190 stored procedures
  - 140Gb of data running on 3 node cluster
  - 1.8 Million samples
  - 4.2 Million data collections

- They are working on keeping people from direct access to the database.
- Most users conenct to ISPyB through SynchWeb.
  - Web FrontEnd to database
  - Developed in 2014.
    - PHP 5
    - BackboneJS
    - They are working to replace.

- ISPyB and SynchWeb
  - Allows for barcodes and QR codes.
  - They have QR codes for transactions (like topping up a dewar)
  - They are moving applications out of SynchWeb
    - FastAPI for the backend
    - ReactJS and Typescript for the frontend.
  - EBIC (Electron Bioimaging Center)
    - Implemented new applications of ISPyB/SynchWeb for this beamline.

- MX-Bridge
  - At APS
  - Building on the MX automation process.
  - Erica:
    - This is already something we're doing.

- They are aware of SciCat, but ISPyB was too integrated into operations that they will be moving to ICat

- ICAT was developed by STSC

- james.p.hall@diamond.ac.uk
  - Ask about code in their gitlab th


- LS-CAT needs help as well

- ESRF is moving to ICAT and putting ISPyB in read-only mode
  - https://www.esrf.fr/ICAT

- They are hiring for Software Engineering....