Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  	get  'main/index'
  	get	 'user/new'
  	post 'user/create'
  	get	 'user/show'
  	get	 'user/edit'
  	post 'user/update'
  	get  'user/access'
  	post 'user/signIn'
  	get  'user/signOff'
    root 'main#index'
end
