# Front-End Middleman Project

## Overview

We are using [Middleman](http://middlemanapp.com/) to compile/package/deploy the applications /assets directory.
[Middleman](http://middlemanapp.com/) takes all source assets in the ./source folder, and compiles them into
the ./build folder.

## Getting Set Up

## Notes on the Source Directory Structure

  * ./source/html:

## Notes on config.rb

## Build and Deploy Workflow

## Useful Command Line Examples

  * Buidling everything:

    `bundle exec middleman build --verbose`

  * Building a single view:

    `bundle exec middleman build --verbose -g *html/photo-manager/show.html`

  * Likewise to build a template:

    `bundle exec middleman build --verbose -g *html/photo-manager/templates/home/library/import.html`


