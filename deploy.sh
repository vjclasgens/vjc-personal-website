#!/bin/bash

SHA1=$1

docker info
docker pull vjclasgens/website:$SHA1
docker ps
docker stop $(docker ps -a -q)
docker run -p 7000:7000 -d vjclasgens/website:$SHA1
docker ps
