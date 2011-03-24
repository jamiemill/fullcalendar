#!/bin/bash

VER=`cat version.txt`
DATE=`date`

files=`cat "src/_loader.js" | sed -n "s/\s*js([\"']\(.*\)[\"']).*/\1/p"`
files="intro.js $files outro.js"
cd src
cat $files | sed s/@VERSION/$VER/ | sed s/@DATE/"$DATE"/ > ../build/fullcalendar.js
cd ..

files=`cat "src/_loader.js" | sed -n "s/\s*css([\"']\(.*\)[\"']).*/\1/p"`
cd src
cat $files | sed s/@VERSION/$VER/ | sed s/@DATE/"$DATE"/ > ../build/fullcalendar.css
cat ../src/common/print.css | sed s/@VERSION/$VER/ | sed s/@DATE/"$DATE"/ > ../build/fullcalendar.print.css
cd ..
