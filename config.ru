require 'rubygems'
require 'rack'

app = Rack::Builder.new

app.run Rack::Directory.new(Dir.pwd)

Rack::Server.start app: app, Port: 4100
