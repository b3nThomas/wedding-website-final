#!/bin/bash

# cd to project root
cd ${0%/*}/..

# Any subsequent failed commands will exit immediately
set -e

# Prepare folders
echo Preparing...
rm -rf node_modules
rm -rf build
rm -rf deploy
mkdir -p build
mkdir -p deploy
echo
echo -e "\xE2\x9C\x94"
echo

# Prepare app for build
echo Testing...
npm i
npm run test
echo
echo -e "\xE2\x9C\x94"
echo

# Remove Dev dependencies
echo Removing DEV dependencies...
rm -rf node_modules
npm i --production
echo
echo -e "\xE2\x9C\x94"
echo

# Copy Prod app files to /build
echo Building app...
rsync -avm -q --delete --exclude-from=scripts/.rsync-exclude . build
echo
echo -e "\xE2\x9C\x94"
echo

# Create date stamped tar file for archive
echo Creating archive file...
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
tar -czf ./deploy/wedding-website-b3nThomas-build-${TIMESTAMP}.tar.gz .
echo
echo -e "\xE2\x9C\x94"
echo

# Save tar to archive bucket
echo Sending copy to archives...
aws s3 sync ./deploy s3://btcs-wedding-archive-b3nthomas/

echo
echo -e "\xE2\x9C\x94"
echo

# Make app Live!
echo Deploying latest version...
aws s3 sync ./build s3://btcs-wedding-latest-b3nthomas/ && echo "continue..."

echo
echo -e "\xE2\x9C\x94"
echo

# Clean up
echo Cleaning up...
rm -rf build
rm -rf deploy
echo
echo -e "\xE2\x9C\x94"
echo

echo Restoring dependencies...
npm i
echo
echo -e "\xE2\x9C\x94"
echo

echo
echo -e All done mate!   "\xF0\x9F\x8D\xBA"
echo
echo