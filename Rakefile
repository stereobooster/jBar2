#!/usr/bin/env ruby

require 'bundler'
Bundler.setup :default

require "jshintrb/jshinttask"
Jshintrb::JshintTask.new :jshint do |t|
  t.pattern = 'js/*.js'
  t.exclude_pattern = 'javascripts/jquery.min.js'
  t.options = {
      :bitwise => true,
      :curly => true,
      :eqeqeq => true,
      :forin => false,
      :immed => true,
      :latedef => true,
      :newcap => true,
      :noarg => true,
      :noempty => true,
      :nonew => true,
      :plusplus => true,
      :regexp => true,
      :undef => true,
      :strict => false,
      :trailing => true,
      :browser => true,
      :undef => true,
      :predef => ['jQuery']
  }
end

desc "Run local web server for testing"
task :server do
  Bundler.require :websrver

  current_dir = File.expand_path(File.dirname(__FILE__))

  begin
    require 'webrick/httputils' 
    mime_types = File.join current_dir, "config", "mime.type"
    list = WEBrick::HTTPUtils.load_mime_types(mime_types) 
    Rack::Mime::MIME_TYPES.merge!(list)
  rescue Errno::ENOENT
    puts "Unable to load webrick/httputils"
  end

  require 'rack/contrib/try_static'
  app = Rack::Builder.app do
    use Rack::CommonLogger
    use Rack::ContentLength
    use Rack::TryStatic, :root => current_dir, :urls => %w[/], :try => ['index.html']

    run lambda { |env|
      path = File.join current_dir, Rack::Utils.unescape(env['PATH_INFO'])
      if File.exists?(path) && File.directory?(path)
        Rack::Directory.new(current_dir).call(env)
      else
        file_name = File.join current_dir, "404.html"
        if File.exists?(file_name) then
          contents = File.read(file_name)
        else
          contents = '<h1>404 Not found</h1>'
        end
        [404, {'Content-Type' => 'text/html'}, [contents]]  
      end
    }
  end

  require 'rack/handler/puma'
  Rack::Handler::Puma.run app
end
