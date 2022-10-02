#!/bin/sh

#   /$$   /$$ /$$$$$$$$
#  | $$  /$$/| $$_____/
#  | $$ /$$/ | $$
#  | $$$$$/  | $$$$$
#  | $$  $$  | $$__/
#  | $$\  $$ | $$
#  | $$ \  $$| $$      Author: Kauê Fraga Rodrigues
#  |__/  \__/|__/      github.com/kauefraga/algorithms

# create running env
mkdir -p "cpp/tmp"

main="cpp/tmp/main"

g++ "cpp/main.cpp" -o $main -std=c++2a

$main

# cleanup
rm -rf cpp/tmp
