Rails.application.routes.draw do
  resources :likes
  namespace :api do
    resources :tags
    resources :posts
    resources :users
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
