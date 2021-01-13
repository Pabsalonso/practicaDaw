Rails.application.routes.draw do
  get 'main/index'
  get 'main/signUp'
  get 'main/index'
  root :to => 'main#index'
end
