+++
title = 'Three'
date = 2023-09-05T22:09:28+02:00
menuTitle = "2023-09-06"
weight = 3
bookCollapseSection = false
bookHidden = false
draft = false
categories = ["taxonomy", "content"]
tags = "tutorial"
+++

# Hi day2

### ToDo
- Ask about the desire to have an ESS DMSC summer school in person at LANSCE. Jean said he thinks people would be cool with it.

### SciPP and PloPP
- Pronounced 'skip'

### uhhhh
- You can't always deduce which dimension is which.

### Cool Things to write about a bit more
- https://github.com/LLNL/units
- They decided to not auto convert units as it caused unexpected problems.
- The initial management of the data set is spendy, but subsequent operations/sorting/etc can be quite fast. (Explore this for imaging)
- https://scipp.github.io/plopp/examples/gallery/rectangle-selection.html
- https://mpltoolbox.readthedocs.io/en/stable/
  - "I don't want to write GUIs, but people want to use them. So we made it really easy to make your own."
  - Definitely tell people about the custom interfaces thing.
- https://scipp.github.io/plopp/examples/custom-interfaces.html
- You don't have to import 'plopp'. scipp will call plopp if needed
- They have kept plopp logic seperate, so you can use matplotlib/plopy for plotting.

#### Thoughts
- Obvs, SciPP can store persistent identifiers in a 'label' for an array. super duper super cool.
- Are they doing any work with parsing LaTeX/PDFs and converting formulas into scipp functions? crazy hard and bug prone, but... ?
- Is there support for loading in ROOT and Geant4 histograms / data-sets?
- Is there talk of allowing TIFF data imports?
- Do you interact with the Fiji/ImageJ community at all?


### SciPPNeutron
- Holy crap
  - Awesome

#### Questions
- Is there talk of combining SciPPNeutron and McStas/McStasScript?
- Once again, persistent identifiers for reduction/analysis methods, instruments, data, etc.


### EPICS
- NICOS will stream the data to Kafka and into the Nexus files, and SciPP/JupyterHub/SciPPNeutron/etc will read from the Nexus-File/Kafka(? maybe, not too sure here)