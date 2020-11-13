---
layout: post
title:  "The Scene Graph Friday Update"
date:   2020-11-13 12:00:00 -0400
author: James Hobin
categories: update scene graph spatial
---

Hello! We're proud to announce a massive change to the internals of the Spatial
Toolbox with widespread performance and ease-of-use improvements. We've also
been in the news a bit and have a couple miscellaneous cool things to share
with you!

## New

### Scene Graph

Our team member Ben Reynolds recently finished his massive project of reworking
how the Spatial Toolbox describes the positions of objects in space.
Previously, it was a bit arcane with opaque matrices galore. Now that we have a
proper, consistent scene graph, each object has a clear hierarchy of parent
objects with easy to read coordinates (and some matrices). Our new approach
lets us refer to "that lamp on your writing desk in your home" instead of "that
lamp at position 11.2, 0.4, 31.2 with scale 0.1."

We're hoping this work makes it even easier to create compelling coordinated 3d
experiences with the Spatial Toolbox.

### Official Blog Post

Nancy White has released an excellent article outlining our work in bringing
augmented reality to the architectural scale. You can check out this post [on
the official PTC blog](https://www.ptc.com/en/blogs/corporate/augmented-reality-architectural-scale).

### WebGL Proxy Performance

Our experimental work on [a WebGL
Proxy](https://github.com/hobinjk-ptc/webgl-proxy-experiments) continues to
bear fruit. An optimization to the amount of messages sent by the proxy has
nearly doubled the amount of independent 3d content you can have on screen at
once. This enables our 3d robot navigation and other demos to have silky-smooth
performance regardless of how complex your plan may be.

## Upcoming

### Azure Kinect Reality Zone Open Sourcing

In the next few weeks we plan to open source the Reality Zone! This
Unity-based project meshes together the views from several depth cameras to
form a real-time digital twin. You can then operate this twin using a remote
version of the Spatial Toolbox.

### Scene Graph App Store Release

While the scene graph work has landed on our main GitHub branch, we're still
testing it out before pushing it to the app store. If you want to help out with
this process, please follow [the instructions on
GitHub](https://github.com/ptcrealitylab/vuforia-spatial-toolbox-ios/) to build
a development version of the app from source.


Stay tuned for more updates on the development of the Spatial Toolbox! Please
drop by our [Forum](https://forum.spatialtoolbox.vuforia.com/) if you have any
questions about our current platform or suggestions for where we should go
next.

