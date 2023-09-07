+++
title = 'Two'
date = 2023-09-05T22:09:28+02:00
menuTitle = "2023-09-05"
weight = 2
bookCollapseSection = false
bookHidden = false
draft = false
categories = ["taxonomy", "content"]
tags = "tutorial"
+++

## ToDo
- Email Jean-Luc, Andrew, Max
  - Thoughts about ARKs, NOIDs, NCAR Facilities and Instruments, Data Pipelines and stuff and things?

### Info Header
A Landing Page of Things and stuff.

### Day 2 - ESS McStas
Started the day with an example of what monte carlo can be used for to approximate Pi, and then do ray tracing for a detector.

- Interested Parties
  - AOT, for sure, should be looking into McStas

#### Questions / Important / Thoughts
- Thoughts
  - Why aren't we collaborating more closely?
- Questions
  - What does the collaboration look like with ORNL?
  - For this "Universal thing"
    - What if instruments/components in McStas hand unique Persistent IDs?
      - That would allow the gemoetry, so on and so forth, to propegate out.
  - JupyterHub
    - What kind of GPUs/hardware are you using?
    - What container orchestration is the Jupyter hub running in?
    - What software is handling the configuration management and infrastructure-as-code

#### Useful Bits
- JupyterLab
  - `Shift+Tab` gives you docs about the thing you're focused on.

#### McStas Conversation w/ Peter Willendrup
- McStas
  - Monte Carlo Simulation of triple axis spectrometers
  - Should be McStof (Time of Flight) ;) is a joke. isn't going to happen.
- Clinton Pile at Oak Ridge (one of the first production research reactors)
  - Someone had the idea that we could cut some holes in the side and there we go. World's first Neutron source.
  - Nobel Prize for Neutron Scattering to these guys: Clifford Shull, Bertrand Brockhouse
    - For Establishing Neutron
  - First place that neutron diffraction happened.
- Work starded on McStas in 1997. Release in 1998. Peter started in 2002.
- Bragg is a british physicist that established x-ray diffraction. (1894ish)
- Kristian Nielsen is the original CS guy that taught the physicist
- "Peter was explaining how McCode compiles a binary and runs it on HPC"
- OpenACC
  - NVidia compiler like "gcc but openmp"
  - nvhpc is the only compiler that fully supports this.

#### Talk after poster session
- Talked with Andrew McClusky, Jean luk

#### How they want to handle data analysis
- Would be good to do it all on ESS-Compute
- ORSO - Open Reflectometry Standards Organization - (Andrew is one of the co-chairs. They are trying to standardize across reflectometry)
  - Agreed upon file format. (Just an ASCII file with a meta-data rich header)
  - There is an organization called "Reflectivity".  (They had a merge request from one of the ORNL guys)
  - "orsopy"
    - Python package that reads and writes ORSO specifications.
  - They are moving towards HDF and then NeXuS - NeXus Interarnational Advisory Committee.
- GenX - Reflectometry analysis software
- There are about 50 different software packages for reflectometry analysis.
- They are discussing writing the model for analysis as a seperate file.

- Artefacts are whatever comes out of your analysis
- "We've got raw data, and when you reduce the data, the reduced data becomes a child of the data-set (Derived DataSet)"
- From the Derived DataSet you can have multiple artefacts (scripts, analysis methods, software, savable object from a gui taht describes the exact state of the system)

#### Easy{Reflectometry,Diffraction}
- Solo project from Andrew M
- Currently only used by two people.
- With EasyReflectometry you can pick the "Engine"
  - MotoFit (IgorPro)
  - RefNX (Python Library)
  - Refl1d (Mostly from NIST. NIST was quite keen on using EasyR to create models to put into refl1d)
  - GenX

#### Reduced Data to Analyzed Data
- These things would have to be agreed upon and/or standardized as meta-data categories
  - Initial state, potentially random seed
    - "There are some optimizations that are stochastic in nature and you need to know the initial seed"
  - Model applied to the data
- Neuten Raphsen
- Reflectometry, Small Angle Neutron Scatterin (SANS), Quasi-Elastic Neutron Scattering (QENS)
- Magnetic Inelastic Scattering (INS) might not adhere to this rough thing. Much harder to fit models in that space.

#### EPICS
- The plan is that everything will go through NICOS (authoritative data source)
  - Then it can be added into the NeXus files.

#### CANSAS - Collaborative Action for Nomadic Small Angle Scatters
- 25 Years ago they decided to come up with a nexus standard
- 5 years ago it was adopted.
- Andrew "I think SASView is the gold standard for Neutron Analysis Software. In terms of how the community is structured. It's a good thing"

#### Techniques
There used to be a list on lightsources.org. Not sure now.
##### Links
- https://www.reflectometry.org/information/reflectometers/
- https://www.reflectometry.org/information/xray_reflectometers/
- https://www.reflectometry.org/information/software/ 

#### Thought
- Andrew started to notice in 2016 that RSE was a thing in the UK
- Facilities that have a RSE Group
  - ORNL
    - Computational Instrument Scientist (defines requirements)
  - Germany RSE Society is quite big
    - Jülich has RSE
      - They partly run FRM/MLZ
  - ISIS - UK
  - Diamond has a lot of people in software (they self identify as RSEs.)
    - Diamand is in part funded by the Wellcome Trust, which is interested in biological research
    - They wanted Diamond built to do protein crystallography
    - Wellcome Trust dictated that 1/3 of staff must be Life Sciences.
  - ESS has people that self identify as RSEs. But not formal.