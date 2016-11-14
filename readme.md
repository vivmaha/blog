# HCDE 512

[In Progress] Website for my hcde 512 assignments

# Ops

[![Build Status](https://travis-ci.org/vivmaha/hcde512.svg?branch=master)](https://travis-ci.org/vivmaha/hcde512)

# Dev

## Build & deploy locally

    git clone ...
    npm install
    npm start

    // Deployed to http://localhost:8080/

## Update npm packages to latest versions

    npm install -g npm-check-updates
    ncu -u

## Add an npm package without breaking TypeScript 

    npm install --save-dev {package}
    npm install --save-dev @types/{package}

