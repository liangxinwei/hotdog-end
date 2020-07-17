#!/bin/bash

echo -e "\n\033[33m Start executing file hotdog_backend.start.sh \033[0m."
source ~/.bash_profile
cd /data/hotdog_backend
yarn install
echo -e "\n\033[32m Deploy successfully! \033[0m\n"
npm run restart
