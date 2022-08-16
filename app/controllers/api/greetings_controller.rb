class Api::GreetingsController < ApplicationController
  def random_greeting
    @messages = Message.all
    render json: @messages
  end
end
