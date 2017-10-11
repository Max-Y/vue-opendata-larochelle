#!/bin/bash
i=1
mkdir geojson
for item in $(ls kml)
do
 echo "Item $((i++)) : $item"
 k2g -st leaflet kml/$item geojson
done