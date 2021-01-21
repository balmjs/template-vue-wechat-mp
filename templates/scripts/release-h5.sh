#!/bin/bash

npm run prod
cd dist/web
git init
git add -A
git commit -m 'update mp.balmjs.com'
git push -f git@github.com:balmjs/mp.balmjs.com.git master:gh-pages
