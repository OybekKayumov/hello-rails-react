Rails.application.routes.draw do
  # get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  namespace :api, defaults: { format: 'json' } do
    get 'greeting', to: 'greetings#random_greeting'
  end

  get '*page', to: 'static#index', constraints: lambda { |req| !req.xhr? && req.format.html? }
  
  # root 'root#index'
  root 'static#index'
  
end
