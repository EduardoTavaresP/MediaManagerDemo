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
ASSET_BUNDLES     = %w( application.css )
VIEWS = [ View.new('dashboard/show'), View.new('photo-manager/show', 'Photo Manager') ]
BUILD_DIR   = ROOT.join("assets")
SOURCE_DIR  = ROOT.join("src")
SOURCE_ASSETS_DIR  = ROOT.join(SOURCE_DIR, "assets")
SOURCE_VIEWS_DIR  = ROOT.join(SOURCE_DIR, "views")

APPLICATION_LAYOUT = ROOT.join(SOURCE_VIEWS_DIR + 'layouts/application.html.haml')

task :compile => [:compile_assets, :compile_views ] do
end

task :compile_assets do
  sprockets = Sprockets::Environment.new(ROOT) do |env|
    env.logger = LOGGER
  end

  sprockets.append_path(SOURCE_ASSETS_DIR.join('css').to_s)

  ASSET_BUNDLES.each do |bundle|
    assets = sprockets.find_asset(bundle)
    prefix, basename = assets.pathname.to_s.split('/')[-2..-1]
    FileUtils.mkpath BUILD_DIR.join(prefix)

    assets.write_to(BUILD_DIR.join(prefix, basename))
    assets.to_a.each do |asset|
      # strip filename.css.foo.bar.css multiple extensions
      realname = asset.pathname.basename.to_s.split(".")[0..1].join(".")
      asset.write_to(BUILD_DIR.join(prefix, realname))
    end
  end
end

task :compile_views do
  VIEWS.each do |view|
    LOGGER.info("compile_views: Processing view - #{view.path}")
    viewPath = SOURCE_DIR.join(SOURCE_VIEWS_DIR, view.path).to_s + '.html.haml'
    output = render_view(viewPath, APPLICATION_LAYOUT, {}, { :page => view.name } )
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

