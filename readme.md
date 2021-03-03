# Blog

Website for my blog

# Ops

![](https://github.com/vivmaha/blog/workflows/CI/badge.svg)

# Dev

## Build & deploy locally

    git clone ...
    npm install
    npm start

    // Deployed to http://localhost:8080/

## Deploy to production

    git push master

    // TODO - Add notes after hooking up to Github CI
    // Deployed to http://NotesByV.com

## Update npm packages to latest versions

    npm install -g npm-check-updates
    ncu -u

## Add an npm package without breaking TypeScript

    npm install --save-dev {package}
    npm install --save-dev @types/{package}
