# Media Manager Demo

AppJs based Media Manager proof of concept / demo application. Implements a simple photo manager. Utilizes the the following:

  * Zurb Foundation3 shoulds its responsive and all the hyped up stuff,
  * [Entypo - 100+ carefully crafted pictograms](http://www.entypo.com/#top),
  * Uses require.js to modularize JS and dynamically load,
  * HAML / SCSS for HTML / CSS,
  * Compass to compile your SASS,
  * Ruby Rake / Sprockets to build / packages assets.

## Assets

### Asset Directory Structure

Files are served from the /assets directory. The assets directory is based upon the suggestion in http://backbonetutorials.com/organizing-backbone-using-modules/. It has the following structure:

    |- imgs
    |- css
    |   |-- libs
    |         |-- bootstrap (if we used bootstrap for example, but we don't in this demo)
    |               |- bootstrap-responsive.min.css
    |               |- bootstrap.min.css
    |
    |- js
    |   |-- libs
    |         |-- jquery
    |               |- jquery-1.8.2.min.js

### Source Assets

We don't have an asset pipeline like in the Rails framework, for example. In this demo we use scss stylesheets + Zurb Foundation.

Assets are stored in src/assets-compass. We use compass to manage the scss stylesheets and compile them.

Notes:

  * Created with:

    `bundle exec compass create ./src/assets-compass -r zurb-foundation --using foundation`

  * Build:

    `bundle exec compass compile ./src/assets-compass`

  * config.rb:

    Redefines the iamges, stylesheets, and javascripts directories to imgs, css and js.

## HAML Templates

## Compiling HAML into HTML and Assets

We need to accomplish 2 things to update the app.:

  1. Compile our views in src/views which are HAML.
  1. Compile our assets in src/assets-compass which are scss stylesheets.

Both of the above need to end up in the right place in /assets.

The application HTML is in HAML and ass/ SASS (.scss), which are compiled via a ruby rake task.

`
bundle install
bundle exec rake complie
`
