# config.ru

require 'thin'
require 'yard'
require 'sinatra'
require 'sinatra/contrib'
require 'sinatra/partial'
require 'sinatra/flash'
require 'eventmachine'
require 'haml'
require 'sass'
require 'compass'

# our app file
require './app'

run App.new
