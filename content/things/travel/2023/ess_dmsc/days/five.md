+++
title = 'Five'
date = 2023-09-08T22:09:28+02:00
menuTitle = "2023-09-08"
weight = 5
bookCollapseSection = false
bookHidden = false
draft = false
categories = ["taxonomy", "content"]
tags = "tutorial"
+++
- Today was SciCat. Which was great, but I, once again went off to talk to somebody else :(
  - SciCat fiddling to come later.

- DST - Data Systems and Technologies
  - Jesper Rude Selknaes (mailto:Jesper.RudeSelknaes@esss.se)
  - 2018 became group leader
  - Bought a machine with 2 A100 machines. Waiting for scientists to justify their use.
  - Provide the infrastructure for scientific computing (compute and network).
    - HPC
      - Slurm cluster (4000 cores)
      - ZFS (0.5PB slow storage)
      - Two 850TB systems, scalable gpfs (spectrum scaler)
    - OpenStack
    - 1Gb/10Gb/25Gb/100Gb/200Gb HDR Infiniband.
    - 40Gb is bad because the lane speed doesn't match.
    - Puppet / Foreman is used for deploy/CM
    - When you write an HDF5 file you write some blocks, then meta data, then blocks, then meta data, etc.
      - Might have to work on a driver for hdf5 stuff as the way IO is handled is sub optimal?
    - History
      - When they started the ESS stood up their own AD
      - When DMSC started they stood up an LDAP
      - They are working on merging. Hopefully it'll go smoothly.
    - ESS has 650-700 workers
    - The plan now, how risk is mitigated, and the plan in general is much more credible.
    - "we would like to put as much of the infrastructure into the same place as possible"

  - DRAM - Data Reduction and Modeling
    - Contact (Acting Group Leader)
      - https://europeanspallationsource.se/profile/torben-roland-nielsen
    - SciPP
    - SasView
    - BornAgain
    - EasyScience
    - nCrystal
      - openMC
    - McStas McStasScript

- ECDC - Experimental Control and Data Curation
  - https://europeanspallationsource.se/profile/tobias-richter
  - Software
    - Kafka
    - EFU (Event formation unit)
    - File Writers
    - EPICS
  - SWAP team is here

- ICS - Instrument Control Systems(? didn't get to talk about this, so could be wrong.)

- Cool Tools
  - HDF5 Viewer in VSCode
    - https://marketplace.visualstudio.com/items?itemName=h5web.vscode-h5web

- Thoughts
  - It would likely make sense to put Alex Scheinker in touch with Jesper Selknaes about maybe testing the ML approach with the ESS beam? coming up?.... 
    - https://www.lanl.gov/search-capabilities/profiles/alexander-scheinker.shtml
    - Check into cross-lab/cross-country collaboration? 

- Max 4
  - SciDog
  - SciFish
  - (There are many Sci<Animal>) This should be enhanced.