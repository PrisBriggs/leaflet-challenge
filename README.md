# leaflet-challenge

Georgia Tech Data Science and Analytics BootCamp - May 2023

Homework Module 15 - Mapping - Leaflet Challenge

## Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, a way to visualize USGS data has been developed, which will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Earthquake Visualization
* The USGS provides earthquake data in a number of different formats, updated every 5 minutes. One dataset from the USGS GeoJSON page ("All Earthquakes from the Past 7 Days") was chosen as the resource for the visualizations.
* Once that dataset is clicked on, the webpage provides a JSON representation of that data. The URL of this JSON was used to pull in the data for the visualization. 
* The data was imported and visualized according to the following steps:
    * Using Leaflet, it was created a map that plots all the earthquakes from the dataset based on their longitude and latitude.
    * The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color.
    * Popups that provide additional information about the earthquake when its associated marker is clicked were included.
    * A legend that provides context for the map data was created.

The script for this challenge is found in the GitHub's repository on:
https://github.com/PrisBriggs/leaflet-challenge.git

The references used in this Challenge were the activities and lessons given in class, the tutoring classes, and the websites below. 

All webpages were visited in May/2023.

References:
* https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
* https://leafletjs.com/
