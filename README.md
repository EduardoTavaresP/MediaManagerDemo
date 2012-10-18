# GalleryDemo0

A simple web gallery demo using AppJs, along with the following:

  * Uses require.js to load

## Assets

### Asset Directory Structure

Files are served from the /assets directory. The assets directory is based upon the suggestion in http://backbonetutorials.com/organizing-backbone-using-modules/. It has the following structure:

|- imgs
|- css
|   |-- libs
|         |-- bootstrap
|               |- bootstrap-responsive.min.css
|               |- bootstrap.min.css
|
|- js
|   |-- libs
|         |-- jquery
|               |- jquery-1.8.2.min.js

### Building Assets

The application assets are in HAML / SASS (.scss), which are compiled via a ruby rake task.

`
bundle install
bundle exec rake complie
`


