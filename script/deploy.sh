#!/bin/bash

branch=$(git rev-parse --abbrev-ref HEAD)
remoteIP="root@111.229.70.117"
remotePath="/data/hotdog_backend"

printSuccessfulMessage() {
  echo -e "\033[32m $1 successfully. \033[0m"
}

echo -e "Deploying branch \033[33m$branch\033[0m."

## step 0: check for uncommitted changes
#git status
#git diff-index --quiet HEAD -- || { echo '!! Stash or commit you changes first'; exit 1 }

## step 1: push current branch to remote
#echo '\n-- Pushing branch to remote ...\n'
#git push || exit 1

# step 2: upload assets
npm run build
cp -r src/public dist
printSuccessfulMessage "copy dir src/public to dist"
scp "/e/works/my/hotdog-backend/package.json" "$remoteIP:$remotePath"
printSuccessfulMessage "upload file package.json"
scp -r "/e/works/my/hotdog-backend/dist/" "$remoteIP:$remotePath"
printSuccessfulMessage "upload dir dist"
scp "/e/works/my/hotdog-backend/script/production.js" "$remoteIP:$remotePath/dist/config"
printSuccessfulMessage "upload file production.js"

# step 3: update node_modules
echo 'Installing node_modules ...'
yarn install || exit 1

# step 4: start serve
#ssh $remoteIP "nohup $remotePath/start.sh"
