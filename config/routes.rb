Rails.application.routes.draw do
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  root 'home#index'

  # config/routes.rb
resources :sound_files, only: [:new, :create, :index, :show]

  resources :transcripts do
    collection do
      get 'search'  # This creates a route for `/transcripts/search`
    end
  end
end
