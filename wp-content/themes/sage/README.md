## Requirements

| Prerequisite    | How to check | How to install
| --------------- | ------------ | ------------- |
| NVM > 20  | `nvm list`    | [NVM](https://github.com/coreybutler/nvm-windows), `nvm install 20`, this will handle your NODE and NPM packages for you! |
| PHP >= 7.x.x    | `php -v`     | [php.net](http://php.net/manual/en/install.php), if not using a local environment tool|
| MySql >= 5.6.x  |  ---   | --- |

## Features

* [Webpack 5](https://webpack.js.org/), bundling assets
* [Bootstrap 5](https://getbootstrap.com/), front-end framework
* [Dart Sass](https://sass-lang.com/), Sass VM for almost instantaneous scss updates

### Additional Features that are availble if needed

* [Axios](https://github.com/axios/axios), Promise based HTTP client for the browser and node.js
* [Vue](https://github.com/vuejs/vue),  A progressive, incrementally-adoptable JavaScript framework for building UI on the web.
* [AOS Scroll](https://github.com/michalsnik/aos),  Animate on Scroll
* Linting is using Airbnb-base and Vue-Strongly-recommended, using VsCode, when asked if you want to allow the use of the linting file over your plugin, please select yes ( Allow ).

## Documentation

### Do you have SASS VM installed locally?

* [Dart Sass VM](https://github.com/sass/dart-sass/releases/tag/1.37.5)

### Change your proxy url

* build > webpack.config.js > BrowserSyncPlugin > update to use your currently proxy URL for your local install

### From the command line

* cd into theme directory
  * npm: `npx -p node@20 npm ci`
    * will install all your npm packages based on your package-lock and package.json matching up
  * watch: `npx -p node@20 npm run watch`
    * builds dev assets to public directory and watches assets for changes!
    * sets up browsersync
 	* devsass: `npm run devsass`
  		* runs sass watch form common.css
  		* additional files can be added if needed
  * dev: `npx -p node@20 npm run dev`
    * builds dev assets to public directory
  * prod: `npx -p node@20 npm run prod`
    * builds production assets to public directory
  		* runs production sass as well after webpack compiles js/images/fonts

### Assets Folder

* scripts / css / fonts / images will go inside the /assets directory
  * You'll see multiple folders inside of /assets containing said files
* JS will consist of separate entry points set in webpack.

### Using BrowserSync

* To use BrowserSync during `npm run watch` you need to update `proxy` near the bottom of `webpack/webpack.config.js` to reflect your local development hostname.
* You'll want to open a 2nd terminal to run `npm run devsass` along side of the watch command.

# [Sage](https://roots.io/sage/)

## Documentation

Sage documentation is available at [https://roots.io/sage/docs/](https://roots.io/sage/docs/).

# Security

## Plugins

* Activate WordFence
* Activate Hardening
 	* disable JS/CSS versions
 	* disable REST API disabling
  		* control this with a function instead inside of a custom plugin instead

## Keys / Secrets

* NEVER store credentials/keys of any kind inside the theme or custom plugin.
 	* Create meta fields in the admin then use those meta fields to load your credentials.
  		* `$user = get_option('meta_value')`

## CSFR - Forms

* Does the site require authentication to view pages that contain forms?
 	* Using Gravity Forms, set the form settings to `require the user to be logged in`, this will add a nonce to prevent `CSFR` Cross Site Forgery Requests (any form authentication facing must have that setting in place)

## REST API

* API sanitization
 	* User-generated requested data params need to be sanitized and any field that isn't automatically sanitized by WP.
* API Cors
 	* Is their authentication for users on the site? Might need to update access-control-allow-origin to include only the needed domains for the rest api (see Physician Portal `functions.php` for example)
 	* [reference link](https://linguinecode.com/post/enable-wordpress-rest-api-cors)
  		* If the rest API isn't being utilized outside the Website though in general, might want to lock it down still so that it can only communicate between environments (see Physician Portal `functions.php` for example)
