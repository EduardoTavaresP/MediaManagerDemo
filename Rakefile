require 'rubygems'
require 'bundler'
require 'pathname'
require 'logger'
require 'fileutils'

Bundler.require

#
# View
#
class View
  attr_reader :path, :name, :action
  def initialize(path, prettyName = "")
    @path = path
    parts = path.split('/')
    @name = parts[0]
    @action = parts[1]
    if prettyName
      @prettyName = prettyName if prettyName
    else
      @prettyName = @name
    end
  end
end

ROOT        = Pathname(File.dirname(__FILE__))
LOGGER      = Logger.new(STDOUT)
ASSET_BUNDLES     = %w( application.css application.js photo-manager.js)
VIEWS = [ View.new('dashboard/show', 'Dashboard'),
          View.new('photo-manager/show', 'Photo Manager'),
          View.new('static-pages/coming-soon', 'Coming Soon') ]
BUILD_DIR   = ROOT.join("assets")
SOURCE_DIR  = ROOT.join("src")
SOURCE_ASSETS_DIR  = ROOT.join(SOURCE_DIR, "assets")
SOURCE_VIEWS_DIR  = ROOT.join(SOURCE_DIR, "views")

APPLICATION_LAYOUT = ROOT.join(SOURCE_VIEWS_DIR + 'layouts/application.html.haml')

task :compile => [:compile_assets, :compile_views ] do
end

task :compile_assets do

  sh 'compass compile ./src/assets-compass'

  sprockets = Sprockets::Environment.new(ROOT) do |env|
    env.logger = LOGGER
  end

  sprockets.append_path(SOURCE_ASSETS_DIR.join('css').to_s)
  sprockets.append_path(SOURCE_ASSETS_DIR.join('js').to_s)
  sprockets.append_path(SOURCE_ASSETS_DIR.join('js', 'libs', 'jquery').to_s)
  sprockets.append_path(SOURCE_ASSETS_DIR.join('js', 'libs', 'foundation').to_s)
  sprockets.append_path(SOURCE_ASSETS_DIR.join('js', 'libs').to_s)

  ASSET_BUNDLES.each do |bundle|
    assets = sprockets.find_asset(bundle)
    tail = String.new(assets.pathname.to_s)
    LOGGER.info("compile_assets: bundle path - #{tail}")
    tail.slice!(SOURCE_ASSETS_DIR.to_s)
    LOGGER.info("assets: tail - #{tail}")
    pathParts = tail.split('/')
    prefix = pathParts[0..-2]
    basename = pathParts[-1]
    LOGGER.info("tail - #{tail}, path parts - #{pathParts.to_s}, prefix - #{prefix.to_s}, basename - #{basename}")
    FileUtils.mkpath BUILD_DIR.join(*prefix)

    bundleFile = BUILD_DIR.join(*prefix)
    bundleFile = bundleFile.join(basename)
    LOGGER.info("compile_assets: Writing bundle to file - #{bundleFile}")
    File.open(bundleFile, "w") { |f| f.write(assets.to_s()) }
    assets.to_a.each do |asset|
      LOGGER.info("compile_assets: Have asset - #{asset.pathname.to_s}, source assets dir - #{SOURCE_ASSETS_DIR.to_s}")

      assetTail = String.new(asset.pathname.to_s)
      assetTail.slice!(SOURCE_ASSETS_DIR.to_s)
      pathParts = assetTail.split('/')
      assetPrefix = pathParts[0..-2]
      assetBasename = pathParts[-1]
      FileUtils.mkpath BUILD_DIR.join(*assetPrefix)

      assetFile = BUILD_DIR.join(*assetPrefix)
      assetFile = assetFile.join(assetBasename)
      if assetFile != bundleFile
        LOGGER.info("compile_assets: Writing asset to file - #{assetFile}")
        asset.write_to(assetFile)
      end
    end
  end
end

task :compile_views do
  VIEWS.each do |view|
      LOGGER.info("compile_views: Processing view - #{view.path}")
      viewPath = SOURCE_DIR.join(SOURCE_VIEWS_DIR, view.path).to_s + '.html.haml'
      output = render_view(viewPath,
                           APPLICATION_LAYOUT,
                           {},
                           { :page => view.name,
                             :view => view.name,
                             :action => view.action } )
      outFile = BUILD_DIR.join('html', view.path).to_s + '.html'
      LOGGER.info("compile_views: Writing result to - " + outFile)
      File.open(outFile, "w") { |f| f.write(output) }
  end
end

task :cleanup do
end

#
# Helpers to render partials and a view with a layout.
# Based upon the excellent response found here: http://stackoverflow.com/questions/6125265/using-layouts-in-haml-files-independently-of-rails
#

#
# Regions: Class to provide content_for method to be able to yield to a named region.
#
class Regions
end

def render(partial, locals = {})
end

#
# render_view: Render a HAML view inside a HAML layout.
#   Args:
#     view: path to view
#     layout: path to layout
#
def render_view(view, layout, viewLocals = {}, layoutLocals = {})
  page = 'some page'
  Haml::Engine.new(File.read(layout)).render(Object.new, layoutLocals) do
    Haml::Engine.new(File.read(view)).render(Object.new, viewLocals)
  end
end

