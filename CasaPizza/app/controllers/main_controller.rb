class MainController < ApplicationController
	def index
		current_user = User.find_by_id(session[:current_user_id])
		@recomended=Product.find_by(category_id: rand(1..5))
	end
	def carta
	end
	def ofertas
	end
	def carrito
	end
	def signUp
	end
	def login
	end
	def account
	end
end
