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
  * /html/<controller>/templates/<html template>
  * /js/app/<controller>/*: All JavaScript for a particular controller (sub-application), is dynamically loaded and does not need packaging and deployment.
  * /js/libs/*: All external libs.

#### Assets which are Compiled and/or Deployed

These assets should be edited in /src:

  * /css/application.css: A compiled package of lots of stuff we need.
  * /css/global.css: Compiled from sass.
  * /html/<controller>/<action>.html
  * /js/app/application.js
  * /js/app/global.js: Contains our global PLM object. Packaged into application.js. This should probably change to be dynamically loaded and ONLY live in /assets.

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

## Workflow

## Getting up and Running
