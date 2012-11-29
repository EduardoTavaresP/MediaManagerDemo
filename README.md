# Media Manager Demo

AppJs based Media Manager proof of concept / demo application. Implements a simple photo manager. Utilizes the the following:

  * Zurb Foundation3 shoulds its responsive and all the hyped up stuff,
  * [Entypo - 100+ carefully crafted pictograms](http://www.entypo.com/#top),
  * Uses require.js to modularize JS and dynamically load,
  * HAML / SCSS for HTML / CSS,
  * Compass to compile your SASS,
  * Ruby Rake / Sprockets to build / packages assets.

## Assets

### /assets Directory

All files are served from the /assets directory.

#### Assets Directory Structure

The assets directory is based upon the suggestion in http://backbonetutorials.com/organizing-backbone-using-modules/. It has the following structure:

    |- fonts
    |
    |- imgs
    |
    |- css
    |   |-- application.css (includes Zurb Foundation styles)
    |   |-- global.css
    |   |
    |   |-- libs
    |         |-- <folders for any external libraries like foundation which we use, but is included in application.sass via import>
    |
    |- html
    |   |
    |   |-- dashboard
    |   |
    |   |-- photo-manager
    |   |     |
    |   |     |--show.html
    |   |     |--templates
    |   |            |--home.html
    |   |
    |   |-- static-pages
    |
    |- js
    |   |-- app
    |   |     |-- application.js
    |   |     |-- global.js
    |   |     |      
    |   |     |-- photo-manager
    |   |     |      |-- main.js
    |   |     |      |-- app.js
    |   |     |      |-- router.js
    |   |     |      |-- models/
    |   |     |      |-- collections/
    |   |     |      |-- views/
    |   |
    |   |-- libs
    |   |     |-- require
    |   |     |      |-- require.js
    |   |     |
    |   |     |-- jquery
    |   |     |      |-- jquery.min.js
    |   |     |
    |   |     |-- underscore
    |   |     |      |-- underscore.js
    |   |     |
    |   |     |-- backbone
    |   |     |      |-- backbone.js
    |   |     |
    |   |     |-- foundation
    |   |     |      |-- jquery.foundation.*.js
    
#### Assets To Directly Deploy or Edit in /assets

Some assets need to be compiled and/or packaged. See Source Assets. Those asets whill make their way into the /assets directly by running `bundle exec rake compile`. However, the following elements of /assets should be manually deployed or edited and checked in directly:

  * /fonts
  * /imgs
  * /css/libs/*: These are external css libraries which might be leveraged.
  * /html/\<controller\>/templates/\<template\>.html: HTML snippets which are compiled using _.template. For example: /html/photo-manager/templates/home.html.
  * /js/app/\<controller\>/*: All JavaScript for a particular controller (sub-application), is dynamically loaded and does not need packaging and deployment.
  * /js/libs/*: All external libs.

See Development Workflow for details on developing the APP. 

#### Assets which are Compiled and/or Deployed

These assets should be edited in /src:

  * /css/application.css: A compiled package of lots of stuff we need.
  * /css/global.css: Compiled from sass.
  * /html/\<controller\>/\<action\>.html: This is the application layout (sass) along with the controller/action template (sass) which have been compiled using `bundle exec rake compile`.
  * /js/app/application.js
  * /js/app/global.js: Contains our global PLM object. Packaged into application.js. This should probably change to be dynamically loaded and ONLY live in /assets.

See Development Workflow for details on developing the APP. 

### Source Assets

We don't have an asset pipeline like in a web development framework such as Rails, Django, Symphony, etc.. Basically, any file which must be compiled has its source form somewhere in /src. This includes:

  * HAML layouts and templates which get packaged into ONE HTML file.
  * SASS stylesheets.
  * JavaScript which is processed by Sprockets to get packaged into one deliverable asset.

Note, this doesn't mean that EVERYTHING you edit is found in /src. Some assets are edited and checked into /assets a they do NOT need to be compiled or packaged in any way.

Currently, our source assets are kept in 2 locations (unfortunately) under ./src:

    |
    |- assets
    |   |
    |   |-- js
    |   |    |
    |   |    |-- app
    |   |          |-- application.js
    |   |          |-- global.js
    |   |
    |   |-- css
    |   |     |-- application.css (our application manifest)
    |
    |- assets-compass
    |   |
    |   |-- sass
    |   |     |-- global.sass
    |   |
    |   |-- js
    |   |    |
    |   |    |-- foundation (the foundation distribution to be compiled via compass)
    |   |    |

  * ./src/assets: includes our application js and the application.css manifest. Note,
    there is NO ./src/assets/app/photo-manager directory. The application specific JS files are
    NOT packaged, and are not compiled. They are simply stored in ./assets/js/app/<view>
    directly as they use require.js / AMD to dynamically load.

  * ./src/assets-compass: We maintain ALL of our SASS / SCSS which is managed by compass her
    So, all of our SCSS files are compiled from ./src/assets-compass/sass/. Also, we use Zurb 
    Foundation, and the Zurb Foundation library is here: ./src/assects-compass/js/foundation/.
    Here are some notes on our use of compass:

    * Created with:

      `bundle exec compass create ./src/assets-compass -r zurb-foundation --using foundation`

    * Build:

      `bundle exec compass compile ./src/assets-compass`

    * config.rb:

      Redefines the iamges, stylesheets, and javascripts directories to imgs, css and js.

### JavaScript

JavaScript is deployed to the following places:

  * ./assets/js/app: Our application.js, global.js and a directory for each sub-application which will be
    loaded via require.js.
  * ./assets/js/libs: External modules to be loaded via require.js.

For our application JavaScript we dynamically loaded using require. The js is checked directly into ./assets/js/app/<application>.
Each <application> directory will contain an main.js and an app.js. main.js is our bootstrap file, which configures require.js
and loads our application. For example, ./assets/js/app/photo-manager contains a main.js, and app.js. When creating a 
new sub-application, there is a template for our bootstrap main.js which can be found in ./src/assets/js/app/bootstrap.js.

## Layouts, views and HAML Templates

Our application is built using layouts and views with are HAML templates. See the ./src/views directory.
There is a folder for each sub-application, such as photo-manager, with a template for each action. For example,
photo-manager/show is stored here: ./src/views/photo-manager/show.html.haml.

When a view/action is compiled, it is included inside the application layout, which is ./src/views/layouts/application.html.haml.

## Compiling HAML into HTML and Packaging Assets

We need to accomplish 2 things to update the app.:

  1. Compile our views in src/views which are HAML.
  1. Compile our assets in src/assets-compass which are scss stylesheets.

Both of the above need to end up in the right place in /assets.

The application HTML is in HAML and ass/ SASS (.scss), which are compiled via a ruby rake task.

`
bundle install
bundle exec rake complie
`

## Controllers and Dynamiicaly Loadable JavaScript

We use require.js upon entry into a controller (sub-application) to dynamically load any JavaScript which is needed from that point onward.

### Require.js and Bootstrapping a Controller

If we look at the photo-manager, for example, we will see the following 2 files in /assets/js/app/photo-manager:

  * /assets/js/app/photo-manager/main.js
  * /assets/js/app/photo-manager/app.js

/assets/js/app/photo-manager/main.js is our bootstrap file which defines the require.js configuration. Our application is aliased such that our app is loaded using the following snippet of code:

```
requirejs(['app/app'],
          function(App) {
            App.initialize();
            });
```

The above triggers the execution of the exported initialize function in /assets/js/app/photo-manager/app.js.

When creating a new controller, one will find the following two template files which can be copied to create a controller specific main.js and app.js:

  * /src/assets/js/app/bootstrap.js: Copy this to make controller specific main.js which configures the sub-application.
  * /src/assets/js/app/boilerplate.js: Copy this to make a controller specific app.js.

### Leveraging Backbone.js

If you want to use backbone.js in a controller (sub-application), the structure used in the photo-manager should be followed. /assets/js/app/photo-manager has the following sub-directories:

  * /assets/js/app/photo-manager/models: Backbone models.
  * /assets/js/app/photo-manager/collections: Backbone collections.
  * /assets/js/app/photo-manager/views: Backbone views which may use dynamic templates. See Dynamic Underscore Templates.

## Dynamic Underscore Templates

Lets take a look at /assets/js/app/photo-manager/views/home.js. It is a backbone view. However, it dynamically loads a HTML text file using the require.js text plugin, and passes it into the function which executes to create the HomeView object. The following is a snippet of the code:

```
// Filename: photo-manager/views/home.js
//
define([
  'jquery',
  'underscore',
  'backbone',
  'foundationClearing',
  'app/collections/recent-uploads',
  'text!/html/photo-manager/templates/home.html'],
       function($, _, Backbone, FoundationClearing, RecentUploadsCollection, homeTemplate) {
         var HomeView = Backbone.View.extend({

           el: $('#content'),
           
           initialize: function() {
             this.recentUploads = new RecentUploadsCollection();
           },

           render: function() {
             var that = this;
             var onSuccess = function(recentUploads,
                                      response,
                                      options) {
               console.log('photo-manager/views/home - successfully loaded recent uploads...');
               that._doRender();
             };
             var onError = function(recentUploads, xhr, options) {
               console.log('photo-manager/views/home - error loading recent uploads.');
             };
             this.recentUploads.fetch({success: onSuccess,
                                       error: onError});
           },

           //
           // _doRender: We have loaded the data, its safe to render.
           //
           _doRender: function() {
             console.log('photo-manager/views/home._doRender: Will render ' + _.size(this.recentUploads) + ' images...');
             this.recentUploads.each(function(image) {
               console.log('photo-manager/views/home._doRender: Have image - ' + image.get('name'));
               var variants = image.get('variants');
               console.log('photo-manager/views/home._doRender: have ' + variants.length + ' variants...');
               var filteredVariants = _.filter(image.get('variants'), function(variant) { return variant.name === 'thumbnail.jpg'; });
               console.log('photo-manager/views/home._doRender: have ' + filteredVariants.length + ' thumbnail variants...');
             });
             var compiledTemplate = _.template(homeTemplate, { recentImages: this.recentUploads,
                                                               _: _ });
             this.$el.html(compiledTemplate);
             $(document).foundationClearing();
           }
         });

         return HomeView;
       });

```

The require.js text plugin is used to load a template. See: `'text!/html/photo-manager/templates/home.html'` in the 
initial list of dependencies. The template is passed in as an argument as homeTemplate. It is latter compiled using 
underscore's template method (`_.template(homeTemplate, ...)`).

## index.js

This is the main entry point into the application.

## Development Workflow

  * Deploy any of these assets directly into /assets:

    * /assets/fonts/: Fonts.
    * /assets/imgs/: Images
    * /assets/css/libs/*: Any external CSS, each in their own sub-directory. Could be foundation or bootstrap, etc..
    * /assets/js/app/\<controller\>/: All dynamically loadable JavaScript for a particular controller (sub-application). See Controllers and Dynamiicaly Loadable JavaScript.
    * /assets/html/\<controller\>/templates/\<template\>.html: HTML snippets which are compiled using _.template. For example: /html/photo-manager/templates/home.html.
    * /assets/js/libs/*: All external JavaScript plugins and libraries. 

  * Edit any of these assets in ./src

    * stylesheets which must be compiled and or packaged:
    
      * /src/assets/css/application.css: Are css manifest of anything which must be packged into ONE application level css.
      * /src/assets-compass/sass/global.scss: SCSS styles for our overall layout any common stuff that needs to be accessible everywhere.
      * /src/assets-compass/sass/\<controller\>.scss: SCSS styles for a particular controller. For example, /src/assets-compass/sass/photo-manager.scss.
    
    * javascript requiring packaging and deployment:
    
      * /src/assets/js/application.js
      * /src/assets/js/global.js
      
    * global layouts and controller/action views:
    
      * /src/views/layouts/application.html.haml
      * /src/views/layouts/\<controller\>/\<action view\>.html.haml

If any data in /src is updated, one must run `bundle exec rake compile`.

To start the application, simply run `./app.sh`.

## Getting up and Running

To get a development instance of the application running one will first need to build the appjs framework, TouchDB, and . Then 
clone this repository, and link it to your build of appjs. The appjs build will include a build of a 32 bit version 
of node, which is currently a requirement due to chromium. See the AppJS documentation for details. To accomplish 
have a working development version of this application, perform these steps:

1. Create a parent directory do all this in and go there: `mkdir ./SetupAppTest; cd SetupAppTest/`
1. Build AppJS:
  * Clone our tools repo: `git clone 'https://github.com/jetsonsystems/AppJsTools.git'`
  * Create a directory for the build: `mkdir ./mkdir appjs-build`
  * Run the build script in the cloned repo which actually also clone's our fork of AppJs which fixes a minor bug (this may have been pulled back into the original repo, we shouild check): `./AppJsTools/bin/appjs-build.sh ./appjs-build/ &> appjs-build.log`.
  * Ensure the previous step succeeded:
    * There should be a working 32 bit node: ./appjs-build/appjs/node-32/0.8.11/bin/node, which can be run and verification `file ./appjs-build/appjs/node-32/0.8.11/bin/node` shouild produce: `
./appjs-build/appjs/node-32/0.8.11/bin/node: Mach-O executable i386`.
    * Run the sample app: `./appjs-build/appjs/app/app.sh` which shows a retro hello world image.
1. Download TouchDB for iOS (https://github.com/couchbaselabs/TouchDB-iOS) and unpack it: `curl -O 'http://cloud.github.com/downloads/couchbaselabs/TouchDB-iOS/TouchDB-1.0.zip'`. Be patient, we'll use this in step 5.
1. Build GraphicsMagick (http://www.graphicsmagick.org/):
  * Download the source and untar: `curl -O 'http://iweb.dl.sourceforge.net/project/graphicsmagick/graphicsmagick/1.3.17/GraphicsMagick-1.3.17.tar.gz'`
  * Build and install: `tar xzvf GraphicsMagick-1.3.17.tar.gz; cd GraphicsMagick-1.3.17; ./configure CC=clang; make; sudo make install`. Note the use of CC=clang in the execution of configure. This is important, otherwise the build will fail on OSX.
1. Setup MediaManagerDemo:
  * Clone MediaManagerDemo: `git clone https://github.com/jetsonsystems/MediaManagerDemo.git`
  * Link to your AppJs build: <code>
cd MediaManagerDemo/
mkdir bin 
pushd bin
ln -s ../../appjs-build/appjs/node-32/0.8.11/bin/node .
popd
ln -s ../appjs-build/appjs/app/data/node_modules .
</code>
1. Setup and Populate TouchDB with Some Data
1. Run the App

