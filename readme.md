# Blog

Website for my blog

# Ops

TODO - Add build status glyph after adding Github CI

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

## Add images

1. Crop to a max-width of 1600px
2. Compress to a bit level of 8
3. Upload both the original `<name>-original.jpeg` and the compressed `<name>.web-optimized.jpeg` to [our blob storage](https://notesbyvmedia.blob.core.windows.net/images)
4. Reference the compressed `<name>.web-optimized.jpeg` file from the web page.
