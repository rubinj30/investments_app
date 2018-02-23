Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :investments    
    end
  end
end