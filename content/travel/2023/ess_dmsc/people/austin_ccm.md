+++
title = 'Austin_ccm'
date = 2023-09-07T13:15:17+02:00
menuTitle = "CCM Post Doc Statements"
weight = 4
bookCollapseSection = false
bookHidden = false
draft = false
categories = ["taxonomy", "content"]
tags = "tutorial"
+++

These are some notes I took earlier in the year when talking to one of our Post-Docs about data pipelines, what their pain points were, and how we might go about fixing them.

### CopyPasta Notes

* Ice Cube
    * Ice Cube’s real time analysis is done for mostly astrophysics
        * They’re concerned with “multi-messenger” analysis
        * Has to be fast, real-time, very recent data
        * Has to communicate info to other experiments
    * Other experiments also give them alerts
        * If they get a message, they run a corresponding analysis.
        * These systems send data to ice cube (KAFKA)!
            * https://gcn.gsfc.nasa.gov/
            * https://snews.bnl.gov/
            * https://www.amon.psu.edu/
        * Ice cube does analysis, send out results. Kafka
* LIGO/VIRGO
    * More alerts, more GCN
        * https://emfollow.docs.ligo.org/userguide/glossary.html#term-CBC
* CCM
    * Richard cares about what shutters are open when because that matters for neutrinos!
    * They may care about all sorts of environmental factors
    * They may want to be able to fold in extra meta data

Things scientists usually struggle with keeping track of
* What data files did we run over
* Where are those data files stored
* What time periods / run periods did that correspond to
* What time periods / run periods did we throw out
* What selection criteria did we use
* How did we process the data
* What code did we use to process
* What code did we use to reconstruct
* Where did we put the intermediate files?
* Where is the code for the statistical analysis
* What version of that code did we use?
* In what ways has this data been transformed, and by who, and by what?
* Oh no, the power went off during these periods! What do we do to keep track of that?!?!?!
* How do I associate an event from “Processing Level 4”, with “Processing Level 2”? Efficiently?!



Ice Cube and CCM FRAME
* A frame represents either
    * A single physics event
    * A single data acquisition event
    * A single calibration event
    * A single geometry event
* When you are doing data processing
    * You receive a Frame View
    * You figure out what parent frames are associated with that view
        * This relationship is only specified through frame type and frame order
        * THIS IS NOT IDEAL. BUT BRINGS UP A POINT. Translation tools from linear processing to omniprocessing would be important.
    * So when they process, they need to ask (what’s the stuff in this giant frame that I need in order to create the Frame View I need)

#### Potential Tools

* Data Again
    * https://airbyte.com/why-airbyte
    * https://docs.dagster.io/integrations/dagstermill
    * https://duckdb.org/docs/
* UUID4 is just swell
* Documentation
    * https://readme.com/documentation
* Graphing
    * Superset
        * https://superset.apache.org/docs/intro
    * ECharts
        * https://echarts.apache.org/v4/examples/en/index.html#chart-type-heatmap
* Data
    * https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html
    * https://druid.apache.org/use-cases
    * https://spark.apache.org/
* Analysis
    * JupyterHub
        * https://jupyter.org/hub
* Logging/Events/Tracking?
    * https://github.com/grafana/grafana
* Messaging/Events
    * https://www.eventstore.com/
    * https://kafkawize.com/why-kafkawize/
    * https://aiven.io/solutions/aiven-for-event-driven-architecture
    * https://kafka.apache.org/quickstart
* MemCache
    * https://stackshare.io/redis

#### more random notes

IceCube uses CVMFS
* https://cernvm.cern.ch/fs/

Scientific Computing Grid concept
* https://home.cern/science/computing/grid
* IceCube has its own HPC, but they encourage people to submit to the grid.
* https://physicstoday.scitation.org/doi/10.1063/1.1461327
* 

REMEMBER THESE THINGS!!!
* https://www.digital-science.com/resource/grid/
* 
