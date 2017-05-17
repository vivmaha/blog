# Blog

[In Progress] Website for my blog

# Ops

[![Build Status](https://travis-ci.org/vivmaha/blog.svg?branch=master)](https://travis-ci.org/vivmaha/blog)

# Dev

## Build & deploy locally

    git clone ...
    npm install
    npm start

    // Deployed to http://localhost:8080/

## Run unit tests

    // Run tests once
    npm test

    // Run tests and watch for changes. Also useful for debugging in the browser.
    npm run test-watch

## Deploy to production

    git push master

    // This will trigger a travis build which (upon success) will deploy to Azure. 
    // Deployed to http://NotesByV.com

## Update npm packages to latest versions

    npm install -g npm-check-updates
    ncu -u

## Add an npm package without breaking TypeScript 

    npm install --save-dev {package}
    npm install --save-dev @types/{package}

## Add images

1. Crop to a max-width of 1600px
2. Compress to a bit level of 8
3. Upload both the original `<name>-original.jpeg` and the compressed `<name>.web-optimized.jpeg` to [our blob storage](https://notesbyvmedia.blob.core.windows.net/images)
4. Reference the compressed `<name>.web-optimized.jpeg` file from the web page.
