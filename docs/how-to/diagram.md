---
name: 'How To: Diagram'
description: A brief summary of the document's content.
authors:
  - Jason Gochanour
language: en-US
categories:
  - Diagram
  - How To
tags:
  - guide
  - examples
---

### Documentation
[Link](https://squidfunk.github.io/mkdocs-material/reference/diagrams/)

``` mermaid
flowchart LR
    id
```
 
``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```
 
```mermaid
graph LR
    hello --> world
    world --> again
    again --> hello
```

...
