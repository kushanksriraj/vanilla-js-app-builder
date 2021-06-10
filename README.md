# vanillaJS App Builder
A quick start package for your next vanillaJS project    
Sample app: https://vanillajs-app-builder-example.netlify.app

## Key features
  - [x] **webpack** and **Babel** support
  - [x] Lazy loading support
  - [x] Vendor chunking by default
  - [x] JavaScript minification
  - [x] Hashing by default for **.js** and **.css** files
  - [x] Caching supported for Netlify deploys
  - [x] **ES6 fully supported**
  - [x] `import`/`export` (ES Modules support)
  - [x] Inline image support (upto 8kb)
  - [x] ESLint support
  - [x] `.env` file support
  - [x] Config files for dev and prod mode

## Get started: 
Install `degit` if it's not already installed
```cmd
npm i -g degit
```
Run the `degit` command to get the files from repo, give your app name
```cmd
degit kushanksriraj/vanilla-js-app-builder#development my-app-name
```
Go inside your app's directory
```cmd
cd my-app-name
```
Get the required node modules
```cmd
npm install
```
Start the dev server and start coding!
```cmd
npm run start
```
**Optional**: 
Do `git init` in order to initialize a git repo.


## Advanced
If you want to add more loaders or plugins, please add them accordingly in the dev or prod webpack config.
 
