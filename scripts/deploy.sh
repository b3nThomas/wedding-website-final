#!/bin/bash

# cd to project root
cd ${0%/*}/..

# Any subsequent failed commands will exit immediately
set -e

# Prepare folders
echo Preparing...
rm -rf deploy
rm -rf archive
mkdir -p deploy
mkdir -p archive
echo
echo -e "\xE2\x9C\x94"
echo

# Prepare app for build
#echo Testing...
#rm -rf node_modules
#npm i
#npm run test
#echo
#echo -e "\xE2\x9C\x94"
#echo

# Remove Dev dependencies
echo Removing DEV dependencies...
rm -rf node_modules
npm i --production
echo
echo -e "\xE2\x9C\x94"
echo

# Copy Prod app files to /build
echo Building app...
rsync -avm -q --delete --exclude-from=scripts/.rsync-exclude . deploy
echo
echo -e "\xE2\x9C\x94"
echo


# Deploy app to Dev or Prod
if [ "${1}" = "prod" ] ;
then
    # Create date stamped tar file for archive
    # echo Creating archive file...
    # TIMESTAMP=$(date +%Y%m%d-%H%M%S)
    # tar -czf ./archive/wedding-website-b3nThomas-build-${TIMESTAMP}.tar.gz ./deploy/public
    # echo
    # echo -e "\xE2\x9C\x94"
    # echo

    # Archive this version
    # echo Sending copy to archives...
    # aws s3 sync ./archive s3://btcs-wedding-archive-b3nthomas/ && echo
    # echo -e "\xE2\x9C\x94"
    # echo

    echo Deploying latest version to Production...
    aws s3 sync ./deploy s3://btcs-wedding-latest-b3nthomas/ --delete && echo
    echo -e "\xE2\x9C\x94"
    echo
fi

if [ "${1}" = "dev" ] ;
then
    echo Deploying latest version to Dev...
    aws s3 sync ./deploy s3://btcs-wedding-dev-b3nthomas/ --delete && echo
    echo -e "\xE2\x9C\x94"
    echo
fi

# Clean up
echo Cleaning up...
rm -rf deploy
rm -rf archive
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