#!/bin/sh
# This is a comment!
echo 'prepare copying style for development'
# echo $PWD
cp public/css/mobile-style.css src/App/mobile-style.css
cp public/css/web-style.css src/App/web-style.css
echo 'done!'
