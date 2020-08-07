#!/usr/bin/env bash

SHA=$(git rev-parse --short HEAD)

# Build
docker build --tag simple-todos .

# Tag
docker image tag simple-todos:latest darksinge/simple-todos:latest
docker image tag simple-todos:latest darksinge/simple-todos:$SHA

# Push
docker image push darksinge/simple-todos:latest
docker image push darksinge/simple-todos:$SHA
