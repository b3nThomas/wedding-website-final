#!/bin/bash

# cd to project root
cd ${0%/*}/..

# Any subsequent failed commands will exit immediately
set -e

# Prepare folders
rm -rf build
rm -rf deploy
mkdir -p build
mkdir -p deploy

# Prepare app
npm install
npm run build

# Get files required to run app
rsync -avm --delete --exclude-from=scripts/.rsync-exclude . build
cd build

# Get current time
BUILDSTAMP=$(date +%Y%m%d-%H%M%S)

# Create tar files for S3: date-stamped and latest.
tar -czf ../deploy/wedding-website-b3nThomas-build-${BUILDSTAMP}.tar.gz .
cp ../deploy/wedding-website-b3nThomas-build-${BUILDSTAMP}.tar.gz ../deploy/wedding-website-b3nThomas-latest.tar.gz

# Remove build folder
cd ..
rm -rf build
