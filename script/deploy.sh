#!/bin/bash

# --------------------------------------------------------------------
# note:
# this file should be execute by runing `npm run deolpy` in the project root dir,
# or the `scp` command could not work as expected
# --------------------------------------------------------------------

branch=$(git rev-parse --abbrev-ref HEAD)
remoteIP="root@111.229.70.117"
remotePath="/data/hotdog_backend"

printSuccessfulMessage() {
  echo -e "\033[32m $1 successfully. \033[0m"
}

echo -e "Deploying branch \033[33m$branch\033[0m."

# step 0: check for uncommitted changes
git status
if [[ !(-z $(git status -s)) ]];
then
  echo -e "\033[31m !! Stash or commit your changes first. \033[0m"
  exit 1
fi

# step 1: push current branch to remote
echo 'Pushing branch to remote ...'
git push || exit 1

# step 2: upload assets
npm run build
cp -r src/public dist
printSuccessfulMessage "copy dir src/public to dist"
scp ./package.json "$remoteIP:$remotePath" || exit 1
printSuccessfulMessage "upload file package.json"
scp -r ./dist/ "$remoteIP:$remotePath" || exit 1
printSuccessfulMessage "upload dir dist"
##[[ ! "./script/production.js" ]] || { echo "123"; exit 1; }
scp ./script/production.js "$remoteIP:$remotePath/dist/config" || exit 1
printSuccessfulMessage "upload file production.js"

# step 3: update node_modules
echo 'Installing node_modules ...'
yarn install || exit 1

# step 4: start serve
ssh $remoteIP "/data/scripts/start.sh"

printSuccessfulMessage "Deploy branch $branch"
