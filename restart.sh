#!/bin/bash

docker stop blog-test 2>/dev/null || true
docker rm blog-test 2>/dev/null || true

# Rebuild the image
docker build -t blog-test .

# Run the new container
docker run -d -p 8080:80 --name blog-test blog-test
